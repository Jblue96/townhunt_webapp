<template>
    <a v-on="click: onClickItem" href="javascript:;" class="component__mapCard">
        <div class="card_bg" v-style="background-image: 'url(' + dislayImageUrl + ')'">
            <div class="card_wrap">
                <div class="card_main">
                    <div class="card_middle">
                        <div class="card_title">{{item.name}}</div>
                        <div class="card_area">{{item.address}}</div>
                    </div>
                    <div class="card_right">

                    </div>
                </div>
            </div>
        </div>
    </a>
</template>

<script lang="babel">
import filter from '../filters/filter'

export default {

  props: ['item'],

  data() {
    return {
      item: {}
    }
  },

  computed: {
    dislayImageUrl() {
        return filter.dislayImageUrl(this.item)
    }
  },

  methods: {
    onClickItem() {
        this.$dispatch('onSelectMapCard', this.item.objectId)
    }
  }
}
</script>