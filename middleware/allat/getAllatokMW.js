/**
 *Betölti az összes állatot, ami a menhelyhez tartozik az adatbázisból.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const AnimalModel = requireOption(objectrepository, 'AnimalModel');

    return function (req, res, next) {
        if (typeof res.locals.menhely === 'undefined') {
            return next();
        }

        AnimalModel.find({ _fendfor: req.params.menhelyid}, (err, allatok) => {
            if (err) {
                return next(err);
            }

            res.locals.allatok = allatok;
            return next();

        });
        
    };
};