define(["jquery", "./product", "./products", "./product_search", "./product_filter", "./products_list_renderer", "./filters_list_renderer"],
    function ($, Product, Products, product_search, product_filter, ProductsListRenderer, FiltersListRenderer) {

    $(document).ready(function() {

        var productsRenderer = new ProductsListRenderer();

        var filtering = (function(doRender) {

            var productSearchTxt, productFiltersArr;

            function updateSearch(newProductSearchTxt) {
                productSearchTxt = newProductSearchTxt;
                doRender();
            }

            function updateFilters(newProductFiltersArr) {
                productFiltersArr = newProductFiltersArr;
                doRender();
            }

            function filteringCb(product) {
                return product_search.isContained(product, productSearchTxt)
                    && product_filter.isContained(product, productFiltersArr);
            }

            return {
                filteringCb: filteringCb,
                updateSearch: updateSearch,
                updateFilters: updateFilters
            }

        })(productsRenderer.render.bind(productsRenderer));


        var products = new Products([
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
        ], filtering.filteringCb);

        productsRenderer.setProducts(products);
        productsRenderer.render();


        $("#searchText").on("keyup", function() {
            filtering.updateSearch($(this).val());
        });


        (function() {
            var filtersRenderer = new FiltersListRenderer(products);
            var $filtersEl = filtersRenderer.getRootElement$();

            filtersRenderer.render();

            function getFiltersArray() {
                var filter = [];
                $("input[type=checkbox]:checked", $filtersEl).each(function() {
                    filter.push(this.value);
                });
                return filter;
            }

            $filtersEl.on("change", function() {
                filtering.updateFilters(getFiltersArray());
            });
        })();


    });

});
