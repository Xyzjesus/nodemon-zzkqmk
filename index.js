const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api

const token = '5530408809:AAHnTHfO3w6FcH_8HoVhH8JJPAOpP25vPgs'; // тут токен кторый мы получили от botFather

// включаем самого обота
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendPhoto(chatId, 'keks.png');
});
