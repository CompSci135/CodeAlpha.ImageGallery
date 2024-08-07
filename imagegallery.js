function showRecipe(imageSrc) {
    document.getElementById('recipeImage').src = imageSrc;
    document.getElementById('overlay').style.display = 'flex';
}

function hideRecipe() {
    document.getElementById('overlay').style.display = 'none';
}