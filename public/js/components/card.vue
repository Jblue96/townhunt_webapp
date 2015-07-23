<template>
    <a v-attr="href: '#/detail/' + id" class="component__card">
        <div class="card_bg" v-style="background-image: 'url(' + imageUrl + ')'">
            <div class="card_wrap">
                <div class="card_main">
                    <div class="card_middle">
                        <div class="card_title">{{title}}</div>
                        <div class="card_categories">
                            <span v-repeat="cat : categories">{{cat}}</span>
                        </div>
                        <div class="card_area">{{location.area}}</div>
                    </div>
                    <div class="card_right">
                        <div class="card_favorite">Fav</div>
                        <div class="card_price">{{price}}</div>
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>

<script lang="babel">
export default {
  data() {
    return {
        id: '',
        title: '',
        description: '',
        location: {
            name: "",
            area: "",
            address: ""
        },
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