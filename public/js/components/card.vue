<template>
    <a v-on="click: onClickItem" href="javascript:;" class="component__card">
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
                        <div class="card_favorite" v-class="icon_favorite: favorited, icon_favorite_blank: !favorited" v-on="click: favorite"></div>
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
    onClickItem() {
        this.$dispatch('onSelectCard', this.id)
    },

    favorite(){
        alert("fav")
        // TODO
        var favorited = this.favorited
        if(favorited) {
            // send unfav
        } else {
            // send fav
        }
    }
  }
}
</script>