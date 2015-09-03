define(function() {

    function isContainedInFilter(product /** Product */, filter /** string */) {
        if (!product || typeof product.getTag != 'function')
            throw new Error("product arg must have 'getTag' function");

        if (typeof filter === "undefined" || filter === "") return true;
        return (product.getTag() === filter);
    }

    function isContained(product /** Product */, filters /** array */) {
        if (!filters || !filters.length) return true;

        for (var i = 0, j = filters.length; i < j; i++) {
            if (isContainedInFilter(product, filters[i])) return true;
        }
        return false;
    }

    return {
        isContained: isContained
    };

});
