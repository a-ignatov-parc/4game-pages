// Detect mobile platform (disable scroll actions and apply different styles)
// Warning, these global variables are used by other scripts

var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/ig),
    Android = navigator.userAgent.match(/(Android)/ig),
    mobile = (iOS || Android);
if (mobile) { document.documentElement.classList.add('mobile'); }
if (iOS) { document.documentElement.classList.add('iOS'); }
if (Android) { document.documentElement.classList.add('Android'); }
