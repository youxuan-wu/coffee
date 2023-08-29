document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".banner img");
    let currentImageIndex = 0;
  
    function showNextImage() {
      images[currentImageIndex].style.opacity = "0";
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.opacity = "0.9";
    }
  
    function startSlideshow() {
      showNextImage();
      setInterval(showNextImage, 3000); // 切换图片间隔时间为3秒
    }
  
    startSlideshow();
  });
  
  
  
  



document.addEventListener("DOMContentLoaded", function() {
    const cityNames = document.querySelectorAll(".place p[data-city]");
    const addressSections = document.querySelectorAll(".place .address");

    cityNames.forEach(cityName => {
        cityName.addEventListener("click", function() {
            const city = this.getAttribute("data-city");
            addressSections.forEach(section => {
                section.style.display = "none";
            });
            document.querySelector(`.place .address.${city}`).style.display = "block";
        });
    });
});
