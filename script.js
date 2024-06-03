document.addEventListener("DOMContentLoaded", () => {
    const addDishButton = document.getElementById('addDishButton');
    const deleteDishButton = document.getElementById('deleteDishButton');
    const menuItems = document.getElementById('menuItems');
    let dishCount = 1;

    addDishButton.addEventListener('click', () => {
        dishCount++;
        const newMenuItem = document.createElement('div');
        newMenuItem.classList.add('menu-item');
        newMenuItem.innerHTML = `
            <div class="form-group">
                <label for="dishName${dishCount}">Dish Name</label>
                <input type="text" id="dishName${dishCount}" name="dishName[]" required>
            </div>
            <div class="form-group">
                <label for="dishPrice${dishCount}">Price</label>
                <input type="number" id="dishPrice${dishCount}" name="dishPrice[]" required>
            </div>
        `;
        menuItems.appendChild(newMenuItem);
    });

    deleteDishButton.addEventListener('click', () => {
        const menuItems = document.getElementById('menuItems');
        const lastMenuItem = menuItems.lastElementChild;
        if (lastMenuItem) {
            menuItems.removeChild(lastMenuItem);
        }
    });

    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Registration Successful!');
    });
});
