const { Composer, Markup } = require('telegraf');
const composer = new Composer();

// Старт
composer.start((ctx) => {
  ctx.reply(ctx.i18n.t('start', { ctx }));
});

// Помощь
composer.help(async (ctx) => {
  try {
    await ctx.replyWithHTML(ctx.i18n.t('command'));
  } catch (e) {
    console.error('error in Help command', e);
  }
});

module.exports = composer;
