    const logger = (req, res, next) => { // middleware function , 
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);

    next() // we must pass it on to a next middleware

    /*
    either we terminate by sending our own response as in 

    res.send('HaHa')

    or we invoke next() to pass it on to a next middleware as in

    next()
    */
    }

module.exports = logger