
// Макро данные
let macroTotals = { protein:0, fat:0, carbs:0 };
let chart;

// Переход между экранами
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// Переход на Home с загрузкой контента
function goToHome() {
  goTo('home');
  loadHomeContent();
}

// 30 цитат на 30 дней
const dailyQuotes = [
  "Ты не слабая — ты человек, и это нормально.",
  "Можно хотеть сладкого, и это не делает тебя плохой.",
  "Сегодня можно быть собой без идеала.",
  "Ты уже крута просто за то, что заботишься о себе.",
  "Сделай шаг навстречу себе.",
  "Тело твоё — друг, не враг.",
  "Каждый день можно начать с заботы о себе.",
  "Ты заслуживаешь удовольствия и питания.",
  "Любовь к себе — это путь, а не пункт назначения.",
  "Позволь себе отдыхать.",
  "Можно есть и наслаждаться.",
  "Твои ощущения важны.",
  "Маленький прогресс — тоже прогресс.",
  "Не сравнивай себя с другими.",
  "Ты уже достаточно.",
  "Позволь себе радоваться.",
  "Слушай своё тело.",
  "Сегодня можно быть мягкой.",
  "Ты ценна просто так.",
  "Не критикуй себя слишком строго.",
  "Дыши глубоко.",
  "Еда — это топливо, а не наказание.",
  "Будь с собой в мире.",
  "Наблюдай, но не осуждай.",
  "Можно позволить себе шоколад.",
  "Тело помнит заботу.",
  "Каждый день — новый шанс.",
  "Ты делаешь всё хорошо.",
  "Сегодня можно улыбнуться себе.",
  "Ты способна на большее, чем думаешь."
];

function getDailyQuote() {
  const day = new Date().getDate();
  return dailyQuotes[(day-1) % dailyQuotes.length];
}

// 30 рецептов (2 бесплатных)
const allRecipes = [
  { name: "Овсянка с фруктами", img: "https://i.ibb.co/4V4hH1N/oatmeal-fruits.jpg", free: true },
  { name: "Смузи с бананом и шпинатом", img: "https://i.ibb.co/6D9gYjK/smoothie-banana.jpg", free: true },
  { name: "Салат с киноа и овощами", img: "https://i.ibb.co/BrKsm3T/quinoa-salad.jpg", free: false },
  { name: "Тост с авокадо", img: "https://i.ibb.co/N7gZP9R/avocado-toast.jpg", free: false },
  { name: "Запечённая курица с овощами", img: "https://i.ibb.co/dD4Tj1h/chicken-veggies.jpg", free: false },
  { name: "Паста с томатами и базиликом", img: "https://i.ibb.co/1XzF0mR/pasta.jpg", free: false },
  { name: "Йогурт с ягодами", img: "https://i.ibb.co/yfzq6sF/yogurt-berries.jpg", free: false },
  { name: "Фриттата с овощами", img: "https://i.ibb.co/3yB0nxD/frittata.jpg", free: false }
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

  macroTotals.protein += grams * 0.01;
  macroTotals.fat += grams * 0.005;
  macroTotals.carbs += grams * 0.02;

  updateChart();
}

// Диаграмма макроэлементов
function updateChart() {
  const ctx = document.getElementById('macroChart').getContext('2d');
  if(chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Белки','Жиры','Углеводы'],
      datasets: [{
        data: [macroTotals.protein, macroTotals.fat, macroTotals.carbs],
        backgroundColor: ['#FFB74D','#81C784','#64B5F6']
      }]
    },
    options: { responsive: false, plugins: { legend: { position: 'bottom' } } }
  });
}

// Загрузка контента на Home
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

// Кнопка подписки с выбором тарифа
function subscribe(type) {
  if(type === 'month') {
    alert("Вы выбрали Месячную подписку (₽499). После одобрения ЮKassa будет доступна реальная оплата и все рецепты.");
  } else if(type === 'year') {
    alert("Вы выбрали Годовую подписку (₽4990). После одобрения ЮKassa будет доступна реальная оплата и все рецепты.");
  }
}

// Запуск анимации после загрузки DOM
window.onload = function() {
  showWelcomeText();
}

