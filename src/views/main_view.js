var _ = require('lodash');
var ProductsView = require('./products_view');
var FiltersView = require('./filters_view');
var SearchView = require('./search_view');
var MainController = require('../controllers/main_ctr');


function MainView(products) {

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
