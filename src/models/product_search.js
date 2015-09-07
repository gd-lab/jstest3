function ProductSearchModel() {
}

function isContainedInSearch(product, search /** string */) {
    if (typeof search === "undefined" || search === "") return true;
    search = search.toLowerCase();
    return ~product.getTitle().toLowerCase().indexOf(search)
            || ~product.getDescr().toLowerCase().indexOf(search);
}

ProductSearchModel.prototype.applySearch = function(products, searchText) {
    var result = [];
    for (var i = 0, j = products.length; i < j; i++) {
        var product = products[i];
        if (isContainedInSearch(product, searchText))
            result.push(product);
    }
    return result;
};

module.exports = ProductSearchModel;
