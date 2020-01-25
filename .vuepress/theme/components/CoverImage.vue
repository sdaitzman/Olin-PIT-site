<template>
<div class="coverbg">
    hello this is a coverimage component!!!
    <!-- this will get the content in between the component tags -->
    <slot></slot>
</div>
</template>
<!-- scoped is important because it limits the styles here to this component-->
<style lang="scss" scoped>
/* scss goes here */
.coverbg {
  /* The image used */
  // background-image: url("img_girl.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>

<script>
export default {

}
</script>
