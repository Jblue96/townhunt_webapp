<template>
  <div class="page__queries">
    <div class="queries_form">
      <div>
        <label>Location</label>
        <select></select>
      </div>
      <div>
        <label>Genre</label>
        <select></select>
      </div>
      <div>
        <label>Price Range</label>
        <select></select>
      </div>
      <div>
        <label>Now Opened</label>
        <input type="checkbox">
      </div>
    </div>
    <div class="queries_footer">
        <div class="queries_btn btn_large" v-on="click: submit">Filter</div>
    </div>
  </div>

</template>

<script lang="babel">
import config from '../../common/config'
import util from '../../common/util'
import cache from '../../common/cache'

export default {
    data() {
        return {
          queryParams: {
            // order: '',
            where: {}
          }
        }
    },

    created() {
      // handle initial query params
      this.queryParams = $.extend(this.queryParams, util.getUrlSearchQueryParams())
      // TODO: set initial form values

    },

    methods: {
      submit() {
        // TODO: set as url query
        // location.href = '?search={"where":{"town":{"$regex":"shibuya"}}}#/'
        location.href = '#/'
      }
    }
}
</script>