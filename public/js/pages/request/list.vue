<template>
  <div class="page__request">
      <h2>request list</h2>
      <ul>
        <li v-repeat="items">
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

export default {
    data() {
        return {
          items: []
        }
    },

    components: {
    },

    created() {
        if(!config.isLoggedIn){
          console.log('anonymous access to request/list')
          location.href = '#/login'
          return
        }
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
        this.$root.cache.request.detail = util.getItemById(this.items, id)
        location.href = '#/request/detail/' + id
      }

    }
}
</script>