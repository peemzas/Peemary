<template>
  <div>
    <alert :visible="show" :type="alert_type" :message="alert_message" @hide="hide"></alert>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <form @submit.prevent="login">
          <article class="message">
            <div class="message-body">
              <div class="column is-8 is-offset-2">
                <p style="text-align: center; font-size: 20px; font-weight: bold;">Login</p>
                <hr>
                <div class="field" style="margin-bottom: 10px">
                  <p class="control">
                    <input ref="username" class="input" type="text" placeholder="Username" required>
                  </p>
                </div>
                <div class="field" style="margin-bottom: 10px">
                  <p class="control">
                    <input ref="password" class="input" type="password" placeholder="Password" required>
                  </p>
                </div>
                <button v-show="authenticated" type="submit" class="button is-dark" style="display: block; margin: 0 auto; width: inherit;">Login</button>
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
  name: 'login',
  components: {
    alert
  },
  data () {
    return {
      authenticated: true,
      alert_type: '',
      alert_message: '',
      show: false,
      header: {
        auth: {
          'username': '',
          'password': ''
        }
      }
    }
  },
  methods: {
    hide () {
      this.show = false
    },
    login () {
      this.header.auth.username = this.$refs.username.value
      this.header.auth.password = this.$refs.password.value

      axios.post('http://localhost:3333/api/v1/login', {
        username: this.$refs.username.value,
        password: this.$refs.password.value
      }, this.header).then((response) => {
        console.log(response.data)

        this.show = true

        if (response.data.success) {
          this.alert_type = 'is-success'
          this.alert_message = response.data.success
          this.$cookie.set('user', this.$refs.username.value, { expires: '5m' })
        } else {
          this.alert_type = 'is-danger'
          this.alert_message = response.data.error
        }
      }).catch((err) => {
        this.show = true
        this.alert_type = 'is-danger'
        this.alert_message = err.response.data.error.message
        console.log(err.response.data.error.message)
      })
    }
  },
  mounted () {
    if (this.$cookie.get('user')) {
      this.authenticated = false
    }
  }
}
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: 1s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  .modal-background {
    opacity: 1
  }
</style>