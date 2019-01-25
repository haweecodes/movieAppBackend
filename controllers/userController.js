const User = require('../models/userModel');

//Simple version, without validation or sanitation
exports.create = function (req, res) {
    let user = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    })

    user.save(function (err) {
        if (err){
            return next(err)
        }
        res.send('User Created Successfully')
    })
};

exports.find = function (req, res) {
    User.findOne({'email': req.query.email, 'password': req.query.password}, function (err, user) {
        if(err) return next(err);
        if(user === null){
            return res.status(401).send({ message: "User doesn't exists" });
        } else{
            res.send({
                "email": user.email,
                "name": user.name,
                "id": user._id
            })
        }

    })
}


