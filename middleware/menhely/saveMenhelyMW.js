/**
 *Elmenti vagy módosítja az adatbázisba a menhelyet.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if((typeof req.body.name === 'undefined') ||
            (typeof  req.body.pcode === 'undefined') ||
            (typeof  req.body.city === 'undefined') ||
            (typeof  req.body.address === 'undefined') ||
            (typeof  req.body.phone === 'undefined') ||
            (typeof  req.body.email === 'undefined')){
            return next();
        }
        console.log("Mentés helye");
        console.log(req.body);
        res.redirect('/menhelyek');
        next();
    };
};