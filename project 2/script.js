const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// Mouse
function circleMouseFollower(xscale, yscale) {
  // Window means browser screen.
  //Yeh function details provide krega mouse k move krne pr...(Console pr:- ki mouse ki direction x,y axis mein kha hai)
  //   window.addEventListener("mousemove", function (dets) {
  //     console.log(dets);
  //   });

  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
circleMouseFollower();

// mouse skew

function circelSkew() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  //   define mouse pevious location
  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    //    difference of mouse move
    var xdiff = dets.clientX - xprev;
    var ydiff = dets.clientY - yprev;

    // clamp function in gsap
    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

    xprev = dets.clientX;
    yprev = dets.clientY;
    // console.log(xdiff, ydiff);

    circleMouseFollower(xscale, yscale);
  });
}

circelSkew();

//  first Page
function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from(
    "#nav",
    {
      y: "-10",
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 1.5,
    },
    "sahil"
  );

  tl.to(
    ".boundingelem",
    {
      y: "0",
      ease: Expo.easeInOut,
      duration: 2,
      stagger: 0.2,
    },
    "sahil"
  );

  tl.from(
    "#herofooter",
    {
      y: "-10",
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 1.5,
    },
    "sahil"
  );
}
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (details) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (details) {
    var diff = details.clientY - elem.getBoundingClientRect().top;
    diffrot = details.clientX - rotate;
    rotate = details.clientX;
    gsap.utils.clamp(-20, 20, diffrot);
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: details.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot),
    });
  });
});

console.log(getBoundingClientRect);
