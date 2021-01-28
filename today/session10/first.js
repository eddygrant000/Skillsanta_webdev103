var result = document.getElementById("demo");

function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError)
    } else {
        result.innerHTML = "Geolocation is not support by this browser"
    }
}

function showPosition(x) {
    result.innerHTML = "Latitude: " + x.coords.latitude + "<br>" + "Longitude: " + x.coords.longitude;
}

function showError(x) {
    switch (x.code) {
        case x.PERMISSION_DENIED:
            result.innerHTML = "User denied the request for location"
            break;
        case x.TIMEOUT:
            result.innerHTML = "request is timeout"
            break;
    }
}