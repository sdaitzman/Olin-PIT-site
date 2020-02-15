
<!-- Import font with: <link href="https://fonts.googleapis.com/css?family=Montserrat:100" rel="stylesheet"> -->
<template>
<div>
    <img class="bg" src="../../public/uploads/cover.jpg"/>
    <div id="page-wrap">
      <h1 style="font-size: 35px">
        <slot></slot><!-- this will get the content in between the component tags -->
      </h1>
    </div>
</div>
</template>

<!-- scoped is important because it limits the styles here to this component-->
<style lang="scss" scoped>

/* scss goes here */
.bg {
  /* Full height */
  // min-height: 100%;
  width: 100%;
  height: 85vh;
  object-fit: cover;

  left: 0px;

  /* Center and scale the image nicely */
  position: absolute;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

#page-wrap {
  position: absolute;
  box-sizing: border-box;
  height: auto;
  padding: 25px;
  width: 100%;
  height: 100%;

  // Styling the text
  color: white;
  text-align: center;

  // Styling the background
  background-image: linear-gradient(black, transparent, transparent);
  opacity: .7;
}

</style>

<script>
export default {

}
</script>
