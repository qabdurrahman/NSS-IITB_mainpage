$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".item");
  var seeAllBtn = document.getElementById("seeAllBtn");
  var seeLessBtn = document.getElementById("seeLessBtn");

  // Initially show only the first 3 items
  for (var i = 4; i < items.length; i++) {
    items[i].classList.add("hidden");
  }

  seeAllBtn.addEventListener("click", function () {
    items.forEach(function (item) {
      item.classList.remove("hidden");
    });
    seeAllBtn.classList.add("hidden");
    seeLessBtn.classList.remove("hidden");
  });

  seeLessBtn.addEventListener("click", function () {
    for (var i = 4; i < items.length; i++) {
      items[i].classList.add("hidden");
    }
    seeAllBtn.classList.remove("hidden");
    seeLessBtn.classList.add("hidden");
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//     let items = Array.from(document.getElementsByClassName("card"));
//     console.log(items);

//     let currentIndex = 0;
//     items[currentIndex].style.display = "flex";

//     let interval = setInterval(showNextItem, 3500);

//     function showNextItem() {
//         items[currentIndex].style.display = "none";
//         currentIndex = (currentIndex + 1) % items.length;
//         items[currentIndex].style.display = "flex";
//     }

//     items.forEach(item => {
//         item.addEventListener('mouseover', () => {
//             clearInterval(interval);
//             item.style.transform = "scale(1.05)";
//         });

//         item.addEventListener('mouseout', () => {
//             item.style.transform = "scale(1)";
//             interval = setInterval(showNextItem, 3500);
//         });
//     });
// });
