<template>
  <div>
    <section class="hero is-primary is-medium" style="margin-bottom: 20px;">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                <img src="./assets/logo.png" alt="Logo">
              </a>
            </div>
            <div class="nav-right nav-menu">
              <a class="nav-item" :href="twitter" target="blank">
                <span class="icon">
                  <i class="fa fa-twitter"></i>
                </span>
              </a>
              <a class="nav-item" :href="facebook" target="blank">
                <span class="icon">
                  <i class="fa fa-facebook"></i>
                </span>
              </a>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            {{ msg }}
          </h1>
          <h2 class="subtitle">
            First VueJs Project
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li><router-link to="/login" v-show="!authenticated">Login</router-link></li>
              <li><router-link to="/register" v-show="!authenticated">Register</router-link></li>
              <li><router-link to="/create" v-show="authenticated">Create</router-link></li>
              <li><router-link to="/allcards" v-show="authenticated">All Cards</router-link></li>
              <li><router-link to="/about">About</router-link></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <div class="container">
      <router-view></router-view>
    </div>
    <!-- <div class="container">
      <create @event1="refresh1"></create>
      <cardslist @event1="refresh1" style="flex-wrap: wrap;"></cardslist>
    </div> -->
  </div>
</template>

<script>
import cardslist from 'components/cards-list'
import create from 'components/create'

export default {
  components: {
    cardslist,
    create
  },
  props: {
    authenticated: {
      type: Boolean
    }
  },
  data () {
    return {
      msg: 'Welcome to Peemary',
      twitter: 'https://twitter.com/PeeMz_Kael',
      facebook: 'https://www.facebook.com/PeeMzZ'
    }
  }
}
</script>
