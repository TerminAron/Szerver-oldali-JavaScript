/**
 * Kirendereli az adott értéket a megfelelő oldallá.
 */
const requireOption = require('../middleware/requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        res.render(viewName);
        //console.log('render: ' + viewName);
        //res.end('Template: ' + viewName);
    };

};