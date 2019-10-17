<template>
  <div>
  {{content}}
  </div>
</template>
<script>
console.log('vue 1st!')
export default {
  name: 'App',
  data (){
    return {
      content: 'I am vue!!!'
    }
  },
  mounted() {
    console.log('mouted')
  },
}
</script>
