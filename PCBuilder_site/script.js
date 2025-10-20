// Dark mode toggle
const toggle = document.getElementById('toggle-theme');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
}
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');

// Compatibility check
const checkBtn = document.getElementById('check-btn');
if (checkBtn) {
  checkBtn.addEventListener('click', () => {
    const cpu = document.getElementById('cpu').value;
    const mobo = document.getElementById('mobo').value;
    const result = document.getElementById('result');
    if ((cpu === 'intel' && mobo === 'intel') || (cpu === 'amd' && mobo === 'amd')) {
      result.textContent = '✅ Compatible! Your build looks good.';
      result.style.color = 'limegreen';
    } else {
      result.textContent = '❌ Incompatible parts selected!';
      result.style.color = 'red';
    }
  });
}
