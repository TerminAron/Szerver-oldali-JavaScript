const renderMW = require('../middleware/renderMW');
const delAllatMW = require('../middleware/allat/delAllatMW');
const getAllatokMW = require('../middleware/allat/getAllatokMW');
const getAllatMW = require('../middleware/allat/getAllatMW');
const saveAllatMW = require('../middleware/allat/saveAllatMW');
const delMenhelyMW = require('../middleware/menhely/delMenhelyMW');
const getMenhelyekMW = require('../middleware/menhely/getMenhelyekMW');
const getMenhelyMW = require('../middleware/menhely/getMenhelyMW');
const saveMenhelyMW = require('../middleware/menhely/saveMenhelyMW');

module.exports = function (app) {
    const objRepo = {};

    app.use('/menhelyek/new',
        saveMenhelyMW(objRepo),
        renderMW(objRepo, 'NewAnimalHome'));
    app.use('/menhelyek/edit/:menhelyid',
        getMenhelyMW(objRepo),
        saveMenhelyMW(objRepo),
        renderMW(objRepo, 'EditAnimalHome'));
    app.get('/menhelyek/del/:menhelyid',
        getMenhelyMW(objRepo),
        delMenhelyMW(objRepo));
    app.get('/menhelyek',
        getMenhelyekMW(objRepo),
        renderMW(objRepo, 'AnimalHome'));

    app.get('/allatok/:menhelyid',
        getMenhelyMW(objRepo),
        getAllatokMW(objRepo),
        renderMW(objRepo, 'Animals'));
    app.use('/allatok/:menhelyid/new',
        getMenhelyMW(objRepo),
        saveAllatMW(objRepo),
        renderMW(objRepo, 'NewAnimal'));
    app.use('/allatok/:menhelyid/edit/:allatid',
        getMenhelyMW(objRepo),
        getAllatMW(objRepo),
        saveAllatMW(objRepo),
        renderMW(objRepo, 'EditAnimal'));
    app.get('/allatok/:menhelyid/del/:allatid',
        getMenhelyMW(objRepo),
        getAllatMW(objRepo),
        delAllatMW(objRepo));

    app.use('/',
        renderMW(objRepo, 'index'));
};