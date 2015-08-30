<template>
    <a v-on="click: onClickItem" href="javascript:;" class="component__card">
        <div class="card_bg" v-style="background-image: 'url(' + dislayImageUrl + ')'">
            <div class="card_wrap">
                <div class="card_main">
                    <div class="card_middle">
                        <div class="card_title">{{name}}</div>
                        <div class="card_categories">
                            <span>{{shop.category | displayCategory}}</span>
                        </div>
                        <div class="card_area">{{area | displayArea}}</div>
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
import util from '../../common/util'
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
        util.toggleFavorite(this)
        e.stopPropagation()
        return false
    }
  }
}
</script>