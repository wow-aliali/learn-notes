<template>
    <div>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'aliali',
        data (){
            return {
                msg: '这是阿狸阿里的页面!'
            }
        }
    }
</script>

<style scoped>
    h2 {
        color:mediumvioletred;
    }
</style>
