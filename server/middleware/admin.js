let admin = (req, res, next) => {
    if (req.user.role === 0) {
        return res.send('Your not allowed here duder!')
    }
    next();
}

module.exports = { admin }