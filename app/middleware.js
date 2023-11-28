const secret = "qwertyuiopasdfghjklzxcvbnm123456";
const jwt = require("jsonwebtoken");


exports.broadcasterAuth = async (req, res, next) => {
    let { token } = req.query || {};
    console.log({ token })
    // if (token == 'brodcaster') {
    //     next();
    // } else {
    //     next('unauthosized')
    // }
    next();
}
exports.viewrAuth = async (req, res, next) => {
    let { token } = req.query || {};
    // if (token == 'brodcaster') {
    //     next();
    // } else {
    //     next('unauthosized')
    // }
    next();
}

exports.checkAuth = async (req, res, next) => {
    try {
        // console.log(req.params)
        let { token, broadcastId } = req.params || {};
        if (!token) {
            throw 'Un-Authorized'
        } else {
            const decoded = jwt.verify(token, secret);
            req.query.id = broadcastId;
            req.query.name = decoded.username;
            req.query.role = decoded.role;
            // sessionStorage.setItem('webrtsSession', JSON.stringify(req.query))
            next();
        }
    } catch (error) {
        next(error)
    }
}