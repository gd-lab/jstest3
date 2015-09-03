define(["jquery", "lodash"], function ($, _) {

    var defaultOptions = {
        filtersEl: "#filters",
        filterTemplateEl: "#filterTemplate"
    };

    function FiltersListRenderer(products, options) {
        if (!products || typeof products.each != 'function')
            throw new Error("products arg must have 'each' function");

        options = _.extend({}, defaultOptions, options);

        this.products = products;
        this.compiledTemplate = _.template($(options.filterTemplateEl).html());

        var $rootEl = $(options.filtersEl);
        this.getRootElement$ = function() {
            return $rootEl;
        };
    }

    FiltersListRenderer.prototype.render = function() {
        var tags = {};
        var resultHtml = "";
        var compiledTemplate = this.compiledTemplate;

        this.products.each(function(product) {
            var tag = product.getTag();
            if (tag in tags) return;

            tags[tag] = {
                tagId: tag,
                title: tag
            };
            resultHtml += compiledTemplate(tags[tag]);
        });

        this.getRootElement$().html(resultHtml);
    };

    return FiltersListRenderer;

});
