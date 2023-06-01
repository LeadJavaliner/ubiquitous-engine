const server = require('./simple-server.js');

let isServerRunning = false;

const startServer = () => {
    if(!isServerRunning) {
        server.listen(5050, () => {
            console.log('Server is running on port 5050');
            isServerRunning = true;
        });
    } else {
        console.log('Server is already running');
    }
}

const stopServer = () => {
    if(isServerRunning) {
        server.close(() => {
            console.log('Server is stopped');
            isServerRunning = false;
        });
    } else {
        console.log('Server is not running');
    }
}

module.exports = {
    startServer,
    stopServer,
};
