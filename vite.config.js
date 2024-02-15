import viteCompression from 'vite-plugin-compression';
import {createHtmlPlugin} from 'vite-plugin-html';
import {defineConfig} from 'vite';
import { PrerenderPlugin} from "./prerender-plugin.js";
import puppeteer from 'puppeteer';
import { setTimeout } from 'timers/promises';

export default defineConfig({
    plugins: [
        viteCompression({
            algorithm: "brotliCompress",
            ext: ".br",
            filter: /\.(html|js|mjs|css|svg)$/i
        }),
        createHtmlPlugin({
            minify: true,
        }),
        PrerenderPlugin({renderTarget: '#app'}),
        (function() {
            return {
                name: "dsd",
                apply: "build",
                enforce: "post",
                async generateBundle(_opts, bundle) {
                    const browser = await puppeteer.launch({ channel: 'chrome-canary', headless: 'new', args: ['--enable-features=ElementGetHTML']});
                    const page = await browser.newPage();
                    let source = bundle["index.html"].source;
                    source += '<style id="remove-me">' + Object.keys(bundle).filter((file) => file.endsWith('.css')).map((file) => bundle[file].source).join('\n') + '</style>';
                    source += '<script id="remove-me-2" type="module">' + Object.keys(bundle).filter((file) => file.endsWith('.js') && !file.includes('prerender')).map((file) => bundle[file].code).join('\n') + '</script>';
                    await page.setContent(source);
                    await page.evaluate(() => {
                        Array.from(document.querySelectorAll('horizontal-scroller')).forEach((t) => t.innerHTML = t.shadowRoot.getHTML({includeShadowRoots:true}));
                        document.querySelector('#remove-me').remove();
                        document.querySelector('#remove-me-2').remove();
                    });
                    bundle["index.html"].source = await page.content();
                    await browser.close();
                    return bundle;
                }
            }
        })(),
    ],
    css: {
        // transformer: 'lightningcss',
    },
    appType: 'mpa',
    build: {
        // cssMinify: 'lightningcss',
        modulePreload: {
            polyfill: false,
        },
        target: 'esnext',
        assetsInlineLimit: 0,
        rollupOptions: {
            input: {
                client: "src/client.js",
                server: "src/server.js",
                'index.html': "index.html",
            },
        },
    },
});
