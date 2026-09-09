(() => {
  const total = 12;
  let index = 1;
  const slide = document.getElementById('slide');
  const current = document.getElementById('current');
  const progressBar = document.getElementById('progressBar');

  function show(next) {
    index = ((next - 1 + total) % total) + 1;
    slide.src = `slides/slide-${index}.png`;
    slide.alt = `그래핀 프로젝트 발표자료 ${index}페이지`;
    current.textContent = String(index).padStart(2, '0');
    progressBar.style.width = `${index / total * 100}%`;
  }

  document.querySelector('.prev').addEventListener('click', () => show(index - 1));
  document.querySelector('.next').addEventListener('click', () => show(index + 1));
  document.getElementById('prevText').addEventListener('click', () => show(index - 1));
  document.getElementById('nextText').addEventListener('click', () => show(index + 1));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(index - 1);
    if (event.key === 'ArrowRight') show(index + 1);
  });
})();
