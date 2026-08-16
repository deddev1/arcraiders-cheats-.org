/**
 * Cloudflare Worker — canonical host + path redirects before static assets.
 * Locale cannibal 301s live in functions/cannibal-redirects.json (not _redirects)
 * to stay under Cloudflare's 100 dynamic _redirects rule limit.
 */
import { applySecurityHeaders } from './lib/security-headers.js';
import { isBrandStudioPath, resolvePathRedirect } from './worker-redirects.js';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_ORIGIN = 'https://tarkovcheats.org';
const CANONICAL_HOST = 'tarkovcheats.org';
const WWW_HOST = `www.${CANONICAL_HOST}`;

const LEGACY_HOSTS = new Set(['besttarkovcheats.com', 'www.besttarkovcheats.com']);

function redirectResponse(target: string, status = 301): Response {
	const headers = new Headers({
		Location: target,
		'Cache-Control': 'no-store',
		'CDN-Cache-Control': 'no-store',
		'Cloudflare-CDN-Cache-Control': 'no-store',
	});
	applySecurityHeaders(headers);
	return new Response(null, { status, headers });
}

function canonicalHostRedirect(request: Request, url: URL): Response | null {
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	const isLegacy = LEGACY_HOSTS.has(host);
	const isWww = host === WWW_HOST || url.hostname === WWW_HOST;
	const isHttp = url.protocol === 'http:';

	if (!isLegacy && !isWww && !isHttp) return null;

	const mappedPath = resolvePathRedirect(url.pathname) ?? url.pathname;
	const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
	return redirectResponse(target.toString());
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		const hostRedirect = canonicalHostRedirect(request, url);
		if (hostRedirect) return hostRedirect;

		if (isBrandStudioPath(url.pathname)) {
			const notFoundUrl = new URL('/404.html', url.origin);
			const notFound = await env.ASSETS.fetch(new Request(notFoundUrl, request));
			const headers = new Headers(notFound.headers);
			applySecurityHeaders(headers, { html: true });
			return new Response(notFound.body, { status: 200, headers });
		}

		const pathRedirect = resolvePathRedirect(url.pathname);
		if (pathRedirect) {
			const target = new URL(pathRedirect + url.search, CANONICAL_ORIGIN);
			return redirectResponse(target.toString());
		}

		const response = await env.ASSETS.fetch(request);
		const headers = new Headers(response.headers);
		const contentType = headers.get('Content-Type') || '';
		const isHtml = contentType.includes('text/html');
		applySecurityHeaders(headers, { html: isHtml });

		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers,
		});
	},
};
