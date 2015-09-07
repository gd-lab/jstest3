function ProductFiltersModel() {
}

function isContainedInFilters(product, filters /** array */) {
    if (!filters || !filters.length) return true;

    function isContained(filter /** string */) {
        if (typeof filter === "undefined" || filter === "") return true;
        return (product.getTag() === filter);
    }

    for (var i = 0, j = filters.length; i < j; i++) {
        if (isContained(filters[i])) return true;
    }
    return false;
}

ProductFiltersModel.prototype.applyFilters = function(products, filters) {
    var result = [];
    for (var i = 0, j = products.length; i < j; i++) {
        var product = products[i];
        if (isContainedInFilters(product, filters))
            result.push(product);
    }
    return result;
};

module.exports = ProductFiltersModel;
