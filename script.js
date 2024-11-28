// script.js
document.querySelectorAll('.cymbal, .tom, .kick, .snare').forEach(drum => {
    drum.addEventListener('click', () => {
      playSound(drum.id);
    });
  });
  
  document.addEventListener('keydown', (e) => {
    const keyMap = {
      'a': 'crash',
      's': 'ride',
      'q': 'floor-tom',
      'w': 'mid-tom',
      'e': 'high-tom',
      '4': 'kick1',
      '1': 'snare',
      '2': 'kick2',
    };
    if (keyMap[e.key]) playSound(keyMap[e.key]);
  });
  
  function playSound(id) {
    const audio = new Audio(`sounds/${id}.mp3`);
    audio.play();
  }
  