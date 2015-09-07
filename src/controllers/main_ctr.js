var amplify = require('amplifier');
var ProductFiltersModel = require('../models/product_filters');
var ProductSearchModel = require('../models/product_search');


function MainController(products, searchView, filtersView) {
    var filters = new ProductFiltersModel;
    var search = new ProductSearchModel;

    function updateProductsView() {
        var filteredProducts = filters.applyFilters(products, filtersView.getFiltersArray());
        filteredProducts = search.applySearch(filteredProducts, searchView.getSearchText());
        amplify.publish('updateProductsView', filteredProducts);
    }

    amplify.subscribe('searchTextChanged', updateProductsView);
    amplify.subscribe('filtersChanged', updateProductsView);
}

module.exports = MainController;
