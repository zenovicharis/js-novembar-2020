$(function() {
    var timeout;
    $("input#search").on("input", function(){
        if(this.value !== "") {
            
            if (timeout != undefined) {
                window.clearTimeout(timeout);
            }
            var searchTerm = this.value.toLowerCase();
            timeout = setTimeout(function() {

                $.ajax({
                    method: "GET",
                    url: "https://run.mocky.io/v3/c16e64b1-fa0e-4940-999b-7b3de87b4323"
                }).done(function(data) {

                    var filteredData = data
                        .filter(person => person.name.toLowerCase().includes(searchTerm))
                        .map(person => person.name)

                    setElementsInSuggestionBox(filteredData);
                })
    
            }, 600);
            
        } else {
            $("datalist").empty();
        }
    })

});

const setElementsInSuggestionBox = function(filteredNames) {
    var list = $("datalist");
    list.empty();
    filteredNames.forEach(name => {
        $("<option>").attr("value", name).appendTo(list);
    });

}