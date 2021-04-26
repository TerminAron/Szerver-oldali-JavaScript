/**
 *Betölti az összes menhelyet az adatbázisból.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const AnimalHomeModel = requireOption(objectrepository, 'AnimalHomeModel');

    return function (req, res, next) {
        AnimalHomeModel.find({}, (err, menhelyek) => {
            if (err) {
                return next(err);
            }

            res.locals.menhelyek = menhelyek;
            return next();
        });
        
    };
};