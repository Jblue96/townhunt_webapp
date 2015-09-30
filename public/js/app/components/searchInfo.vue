<template>
  <div class="component__searchInfo" v-on="click: onClick">
    <span>{{queryParams.where | displaySearchInfo}}</span>
  </div>
</template>

<script lang="babel">
import urlQueryParser from '../../common/urlQueryParser'
import util from '../../common/util'

export default {
  data() {
    return {
      queryParams: {
        where: {
        }
      }
    }
  },

  created() {
      // handle initial query params
      this.queryParams = urlQueryParser.getUrlSearchQueryParams()
  },

  methods: {
    onClick() {
        util.redirect('#/queries')
    }
  }
}
</script>