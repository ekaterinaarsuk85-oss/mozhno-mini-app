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

// Кнопка "Остаться"
function showPayment() {
  alert("Здесь будет подключена оплата в рублях через ЮKassa");
}

// Сообщения дня
const dailyQuotes = [
  "Ты здесь. Можно выдохнуть...",
  "Еда — не враг...",
  "Прислушайся к телу...",
  "Можно хотеть сладкого...",
  "Ты не слабая...",
  "Некоторые места становятся важными...",
  "Если тебе здесь хорошо — это уже причина остаться..."
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

