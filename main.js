// const { default: axios } = "axios";

/* Debugging flag */
let log = false;

const form = document.forms[0];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearUI();
    let vin = findVinFromForm(new FormData(form));
    if (log) console.log(vin);
    sendVinToServer(vin);
    // if (response) parseAttribute(response);
    // else errorHandler();
});

function findVinFromForm(formData) {
    for (const [key, value] of formData) {
        if (key == "vin") {
            // Populate card title with the vin number
            return value;
        }
    }
    errorHandler();
}

function sendVinToServer(vin) {
    const CarsXE_API_Key = "pa7a0cys6_sg5khu4pn_n2nms17zr";
    const reqUrl = `http://api.carsxe.com/specs?key=${CarsXE_API_Key}&vin=${vin}`;
    let request = new XMLHttpRequest();
    request.addEventListener("load", () => {
        // on load parse the response
        let response = JSON.parse(request.response);
        // update UI
        if (log) console.log(response);
        if (response) parseAttribute(vin, response.attributes);
        else errorHandler();
    });
    if (log) console.log(request);
    request.open("GET", reqUrl, true);
    request.send();
    return null;
}

function parseAttribute(vin, { make, model, year }) {
    // updateing UI
    // populate the card with response information
    reconstructCard();
    document.getElementById("vin").innerHTML = vin;
    document.getElementById(
        "car-desc"
    ).innerHTML = `${make} ${model} (${year})`;
}

function errorHandler() {
    console.log("An error has occurred");
}
function clearUI() {
    document.getElementById("report").innerHTML = "";
}
function reconstructCard() {
    document.getElementById("report").innerHTML = `
    <div class="card" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-title" id="car-desc"></h5>
            <p class="card-text" id="vin"></p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>`;
}
