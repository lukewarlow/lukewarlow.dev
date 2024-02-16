import HorizontalScroller from 'wc-horizontal-scroller';

window.customElements.define('horizontal-scroller', HorizontalScroller);

window.addEventListener('scrollerfullscreenenter', () => {
    document.body.style.overflowY = 'hidden';
});

window.addEventListener('scrollerfullscreenexit', () => {
    document.body.style.overflowY = 'visible';
});

if ('preferences' in navigator) {
    window.settingsBtn.parentElement.classList.remove('hidden');
    window.colorSchemeSwitch.value = navigator.preferences.colorScheme.override ?? '';
    window.contrastSwitch.value = navigator.preferences.contrast.override ?? '';
    window.motionSwitch.value = navigator.preferences.reducedMotion.override ?? '';
    window.transparencySwitch.value = navigator.preferences.reducedTransparency.override ?? '';
    if (!navigator.preferences.contrast.validValues.includes('no-preference')) {
        window.contrastSwitch.querySelector('option[value="no-preference"]').remove();
    }
    if (!navigator.preferences.reducedMotion.validValues.includes('no-preference')) {
        window.motionSwitch.querySelector('option[value="no-preference"]').remove();
    }
    if (!navigator.preferences.reducedTransparency.validValues.includes('no-preference')) {
        window.transparencySwitch.querySelector('option[value="no-preference"]').remove();
    }
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