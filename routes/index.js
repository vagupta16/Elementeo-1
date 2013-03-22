/*
 * GET home page.
 */

exports.index = function(req, res){
  	res.render('index', { title: 'Elementeo' });
};

/*
exports.index = function(req, res) {
	res.render('about');
} */

exports.anypage = function(req, res) {
	res.render('index', { title: 'Elementeo' });
}
