const container = document.querySelector('.container'); 
const search = document.querySelector('input[type="search"]');
let allrecipe;

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
  .then((res) => res.json())
  .then((data) => {
    allrecipe = data.meals; 
    getFood(allrecipe); 
  });

function getFood(data) {
  container.innerHTML = ''; 

  if (data && data.length > 0) {
    data.forEach((meal) => {
      let card = document.createElement('div');
      card.classList.add('card');

      let myData = `
        <a href="fooddetails.html?id=${meal.idMeal}" class="meal-link">
          <div class="img-main">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          </div>
          <div class="content">
            <h2><b>Food Name:</b> ${meal.strMeal}</h2>
            <p><b>Food Area:</b> ${meal.strArea}</p>
            <p><b>Food Category:</b> ${meal.strCategory}</p>
            <ul class="c-ul">
              <li><b>Ingredient1:</b> ${meal.strIngredient1}</li>
              <li><b>Ingredient2:</b> ${meal.strIngredient2}</li>
              <li><b>Ingredient3:</b> ${meal.strIngredient3}</li>
              <li><b>Ingredient4:</b> ${meal.strIngredient4}</li>
              <li><b>Ingredient5:</b> ${meal.strIngredient5}</li>
            </ul>
          </div>
        </a>`;

      card.innerHTML = myData;
      container.appendChild(card);
    });
  } else {
    container.innerHTML = '<p>No meals found</p>'; 
  }
}

// Search Functionality:
if (search) {
  search.addEventListener("input", (evt) => {
    const searchText = evt.target.value.toLowerCase();
   
    const filteredMeals = allrecipe.filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchText)
    );
    getFood(filteredMeals); 
  });
}
