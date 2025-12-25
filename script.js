// Для макро-данных
let macroTotals = { protein:0, fat:0, carbs:0 };

// Переходы между экранами
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// Переход на Home с загрузкой данных
function goToHome() {
  goTo('home');
  loadHomeContent();
}

// Цитаты дня
const dailyQuotes = [
  "Ты не слабая — ты человек, и это нормально.",
  "Можно хотеть сладкого, и это не делает тебя плохой.",
  "Сегодня можно быть собой без идеала.",
  "Ты уже крута просто за то, что заботишься о себе."
];
function getDailyQuote() {
  const day = new Date().getDate();
  return dailyQuotes[(day-1) % dailyQuotes.length];
}

// Рецепты
const allRecipes = [
  { name: "Овсянка с фруктами", img: "https://i.ibb.co/4V4hH1N/oatmeal-fruits.jpg", free: true },
  { name: "Смузи с бананом и шпинатом", img: "https://i.ibb.co/6D9gYjK/smoothie-banana.jpg", free: true },
  { name: "Салат с киноа и овощами", img: "https://i.ibb.co/BrKsm3T/quinoa-salad.jpg", free: false },
  { name: "Тост с авокадо", img: "https://i.ibb.co/N7gZP9R/avocado-toast.jpg", free: false }
];

// Показ рецептов
function showRecipes() {
  const recipeDiv = document.getElementById("recipeList");
  recipeDiv.innerHTML = '';
  
  allRecipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-item';
    card.innerHTML = `<img src="${recipe.img}" alt="${recipe.name}"><p>${recipe.name}</p>`;
    
    if(!recipe.free) {
      card.style.opacity = '0.5';
      card.onclick = () => alert("Этот рецепт доступен только по подписке");
    }
    recipeDiv.appendChild(card);
  });
}

// Добавление еды
function addFoodEntry() {
  const name = document.getElementById('foodName').value;
  const grams = parseInt(document.getElementById('foodGrams').value);
  if(!name || !grams) return;

  // Пример расчета БЖУ: 1 г белка, 0.5 г жира, 2 г углеводов на 100 г (для примера)
  macroTotals.protein += grams * 0.01;
  macroTotals.fat += grams * 0.005;
  macroTotals.carbs += grams * 0.02;

  updateChart();
}

// Диаграмма макроэлементов
let chart;
function updateChart() {
  const ctx = document.getElementById('macroChart').getContext('2d');
  if(chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Белки', 'Жиры', 'Углеводы'],
      datasets: [{
        data: [macroTotals.protein, macroTotals.fat, macroTotals.carbs],
        backgroundColor: ['#FFB74D','#81C784','#64B5F6']
      }]
    },
    options: { responsive: false, plugins: { legend: { position: 'bottom' } } }
  });
}

// Загрузка контента Home
function loadHomeContent() {
  document.getElementById('dailyQuote').innerText = getDailyQuote();
  showRecipes();
}

// Welcome анимация текста
const welcomeLines = ["Ты здесь.","Можно выдохнуть.","Здесь не нужно быть правильной.","Можно просто есть."];
let lineIndex = 0;
function showWelcomeText() {
  if(lineIndex < welcomeLines.length) {
    const div = document.getElementById("welcomeText");
    div.innerHTML += welcomeLines[lineIndex]+"<br>";
    lineIndex++;
    setTimeout(showWelcomeText, 800);
  } else {
    document.getElementById("startBtn").style.display = "inline-block";
  }
}
showWelcomeText();


