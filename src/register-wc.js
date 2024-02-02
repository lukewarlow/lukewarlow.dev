import HorizontalScroller from 'wc-horizontal-scroller';

window.customElements.define('horizontal-scroller', HorizontalScroller);

window.addEventListener('scrollerfullscreenenter', () => {
    document.body.style.overflowY = 'hidden';
});

window.addEventListener('scrollerfullscreenexit', () => {
    document.body.style.overflowY = 'visible';
});