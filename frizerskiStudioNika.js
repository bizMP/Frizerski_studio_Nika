// Menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

var indexColoring = 0;
var indexActyvaCare = 0;
var indexBraidedHairstyles = 0;
var indexMaleModernCuts = 0;
var indexKeratineStraightening = 0;
var indexMakeup = 0;
var indexTransformations = 0;

function gallerySwitchRight(gallery) {
    if (gallery === "coloring") {
        const container = document.getElementById("imagesColoring");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexColoring < images.length - 1) {
            indexColoring++;
            container.style.transform =
                `translateX(-${indexColoring * imageWidth}px)`;
        }
    }
    else if (gallery === "actyvaCare") {
        const container = document.getElementById("imagesActyvaCare");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexActyvaCare < images.length - 1) {
            indexActyvaCare++;
            container.style.transform =
                `translateX(-${indexActyvaCare * imageWidth}px)`;
        }
    }
    else if (gallery === "braidedHairstyles") {
        const container = document.getElementById("imagesBraidedHairstyles");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexBraidedHairstyles < images.length - 1) {
            indexBraidedHairstyles++;
            container.style.transform =
                `translateX(-${indexBraidedHairstyles * imageWidth}px)`;
        }
    }
    else if (gallery === "maleModernCuts") {
        const container = document.getElementById("imagesMaleModernCuts");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexMaleModernCuts < images.length - 1) {
            indexMaleModernCuts++;
            container.style.transform =
                `translateX(-${indexMaleModernCuts * imageWidth}px)`;
        }
    }
    else if (gallery === "keratinStraightening") {
        const container = document.getElementById("imagesKeratinStraightening");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexKeratineStraightening < images.length - 1) {
            indexKeratineStraightening++;
            container.style.transform =
                `translateX(-${indexKeratineStraightening * imageWidth}px)`;
        }
    }
    else if (gallery === "makeup") {
        const container = document.getElementById("imagesMakeup");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexMakeup < images.length - 1) {
            indexMakeup++;
            container.style.transform =
                `translateX(-${indexMakeup * imageWidth}px)`;
        }
    }
    else if (gallery === "transformations") {
        const container = document.getElementById("imagesTransformations");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexTransformations < images.length - 1) {
            indexTransformations++;
            container.style.transform =
                `translateX(-${indexTransformations * imageWidth}px)`;
        }
    }
}

function gallerySwitchLeft(gallery) {
    if (gallery === "coloring") {
        const container = document.getElementById("imagesColoring");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexColoring > 0) {
            indexColoring--;
            container.style.transform =
                `translateX(-${indexColoring * imageWidth}px)`;
        }
    }
    else if (gallery === "actyvaCare") {
        const container = document.getElementById("imagesActyvaCare");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexActyvaCare > 0) {
            indexActyvaCare--;
            container.style.transform =
                `translateX(-${indexActyvaCare * imageWidth}px)`;
        }
    }
    else if (gallery === "braidedHairstyles") {
        const container = document.getElementById("imagesBraidedHairstyles");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexBraidedHairstyles > 0) {
            indexBraidedHairstyles--;
            container.style.transform =
                `translateX(-${indexBraidedHairstyles * imageWidth}px)`;
        }
    }
    else if (gallery === "maleModernCuts") {
        const container = document.getElementById("imagesMaleModernCuts");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexMaleModernCuts > 0) {
            indexMaleModernCuts--;
            container.style.transform =
                `translateX(-${indexMaleModernCuts * imageWidth}px)`;
        }
    }
    else if (gallery === "keratinStraightening") {
        const container = document.getElementById("imagesKeratinStraightening");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexKeratineStraightening > 0) {
            indexKeratineStraightening--;
            container.style.transform =
                `translateX(-${indexKeratineStraightening * imageWidth}px)`;
        }
    }
    else if (gallery === "makeup") {
        const container = document.getElementById("imagesMakeup");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexMakeup > 0) {
            indexMakeup--;
            container.style.transform =
                `translateX(-${indexMakeup * imageWidth}px)`;
        }
    }
    else if (gallery === "transformations") {
        const container = document.getElementById("imagesTransformations");
        const images = container.querySelectorAll("img");
        const imageWidth = images[0].clientWidth;

        if (indexTransformations > 0) {
            indexTransformations--;
            container.style.transform =
                `translateX(-${indexTransformations * imageWidth}px)`;
        }
    }
}

function showMoreButton(section) {
    if(section == "gallery") {
        document.getElementById("showMoreButtonGallery").style.display = "none";
        document.getElementById("showLessButtonGallery").style.display = "block";

        const hiddenItems = document.getElementsByClassName("hiddenGallery");

        for (let i = 0; i < hiddenItems.length; i++) {
            hiddenItems[i].style.display = "flex";
            hiddenItems[i].style.justifyContent = "space-around";
        }
    }
}

function showLessButton(section) {
    if(section == "gallery") {
        document.getElementById("showMoreButtonGallery").style.display = "block";
        document.getElementById("showLessButtonGallery").style.display = "none";

        const hiddenItems = document.getElementsByClassName("hiddenGallery");

        for (let i = hiddenItems.length - 1; i >= 0; i--) {
            hiddenItems[i].style.display = "none";
        }
    }
}