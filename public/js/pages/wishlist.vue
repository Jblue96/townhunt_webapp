<template>
  <div class="page__wishlist">
      <h2>Wish List</h2>
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