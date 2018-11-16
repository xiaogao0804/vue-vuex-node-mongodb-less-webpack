<template>
    <div>烘焙</div>
</template>

<script type=”text/javascript”>
export default {
    name: 'Baking',
    beforeRouteUpdate (to, from, next) {
        console.log('组件内路由守卫，组件被复用时调用')
    }
}
</script>