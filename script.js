document.addEventListener('DOMContentLoaded', () => {
    const blockIdInput = document.getElementById('block_id');
    const colourIdInput = document.getElementById('colour_id');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');
    const gridItems = document.querySelectorAll('.grid-item');

    const resetAllGridColors = () => {
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    };

    changeButton.addEventListener('click', () => {
        const blockId = parseInt(blockIdInput.value);
        const newColor = colourIdInput.value.trim();

        if (isNaN(blockId) || blockId < 1 || blockId > 9) {
            alert('Please enter a valid Block ID between 1 and 9.');
            return;
        }
        if (!newColor) {
            alert('Please enter a color.');
            return;
        }

        resetAllGridColors();

        const selectedGridItem = document.getElementById(`item-${blockId}`);
        if (selectedGridItem) {
            selectedGridItem.style.backgroundColor = newColor;
        } else {
            console.error(`Grid item with ID 'item-${blockId}' not found.`);
        }
    });

    resetButton.addEventListener('click', () => {
        resetAllGridColors();
        blockIdInput.value = '';
        colourIdInput.value = '';
    });
});