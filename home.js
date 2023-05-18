'use strict'

{
  const target = document.querySelector(".icon");

  function callback() {
    console.log('fired!');
  }

  const observer = new IntersectionObserver(callback);

  observer.observe(target);
}

window.addEventListener("load", () => {
  // boxをすべて取得
  const boxes = document.querySelectorAll(".icon");
  // scrollイベントをセット
  window.addEventListener("scroll", showBoxes);

  showBoxes();

  function showBoxes() {
    // 発火位置
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((icon) => {
      // boxの頭部分の座標を取得
      const iconTop = contents.getBoundingClientRect().top;

      // boxの頭部分が発火位置を超えたら
      if (iconTop < triggerBottom) {
        icon.classList.add("show");
      } else {
        icon.classList.remove("show");
      }
    });
  }
})
