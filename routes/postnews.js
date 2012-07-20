module.exports = function(app) {

    app.get('/postnews', function(req, res) {
        res.render("postnews");
    });

    app.post('/postnews', function(req, res, next) {
        res.end(req.body.post);
    });
};