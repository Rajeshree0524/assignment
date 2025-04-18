// Toggle active class for top menu buttons
document.querySelectorAll('.tab').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
  
  // Toggle active class for language buttons
  
  document.querySelectorAll('.lang').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.lang').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  const playPauseBtn = document.getElementById('playPauseBtn');
  let isPlaying = false;

  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
      playPauseBtn.textContent = '▶';
      isPlaying = false;
      console.log('Simulated: Paused');
    } else {
      playPauseBtn.textContent = '⏸';
      isPlaying = true;
      console.log('Simulated: Playing');
    }
  });