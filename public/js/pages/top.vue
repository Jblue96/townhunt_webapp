<template>
  <div class="page__top">
  main content
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'

export default {
    data() {
        return {
            items: []
        }
    },

    methods: {
        refresh() {
            $.ajax({
                type: "GET",
                url: "./api/v1/event/list",
                dataType: "json",
                cache: false,
                success: (res) => {
                    this.initialized = true
                },
                error: () => {
                    this.initialized = true
                }
            })
        }
    }
}
</script>