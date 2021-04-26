/**
 *Kitörli az adatbázisból az állatot,
 * majd visszairányít a /allatok/:menhelyid helyre.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.allat === 'undefined') {
            return next();
        }

        res.locals.allat.remove(err => {
            if (err) {
                return next(err);
            }
            
            return res.redirect('/allatok/' + res.locals.menhely._id);
        });
    };
};