/*
LOGIC OF THIS JS 

if the user provides a query string in the url then we are good to go, then 
we will send the resource that the user is requesting 

however if the user does not provide a query string in the url then we will
simply send 1 which stands for unauthorized

*/

const authorize = (req, res, next) =>{
    const {user} = req.query;

    if(user === 'debj'){
        req.user = {name:'debj', id:3}
        console.log('authorize');
        next()
    }
    else{
        res.status(401).send('Unauthorized');
    }
}

module.exports = authorize