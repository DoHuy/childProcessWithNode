
import * as http from 'http'; // require a node_module
// import {Child} from './child'; // require a file
import * as cluster from 'cluster';
const {fork} = require('child_process');

console.log(cluster.workers);
// let child  = new Child();
let server = http.createServer();
server.on('request', (req, res)=>{
    if(req.url === `/compete`) {
        res.writeHeader(200);
        const compute = fork('child.js');
        compute.send('start');
        compute.on('message',  sum =>{
            res.end(`Sum is ${sum}`);
        });
;    }
    else {
        res.end();
    }
});
server.listen(8080, ()=>{
    console.log(`server listenning on 8080`);
});


