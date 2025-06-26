const changeBtn = document.getElementById('change_button');
const resetBtn = document.getElementById('Reset');

changeBtn.addEventListener('click', () => {
  const blockId = document.getElementById('block_id').value;
  const color = document.getElementById('colour_id').value;

  for (let i = 1; i <= 9; i++) {
    document.getElementById(String(i)).style.backgroundColor = 'transparent';
  }

  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  }
});

resetBtn.addEventListener('click', () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(String(i)).style.backgroundColor = 'transparent';
  }
});
