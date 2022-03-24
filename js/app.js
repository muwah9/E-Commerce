(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    const menuButton = document.querySelector(".icon-menu");
    const navigation = document.querySelector(".header__navigation");
    document.querySelector("body");
    let mainImage = document.querySelector(".main-image");
    let smallImage = document.querySelectorAll(".small-image");
    let productItem = document.querySelectorAll(".products__item");
    navigation.classList.remove("header__navigation--no-js");
    menuButton.addEventListener("click", (function() {
        if (navigation.classList.contains("header__navigation--closed")) {
            navigation.classList.remove("header__navigation--closed");
            navigation.classList.add("header__navigation--open");
        } else {
            navigation.classList.add("header__navigation--closed");
            navigation.classList.remove("header__navigation--open");
        }
    }));
    productItem.forEach((i => {
        i.addEventListener("click", (() => {
            window.location.href = "single-product.html";
        }));
    }));
    smallImage.forEach((function(i) {
        i.addEventListener("click", (() => {
            mainImage.src = i.src;
        }));
    }));
    let productsInCart = JSON.parse(localStorage.getItem("shoppingCart"));
    if (!productsInCart) productsInCart = [];
    window["FLS"] = true;
    isWebp();
})();