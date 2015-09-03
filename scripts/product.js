define(function (require) {

    function Product(title, price, tag, descr) {
        title = title || "";
        descr = descr || "...Описание товара...";
        price = price || "0";
        tag = tag || "";

        this.getTitle = function() {
            return title;
        };

        this.getDescr = function() {
            return descr;
        };

        this.getPrice = function() {
            return price;
        };

        this.getTag = function() {
            return tag;
        };
    }

    return Product;

});
