/**
 *Kitörli az adatbázisból az állatot,
 * majd visszairányít a /allatok/:menhelyid helyre.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};