define(["./product", "jquery", "lodash"], function (Product, $, _) {

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

    function renderProducts(search, filters) {
        var compiledTemplate = _.template($("#productTemplate").html());
        var resultHtml = "";

        for (var i = 0, max = products.length; i < max; i++) {
            var product = products[i];

            // filtering and searching
            if (!product.isIncludedInSearch(search)) continue;
            if (filters && filters.length) {
                var isIncluded = false;
                for (var filterIndex in filters) {
                    if (product.isIncludedInFilter(filters[filterIndex])) {
                        isIncluded = true;
                        break;
                    }
                }
                if (!isIncluded) continue;
            }

            // constructing products html
            var data = {
                product: product
            };
            resultHtml += compiledTemplate(data);
        }

        $("#products").html(resultHtml);
    }


    function updateProducts() {
        var search = $("#searchText").val();

        var filter = [];
        $("#filters input[type=checkbox]:checked").each(function() {
            filter.push(this.value);
        });

        renderProducts(search, filter);
        return false;
    }


    function renderFilters() {
        var compiledTemplate = _.template($("#filterTemplate").html());
        var resultHtml = "";
        var tags = {};

        for (var i = 0, max = products.length; i < max; i++) {
            var product = products[i];
            tags[product.tag] = product.tag;
        }

        for (var tag in tags) {
            var data = {
                tag: tag,
                title: tag
            };
            resultHtml += compiledTemplate(data);
        }

        $("#filters").html(resultHtml)
            .on("change", updateProducts);
    }


    function init() {
        renderProducts();
        renderFilters();
        $("#searchText").on("keyup", updateProducts);
        $("#searchBtn").on("click", updateProducts);
    }

    return {
        init: init
    };

});
