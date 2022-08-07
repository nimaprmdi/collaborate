/*--------------------------------------*\
  #Start jQuery
\*--------------------------------------*/
jQuery(function ($) {});
/*--------------------------------------*\
  #END jQuery
\*--------------------------------------*/

/*--------------------------------------*\
  #Detect Element inside other element
\*--------------------------------------*/
function collaborate_ChildFinder(parentElement, childElement) {
    let collaborate_result = document
        .querySelector(parentElement)
        .getElementsByClassName(childElement)[0]
        ? true
        : false;
    return collaborate_result;
}

/*--------------------------------------*\
  #Menu Toggle
\*--------------------------------------*/
if (collaborate_ChildFinder("body", "js-nav__toggle")) {
    const menuButton = document.querySelector(".js-nav__toggle");
    const nav = document.querySelector(".c-nav");

    menuButton.addEventListener("click", function () {
        menuButton.classList.toggle("on");
        nav.classList.toggle("is-open");
    });
}
