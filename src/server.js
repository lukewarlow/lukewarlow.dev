import { renderToString } from 'swtl';
import {Html} from './pages/Html.js';

export async function prerender() {
    return {
        html: await renderToString(Html(false)),
    }
}