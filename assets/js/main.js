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
    let sheen_result = document.querySelector(parentElement).getElementsByClassName(childElement)[0] ? true : false;
    return sheen_result;
}
