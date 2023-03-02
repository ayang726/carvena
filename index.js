const axios = require("axios").default; // node
console.log("Program Start");

/*=== API Calls ===*/
const license = "1VXBR12EXCP901213";
const VINS = ["1HGCV1F46KA104358", "5YJSA1E2XGF150845", "1VXBR12EXCP901213"];
const apiKey = "VA_DEMO_KEY";
const url = `http://marketvalue.vinaudit.com/getmarketvalue.php?key=${apiKey}&vin=${license}&format=json&period=90&mileage=average`;
const SHOW_DATA = true;

let promise = () => {
    axios.get(url).then(({ data }) => {
        if (data) {
            console.log("Data exist");
            if (SHOW_DATA) console.log(data);
        }
    }); // this is a promise
    // console.log(data);
};
promise();
//
// console.log(promise);

console.log("Program End");

/*=== Express Server ===*/
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
