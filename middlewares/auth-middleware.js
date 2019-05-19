
async function authMiddleware(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    }
    res.render('login');
}

module.exports = {
    authMiddleware
}
