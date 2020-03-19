<template>
    <div>
        <div>
            <router-link :to="{ name: 'class', params: { className: 'barbare' } }">Vers class </router-link>
        </div>
        <input v-model="name" type="text"/>
        <test :name="name" :is-cool="false" @plus="log" />
        <div>
            <select v-model="$i18n.locale" @input="setLang">
                <option v-for="(language, index) in locales" :key="index" :value="language">{{ $t(`locales.${language}`) }}</option>
            </select>
        </div>
    </div>
</template>

<script>
import test from './test.vue'
export default {
    name: 'testLayout',
    components: { test },
    data() {
        return {
            name: '',
            locales: [
                'en', 'fr'
            ]
        }
    },
    methods: {
        log(count) {
            console.log('increment ', count)
        },
        setLang(e) {
            localStorage.setItem('lang', e.target.value)
        }
    }
}

</script>

<style langue="scss" scoped>

</style>
