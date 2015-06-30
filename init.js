function updateWebViewSize() {
    var webview = document.querySelector("webview");
    webview.style.height = document.documentElement.clientHeight + "px";
    webview.style.width = document.documentElement.clientWidth + "px";
};

onload = updateWebViewSize;
window.onresize = updateWebViewSize;

var webview = document.querySelector('webview');
webview.addEventListener('loadcommit', function() {
    webview.insertCSS({
        code: '#footer { display: none !important; }',
        runAt: 'document_start'
    });
});
