<template>
  <div class="page__request">
      <ul>
        <li v-repeat="items" class="request_list_item request_list_bg" v-style="background-image: 'url(' + imageUrl + ')'">
          <a v-on="click: onClickItem(id)">
            <h3>{{title}}</h3>
            <div>{{price}}</div>
            <div>{{date}}</div>
          </a>
        </li>
      </ul>
  </div>
</template>

<script lang="babel">
import config from '../../common/config'
import util from '../../common/util'
import cache from '../../common/cache'

export default {
    data() {
        return {
          items: []
        }
    },

    components: {
    },

    created() {
        this.refresh()
    },

    methods: {
      refresh() {
        util.request({
            url: './api/v1/request/list'
        }).then((data) => {
          this.items = data
        })
      },

      onClickItem(id) {
        // store to cache
        cache.set('requestDetail', util.getItemById(this.items, id))
        location.href = '#/request/detail/' + id
      }

    }
}
</script>