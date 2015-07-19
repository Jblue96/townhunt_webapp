<template>
  <div class="drawer">
    <content></content>
    <div class="closeWrap">
      <a href="javascript:;" v-on="click: close()" class="close" title="Close"></a>
    </div>
  </div>
</template>

<script lang="babel">
export default {
  data() {
    return {
    }
  },

  methods: {
    close() {
      this.$dispatch("onDrawerClose")
    }
  }
}
</script>