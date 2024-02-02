import { html, Router } from 'swtl';
import { Shell } from './src/components/Shell.js';
import { Html } from './src/pages/Html.js';
import {URLPattern} from "urlpattern-polyfill";

if (!globalThis.URLPattern) {
    globalThis.URLPattern = URLPattern;
}

const router = new Router({
    routes: [
        {
            path: '/',
            render: ({}) => html`<${Shell}><${Html} /><//>`,
        },
    ],
});

self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        clients.claim().then(() => {
            self.clients.matchAll().then((clients) => {
                clients.forEach((client) =>
                    client.postMessage({ type: "SW_ACTIVATED" })
                );
            });
        })
    );
});

self.addEventListener("fetch", (event) => {
    if (event.request.mode === "navigate") {
        event.respondWith(router.handleRequest(event.request));
    }
});