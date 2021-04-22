// 1. 요소 받기
const varContainer = {
  player: document.querySelector('.player'),
  video: document.querySelector('.player__video'),
  progress: document.querySelector('.progress'),
  progressBar: document.querySelector('.progress__filled'),
  playBtn: document.querySelector('.toggle'),
  ranges: document.querySelectorAll('input[type="range"]'),
  skipBtns: document.querySelectorAll('.player__button'),
  fullScreen: document.querySelector('.full')
}
// 2. 함수 만들기
function playVideo(event) {
  const video = varContainer.video;
  const method = video.paused ? 'play' : 'pause';
  if (event.target === video || event.target === varContainer.playBtn) {
    video[method]();
  }
}

function handleBtn() {
  const video = varContainer.video;
  const playBtn = varContainer.playBtn;
  video.paused ? playBtn.textContent = '►' : playBtn.textContent = '❚ ❚';
}

function skipVideo() {
  const video = varContainer.video;
  if (!this.dataset.skip) return;
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
  const video = varContainer.video;
  video[this.name] = this.value;
  console.log(this.value);
}

function fillProgress() {
  const video = varContainer.video;
  const progressBar = varContainer.progressBar;
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function changeProgress(event) {
  const video = varContainer.video;
  const progress = varContainer.progress;
  video.currentTime = (event.offsetX / progress.offsetWidth) * video.duration;
}
let isFull = false;
function makeFull() {
  const player = varContainer.player;
  if (isFull === false) {
    isFull = true;
    player.requestFullscreen();
  } else {
    isFull = false;
    document.exitFullscreen();
  }
}

function hideControls() {
  let timeout;
  const controls = document.querySelector('.player__controls');
  clearTimeout(timeout);
  controls.style.transform = `translateY(${0})`;
  timeout = setTimeout(function() {
    controls.style.transform = `translateY(${100}%) translateY(${-5}px)`;
  }, 1500);
}

// 3. 이벤트 리스너
varContainer.player.addEventListener('click', playVideo);
varContainer.player.addEventListener('click', handleBtn);
varContainer.skipBtns.forEach(buttons => buttons.addEventListener('click', skipVideo));
varContainer.ranges.forEach(inputs => inputs.addEventListener('change', handleRange));
varContainer.ranges.forEach(inputs => inputs.addEventListener('mousemove', handleRange));
varContainer.video.addEventListener('timeupdate', fillProgress);
let isClicked = false;
varContainer.progress.addEventListener('change', changeProgress);
varContainer.progress.addEventListener('mousemove', (e) => {isClicked && changeProgress(e)});
varContainer.progress.addEventListener('mousedown', () => {isClicked = true});
varContainer.progress.addEventListener('mouseup', () => {isClicked = false});
varContainer.fullScreen.addEventListener('click', makeFull);
varContainer.player.addEventListener('mousemove', hideControls);
