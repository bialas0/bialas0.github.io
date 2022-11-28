// variables on sale-details.html
// h1, h2, p, #price-tag etc. 
var carTitle = document.getElementById("car-title");
var carName = document.getElementById("car-name");
var carDetails = document.getElementById("car-details");
var priceTag = document.getElementById("price-tag");
var description = document.getElementById("car-description");
// enquiry stays the same for each

var isNissan = false;

function LoadPage () {
    window.location = "sale-detals.html";
    window.isNissan = true;
}

console.log(isNissan);

function OnLoad() {
    if (isNissan === true) {
        carTitle.innerHTML = "Nissan Micra";
    }
}

if (carTitle.innerHTML = "Nissan Micra") {
    carName.innerHTML = "Nissan Micra 2007";
    carDetails.innerHTML = "a";
    description.innerHTML = "b";
    priceTag.innerHTML = "£";
}
