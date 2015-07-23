<template>
    <div class="component__categories">
        <ul>
            <li v-class="selected: selectedType == '1'"><a href="javascript:;" v-on="click: onClickType('1')">Food</a></li>
            <li v-class="selected: selectedType == '2'"><a href="javascript:;" v-on="click: onClickType('2')">Shows</a></li>
            <li v-class="selected: selectedType == '3'"><a href="javascript:;" v-on="click: onClickType('3')">Wifi</a></li>
            <li v-class="selected: selectedType == '4'"><a href="javascript:;" v-on="click: onClickType('4')">Park</a></li>
            <li v-class="selected: selectedType == '5'"><a href="javascript:;" v-on="click: onClickType('5')">Outdoor</a></li>
        </ul>
    </div>
</template>

<script lang="babel">
export default {

  props: ['selectedType'],

  data() {
    return {
    }
  },

  methods: {

    onClickType(type) {
        this.$dispatch('onSelectType', type)
    }
  }
}
</script>