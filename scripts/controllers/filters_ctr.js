define(["amplify"], function (amplify) {

    function isContainedInFilters(product, filters /** array */) {
        if (!filters || !filters.length) return true;

        function isContained(filter /** string */) {
            if (typeof filter === "undefined" || filter === "") return true;
            return (product.getTag() === filter);
        }

        for (var i = 0, j = filters.length; i < j; i++) {
            if (isContained(filters[i])) return true;
        }
        return false;
    }

    function isContainedInSearch(product, search /** string */) {
        if (typeof search === "undefined" || search === "") return true;
        search = search.toLowerCase();
        return ~product.getTitle().toLowerCase().indexOf(search)
                || ~product.getDescr().toLowerCase().indexOf(search);
    }


    function FiltersAndSearchController(productsView) {
        var productSearchTxt, productFiltersArr;

        function filteringCb(product) {
            return isContainedInSearch(product, productSearchTxt)
                && isContainedInFilters(product, productFiltersArr);
        }

        amplify.subscribe('searchTextChanged', function updateSearch(newProductSearchTxt) {
            productSearchTxt = newProductSearchTxt;
            amplify.publish('updateProductsView', filteringCb);
        });

        amplify.subscribe('filtersChanged', function updateFilters(newProductFiltersArr) {
            productFiltersArr = newProductFiltersArr;
            amplify.publish('updateProductsView', filteringCb);
        });
    }

    return FiltersAndSearchController;

});
