const axios = require("axios");

let response = await axios.get("https://run.mocky.io/v3/06aa8703-a145-45b2-9a62-0a2d461e9f0c");

console.log(response.data)