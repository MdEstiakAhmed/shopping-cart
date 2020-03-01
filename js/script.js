//first product variable
var firstProductCount = document.getElementById("firstProductCount");
var firstProductCost = document.getElementById("firstProductCost");
var firstProductCountMinus = document.getElementById("firstProductCountMinus");
var firstProductCountPlus = document.getElementById("firstProductCountPlus");
const firstProductCostInitial = firstProductCost.innerText;

//first product variable
var secondProductCount = document.getElementById("secondProductCount");
var secondProductCost = document.getElementById("secondProductCost");
var secondProductCountMinus = document.getElementById("secondProductCountMinus");
var secondProductCountPlus = document.getElementById("secondProductCountPlus");
const secondProductCostInitial = secondProductCost.innerText;

//window load function for price update
window.addEventListener('load', function(){
    totalPrice([firstProductCost.innerText, secondProductCost.innerText]);
  });

//first product event listener
firstProductCountMinus.addEventListener("click", function(){
    singleProductPrice(firstProductCount, -1, firstProductCost, firstProductCostInitial, firstProductCountMinus);
    totalPrice([firstProductCost.innerText, secondProductCost.innerText]);
});

firstProductCountPlus.addEventListener("click", function(){
    singleProductPrice(firstProductCount, 1, firstProductCost, firstProductCostInitial, firstProductCountMinus);
    totalPrice([firstProductCost.innerText, secondProductCost.innerText]);
});

//second product event listener
secondProductCountMinus.addEventListener("click", function(){
    singleProductPrice(secondProductCount, -1, secondProductCost, secondProductCostInitial, secondProductCountMinus);
    totalPrice([firstProductCost.innerText, secondProductCost.innerText]);
});

secondProductCountPlus.addEventListener("click", function(){
    singleProductPrice(secondProductCount, 1, secondProductCost, secondProductCostInitial, secondProductCountMinus);
    totalPrice([firstProductCost.innerText, secondProductCost.innerText]);
});

//total price section
var subtotalHTML = document.getElementById("subtotal");
var taxHTML = document.getElementById("tax");
var totalHTML = document.getElementById("total");

//string to float convert function
function stringToFloatConvert(str){
    floatNumber = parseFloat(str);
    return floatNumber;
}

//single product price
function singleProductPrice(countHTML, sign, priceHTML, initialPrice, btn) {
    var initialPriceInNumber = stringToFloatConvert(initialPrice);
    var countInNUmber = stringToFloatConvert(countHTML.value);

    countInNUmber = countInNUmber + (1 * sign);
    countHTML.value = countInNUmber;

    if(countInNUmber <= 0){
        priceHTML.innerText = 0;
        btn.disabled = true;
    }
    else{
        btn.disabled = false;
        newPrice = initialPriceInNumber * countInNUmber;
        priceHTML.innerText = newPrice;
    }
}

//total price
function totalPrice(allProduct) {
    var ProductCostInNumber = [];
    for(var initial = 0; initial < allProduct.length; initial++){
        ProductCostInNumber[initial] = stringToFloatConvert(allProduct[initial]);
    }

    var subtotal = 0;
    for(var initial = 0; initial < ProductCostInNumber.length; initial++){
        subtotal = subtotal + ProductCostInNumber[initial];
    }

    var tax = subtotal * 0.05;
    var total = subtotal + tax;

    if(total == 0){
        document.getElementById("check-out").disabled = true;
        document.getElementById("error-msg").style.display = "block";
    }
    else{
        document.getElementById("check-out").disabled = false;
        document.getElementById("error-msg").style.display = "none";
    }

    subtotalHTML.innerText = subtotal.toFixed(2);
    taxHTML.innerText = tax.toFixed(2);
    totalHTML.innerText = total.toFixed(2);
}