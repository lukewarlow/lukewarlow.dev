import { html } from 'swtl';
import cssURL from '/src/assets/index.css?url';
import HorizontalScrollerURL from 'wc-horizontal-scroller?url';

export function Shell({children}) {
    return html`
        <!DOCTYPE html>
        <html class="scrollbar-stable scrollbar-color dark:scrollbar-color-auto inverted-colors:scrollbar-color-auto scrollbar-thumb-teal-800 scrollbar-track-white"
              lang="en-GB">
        <head>
            <meta charset="utf-8"/>
            <title>Luke Warlow's Portfolio</title>
            <meta content="width=device-width, initial-scale=1.0, viewport-fit=cover" name="viewport">
            <meta content="portrait" name="screen-orientation">
            <meta content="Luke Warlow's portfolio site" name="description">
            <meta content="Luke Warlow's Portfolio" name="og:title" property="og:title">
            <meta content="Luke Warlow's portfolio site" name="og:description" property="og:description">
            <meta content="https://lukewarlow.dev" name="og:url" property="og:url">
            <meta content="website" name="og:type" property="og:type">
            <meta content="light dark" name="color-scheme">
            <meta content="#134e4a" media="(prefers-color-scheme: light)" name="theme-color">
            <meta content="#1f2937" media="(prefers-color-scheme: dark)" name="theme-color">
            <link href="/favicon.ico" rel="icon"/>
            <link href="/favicon-dark.ico" media="(prefers-color-scheme: dark)" rel="icon"/>
            <link href="/favicon.ico" media="(prefers-color-scheme: light)" rel="icon"/>
            <link href="${cssURL}" rel="stylesheet"/>
<!--            <script defer data-domain="lukewarlow.dev" src="https://plausible.io/js/script.js"></script>-->
            <script type="module">
                import HorizontalScroller from '${HorizontalScrollerURL}'

                window.customElements.define('horizontal-scroller', HorizontalScroller);

                window.addEventListener('scrollerfullscreenenter', () => {
                    document.body.style.overflowY = 'hidden';
                });

                window.addEventListener('scrollerfullscreenexit', () => {
                    document.body.style.overflowY = 'visible';
                });
            </script>
        </head>
        <body class="bg-gray-200 dark:bg-black [&:has(dialog[open])]:overflow-hidden">
        ${children}
        <script>
            let refreshing;
            async function handleUpdate() {
                if ('serviceWorker' in navigator) {
                    // check to see if there is a current active service worker
                    const oldSw = (await navigator.serviceWorker.getRegistration())?.active?.state;

                    navigator.serviceWorker.addEventListener('controllerchange', async () => {
                        if (refreshing) return;

                        // when the controllerchange event has fired, we get the new service worker
                        const newSw = (await navigator.serviceWorker.getRegistration())?.active?.state;

                        // if there was already an old activated service worker, and a new activating service worker, do the reload
                        if (oldSw === 'activated' && newSw === 'activating') {
                            refreshing = true;
                            window.location.reload();
                        }
                    });
                }
            }

            handleUpdate();
        </script>
        <script type="module">
            if ('preferences' in navigator) {
                window.settingsBtn.parentElement.classList.remove('hidden');
                window.colorSchemeSwitch.value = navigator.preferences.colorScheme.override ?? '';
                window.contrastSwitch.value = navigator.preferences.contrast.override ?? '';
                window.motionSwitch.value = navigator.preferences.reducedMotion.override ?? '';
                window.transparencySwitch.value = navigator.preferences.reducedTransparency.override ?? '';
                window.settingsBtn.onclick = () => {
                    window.settingsDialog.showModal();
                    window.settingsBtn.setAttribute('aria-expanded', 'true');
                }
                window.settingsDialog.onclose = () => {
                    window.settingsBtn.setAttribute('aria-expanded', 'false');
                }
                window.settingsForm.onreset = () => {
                    window.settingsDialog.close();
                }
                window.settingsForm.onsubmit = async (e) => {
                    e.preventDefault();
                    await navigator.preferences.colorScheme.requestOverride(window.colorSchemeSwitch.value);
                    await navigator.preferences.contrast.requestOverride(window.contrastSwitch.value);
                    await navigator.preferences.reducedMotion.requestOverride(window.motionSwitch.value);
                    await navigator.preferences.reducedTransparency.requestOverride(window.transparencySwitch.value);
                    window.settingsDialog.close();
                }
            }
        </script>
        </body>
        </html>
    `;
}