/**
 *Betölti az adott menhelyhez tartozó állatot a :menhelyid és :allatid paraméterrel
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.allat = {
            _id: 'id1',
            nev: 'Bl',
            faj: 'Kdfg',
            fajta: 'df',
            kor: '5',
            
        };
        next();
    };
};