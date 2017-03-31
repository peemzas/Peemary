<template>
  <div>
    <alert :visible="show" :type="alert_type" :message="alert_message" @hide="hide"></alert>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <form @submit.prevent="register">
          <article class="message">
            <div class="message-body">
              <div class="column is-8 is-offset-2">
                <p style="text-align: center; font-size: 20px; font-weight: bold;">Create your account</p>
                <hr>
                <div class="field" style="margin-bottom: 10px">
                  <p class="control">
                    <input ref="username" class="input" type="text" placeholder="Username" required>
                  </p>
                </div>
                <div class="field" style="margin-bottom: 10px">
                  <p class="control">
                    <input ref="email" class="input" type="email" placeholder="E-Mail" required>
                  </p>
                </div>
                <div class="field" style="margin-bottom: 10px">
                  <p class="control">
                    <input ref="password" class="input" type="password" placeholder="Password" required>
                  </p>
                </div>
                <button type="submit" class="button is-dark" style="display: block; margin: 0 auto; width: inherit;">Create</button>
              </div>
            </div>
          </article>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import alert from './alert'

export default {
  name: 'register',
  components: {
    alert
  },
  data () {
    return {
      alert_type: '',
      alert_message: '',
      show: false
    }
  },
  methods: {
    hide () {
      this.show = false
    },
    register () {
      console.log(this.$refs.username.value)
      console.log(this.$refs.email.value)
      console.log(this.$refs.password.value)

      // this.show = true
      // this.alert_type = 'is-success'
      // this.alert_message = 'Crate account success'

      axios.post('http://localhost:3333/api/v1/register', {
        username: this.$refs.username.value,
        email: this.$refs.email.value,
        password: this.$refs.password.value
      }).then((response) => {
        console.log(response.data)

        this.show = true

        if (response.data.success) {
          this.alert_type = 'is-success'
          this.alert_message = 'Crate account success'
        } else {
          this.alert_type = 'is-danger'
          this.alert_message = response.data.error
        }
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