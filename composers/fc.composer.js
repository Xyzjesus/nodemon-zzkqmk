const { Composer, Markup } = require('telegraf');
const composer = new Composer();

// Команда /y_course - Бесплатные курсы
composer.command('course', async (ctx) => {
  try {
    await ctx.replyWithHTML(ctx.i18n.t('letsstart'));
    await ctx.replyWithHTML(
      ctx.i18n.t('summary'),
      Markup.inlineKeyboard([
        [Markup.button.callback('Кому подойдет', 'btn_category1')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

module.exports = composer;
