<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:400,900');

body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(#fcfcfc, #e5e5e5);
    width: 100vw;
    height: 100vh;
    margin: 0px;
}

#app {
  font-family: Lato;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
