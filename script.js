document.getElementById('change_button').addEventListener('click', function () {
  const blockId = document.getElementById('block_id').value.trim();
  const color = document.getElementById('colour_id').value.trim();

  // Reset all blocks first
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = 'transparent';
  }

  // Apply new color to the selected block
  if (blockId >= 1 && blockId <= 9) {
    document.getElementById(blockId).style.backgroundColor = color;
  }
});

document.getElementById('Reset').addEventListener('click', function () {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = 'transparent';
  }
});
