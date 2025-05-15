document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video__v");
  const videoContainer = document.querySelector(".video");
  const playButton = document.querySelector(".video__play"); // если есть кнопка Play

  // Включаем controls и убираем градиент при воспроизведении
  video.addEventListener("play", function () {
    video.setAttribute("playing", "");
    video.controls = true;
    videoContainer.classList.add("video-playing"); // скрываем градиент
  });

  // Возвращаем градиент при паузе
  video.addEventListener("pause", function () {
    video.removeAttribute("playing");
    video.controls = false;
    videoContainer.classList.remove("video-playing"); // показываем градиент
  });

  // Возвращаем градиент при окончании видео
  video.addEventListener("ended", function () {
    video.removeAttribute("playing");
    video.controls = false;
    videoContainer.classList.remove("video-playing"); // показываем градиент
  });

  // Клик по видео для паузы/воспроизведения
  video.addEventListener("click", function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // Клик по кнопке Play (если есть)
  if (playButton) {
    playButton.addEventListener("click", function () {
      video.play();
    });
  }
});
