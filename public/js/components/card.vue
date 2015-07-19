<template>
    <div class="card_wrap">
        <div>
            <img v-attr="src: imageUrl">
        </div>
        <div>
            <div class="card_title">{{title}}</div>
            <div class="card_categories">
                <span v-repeat="cat : categories">{{cat}}</span>
            </div>
            <div class="card_place">{{place}}</div>
        </div>
        <div>
            <div class="card_price">{{price}}</div>
        </div>
    </div>
</template>

<script lang="babel">
export default {
  data() {
    return {
        title: '',
        description: '',
        place: '',
        categories: [],
        imageUrl: '',
        price: "",
        favorited: false
    }
  },

  methods: {
  }
}
</script>