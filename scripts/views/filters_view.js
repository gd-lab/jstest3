define(["jquery", "lodash", "amplify"], function ($, _, amplify) {

    var defaultOptions = {
        filtersEl: "#filters",
        filterTemplateEl: "#filterTemplate"
    };

    function FiltersView(tags, options) {
        options = _.extend({}, defaultOptions, options);

        this.tags = tags;
        this.compiledTemplate = _.template($(options.filterTemplateEl).html());

        var $rootEl = $(options.filtersEl);
        this.getRootElement$ = function() {
            return $rootEl;
        };


        /*var filtersRenderer = new FiltersView(products);
        var $rootEl = filtersRenderer.getRootElement$();

        filtersRenderer.render();*/

        function getFiltersArray() {
            var filter = [];
            $("input[type=checkbox]:checked", $rootEl).each(function() {
                filter.push(this.value);
            });
            return filter;
        }

        $rootEl.on("change", function() {
            //filtering.updateFilters(getFiltersArray());
            var data = getFiltersArray();
            //Backbone.Events.trigger('filtersChanged', data);
            amplify.publish('filtersChanged', data);
        });


    }

    FiltersView.prototype.render = function() {
        var resultHtml = "";
        var compiledTemplate = this.compiledTemplate;

        for (var i = 0, j = this.tags.length; i < j; i++) {
            var tag = this.tags[i];
            var data = {
                tagId: tag,
                title: tag
            };
            resultHtml += compiledTemplate(data);
        }

        this.getRootElement$().html(resultHtml);
    };


    return FiltersView;

});
