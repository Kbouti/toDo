function toggleDisplay(id, standardDisplay){
    const element = document.getElementById(id);
    const elementDisplayValue = window.getComputedStyle(element).getPropertyValue(`display`);
    if(elementDisplayValue == standardDisplay){
        element.style.display = 'none'
        return;
    }
    element.style.display = standardDisplay;
    return;

}





module.exports = {

    toggleDisplay
}