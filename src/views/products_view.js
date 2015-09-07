var $ = require('jquery');
var _ = require('lodash');
var amplify = require('amplifier');

var defaultOptions = {
    productsEl: "#products",
    productTemplateEl: "#productTemplate"
};

function ProductsView(options) {
    options = _.extend({}, defaultOptions, options);
    this.$productsEl = $(options.productsEl);
    this.compiledTemplate = _.template($(options.productTemplateEl).html());

    var me = this;
    amplify.subscribe('updateProductsView', function (products) {
        me.render(products);
    });
}

ProductsView.prototype.render = function(products) {
    products = products || [];
    var resultHtml = "";
    var compiledTemplate = this.compiledTemplate;

    for (var i = 0, j = products.length; i < j; i++) {
        var product = products[i];

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

module.exports = ProductsView;
