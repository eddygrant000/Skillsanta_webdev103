function unorderlist() {
    var element1 = document.getElementsByTagName('ol')[0];
    var new_element = document.createElement("ul");
    new_element.innerHTML = element1.innerHTML;
    element1.parentNode.replaceChild(new_element, element1);
}

function orderlist() {
    var element1 = document.getElementsByTagName('ul')[0];
    var new_element = document.createElement("ol");
    new_element.innerHTML = element1.innerHTML;
    element1.parentNode.replaceChild(new_element, element1);
}