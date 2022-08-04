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
    let collaborate_result = document.querySelector(parentElement).getElementsByClassName(childElement)[0]
        ? true
        : false;
    return collaborate_result;
}
