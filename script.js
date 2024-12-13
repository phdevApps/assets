// clean up
[...document.querySelectorAll('link')].filter(it=>{
    return (!it.className.match(/style_1/ig) && (it.innerHTML.match(/blogger/ig) || it.href.match(/blogger/ig)))
}).forEach(it=>it.remove());
[...document.querySelectorAll('script')].filter(it=>{
    return (!it.className.match(/script_1/ig) && (it.innerHTML.match(/blogger/ig) || it.src.match(/blogger/ig)))
}).forEach(it=>it.remove());
document.querySelectorAll('[class*="section"]').forEach(it=>it.remove());
document.querySelectorAll('style[id*="page-skin"][type="text/css"]').forEach(it=>it.remove());
document.querySelectorAll('meta[name*="google-adsense"]').forEach(it=>it.remove());
