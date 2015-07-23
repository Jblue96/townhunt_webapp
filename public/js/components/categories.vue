<template>
    <div class="component__categories">
        <ul>
            <li v-repeat="types" v-class="selected: selectedType == id"><a href="javascript:;" v-on="click: onClickType(id)">{{label}}</a></li>
        </ul>
    </div>
</template>

<script lang="babel">
export default {

  props: ['selectedType'],

  data() {
    return {
      types: [
        {
          id: '1',
          label: 'Food'
        },
        {
          id: '2',
          label: 'Shows'
        },
        {
          id: '3',
          label: 'Wifi'
        },
        {
          id: '4',
          label: 'Park'
        },
        {
          id: '5',
          label: 'Outdoor'
        }
      ]
    }
  },

  methods: {

    onClickType(type) {
        this.$dispatch('onSelectType', type)
    }
  }
}
</script>