define(function() {

    function isContained(product /** Product */, search /** string */) {
        if (!product || typeof product.getTitle != 'function'
                || typeof product.getDescr != 'function')
            throw new Error("product arg must have 'getTitle' or 'getDescr' function");

        if (typeof search === "undefined" || search === "") return true;
        search = search.toLowerCase();
        return ~product.getTitle().toLowerCase().indexOf(search)
                || ~product.getDescr().toLowerCase().indexOf(search);
    }

    return {
        isContained: isContained
    };

});
