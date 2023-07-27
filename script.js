const showButton = () => {
  const backTop = document.getElementById("backTop");
  // if (window.scrollY > 500) {
  //   backTop.style.display = "inline-block";
  //   document.documentElement.style.setProperty("--social--height", `${115}px`);
  //   document.documentElement.style.setProperty("--calendar--height", `${60}px`);
  // } else {
  //   backTop.style.display = "none";
  //   document.documentElement.style.setProperty("--social--height", `${60}px`);
  //   document.documentElement.style.setProperty("--calendar--height", `${10}px`);
  // }
  if (document.body.getBoundingClientRect().y < -500) {
    backTop.style.display = "inline-block";
    document.documentElement.style.setProperty("--social--height", `${115}px`);
    document.documentElement.style.setProperty("--calendar--height", `${60}px`);
  } else {
    backTop.style.display = "none";
    document.documentElement.style.setProperty("--social--height", `${60}px`);
    document.documentElement.style.setProperty("--calendar--height", `${10}px`);
  }
};

window.addEventListener("scroll", showButton);
