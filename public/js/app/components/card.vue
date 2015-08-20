<template>
    <a v-on="click: onClickItem" href="javascript:;" class="component__card">
        <div class="card_bg" v-style="background-image: 'url(' + dislayImageUrl + ')'">
            <div class="card_wrap">
                <div class="card_main">
                    <div class="card_middle">
                        <div class="card_title">{{name}}</div>
                        <div class="card_categories">
                            <span>{{type | type}}</span>
                        </div>
                        <div class="card_area">{{address.city}}</div>
                    </div>
                    <div class="card_right">
                        <div class="card_favorite" v-class="icon_favorite: favorited, icon_favorite_blank: !favorited" v-on="click: favorite"></div>
                        <div class="card_price">{{price | price}}</div>
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
        objectId: '',
        name: '',
        description: '',
        address: {
            city: '',
            country: '',
            line1: '',
            line2: '',
            region: '',
            state: '',
            zip: ''
        },
        type: '',
        defaultImageIndex: null,
        images: [],
        price: {
            amount: 0,
            currency: '',
            unit: ''
        },
        reservationDetails: '',
        reservationPhone: '',
        reservationUrl: '',
        favorited: false
    }
  },

  computed: {
    dislayImageUrl() {
        var image = this.images.length && this.images[this.defaultImageIndex || 0]
        return (image && image.url) || '/img/no_image.png'
    }
  },

  methods: {
    onClickItem() {
        this.$dispatch('onSelectCard', this.objectId)
    },

    favorite(e){
        // TODO
        var favorited = this.favorited
        if(favorited) {
            // send unfav
        } else {
            // send fav
        }
        e.stopPropagation()
        return false
    }
  }
}
</script>