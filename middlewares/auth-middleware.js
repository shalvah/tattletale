function authMiddleware(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    }
    if (req.url === '/signup') {
        // TODO: Need to signup
        return res.render('signup');
    }
    // TODO: Need to login
    res.render('login');
}

module.exports = {
    authMiddleware
}