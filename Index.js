const express = require("express");
const app = express();

app.use(function(request, response, next){
    console.log("Start");
    next();
});

app.get("/", (request, response, next) => {
    response.send("Hello World!");
    next();
});

app.use("/", function(request, response){
    console.log("End");
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});