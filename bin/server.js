const app = require('../src/app')
const http = require('http');
const debug = require('debug') ('nodestr:server');

const bodyParser = require('body-parser');


const port = normalizePort(process.env.port || 3000);
app.set('port', port);

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false}));

const server = http.createServer(app);

server.listen(port);
console.log('API rodando na porta ' + port);

function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }
    if(port >=0){
        return port;
    }
    return false;
}  