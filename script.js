let all = document.getElementById('dashboard');
let albiena = document.getElementById('recipes');
let cheng = document.getElementById('indian-rec');
let content = document.getElementById('content');
let indian = document.getElementById('indian');

all.addEventListener('click', function() {
    cheng.classList.remove('hidden');
    cheng.classList.add('flex');
    const recipeHTML = showRecipes();
    content.innerHTML+= recipeHTML;
});

albiena.addEventListener('click', function() {
    cheng.classList.remove('flex');
    cheng.classList.add('hidden');  
    const recipeHTML = showRecipes();
    content.innerHTML = recipeHTML;
});

indian.addEventListener('click', function() {
     cheng.classList.remove('hidden');
     cheng.classList.add('flex');
     
});


function showRecipes() {
    const recipes = [
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' }
    ];

    let recipeHTML = '<div class="recipe-list">';
    recipes.forEach(recipe => {
        recipeHTML += `
            <div class="recipe-item">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
            </div>
        `;
    });
    recipeHTML += '</div>';

    return recipeHTML;
}
