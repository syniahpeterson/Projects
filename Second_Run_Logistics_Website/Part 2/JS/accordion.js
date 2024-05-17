const root = document.documentElement;

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', buttonClick);
});

function buttonClick() {
  const btn = event.target;
  btn.classList.toggle('open');
  const content = btn.nextElementSibling;
  content.classList.toggle('open');
  document.querySelectorAll('.accordion').forEach(button => {
    if (button !== btn && button.classList.contains('open')) {
      button.classList.remove('open');
      button.nextElementSibling.classList.remove('open');
    }
  });

  // Part 3 - Step 5
  root.style.setProperty('--content-height', btn.nextElementSibling.scrollHeight + 'px');
}