document.addEventListener("DOMContentLoaded", function() {
    const commodityNames = document.querySelectorAll(".item p[data-commodity]");
    const commoditySections = document.querySelectorAll(".item .commodity");

    commodityNames.forEach(commodityName => {
        commodityName.addEventListener("click", function() {
            const commodity = this.getAttribute("data-commodity");
            commoditySections.forEach(section => {
                section.style.display = "none";
            });
            document.querySelector(`.item .commodity.${commodity}`).style.display = "grid";
        });
    });
});
