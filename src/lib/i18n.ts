import { init, addMessages } from 'svelte-i18n'
// import { writable } from "svelte/store"
import en from './locales/en.json'
import ar from './locales/ar.json'


export function initTrans() {
    addMessages('en', en)
    addMessages('ar', ar)


    init({
        fallbackLocale: 'en',
        initialLocale: "ar"
    })

}




