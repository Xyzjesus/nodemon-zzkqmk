const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const lib = require('../lib');

// Обработка кнопок из категории Редакторы кода
composer.action('btn_category1', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('dlya_kogo'),
      Markup.inlineKeyboard([
        [Markup.button.callback('Программа', 'category1_btn1')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

composer.action('category1_btn1', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('programma'),
      Markup.inlineKeyboard([
        [Markup.button.callback('Какие тарифы', 'category1_btn2')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

composer.action('category1_btn2', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('tarify'),
      Markup.inlineKeyboard([
        [Markup.button.callback('Сколько мест осталось?', 'category1_btn3')],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

composer.action('category1_btn3', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('storage'), //TODO counter with storage of learners
      Markup.inlineKeyboard([
        [Markup.button.callback('Тариф 1', 'category1_btn4')],
        [Markup.button.callback('Тариф 2', 'category1_btn5')],
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

composer.action('category1_btn6', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t('sposobioplati'),
      Markup.inlineKeyboard([
        [Markup.button.callback('Ино карта', 'category1_btn8')],
        [Markup.button.callback('Рос карта', 'category1_btn9')],
        [Markup.button.callback('Крипта', 'category1_btn10')],
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
        [Markup.button.callback('Ино карта', 'category1_btn8')],
        [Markup.button.callback('Рос карта', 'category1_btn9')],
        [Markup.button.callback('Крипта', 'category1_btn10')],
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
