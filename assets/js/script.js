// Hàm xử lý banner
let slideIndex = 1;
// call showDivs() to display the first image
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

// The showDiv() function hides (display="none") all elements with the class name "mySlides",
// and displays (display="block") the element with the given slideIndex
function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("banner-top__img");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    // Hides (display="none") all elements with the class name "mySlides"
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}