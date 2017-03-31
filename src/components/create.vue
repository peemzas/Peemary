<template>
  <div>
    <alert :visible="show" :type="alert_type" :message="alert_message" @hide="hide"></alert>

    <div class="columns">
      <div class="column is-9" style="margin: auto;">
        <div class="field">
          <p class="control">
            <input v-model="topic" class="input is-primary" type="text" placeholder="Your topic">
          </p>
        </div>
        <br>
        <vue-editor
            :placeholder="placeholder"
            :buttonText="button_text"
            :use-save-button="true"
            @save-content="save">
        </vue-editor>
      </div>
    </div>
  </div>
  <!-- <div class="container">
    <div class="columns">
      <div class="column is-one-third" style="margin: auto;">
        <textarea ref="text" class='textarea'></textarea>
        <vue-editor :editor-content="htmlForEditor"></vue-editor>
      </div>
    </div>
    <div class="column is-one-third" style="margin: auto; text-align: center;">
        <button ref="save_bnt" @click="save" style="display: inline;">save</button>
        <p>{{ show }}</p>
        <p>{{ status }}</p>
    </div>
  </div> -->
</template>

<script>
import axios from 'axios'
import alert from './alert'
import { VueEditor } from 'vue2-editor'

export default {
  name: 'create',
  components: {
    VueEditor,
    alert
  },
  data () {
    return {
      button_text: 'Create',
      placeholder: 'Your content',
      msg: 'Welcome to Peemary',
      topic: '',
      contents: {
        username: '',
        text_data: ''
      },
      alert_type: '',
      alert_message: '',
      show: false
    }
  },
  methods: {
    hide () {
      this.show = false
    },
    save (input) {
      this.contents.username = 'peemzas'
      this.contents.text_data = input
      console.log(this.contents)
      console.log(this.topic)

      axios.post('http://localhost:3333/api/v1/addcard', {
        username: this.contents.username,
        topic: this.topic,
        contents: this.contents.text_data
      }).then((response) => {
        console.log(response.data)
        this.show = true
        this.alert_type = 'is-success'
        this.alert_message = 'Crate account success'
      }).catch((err) => {
        this.show = true
        this.alert_type = 'is-danger'
        this.alert_message = 'Crate account failed'
        console.log(err.response.data.error.message)
      })
    }
  }
}

</script>
