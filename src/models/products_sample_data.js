var ProductModel = require('./product');

var products = [
    new ProductModel("NAS Western Digital", 700, "Western Digital", "Some description here"),
    new ProductModel("NAS QNAP", 710, "QNAP", "Another description here.."),
    new ProductModel("NAS Seagate", 650, "Seagate"),
    new ProductModel("NAS D-Link", 650, "D-Link"),
    new ProductModel("DAS CFI", 500, "CFI"),
    new ProductModel("DAS QNAP", 135, "QNAP"),
    new ProductModel("HDD Seagate", 300, "Seagate"),
    new ProductModel("HDD Samsung", 310, "Samsung"),
    new ProductModel("HDD Hitachi", 290, "Hitachi"),
    new ProductModel("HDD Western Digital", 205, "Western Digital")
];

module.exports = products;
