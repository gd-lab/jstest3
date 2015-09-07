var $ = require('jquery');
var _ = require('lodash');
var ProductModel = require('../models/product');
var ProductsView = require('./products_view');
var FiltersView = require('./filters_view');
var SearchView = require('./search_view');
var MainController = require('../controllers/main_ctr');


function MainView() {

    var products = [
        new ProductModel("NAS Western Digital", 700, "Western Digital", "Some description here"),
        new ProductModel("NAS QNAP", 710, "QNAP", "Another description here.."),
        new ProductModel("NAS Seagate", 650, "Seagate"),
        new ProductModel("NAS D-Link", 650, "D-Link"),
        new ProductModel("DAS CFI", 500, "CFI"),
        new ProductModel("DAS QNAP", 135, "QNAP"),
        new ProductModel("HDD Seagate", 300, "Seagate"),
        new ProductModel("HDD Samsung", 310, "Samsung"),
        new ProductModel("HDD Hitachi", 290, "Hitachi"),
        new ProductModel("HDD Western Digital", 205, "Western Digital")
    ];

    var productsView = new ProductsView();
    productsView.render(products);

    var searchView = new SearchView();
    searchView.render();

    var filtersView = (function() {
        var tags = _.transform(products, function(result, product) {
            result.push(product.getTag());
        });
        tags = _.unique(tags);
        var filtersView = new FiltersView(tags);
        filtersView.render();
        return filtersView;
    })();

    new MainController(products, searchView, filtersView);
}

module.exports = MainView;
