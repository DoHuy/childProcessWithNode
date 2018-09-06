"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const cluster = require("cluster");
const { fork } = require('child_process');
console.log(cluster.workers);
let server = http.createServer();
server.on('request', (req, res) => {
    if (req.url === `/compete`) {
        res.writeHeader(200);
        const compute = fork('child.js');
        compute.send('start');
        compute.on('message', sum => {
            res.end(`Sum is ${sum}`);
        });
        ;
    }
    else {
        res.end();
    }
});
server.listen(8080, () => {
    console.log(`server listenning on 8080`);
});
//# sourceMappingURL=parent.js.map