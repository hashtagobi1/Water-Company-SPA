"use strict";
window.onload = function () {
    window.addEventListener('scroll', function (e) {
        if(window.pageYOffset > 768){
            document.querySelector("header").classList.add('is-scrolling');
        } else if(window.pageYOffset < 768){
            document.querySelector("header").classList.remove('is-scrolling');
            
        }
    });
}; 
//know shit works
// https://stackoverflow.com/questions/1626107/text-in-html-field-to-disappear-when-clicked
