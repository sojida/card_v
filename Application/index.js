const http = require('http');
const Resp = require('./Response');

/**
 * Application Server class
 */
class ApplicationServer {
    constructor() {
        this.server = http.createServer()
    }

    /**
     * register post request
     * @param {String} path - url path
     */
    post(path) {
        // register event
        this.server.on('request', (req, res) => {
            this._registerUncaught(res)
            if(req.url === path && req.method === 'POST') {
                this._parseBody(req);
                req.on('end', () => {                    
                    const resp = this._handle(arguments, req, new Resp(res))
                    res.end(resp)
                })
            }
        })
    }

    /**
     * listen to server
     * @param {Number} port - port number
     * @param {Function} callback - callback function
     */
    listen(port, callback) {
        this.server.listen(port, callback)
    }
    
    /**
     * handles response
     * @param {Array} args - arguments
     * @param {Object} req - request object
     * @param {Object} res - response object
     * @returns {Any} - response
     */
    _handle(args, req, res) {
        let resp
        const httpContract = {req, res};
        for(let i = 1; i < args.length; i++) {
            resp = args[i](httpContract)
            if (resp) {
                break;
            }
        }

        return resp;
    }

    /**
     * parse body of request
     * @param {Object} req - request object
     */
    _parseBody(req) {
        let data = '';

        req.on('data', (chunk) => {
            data += chunk;
        })

        req.on('end', () => {
            req.body = JSON.parse(data)
        })
    }

    /**
     * register uncaught error
     * @param {Object} res - res
     */
    _registerUncaught(res) {
        process.on('uncaughtException', (err) => {
            res.writeHead(500, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                valid: false,
                errorCode: 500,
                message: `Server error: ${err.message}`,
                errors: {},
                data: {}
            }));
        })
    }

    get(path) {
       this.server.on('request', (req, res) => {
        this._registerUncaught(res)
        if(req.url === path && req.method === 'GET') {
            const resp = this._handle(arguments, req, new Resp(res))
            res.end(resp)
        }
    })
    }

    patch(path) {
        console.log('not implemented')
    }

    put(path) {
        console.log('not implemented')
    }

    delete(path) {
        console.log('not implemented')
    }
}

module.exports = ApplicationServer;
