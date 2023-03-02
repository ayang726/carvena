const { default: axios } = "axios";

console.log("linked");
const form = document.forms[0];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted");
    const data = new FormData(form);

    for (const [key, value] of data) {
        if (key == "vin") {
            // Populate card title with the vin number
            document.getElementById("vin").innerHTML = value;
            console.log("sending request to API");
            sendVinToServer(value);
        }
    }
});

let makeText = document.getElementById("make");
let modelText = document.getElementById("model");
let yearText = document.getElementById("year");

function sendVinToServer(vin) {
    const CarsXE_API_Key = "pa7a0cys6_sg5khu4pn_n2nms17zr";
    const reqUrl = `http://api.carsxe.com/specs?key=${CarsXE_API_Key}&vin=${vin}`;
    let request = new XMLHttpRequest();
    request.addEventListener("load", () => {
        // on load parse the response
        let { attributes } = JSON.parse(request.response);
        // console.log(attributes);
        parseAttribute(attributes);
    });
    request.open("GET", reqUrl, true);
    request.send();
}

function parseAttribute({ make, model, year }) {
    // populate the card with response information
    document.getElementById("make").innerHTML = make;
    document.getElementById("model").innerHTML = model;
    document.getElementById("year").innerHTML = year;
}
