<template>
  <div class="page__mypage">
      <h2>My Page</h2>
  </div>
</template>

<script lang="babel">

export default {
    data() {
        return {
        }
    },

    components: {
    },

    created() {
      this.refresh()
    },

    methods: {
        refresh() {
            // TODO: ajax?
        }
    }
}
</script>