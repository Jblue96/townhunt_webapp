<template>
  <div class="page__detail">
    <div v-if="initialized">
        <div class="detail_banner">
            <div class="detail_banner_bg" v-style="background-image: 'url(' + item.imageUrl + ')'"></div>
        </div>
        <div class="detail_summary">
            <div class="detail_title">{{item.title}}</div>
            <div class="detail_table">
                <div class="detail_middle">
                    <div class="detail_categories">
                        <span v-repeat="cat : item.categories">{{cat}}</span>
                    </div>
                    <div class="detail_area">{{item.location.area}}</div>
                </div>
                <div class="detail_right">
                    <div class="detail_favorite">Fav</div>
                    <div class="detail_price">{{item.price}}</div>
                </div>
            </div>
        </div>
        <div class="detail_main">
            <h3>About this place</h3>
            <div>
                <p>Hours: {{item.availability}}</p>
            </div>
            <div class="detail_location">
                <div class="detail_location_icon"></div>
                <div class="detail_location_content">
                    <div class="detail_location_title">{{item.location.name}}</div>
                    <div class="detail_location_address">{{item.location.address}}</div>
                    <div class="detail_location_right">
                        <span>Open with Google Map</span>
                    </div>
                </div>
            </div>
            <p class="detail_description">{{{item.description}}}</p>
        </div>
        <div class="detail_footer">
            <div class="detail_btn">GET TICKET {{item.price}}</div>
        </div>
    </div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'

export default {
    data() {
        return {
            initialized: false,
            item: {
            }
        }
    },

    created() {
      this.refresh()
    },

    methods: {
        refresh: function() {
            var id = this.$data.$routeParams.id
            if(!id) {
              return
            }
            $.ajax({    
                type: "GET",
                url: "./api/v1/event/detail/" + id,
                dataType: "json",
                cache: false,
                success: (item) => {
                    this.item = item
                    this.initialized = true
                },
                error: () => {
                }
            })
        }
    }
}
</script>