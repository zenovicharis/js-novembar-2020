function removeLastElementFromList() {
    var lastEl = document.querySelector("#list > ul > li:last-child");

    // Remove element itself
    // lastEl.remove();

    // Remove element from parent node
    lastEl.parentElement.removeChild(lastEl);
}

function capitalizeTextContent() {
    var listEl = document.querySelectorAll("#list-mody > ul > li");

    for(var i = 0; i < listEl.length; i++) {
        var txt = listEl[i].firstChild.textContent;

        var capitalizedTxt = capitalize(txt);

        listEl[i].firstChild.textContent = capitalizedTxt;
        
    }
}

function addListTextToInput() {
    var listEl = document.querySelectorAll("#list-mody-input > ul > li");
    var inputResult = document.querySelector("#list-mody-input > input");

    var liTextContent = Array.from(listEl).reduce(function(acc, li) {
        var capitalizedTxt = capitalize(li.firstChild.textContent);
        acc += ", " + capitalizedTxt;
        return acc;
    }, "");

    inputResult.value += liTextContent;
}

function capitalize(txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
}


function triggerAll() {
    removeLastElementFromList();
    capitalizeTextContent();
    addListTextToInput();
}