/**
 *Kitörli az adatbázisból a menhelyet,
 * majd visszairányít a /menhelyek helyre.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.menhely === 'undefined') {
            return next();
        }

        res.locals.menhely.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/menhelyek');
        });
    };
};