import { renderToString } from 'swtl';
import {Html} from './pages/Html.js';

if (import.meta.env.DEV) {
    document.querySelector('#app').innerHTML = await renderToString(Html(false));
}

export async function prerender() {
    return {
        html: await renderToString(Html(false)),
    }
}