const { Composer, Markup } = require('telegraf');
const composer = new Composer();

composer.command('course', async (ctx) => {
  try {
    await ctx.replyWithHTML(
      ctx.i18n.t('summary'), //TODO counter with storage of learners
      Markup.inlineKeyboard([
        [Markup.button.callback('Easy', 'category1_btn11')],
        [Markup.button.callback('Medium', 'category1_btn4')],
        [Markup.button.callback('Hard', 'category1_btn5')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

composer.action('category1_btn4', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('tarif1'),
      Markup.inlineKeyboard([
        [Markup.button.callback('Способы оплаты', 'category1_btn6')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

composer.action('category1_btn5', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('tarif2'), //TODO counter with storage of learners
      Markup.inlineKeyboard([
        [Markup.button.callback('Способы оплаты', 'category1_btn7')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

composer.action('category1_btn11', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('tarif3'),
      Markup.inlineKeyboard([
        [Markup.button.callback('Способы оплаты', 'category1_btn12')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

composer.action('category1_btn6', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('sposobioplati'),
      Markup.inlineKeyboard([
        [Markup.button.callback('Иностранная карта 165$', 'category1_btn8')],
        [
          Markup.button.callback(
            'Российская карта 10000 рублей',
            'category1_btn9'
          ),
        ],
        [Markup.button.callback('Криптовалюта 165USDT', 'category1_btn10')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

composer.action('category1_btn7', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('sposobioplati'),
      Markup.inlineKeyboard([
        [Markup.button.callback('Иностранная карта 230$', 'category1_btn8')],
        [
          Markup.button.callback(
            'Российская карта 14000 рублей',
            'category1_btn9'
          ),
        ],
        [Markup.button.callback('Криптовалюта 230USDT', 'category1_btn10')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

composer.action('category1_btn12', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('sposobioplati'),
      Markup.inlineKeyboard([
        [Markup.button.callback('Иностранная карта 100$', 'category1_btn8')],
        [
          Markup.button.callback(
            'Российская карта 6000 рублей',
            'category1_btn9'
          ),
        ],
        [Markup.button.callback('Криптовалюта 100USDT', 'category1_btn10')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

composer.action('category1_btn8', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('ino_karta'),
      Markup.inlineKeyboard([
        [Markup.button.url('Отправить скрин чека ', 'https://t.me/liinature')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

composer.action('category1_btn9', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('rus_karta'),
      Markup.inlineKeyboard([
        [Markup.button.url('Отправить скрин чека ', 'https://t.me/liinature')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

composer.action('category1_btn10', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('crypto'),
      Markup.inlineKeyboard([
        [Markup.button.url('Отправить скрин чека ', 'https://t.me/liinature')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

module.exports = composer;
