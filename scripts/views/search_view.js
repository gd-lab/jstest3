define(["jquery", "lodash", "amplify"], function ($, _, amplify) {

    var defaultOptions = {
        textEl: "#searchText",
        buttonEl: "#searchBtn"
    };

    function SearchView(options) {
        options = _.defaults(options || {}, defaultOptions);

        var $text = $(options.textEl);

        function updateSearch() {
            var data = $text.val();
            amplify.publish('searchTextChanged', data);
            return false;
        }

        $text.on("keyup", updateSearch);
        $(options.buttonEl).on("click", updateSearch);
    }

    SearchView.prototype.render = function() {
        // nothing is here yet
    };

    return SearchView;

});
