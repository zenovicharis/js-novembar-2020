var jsonRequest = new XMLHttpRequest();


jsonRequest.addEventListener('load', function() {
    console.log(typeof this.response);
    var realResponse = JSON.parse(this.response);
    if (realResponse.status === 'success') {
        var imageElement = document.getElementById("dog-image");
    
        imageElement.setAttribute("src", realResponse.message);
    } else {
        var pMessage = document.getElementById("request-message");
        pMessage.textContent = realResponse.message;
    }
    console.log(realResponse.message);
    console.log(arguments);
});

jsonRequest.open("GET", "https://dog.ceo/api/breeds/image/random");


try {
    jsonRequest.send();
} catch (e) {
    var pMessage = document.getElementById("request-message");
    pMessage.textContent = e.message;
}