/**
 *Betölti az adott menhelyet a :menhelyid paraméterrel
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.menhely = {
                _id: 'id1',
                name: 'KutyaHaz',
                pcode: '2314',
                city: 'Halasztelek',
                address: 'Nap utca 3',
                phone: '062012345',
                email: 'kh@citromail.hu',
            };
        return next();
    };
};