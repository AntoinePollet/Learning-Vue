<template>
    <div>
        <div>
            <router-link :to="{name: 'home'}">Vers home</router-link>
        </div>
        {{$t('hello')}} {{classRPG.name}}
    </div>
</template>

<script>
export default {
    name: 'class',
    data() {
        return {
            classRPG: {
                name: ''
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.classRPG.name = vm.$route.params.className
        }) 
    }
}

</script>

<style langue="scss" scoped>

</style>
