import { html } from 'swtl';

export function Tag({children}) {
    return html`
        <li class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-teal-900 dark:text-teal-50 bg-teal-100 dark:bg-teal-800 border border-teal-400 contrast-more:text-black dark:contrast-more:text-white dark:contrast-more:bg-teal-950 contrast-more:border-black dark:contrast-more:border-white">
            <p class="text-xs font-normal leading-none max-w-full flex-initial">${children}</p>
        </li>
    `;
}