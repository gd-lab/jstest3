define(function (require) {

    function Product(title, price, tag, descr) {
        this.title = title;
        this.descr = descr || "...Описание товара...";
        this.price = price;
        this.tag = tag;
    }

    Product.prototype.isIncludedInSearch = function(search) {
        if (typeof search === "undefined" || search === "") return true;
        search = search.toLowerCase();
        return ~this.title.toLowerCase().indexOf(search)
                || ~this.descr.toLowerCase().indexOf(search);
    };

    Product.prototype.isIncludedInFilter = function(filter) {
        if (typeof filter === "undefined" || filter === "") return true;
        return (this.tag === filter);
    };

    return Product;

});
