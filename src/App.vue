<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {
            console.log(
                `
 (\"\\(●–●)
 \\ / O \\\\
  (     )\"
  \\__T__/
  你好，欢迎调试我的小站~
  源码可以在我的github上下载到哦~
  有兴趣可以一起交流QQ:936610950~
             `
            )
        },
    }
</script>

<style scoped>
</style>