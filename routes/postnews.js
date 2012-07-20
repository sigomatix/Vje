module.exports = function(app) {

	var news = ["Some first news", "Some second <b>news</b> !"];

	app.get('/allnews', function(req, res) {
        res.render("allnews", {news:news});
    });

    app.get('/postnews', function(req, res) {
        res.render("postnews");
    });

    app.post('/postnews', function(req, res, next) {
        news.push(req.body.post);
        res.redirect('/allnews');
    });
};