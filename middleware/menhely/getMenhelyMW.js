/**
 *Betölti az adott menhelyet a :menhelyid paraméterrel
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const AnimalHomeModel = requireOption(objectrepository, 'AnimalHomeModel');

    return function (req, res, next) {
        AnimalHomeModel.findOne({ _id: req.params.menhelyid}, (err, menhely) => {
            if (err || !menhely) {
                return next(err);
            }

            res.locals.menhely = menhely;
            return next();
        });
        
    };
};