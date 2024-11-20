const express = require('express');
const app = express();
const router = require('./router.config');

//for checking the server is running or not 
app.use('/health', (req, res, next) => {

    res.json({
        data: null,
        message: "Server is running",
        status: "SUCCESS",
        options: null
    })

})


app.use(router);

//404 error 
app.use((req, res, next) => {
    next({
        data: null,
        message: "Page not found",
        status: 404,
        options: null
    })
}
)

//error handler 

app.use((err, req, res, next) => {
    let error = err.message || "Internal server error";
    let status = err.status || 500;
    let options = err.options || null;
    let code = err.code || null;
    let data = err.data || null;
    res.status(status).json({
        data: data,
        message: error,
        status: code ,
        options: options
    })
})

module.exports = app;