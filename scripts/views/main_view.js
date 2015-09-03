define(["jquery", "lodash", "amplify", "../models/product", "./products_view", "./filters_view", "./search_view", "../controllers/filters_ctr"],
    function ($, _, amplify, Product, ProductsView, FiltersView, SearchView, FiltersAndSearchController) {

    function MainView() {

        var products = [
            new Product("NAS Western Digital", 700, "Western Digital", "Some description here"),
            new Product("NAS QNAP", 710, "QNAP", "Another description here.."),
            new Product("NAS Seagate", 650, "Seagate"),
            new Product("NAS D-Link", 650, "D-Link"),
            new Product("DAS CFI", 500, "CFI"),
            new Product("DAS QNAP", 135, "QNAP"),
            new Product("HDD Seagate", 300, "Seagate"),
            new Product("HDD Samsung", 310, "Samsung"),
            new Product("HDD Hitachi", 290, "Hitachi"),
            new Product("HDD Western Digital", 205, "Western Digital")
        ];

        var productsView = new ProductsView();
        productsView.setProducts(products);
        productsView.render();

        var searchView = new SearchView();
        searchView.render();

        (function() {
            var tags = _.transform(products, function(result, product) {
                result.push(product.getTag());
            });
            tags = _.unique(tags);
            var filtersView = new FiltersView(tags);
            filtersView.render();
        })();

        new FiltersAndSearchController();
    }

    return MainView;

});
