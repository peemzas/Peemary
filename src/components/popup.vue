<template>
  <div class="columns">
    <!-- <div class="column is-half is-offset-one-quarter">
      <button class="button is-info" @click="popup">Popup</button>
    </div> -->
    <transition name="fade">
      <div ref="my_modal" :class="classes" v-if="show">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{{ data.topic }}</p>
            <button class="delete" @click="close"></button>
          </header>
          <section class="modal-card-body" v-html="data.contents"></section>
          <footer class="modal-card-foot">
            <a class="button" @click="close">Cancel</a>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    visible: {
      type: Boolean
    },
    data: {
      type: Object
    }
  },
  data () {
    return {
      show: this.visible
    }
  },
  computed: {
    classes () {
      return ['modal', 'is-active']
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  },
  watch: {
    visible (val) {
      this.show = val
      console.log(this.show)
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