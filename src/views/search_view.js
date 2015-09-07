var $ = require('jquery');
var _ = require('lodash');
var amplify = require('amplifier');

var defaultOptions = {
    textEl: "#searchText",
    buttonEl: "#searchBtn"
};

function SearchView(options) {
    options = _.defaults(options || {}, defaultOptions);

    var $text = $(options.textEl);

    this.getSearchText = function() {
        return $text.val();
    };

    function updateSearch() {
        amplify.publish('searchTextChanged');
        return false;
    }

    $text.on("keyup", updateSearch);
    $(options.buttonEl).on("click", updateSearch);
}

SearchView.prototype.render = function() {
    // nothing is here yet
};

module.exports = SearchView;
