function getData() {
    var request = new XMLHttpRequest();
    
    request.addEventListener("load", function(event) {
        var data = JSON.parse(event.currentTarget.response);
        console.log(data);
        // debugger;
    });

    request.open("GET", "https://run.mocky.io/v3/06aa8703-a145-45b2-9a62-0a2d461e9f0c");

    request.send();
}

