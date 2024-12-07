
let tabDashboard = document.getElementById('tab-dashboard');
let tabAlbanian = document.getElementById('tab-albanian');
let tabIndian = document.getElementById('tab-indian');
let content = document.getElementById('content');

tabDashboard.addEventListener('click', function () {
    const ir = indianRecipes();
    const ar = albanianRecipes();

    content.innerHTML = ir + ar;
});

tabAlbanian.addEventListener('click', function () {
    const ar = albanianRecipes();
    content.innerHTML = ar;
});

tabIndian.addEventListener('click', function () {
    const ir = indianRecipes();
    content.innerHTML = ir;
});

function indianRecipes() {
    const recipes = [
        { title: 'Cheese Triangles', description: 'Delicious cheesy triangles.', image: 'images/immge.jpg' },
        { title: 'Baked Lamb', description: 'A traditional Indian lamb dish.', image: 'images/immge.jpg' },
        { title: 'Pan-Fried Fish', description: 'Fresh fish lightly pan-fried.', image: 'images/immge.jpg' },

    ];

    let recipeHTML = `<div class="indian-recipe-list">
        <h1 class="text-2xl font-semibold mb-4">Indian Recipes</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;

    recipes.forEach(recipe => {
        recipeHTML += `
            <div class="recipe-item bg-white rounded shadow-lg p-4">
                <img class="w-full h-36 object-cover rounded" src="${recipe.image}" alt="${recipe.title}">
                <h3 class="text-lg font-bold mt-2">${recipe.title}</h3>
                <p class="text-gray-600 text-sm mt-1">${recipe.description}</p>
                <div class="mt-4 flex space-x-2">
                    <button class="bg-green-500 text-white px-3 py-1 rounded" onclick="alert('${recipe.title}')">View</button>
                    <button class="bg-blue-500 text-white px-3 py-1 rounded edit-button">Edit</button>
                    <button class="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </div>
            </div>`;
    });

    recipeHTML += '</div></div>';
    return recipeHTML;
}

function albanianRecipes() {
    const recipes = [
        { title: 'Pizza', description: 'Classic pizza with an Indian twist.', image: 'images/immg.jpg' },
        { title: 'Sheqerpare', description: 'Sweet syrup-soaked cookies.', image: 'images/immg.jpg' },
        { title: 'Flija Pancake', description: 'Layered pancake, a Balkan delicacy.', image: 'images/immg.jpg' },
        { title: 'Revani Cake', description: 'Traditional semolina-based dessert.', image: 'images/immg.jpg' }
    ];

    let recipeHTML = `<div class="albanian-recipe-list">
        <h1 class="text-2xl font-semibold mb-4 mt-4">Albanian Recipes</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;

    recipes.forEach(recipe => {
        recipeHTML += `
            <div class="recipe-item bg-white rounded shadow-lg p-4">
                <img class="w-full h-36 object-cover rounded" src="${recipe.image}" alt="${recipe.title}">
                <h3 class="text-lg font-bold mt-2">${recipe.title}</h3>
                <p class="text-gray-600 text-sm mt-1">${recipe.description}</p>
                <div class="mt-4 flex space-x-2">
                    <button class="bg-green-500 text-white px-3 py-1 rounded" onclick="alert('${recipe.title}')">View</button>
                    <button class="bg-blue-500 text-white px-3 py-1 rounded edit-button">Edit</button>
                    <button class="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </div>
            </div>`;
    });

    recipeHTML += '</div></div>';
    return recipeHTML;
}
