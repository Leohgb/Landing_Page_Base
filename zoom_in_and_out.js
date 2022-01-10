            img = document.getElementById("img1");
            var clicked = 0;
            function enlargeImg() {
                clicked++;
                var content = arguments[0];

    if (clicked % 2 === 1) {
                img.style.transform = "scale(1.3)";
                img.style.transition = "transform 0.25s ease";
                img.style.cursor = "zoom-out";
    } else{
                img.style.transform = "scale(1)";
                img.style.transition = "transform 0.25s ease";
                img.style.cursor = "zoom-in";
                 }
            }
