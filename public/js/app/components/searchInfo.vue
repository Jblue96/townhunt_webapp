<template>
  <div class="component__searchInfo" v-on="click: onClick">
      Search Conditions
  </div>
</template>

<script lang="babel">
export default {
  data() {
    return {
    }
  },

  methods: {
    onClick() {
        location.href = '#/queries'
    }
  }
}
</script>