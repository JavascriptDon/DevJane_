import React from "react";
import gsap from "gsap";
import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.145.0/three.min.js";
export default function Cursor(){
console.clear();

let cursor = document.querySelector('.cursor');
let cursorDot = document.querySelector(".cursorDot");
let cursorScale = document.querySelectorAll('.cursor-scale'); 
let mouseX = 0;
let mouseY = 0;

gsap.config({
  force3D: false,
  nullTargetWarn: false,
  trialWarn: false,
});

gsap.set('.null', {opacity: 1})


gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
    gsap.set(cursorDot, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});

// gsap.to(".items div", {
//   y: gsap.utils.random([-10, 10], true),
//   ease:"elastic",
//   duration: 1.5,
//   delay: 0,
//   stagger: {
//     amount: 0.7,
//     from: 'random'
//   },
//   repeat: -1,
//   repeatRefresh: true,
//   yoyo: true
// })

cursorScale.forEach((link) => {
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
    if (link.classList.contains("small")) {
      cursor.classList.remove("grow");
      cursor.classList.add("grow-small");
    }
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
    cursor.classList.remove("grow-small");
  });
});

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

    return(
        <>
        <div className="wrapper">
            <div className="cursor"></div>
            <div className="cursorDot"></div>
        </div>
        </>
    )
}
