<template>
  <transition appear name="slide">
    <!-- <music-list :rank="rank" :title="title" :bg-image="bgImage" :songs="songs"></music-list> -->
  </transition>
</template>

<script>

</script>

<style scoped lang="scss">
  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0)
  }
</style>
