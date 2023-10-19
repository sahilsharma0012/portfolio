function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
main.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

// Jo humne timeline mein likha hai, vo saare properties ab hum chahey kise bhi element ko de skate hai..
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: " .page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 30%",
    end: "top 0%",
    scrub: 3,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -100,
    duration: 1,
    linear: "power4.in",
  },
  "sahil" // Koi same name dene se dono ko, vo dono ab ek sath chelege
);

// Jo properties humne page1 k h1 ko de thi, ab vo saare properties ab page1 k h2 ko bhi mil jayege, scroll trigger wale.
tl.to(
  ".page1 h2",

  {
    x: 100,
    duration: 1,
    linear: "power4.in",
  },
  "sahil" // Koi same name dene se dono ko, vo dono ab ek sath chelege
);

tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "sahil"
);

//page2

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: " .page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -100%",
    end: "top -400",
    scrub: 3,
  },
});

tl2.to(".main", {
  backgroundColor: "#fff",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: " .page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -200%",
    end: "top -210",
    scrub: 3,
  },
});

tl3.to(".main", {
  backgroundColor: "#0f0d0d",
});
