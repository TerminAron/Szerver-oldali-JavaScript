/**
 *Betölti az adott menhelyhez tartozó állatot a :menhelyid és :allatid paraméterrel
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const AnimalModel = requireOption(objectrepository, 'AnimalModel');

    return function (req, res, next) {
        AnimalModel.findOne({
            _id: req.params.allatid
        },
        (err, allat) => {
            if (err || !allat) {
                return next(err);
            }

            res.locals.allat = allat;
            return next();

            }
        );
    };
};