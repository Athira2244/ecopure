var review = () => {
  var stars = document.getElementsByClassName("review");

  for (var i = 0; i < stars.length; i++) {
    for (var j = 0; j < 5; j++) {
      stars[i].innerHTML += `<i class="bi bi-star-fill mx-1"></i>`;
    }
  }
};

review();

//Customer Page
document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".clickable-card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      window.location.href = "../customer/category.html"; // Replace 'another-page.html' with the URL of the page you want to navigate to
    });
  });
});
//Product details
var card1 = document.getElementById("address_card");
var card2 = document.getElementById("confirm");
function Edit() {
  card1.classList.remove("d-none");
  card2.classList.add("d-none");
}
function Update() {
  card1.classList.add("d-none");
  card2.classList.remove("d-none");
}

//Cash on delivery
var selectBox = document.getElementById("selectBox");

selectBox.addEventListener("change", function () {
  var selectedValue = selectBox.value;
  if (selectedValue == "card_pay") {
    window.location.href = "../customer/payment.html";
  } else {
    var offcanvas = new bootstrap.Offcanvas(
      document.getElementById("offcanvasend")
    );
    offcanvas.show();
  }
});

//place order
var place = document.getElementById("place_order");
var text = document.getElementById("order_text");

place.addEventListener("click", function () {
  text.innerHTML = "Order Placed Successfully";
});
