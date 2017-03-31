<template>
<div class="column is-one-third">
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image" style="height: 40px; width: 40px;">
            <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ username }}</p>
          <p class="subtitle is-6">{{ topic }}</p>
        </div>
      </div>
      <div class="content">
        <div v-html="contents"></div>
        <small>Created at : {{ created_at }}</small>
        <br>
        <small><a @click="popup">Read more...</a></small>
      </div>
    </div>
  </div>
  <popup :visible="show" :data="cardData" @close="close"></popup>
</div>
</template>
<script>
import popup from './popup'
export default {
  name: 'cards',
  components: {
    popup
  },
  props: {
    cardData: {
      type: Object
    }
  },
  data () {
    return {
      username: this.cardData.username,
      topic: this.cardData.topic,
      contents: this.cardData.contents,
      created_at: this.cardData.created_at,
      show: false
    }
  },
  methods: {
    popup () {
      this.show = true
    },
    close () {
      this.show = false
    }
  }
}
</script>


