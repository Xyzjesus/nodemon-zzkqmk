const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api

const token = ''; // тут токен кторый мы получили от botFather

// включаем самого обота
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'привет, друг! это курс по постерам от @liinature. ');
  bot.sendPhoto(
    chatId,
    'https://i.pinimg.com/564x/6f/4e/ff/6f4effe865b2b13653047f84bebcc35a.jpg'
  );
  // Конфиг клавиатуры
  const keyboard = [
    [
      {
        text: 'Кому подойдет', // текст на кнопке
        callback_data: 'moreKeks', // данные для обработчика событий
      },
    ],
  ];
});
