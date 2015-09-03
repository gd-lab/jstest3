define(function (require) {

    function Products(products, filterCb) {
        if (!products || !products.length)
            throw new Error("products arg must a non-empty array");

        function forEachProduct(cb) {
            if (!cb) return;
            for (var i = 0, max = products.length; i < max; i++) {
                var product = products[i];
                cb(product);
            }
        }

        this.each = function(cb) {
            forEachProduct(cb);
        };

        this.eachFiltered = function(cb) {
            forEachProduct(function(product) {
                if (!filterCb || filterCb(product))
                    cb(product);
            });
        };
    }


    return Products;

});
