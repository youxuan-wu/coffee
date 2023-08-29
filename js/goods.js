// document.addEventListener("DOMContentLoaded", function() {
//     const cityNames = document.querySelectorAll(".place p[data-city]");
//     const addressSections = document.querySelectorAll(".place .address");

//     cityNames.forEach(cityName => {
//         cityName.addEventListener("click", function() {
//             const city = this.getAttribute("data-city");
//             addressSections.forEach(section => {
//                 section.style.display = "none";
//             });
//             document.querySelector(`.place .address.${city}`).style.display = "block";
//         });
//     });
// });