const http = require('http');
const app = require('./src/config/express.config')



PORT = 9000;
HOST = '127.0.0.1';
const server = http.createServer(app);


server.listen(PORT, HOST, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server is running on http://${HOST}:${PORT}`);
    });








