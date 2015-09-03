define(["jquery", "lodash"], function ($, _) {

    var defaultOptions = {
        productsEl: "#products",
        productTemplateEl: "#productTemplate"
    };

    function ProductsListRenderer(options) {
        options = _.extend({}, defaultOptions, options);

        this.$productsEl = $(options.productsEl);
        this.compiledTemplate = _.template($(options.productTemplateEl).html());
    }

    ProductsListRenderer.prototype.setProducts = function(products) {
        if (!products || typeof products.eachFiltered != 'function')
            throw new Error("products arg must have 'eachFiltered' function");

        this.products = products;
    };

    ProductsListRenderer.prototype.render = function() {
        if (!this.products) throw new Error("products is not initialized with setProducts");

        var resultHtml = "";
        var compiledTemplate = this.compiledTemplate;

        this.products.eachFiltered(function(product) {
            var data = {
                title: product.getTitle(),
                descr: product.getDescr(),
                price: product.getPrice(),
                tag: product.getTag()
            };
            resultHtml += compiledTemplate(data);
        });

        this.$productsEl.html(resultHtml);
    };

    return ProductsListRenderer;

});
