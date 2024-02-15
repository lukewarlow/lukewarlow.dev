import viteCompression from 'vite-plugin-compression';
import {createHtmlPlugin} from 'vite-plugin-html';
import {defineConfig} from 'vite';
import { PrerenderPlugin} from "./prerender-plugin.js";
// import puppeteer from 'puppeteer';
// import { setTimeout } from 'timers/promises';

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
        // (function() {
        //     return {
        //         name: "dsd",
        //         apply: "build",
        //         enforce: "post",
        //         async generateBundle(_opts, bundle) {
        //             const browser = await puppeteer.launch({headless: false});
        //             const page = await browser.newPage();
        //             let source = bundle["index.html"].source;
        //             await page.setContent(source);
        //             await setTimeout(5000);
        //             console.log(await page.evaluate(() => {
        //                 const customElements = Array.from(document.querySelectorAll('*')).filter(t => t.tagName.includes('-'));
        //
        //                 return customElements[0].shadowRoot;
        //             }));
        //             return bundle;
        //         }
        //     }
        // })(),
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
