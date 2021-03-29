/**
 *Kitörli az adatbázisból a menhelyet,
 * majd visszairányít a /menhelyek helyre.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};