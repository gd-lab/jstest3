define(["jquery", "lodash", "amplify"], function ($, _, amplify) {

    var defaultOptions = {
        productsEl: "#products",
        productTemplateEl: "#productTemplate"
    };

    function ProductsView(options) {
        options = _.extend({}, defaultOptions, options);

        this.products = [];
        this.$productsEl = $(options.productsEl);
        this.compiledTemplate = _.template($(options.productTemplateEl).html());

        var me = this;
        amplify.subscribe('updateProductsView', function (filterCb) {
            me.render(filterCb);
        });
    }

    ProductsView.prototype.setProducts = function(products) {
        this.products = products || [];
    };

    ProductsView.prototype.render = function(filterCb) {
        var resultHtml = "";
        var compiledTemplate = this.compiledTemplate;

        for (var i = 0, j = this.products.length; i < j; i++) {
            var product = this.products[i];

            if (filterCb && !filterCb(product)) continue;

            var data = {
                title: product.getTitle(),
                descr: product.getDescr(),
                price: product.getPrice(),
                tag: product.getTag()
            };
            resultHtml += compiledTemplate(data);
        }

        this.$productsEl.html(resultHtml);
    };

    return ProductsView;

});
