<template>
  <div id="app">
    {{ content }}
  </div>
</template>
<script>
// console.log('vue 1st!')
export default {
  name: 'App',
  data () {
    return {
      content: 'I am vue!!!sssssssssss'
    }
  },
  mounted () {
    console.log('moutedsssssssss')
  }
}
</script>
