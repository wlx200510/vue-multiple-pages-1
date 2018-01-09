<template>
  <div>
      <p>{{title}}</p>
      <p>{{message}}</p>
  </div>
</template>

<script>
export default {
    name: 'notFound',
    data(){
        return {
            title: 'ERROR!',
            message: ''
        }
    },
    mounted: function() {
        this.message = '404 Not Found!'
    }
}
</script>