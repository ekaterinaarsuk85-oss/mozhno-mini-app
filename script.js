// Счётчики действий
let addFoodCount = 0;
let readMessageCount = 0;
let visitsCount = 0;

// Переход между экранами
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');

  if(screenId === 'home') {
    document.getElementById("dailyQuote").innerText = getDailyQuote();
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

// Кнопка "Остаться" (пока заглушка)
function showPayment() {
  alert("Здесь будет подключена оплата в рублях через ЮKassa");
}

// Сообщения дня
const dailyQuotes = [
  "Ты не слабая — ты человек, и это нормально.",
  "Можно хотеть сладкого, и это не делает тебя плохой.",
  "Прислушайся к телу — оно знает больше, чем разум.",
  "Сегодня можно быть собой без идеала.",
  "Ты уже крута просто за то, что заботишься о себе.",
  "Иногда отдых важнее, чем ещё одно достижение.",
  "Ты сильнее, чем думаешь, и мягче, чем кажешься."
];

function getDailyQuote() {
  const day = new Date().getDate();
  return dailyQuotes[day % dailyQuotes.length];
}

// Анимация текста на welcome (строка за строкой)
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


