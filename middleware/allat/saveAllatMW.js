/**
 *Elmenti vagy módosítja az adatbázisba az állatot.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const AnimalModel = requireOption(objectrepository, 'AnimalModel');
    return function (req, res, next) {
        if((typeof req.body.nev === 'undefined') ||
            (typeof  req.body.faj === 'undefined') ||
            (typeof  req.body.fajta === 'undefined') ||
            (typeof  req.body.kor === 'undefined') ||
            (typeof  res.locals.menhely === 'undefined')){
            return next();
        }
        if (typeof res.locals.allat === 'undefined') {
            res.locals.allat = new AnimalModel();
        }

        res.locals.allat.nev = req.body.nev;
        res.locals.allat.faj = req.body.faj;
        res.locals.allat.fajta = req.body.fajta;
        res.locals.allat.kor = req.body.kor;
        res.locals.allat._fendfor = req.params.menhelyid;
        res.locals.allat.save(err => {
            if (err) {
                return next(err);
            }
            
            return res.redirect('/allatok/' + res.locals.menhely._id);
        });
    };
};