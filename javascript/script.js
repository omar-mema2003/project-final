const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging =false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel .scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel .scrollLeft == scrollWidth  ? "none" : "block";


}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", ()=>{
    let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
   carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  setTimeout(() => showHideIcons(), 60); // callung showHideIcons after 60ms 
});
});
 const autoSlide = () => {
    // if there is no image left to scroll then return from here
 if( carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

positionDiff = Math.abs(positionDiff);
let firstImgWidth = firstImg.clientWidth + 14 ;
// getting differences value that needs to add or reduce form carousel left to take middle img center
let valDifference =firstImgWidth - positionDiff; 

if(carousel.scrollLeft > prevScrollLeft){ // if user is scrolling to the right 
return carousel.scrollLeft += positionDiff / 3 ? valDifference : -positionDiff;
}
// if user is scrolling to the left
carousel.scrollLeft -= positionDiff / 3 ? valDifference : -positionDiff;

} 

const dragStart =(e) =>{
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touched[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging =(e) =>{
    // scrolling images/carousel to left according to mouse pointer
   if(!isDragStart) return;
   e.preventDefault();
   isDragging =true;
   carousel.classList.add("dragging");
   positionDiff = (e.pageX || e.touched[0].pageX) - prevPageX;
   carousel.scrollLeft = prevScrollLeft - positionDiff;
   showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
     autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);



// ملف JavaScript (script.js)
console.log("connectus.html");
const sourceSection1 = document.getElementById('mySection1');
console.log(sourceSection1); // يطبع العنصر الذي يحمل الهوية 'mySection'

console.log("index.html");
const destinationSection = document.getElementById('mySection1');
console.log(destinationSection); // يطبع العنصر الذي يحمل الهوية 'mySection'

destinationSection.innerHTML = sourceSection1.innerHTML;

console.log(sourceSection1),(sourceSection1);