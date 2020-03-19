<template>
    <div class="hello">
        <div>
            hello {{name}}
        </div>
        <div>
            count: {{count}} - double: {{double}}
        </div>  
        <div>
            <button @click="increment">+1</button>
            <button @click="doubleIncrement">+2</button>

        </div>
    </div>
</template>

<script>
export default {
    name: 'test',
    props: {
        name: {
            default: "",
            type: String
        },
        isCool: {
            default: true,
            type: Boolean
        }
    },
    data() {
        return {
            count: 0
        }
    },
    computed: {
        double() {
            return this.count * 2
        }
    },
    mounted() {
        console.log('hello')
    },
    watch: {
        count(ov,nv) {
            console.log(ov,nv)
        }
    },
    methods: {
        increment() {
            this.count++
            this.$emit('plus', this.count)
        },
        doubleIncrement() {
            this.increment() 
            this.increment()
        }
    }
}
</script>

<style langue="sccs" scoped>
.hello{
    color: blue;
}
</style>