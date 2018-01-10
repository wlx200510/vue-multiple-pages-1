<template>
  <div id="app">
    <el-button @click.native="startHacking">Let's do it</el-button>
    {{#router}}
    <router-view/>
    {{else}}
    <div class="dd">
      Home
    </div>
    <img v-bind:src="logoImg">
    <h1>{{ msg }}</h1>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import logo from 'assets/img/logo.png'

{{/unless}}
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'{{#unless router}},
      logoImg: logo
      {{/unless}} 
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style lang="postcss">
  body {
    background-color: #f5f5f5;
  }
  :root h1 {
   --color: red;
   display: flex;
   color: var(--color);
  }
</style>
