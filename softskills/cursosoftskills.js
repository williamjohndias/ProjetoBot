const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')


const dias = require('./dia1.js');

// ------------------
// curso soft skills
// ------------------


const cursoSoftskills = new WizardScene('cursoSoftskills',
  ctx => {
    ctx.reply(`Vamos comeΓ§ar por qual dia?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('π Dia 1', 'dia1'),
        Markup.callbackButton('π Dia 6', 'verificadia'),
        Markup.callbackButton('π Dia 2', 'verificadia'),
        Markup.callbackButton('π Dia 7', 'verificadia'),
        Markup.callbackButton('π Dia 3', 'verificadia'),
        Markup.callbackButton('π Dia 8', 'verificadia'),
        Markup.callbackButton('π Dia 4', 'verificadia'),
        Markup.callbackButton('π Dia 9', 'verificadia'),
        Markup.callbackButton('π Dia 5', 'verificadia'),
        Markup.callbackButton('π Dia 10', 'verificadia'),
        Markup.callbackButton('β Sair', 'sair'),
      ], {
        columns: 2
      })))
       ctx.wizard.next()
  },
  dias 
)




module.exports = cursoSoftskills
