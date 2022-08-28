const loadMealsBd = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsBd(data.meals))
}
const displayMealsBd = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal)
        const mealsDiv = document.createElement('div');
        mealsDiv.classList.add('col')
        mealsDiv.innerHTML = `
        <div onclick='displayMealDetail(${meal.idMeal})' class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}...</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealsDiv)
    })
}
const searchFood = () => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.innerHTML = '';
    const searchField = document.getElementById('search-field');
    const searchTextString = searchField.value;
    const searchText = searchTextString.toLowerCase();
    loadMealsBd(searchText);
    searchField.value = '';
}
 const displayMealDetail = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => DisplayEveryMeal(data.meals[0]))
 }
const DisplayEveryMeal = meal =>{
    // console.log(meal)
    const mealDetails = document.getElementById('meal-details');
    mealDetails.innerHTML = '';
    const mealDetailsDiv = document.createElement('div');
    mealDetailsDiv.classList.add('card');
    mealDetailsDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions}</p>
        </div>
    `;
    mealDetails.appendChild(mealDetailsDiv)
}

loadMealsBd("")