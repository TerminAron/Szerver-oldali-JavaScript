/**
 *Betölti az összes állatot, ami a menhelyhez tartozik az adatbázisból.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.allatok = [
            {
                _id: 'id1',
                nev: 'Bl',
                faj: 'Kdfg',
                fajta: 'df',
                kor: '5',
            }

        ];

        next();
    };
};