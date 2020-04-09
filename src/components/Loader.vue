<template>
  <div class="overlay active" id="overlay">
    <div class="loader">
      <img src="../assets/images/rickloader.png" alt="rick-loader" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="stylus" scoped>

.overlay
      background: rgba(0,0,0,.5);
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 1.1s ease-in;
      opacity: 0;
      visibility: hidden;

.overlay.active
    opacity: 1;
    visibility: visible;

.loader
    transform: rotate(45deg);
    animation-name: platzi-base;
    animation-duration: 2s;
    animation-iteration-count: infinite;

@keyframes platzi-base
    0%
        opacity: 0;
        transform: scale(.3) rotate(0deg);

    25%
        opacity: 1;
        transform: scale(.8) rotate(405deg)

    75%
        opacity: 1;
        transform: scale(.8) rotate(405deg);

    100%
        opacity: 0;
        transform: scale(.3) rotate(0deg);
</style>
