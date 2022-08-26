const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api

const token = ''; // тут токен кторый мы получили от botFather

// включаем самого обота
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendPhoto(chatId, 'keks.png');
});
