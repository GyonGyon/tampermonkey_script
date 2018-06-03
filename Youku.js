// ==UserScript==
// @name         Youku
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://v.youku.com/v_show/*
// @grant        none
// ==/UserScript==

(function() {
    const log = console.log.bind(console, '>>>')

    const removeLogo = () => {
        log('remove logo')
        const logo = document.querySelector('.youku-layer-logo')
        if (logo) {
            logo.remove()
        } else {
            setTimeout(removeLogo, 100)
        }
    }

    removeLogo()

})();
