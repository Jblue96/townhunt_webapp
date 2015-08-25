<template>
    <a v-on="click: onClickItem" href="javascript:;" class="component__card">
        <div class="card_bg" v-style="background-image: 'url(' + dislayImageUrl + ')'">
            <div class="card_wrap">
                <div class="card_main">
                    <div class="card_middle">
                        <div class="card_title">{{name}}</div>
                        <div class="card_categories">
                            <span>{{shop.category}}</span>
                        </div>
                        <div class="card_area">{{city}}</div>
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
import filter from '../filters/filter'

export default {
  data() {
    return {}
  },

  computed: {
    dislayImageUrl() {
        return filter.dislayImageUrl(this)
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