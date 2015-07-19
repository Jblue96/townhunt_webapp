<template>
  <div class="page__top">
      <div>Welcome to Tokyo!</div>
      <div>
        <component-categories></component-categories>
        Categories
      </div>
      <div>
          <select>
            <option value="popular">Popular</option>
            <option value="price">Price</option>
            <option value="time">Limited Time Offer</option>
          </select>
      </div>
      <div>
        <component-card v-repeat="items"></component-card>
      </div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import componentCategories from '../components/categories.vue'
import componentCard from '../components/card.vue'


export default {
    data() {
        return {
            items: []
        }
    },

    components: {
        'component-categories': componentCategories,
        'component-card': componentCard,
    },

    created() {
      this.refresh()
    },

    methods: {
        refresh() {
            $.ajax({
                type: "GET",
                url: "./api/v1/event/list",
                dataType: "json",
                cache: false,
                success: (items) => {
                    this.items = items
                },
                error: () => {
                }
            })
        }
    }
}
</script>