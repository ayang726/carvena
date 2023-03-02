// /*=== Test: Promises ===*/
// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("timed out");
//     }, 5000);
//     res("promised");
// });

// async function delayed() {
//     let res = await promise.any();
//     console.log(res);
// }
// delayed;
// console.log("end?");

// /*=== Exoress Server ===*/
// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

/*=== Axios ===*/
const axios = require("axios");
/*=== CarsXE API ===*/
/*
=========================
    CarsXE API Endpoints
    http://api.carsxe.com/specs?
    http://api.carsxe.com/marketvalue?
    http://api.carsxe.com/history?
    http://api.carsxe.com/platedecoder?

    Tests:
    http://api.carsxe.com/platedecoder?key=<CarsXE_API_Key>&plate=36619HT&state=MD&format=json
    link": "https://bit.ly/34tpueu",

=========================
*/
const CarsXE_API_Key = "pa7a0cys6_sg5khu4pn_n2nms17zr";
const vin = "1VXBR12EXCP901213";
const VINS = ["1HGCV1F46KA104358", "5YJSA1E2XGF150845"];
// const reqUrl = `http://api.carsxe.com/specs?key=${CarsXE_API_Key}&vin=${vin}`;
// const reqUrl = `http://api.carsxe.com/specs?key=${CarsXE_API_Key}&vin=JTDZN3EU0E3298500`;
const reqUrl = `http://api.carsxe.com/specs?key=${CarsXE_API_Key}&vin=1HGCV1F46KA104358`;

const key = "images";
axios.get(reqUrl).then(({ data }) => {
    console.log(data);

    // if (data) console.log(Object.keys(data.attributes));
    if (data) console.log(data.attributes.make);
    if (data) console.log(data.attributes.model);
    if (data) console.log(data.attributes.year);
    if (data) console.log(data.attributes.type);
    // if (data) console.log(data[key]);
    // if (data) console.log(typeof data[key]);
    // if (data) console.log(Array.isArray(data[key]));

    // else console.log("no response");
});
// console.log(res);
console.log("end program");
