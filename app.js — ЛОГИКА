const tg = window.Telegram.WebApp;
tg.expand();

const messages = [
  "Ты не переела. Ты устала.",
  "Контроль — это забота.",
  "Тело не нужно чинить.",
  "Сегодня можно мягко.",
  "Ты ничего не испортила."
];

function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function saveProfile() {
  const profile = {
    age: age.value,
    height: height.value,
    weight: weight.value
  };
  localStorage.setItem('profile', JSON.stringify(profile));
  goTo('home');
}

function addFood() {
  const food = foodInput.value;
  if (!food) return;

  const foods = JSON.parse(localStorage.getItem('foods') || '[]');
  foods.push({ text: food, date: new Date() });
  localStorage.setItem('foods', JSON.stringify(foods));

  foodInput.value = "";
  alert("Ты ничего не испортила.");
  goTo('home');
}

function showMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('dailyMessage').innerText = msg;
}

document.getElementById('message').addEventListener('click', showMessage);
