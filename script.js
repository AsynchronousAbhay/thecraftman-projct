//                             -----//----- locomotive------

function loco() {

  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

loco();

//                             -----//---hover---animation-----

const pg_1_btm_right_top_right_box = document.querySelector("#pg_1_btm_right_top_right_box");
const pg_1_btm_right_top_left_box = document.querySelector("#pg_1_btm_right_top_left_box");
const pg_1_btm_right_btm_div = document.querySelector("#pg_1_btm_right_btm_div");
const circle_wrapper = document.querySelector(".circle_wrapper");
const circle = document.querySelector(".circle");
const triangle = document.querySelectorAll(".triangle");
const square = document.querySelectorAll(".square");
const triangle_wrapper = document.querySelector(".triangle_wrapper");
const square_wrapper = document.querySelector(".square_wrapper");
const container = document.querySelector(".container");

function hover() {

  container.addEventListener("mouseenter", () => {
    circle.style.backgroundColor = "palevioletred";
  })
  container.addEventListener("mouseleave", () => {
    circle.style.backgroundColor = "#a5a1ff";
  })

  // circle......

  pg_1_btm_right_top_right_box.addEventListener("mouseenter", () => {
    pg_1_btm_right_top_right_box.style.transform = "scale(0.96)";
    circle_wrapper.style.transform = "scale(1.5)";
    triangle_wrapper.style.transform = "scale(0.5)";
    square_wrapper.style.transform = "scale(0.5)";
    circle.style.backgroundColor = "pink";
  })

  pg_1_btm_right_top_right_box.addEventListener("mouseleave", () => {
    pg_1_btm_right_top_right_box.style.transform = "scale(1)";
    circle_wrapper.style.transform = "scale(1)";
    triangle_wrapper.style.transform = "scale(1)";
    square_wrapper.style.transform = "scale(1)";
    circle.style.backgroundColor = "#a5a1ff";
  })


  // triangle......

  pg_1_btm_right_btm_div.addEventListener("mouseenter", () => {
    pg_1_btm_right_btm_div.style.transform = "scale(0.96)";
    triangle_wrapper.style.transform = "scale(1.5)";
    circle_wrapper.style.transform = "scale(0.5)";
    square_wrapper.style.transform = "scale(0.5)";
  })

  pg_1_btm_right_btm_div.addEventListener("mouseleave", () => {
    pg_1_btm_right_btm_div.style.transform = "scale(1)";
    triangle_wrapper.style.transform = "scale(1)";
    circle_wrapper.style.transform = "scale(1)";
    square_wrapper.style.transform = "scale(1)";
  })


  // SQUARE......
  pg_1_btm_right_top_left_box.addEventListener("mouseenter", () => {
    pg_1_btm_right_top_left_box.style.transform = "scale(0.96)";
    square_wrapper.style.transform = "scale(1.5)";
    circle_wrapper.style.transform = "scale(0.5)";
    triangle_wrapper.style.transform = "scale(0.5)";
    square.style.backgroundColor = "#fefffe";
  })

  pg_1_btm_right_top_left_box.addEventListener("mouseleave", () => {
    pg_1_btm_right_top_left_box.style.transform = "scale(1)";
    square_wrapper.style.transform = "scale(1)";
    circle_wrapper.style.transform = "scale(1)";
    triangle_wrapper.style.transform = "scale(1)";
    square.style.backgroundColor = "#a5a1ff";
  })
}

hover();
