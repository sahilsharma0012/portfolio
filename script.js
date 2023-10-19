function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
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
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

// loco();

function cursor() {
  var main = document.querySelector("#main");

  main.addEventListener("mousemove", function (dets) {
    document.querySelector(".cursor").style.left = `${dets.clientX}px`;
    document.querySelector(".cursor").style.top = `${dets.clientY}px`;
  });
}

cursor();

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    // creating two span
    var parent = document.createElement("span");
    var child = document.createElement("span");

    //   adding classes
    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

revealToSpan();

function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from(".child span", {
    opacity: 0.1,
    x: 100,
    stagger: 0.2,
    duration: 1.4,
    ease: Power3.easeInOut,
  })
    .to(".parent .child", {
      y: "-100%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      delay: -0.5,
      ease: Circ.easeInOut,
    })

    .to("#green", {
      height: "90vh",
      top: "0vh",
      duration: 0.8,
      delay: -0.9,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "0vh",
      duration: 0.5,
      delay: -0.5,
      ease: Circ.easeInOut,
    });

  gsap.set("#home", {
    opacity: 0,
    y: 100,
  });

  tl.to("#home", {
    y: 0,
    ease: Power2.easeInOut,
    duration: 0.5,
    opacity: 1,
  });

  tl.from(".row h1", {
    scale: 0.5,
    opacity: 0,
    x: 200,
    stagger: 0.1,
  });

  tl.from(".text h5", {
    opacity: 0,
    scale: 0.5,
  });
}

loaderAnimation();

function clock() {
  gsap.to("#circle", {
    rotate: 0,
    ease: "cubic-bezier(0.19, 1, 0.22, 1)",
    duration: 2,
  });

  var active = 3;

  var mncircles = document.querySelectorAll(".mncircel");
  var sec = document.querySelectorAll(".sec");

  gsap.to(mncircles[active - 1], {
    opacity: 1,
  });

  gsap.to(sec[active - 1], {
    opacity: 1,
  });

  mncircles.forEach(function (val, index) {
    val.addEventListener("click", function () {
      gsap.to("#circle", {
        rotate: 3 - (index + 1) * 10,
        ease: Expo.easeInOut,
        duration: 1,
      });
      greyout();

      gsap.to(this, {
        opacity: 1,
      });

      gsap.to(sec[index], {
        opacity: 1,
      });
    });
  });

  function greyout() {
    gsap.to(mncircles, {
      opacity: 0.3,
    });

    gsap.to(sec, {
      opacity: 0.4,
    });
  }
}

// clock();

function hidden() {
  var hiddenText = document.querySelector(".hidden-text");
  var btn = document.querySelector(".btn-box");
  var close = document.querySelector("#close");
  btn.addEventListener("click", function () {
    hiddenText.style.display = "block";
    btn.style.display = "none";
  });

  close.addEventListener("click", function () {
    hiddenText.style.display = "none";
    btn.style.display = "block";
  });
}

hidden();

// var text = documents.querySelector("#aboutmeleft");
// var textPosoition = text.getBoundingClientRect().top;
// console.log(textPosoition);
// var screenHeight = window.innerHeight;

function scrollAnimation() {
  var text = document.querySelector("#aboutmeleft h1");
  var textPosition = text.getBoundingClientRect().top;
  var screenHeigth = window.innerHeight / 1.5;
  console.log(screenHeigth);
  console.log(textPosition);

  if (textPosition < screenHeigth) {
    text.style.opacity = 1;
    text.style.transform = "translate(0px)";
  } else {
    text.style.opacity = 0;
    text.style.transform = "translateY(20px)";
  }
}

window.addEventListener("scroll", scrollAnimation);
