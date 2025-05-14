document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video__v");
  const playButton = document.querySelector(".video__play");

  // Включаем controls при воспроизведении
  video.addEventListener("play", function () {
    video.setAttribute("playing", "");
    video.controls = true;
  });

  // Выключаем controls при паузе
  video.addEventListener("pause", function () {
    video.removeAttribute("playing");
    video.controls = false;
  });

  // Выключаем controls при окончании видео
  video.addEventListener("ended", function () {
    video.removeAttribute("playing");
    video.controls = false;
  });

  // Клик по видео для паузы/воспроизведения
  video.addEventListener("click", function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // Клик по кнопке Play
  playButton.addEventListener("click", function () {
    video.play();
  });
});
