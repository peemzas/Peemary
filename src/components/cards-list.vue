<template>
  <div>
    <alert :visible="show" :type="alert_type" :message="alert_message" @hide="hide"></alert>
    <div class="column is-half is-offset-one-quarter" style="text-align: center;">
      <pulse-loader :loading="loading"></pulse-loader>
    </div>
    <div class="columns" style="flex-wrap: wrap;">
      <cards v-for="card in cards" :cardData="card"></cards>
    </div>
  </div>
</template>
<script>
import cards from './cards'
// import popup from './popup'
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import alert from './alert'

export default {
  name: 'card-list',
  components: {
    cards,
    PulseLoader,
    alert
  },
  data () {
    return {
      cards: [],
      loading: true,
      alert_type: 'is-danger',
      alert_message: '',
      show: false
    }
  },
  methods: {
    hide () {
      this.show = false
    },
    render () {
      axios.get('http://localhost:3333/api/v1/getall').then((response) => {
        if (!response.data.error) {
          this.cards = response.data
          this.loading = false
          console.log(this.cards)
        } else {
          this.show = true
          this.loading = false
          this.alert_message = response.data.error
        }
      }).catch((err) => {
        this.show = true
        this.loading = false
        this.alert_message = err.response.data.error.message
        console.log(err.response.data.error.message)
      })
    }
  },
  created () {
    if (this.$cookie.get('user')) {
      this.render()
    }
  }
}
</script>