// Счётчики действий
let addFoodCount = 0;
let readMessageCount = 0;
let visitsCount = 0;

// Переход между экранами
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');

  if(screenId === 'home') {
    loadHomeContent();
  }
}

// Добавление еды
function addFood() {
  addFoodCount++;
  checkPaywall();
}

// Добавление заметки
function addNote() {
  alert("Здесь можно записать свои ощущения (потом подключим хранение)");
}

// Чтение сообщения дня
function readMessage() {
  readMessageCount++;
  checkPaywall();
}

// Счётчик посещений
function visit() {
  visitsCount++;
  checkPaywall();
}

// Проверка paywall
function checkPaywall() {
  let conditions = 0;
  if(addFoodCount >= 2) conditions++;
  if(readMessageCount >= 2) conditions++;
  if(visitsCount >= 3) conditions++;

  if(conditions >= 2) {
    document.getElementById('paywall').style.display = 'block';
  }
}

// Кнопка "Остаться" (заглушка)
function showPayment() {
  alert("Все рецепты доступны только по подписке. Подключение оплаты будет позже.");
}

// Цитаты на 30 дней
const dailyQuotes = [
  "Ты не слабая — ты человек, и это нормально.",
  "Можно хотеть сладкого, и это не делает тебя плохой.",
  "Прислушайся к телу — оно знает больше, чем разум.",
  "Сегодня можно быть собой без идеала.",
  "Ты уже крута просто за то, что заботишься о себе.",
  "Иногда отдых важнее, чем ещё одно достижение.",
  "Ты сильнее, чем думаешь, и мягче, чем кажешься.",
  "Можно позволить себе радость без чувства вины.",
  "Слушай свои ощущения — это твой внутренний компас.",
  "Ты создаёшь свой день своими решениями.",
  "Каждый маленький шаг имеет значение.",
  "Любовь к себе начинается с простых действий.",
  "Не нужно быть идеальной, чтобы быть счастливой.",
  "Твоя сила в мягкости и внимании к себе.",
  "Сегодня можно просто дышать и быть здесь.",
  "Ты заслуживаешь заботу о себе без условий.",
  "Каждый день — новый шанс почувствовать радость.",
  "Позволь себе быть настоящей, даже если это трудно.",
  "Ты уже успешна, потому что заботишься о себе.",
  "Мягкость — это тоже сила.",
  "Сегодня можно отпустить все требования.",
  "Ты лучше всего знаешь, что тебе нужно.",
  "Маленькие радости складываются в большое счастье.",
  "Ты достаточно, чтобы быть любимой.",
  "Слушай себя, а не чужие ожидания.",
  "Тело помнит заботу, а не лишения.",
  "Сегодня ты можешь просто быть.",
  "Ты заслуживаешь хорошее отношение к себе.",
  "Любая забота о себе — это победа.",
  "Ты уже на верном пути, потому что заботишься о себе."
];

function getDailyQuote() {
  const day = new Date().getDate(); 
  return dailyQuotes[(day-1) % dailyQuotes.length];
}

// Бесплатные рецепты с картинками
const freeRecipes = [
  { name: "Овсянка с фруктами", img: "https://i.ibb.co/4V4hH1N/oatmeal-fruits.jpg" },
  { name: "Смузи с бананом и шпинатом", img: "https://i.ibb.co/6D9gYjK/smoothie-banana.jpg" },
  { name: "Йогурт с ягодами", img: "https://i.ibb.co/3fG9pPZ/yogurt-berries.jpg" },
  { name: "Салат с киноа и овощами", img: "https://i.ibb.co/BrKsm3T/quinoa-salad.jpg" },
  { name: "Тост с авокадо", img: "https://i.ibb.co/N7gZP9R/avocado-toast.jpg" },
  { name: "Каша гречневая с орехами", img: "https://i.ibb.co/Fm31yC9/grechka.jpg" },
  { name: "Омлет с овощами", img: "https://i.ibb.co/khL4Z1V/omelet.jpg" },
  { name: "Творожная запеканка", img: "https://i.ibb.co/7K1KdkT/cottage-cheese.jpg" },
  { name: "Фруктовый салат", img: "https://i.ibb.co/mzL9XbY/fruit-salad.jpg" },
  { name: "Сэндвич с индейкой и овощами", img: "https://i.ibb.co/xs0hB9v/sandwich.jpg" }
];

// Показ ежедневного рецепта
function showDailyRecipe() {
  const day = new Date().getDate();
  const recipeToday = freeRecipes[(day-1) % freeRecipes.length];
  const recipeDiv = document.getElementById("recipeList");
  
  recipeDiv.innerHTML = `
    <div class="recipe-item">
      <img src="${recipeToday.img}" alt="${recipeToday.name}">
      <p>${recipeToday.name}</p>
    </div>
  `;
}

// Заглушка для всех рецептов (подписка)
function showAllRecipes() {
  alert("Все рецепты доступны только по подписке");
}

// Загрузка Home
function loadHomeContent() {
  document.getElementById("dailyQuote").innerText = getDailyQuote();
  showDailyRecipe();
}

// Анимация текста на Welcome
const welcomeLines = [
  "Ты здесь.",
  "Можно выдохнуть.",
  "Здесь не нужно быть правильной.",
  "Можно просто есть."
];

let lineIndex = 0;
function showWelcomeText() {
  if(lineIndex < welcomeLines.length) {
    const div = document.getElementById("welcomeText");
    div.innerHTML += welcomeLines[lineIndex] + "<br>";
    lineIndex++;
    setTimeout(showWelcomeText, 800);
  } else {
    document.getElementById("startBtn").style.display = "inline-block";
  }
}

showWelcomeText();


