import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.json'
import fr from './fr.json'

Vue.use(VueI18n)

const defaultLanguage = localStorage.getItem('lang') ?? 'en'

const languages = {
    en: en,
    fr
}

const messages = Object.assign(languages)

const i18n = new VueI18n({
    locale: defaultLanguage,
    fallbackLocale: 'fr',
    messages 
})

export default i18n
