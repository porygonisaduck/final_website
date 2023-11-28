// let pets = document.querySelectorAll(".pet");

// for (let i = 0; i < pets.length; ++i) {
//     let pet =  pets[i];
//     let thumbnails = pet.querySelectorAll(".thumbnail");

//     for (let i = 0; i < thumbnails.length; ++i){
//         thumbnails[i].addEventListener("mouseover", function() {
//             let display = pet.querySelector(".display");
//             display.alt = this.alt;
//             display.setAttribute('og', display.src);
//             display.src = this.src;
//         });

//         thumbnails[i].setAttribute("tabindex", 0);

//         thumbnails[i].addEventListener("mouseleave", function() {
//             let display = pet.querySelector(".display");
//             display.src = display.getAttribute("og");
//             display.innerHTML = "Hover over an image below to display the image and the alt text.";

//         });
//     }
// }


// document.addEventListener('DOMContentLoaded', function () {
//     const object = document.querySelector('#exploded-view .object');
//     let rotateX = 0;
//     let rotateY = 0;
    
//     document.addEventListener('mousemove', function (event) {
//       const { clientX, clientY } = event;
//       const { left, top, width, height } = object.getBoundingClientRect();
//       const centerX = left + width / 2;
//       const centerY = top + height / 2;
    
//       const deltaX = (clientX - centerX) / 10; // Adjust sensitivity
//       const deltaY = (clientY - centerY) / 10;
    
//       rotateX = deltaY;
//       rotateY = deltaX;
    
//       object.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//     });
    
//     // Reset the rotation on mouse leave or other events if needed
//     // document.addEventListener('mouseleave', function () {
//     //   rotateX = 0;
//     //   rotateY = 0;
//     //   object.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//     // });
//   });


let temp = document.getElementsByClassName("fa-bars")[0];
temp.addEventListener("click", function() {
    console.log("working");
    let nav = document.querySelector("nav");
    nav.classList.add("is-open");

});


temp = document.getElementsByClassName("fa-xmark")[0];
temp.addEventListener("click", function() {
    console.log("working");
    let nav = document.querySelector("nav");
    nav.classList.remove("is-open");

});

