/**
 *Elmenti vagy módosítja az adatbázisba a menhelyet.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const AnimalHomeModel = requireOption(objectrepository, 'AnimalHomeModel');

    return function (req, res, next) {
        if((typeof req.body.name === 'undefined') ||
            (typeof  req.body.pcode === 'undefined') ||
            (typeof  req.body.city === 'undefined') ||
            (typeof  req.body.address === 'undefined') ||
            (typeof  req.body.phone === 'undefined') ||
            (typeof  req.body.email === 'undefined')){
            return next();
        }
        if (typeof res.locals.menhely === 'undefined') {
            res.locals.menhely = new AnimalHomeModel();
        }

        res.locals.menhely.name = req.body.name;
        res.locals.menhely.pcode = req.body.pcode;
        res.locals.menhely.city = req.body.city;
        res.locals.menhely.address = req.body.address;
        res.locals.menhely.phone = req.body.phone;
        res.locals.menhely.email = req.body.email;
        res.locals.menhely.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/menhelyek');
        });
    };
};