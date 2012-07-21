module.exports = function(app) {

	var news = [
	{
		title:"First title",
		post:"Some first news",
		date:new Date()
	}, 
	{
		title:"Second title",
		post:"Some second <b>news</b> !",
		date:new Date()
	}];

	app.get('/allnews', function(req, res) {
        res.render("news/allnews", {news:news});
    });

    app.get('/postnews', function(req, res) {
        res.render("news/postnews");
    });

    app.post('/postnews', function(req, res, next) {
        news.push({
        	title:req.body.title,
			post:req.body.post,
			date:new Date()
		});
        res.redirect('/allnews');
    });
};