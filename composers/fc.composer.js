const { Composer, Markup } = require('telegraf');
const composer = new Composer();

// Команда /y_course - Бесплатные курсы
composer.command('course', async (ctx) => {
  try {
    await ctx.replyWithHTML(
      '<b>Интенсив по постерам от @liinature</b>',
      Markup.inlineKeyboard([
        [Markup.button.callback('Кому подойдет', 'btn_category1')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

module.exports = composer;
