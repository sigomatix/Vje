module.exports = function(app) {

    app.get('/contactus', function(req, res) {
        res.render("postnews");
    });

    app.post('/contactus', function(req, res, next) {
        res.end();
    });
};