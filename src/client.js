import './register-wc.js';

if (!('trustedTypes' in window)) {
    window.trustedTypes={createPolicy:(_, options) => options};
}

const noopPolicy = window.trustedTypes.createPolicy('no-op', {
    createScriptURL: (input) => input
});

/**
 * If no service worker is installed yet, we wait for it to be installed
 * and then reload the page
 *
 * Further updates are taken care of by the update script, because the
 * user will never see this index.html again
 */
if ('serviceWorker' in navigator) {
    try {
        const registration = await navigator.serviceWorker?.register(noopPolicy.createScriptURL('/sw.js'), {type: "module"});
        console.log('Service worker registered successfully', registration);

        if (!navigator.serviceWorker.controller) {
            navigator.serviceWorker.addEventListener('message', (event) => {
                if (event?.data?.type === 'SW_ACTIVATED') {
                    window.location.reload();
                }
            });
        }
    } catch (err) {
        console.log('Service worker registration failed: ', err);
    }
}