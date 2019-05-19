const { User } = require('./../models/user');

async function signIn(req, res) {
    try {
        const { email, password } = req.body;
        // TODO: Need to add validations
        const user = await User.authenticate(email, password);
        req.session.userId = user.id;
        return res.redirect('/');
    } catch (error) {
        res.render('login')
    }
}

async function signUp(req, res) {
    try {
        const { email, password, confirmPassword } = req.body;
        // TODO: Need to add validations for email & password
        const user = await User.create({
            email,
            password
        });
        req.session.userId = user._id;
        return res.redirect('/');
    } catch (error) {
        res.render('signup')
    }
}

function profileRoute(app) {

    app.get('/login', (req, res) => res.render('login'));
    app.post('/login', signIn);
    app.get('/signup', (req, res) => res.render('signup'))
    app.post('/signup', signUp);

}

module.exports = {
    profileRoute
}