<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <transition name="fade">
        <div class="notification" :class="type" v-show="visible">
          <button class="delete" @click="hide"></button>
          {{ message }}
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'alert',
  props: {
    type: {
      type: String
    },
    message: {
      type: String
    },
    visible: {
      type: Boolean
    }
  },
  data () {
    return {
    }
  },
  methods: {
    hide () {
      this.$emit('hide')
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
</style>