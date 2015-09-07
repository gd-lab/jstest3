var $ = require('jquery');
var MainView = require('./views/main_view');
var products = require('./models/products_sample_data');


$(document).ready(function() {
    var productsView = new MainView(products);
});
