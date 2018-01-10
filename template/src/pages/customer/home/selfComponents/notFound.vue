<template>
  <div>
      <p>ERROR!</p>
      <p>404 Not Found!</p>
  </div>
</template>

<script>
export default {
    name: 'notFound',
    data(){
        return {
            message: ''
        }
    },
    mounted: function() {
        this.message = '404 Not Found!'
    }
}
</script>