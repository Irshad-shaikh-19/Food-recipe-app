
// Function to get query parameter (meal ID)
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Fetch meal details using the meal ID
const mealId = getQueryParam('id');
if (mealId) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(response => response.json())
    .then(data => {
      const meal = data.meals[0];
      displayMealDetails(meal);
    });
}

// Function to display meal details
function displayMealDetails(meal) {
  const mealImageSection = document.getElementById('meal-image');
  const mealContentSection = document.getElementById('meal-content');

  let imageHTML = `<img src="${meal.strMealThumb}" alt="${meal.strMeal}">`;

  let contentHTML = `
    <h1>${meal.strMeal}</h1>
    <p><strong>Category:</strong> ${meal.strCategory}</p>
    <p><strong>Area:</strong> ${meal.strArea}</p>
    <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
    <h3>Ingredients:</h3>
    <ul class="ingredients-list">
      ${meal.strIngredient1 ? `<li>${meal.strIngredient1} - ${meal.strMeasure1}</li>` : ''}
      ${meal.strIngredient2 ? `<li>${meal.strIngredient2} - ${meal.strMeasure2}</li>` : ''}
      ${meal.strIngredient3 ? `<li>${meal.strIngredient3} - ${meal.strMeasure3}</li>` : ''}
      ${meal.strIngredient4 ? `<li>${meal.strIngredient4} - ${meal.strMeasure4}</li>` : ''}
      ${meal.strIngredient5 ? `<li>${meal.strIngredient5} - ${meal.strMeasure5}</li>` : ''}
      <!-- Add more ingredients as needed -->
    </ul>`;

  mealImageSection.innerHTML = imageHTML;
  mealContentSection.innerHTML = contentHTML;
}
