<template>
    <div class="fail-to-fetch-data-cover">
        <div class="fail-to-fetch-data-popup">
            <img class="fail-to-fetch-data-app-logo" :src="appLogoImage" />
            <div class="divider"></div>
            <h1>Internal Error</h1>
            <p>
                It was not possible to fetch the application data. Please check your internet connection.
                <br/>
                <br/>
                Please contact the administrator of this application.
            </p>
        </div>
    </div>
</template>
<script>
import appLogoImage from "../assets/svg/app-logo.svg";
import "../assets/css/Typefaces.css"

export default {
  data(){
    return{
        appLogoImage: appLogoImage,
    }
  },
}
</script>
<style scoped>
.fail-to-fetch-data-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000bf;
    z-index: 101;
    animation-name: coverAnimation;
    animation-duration: 0.5s;
}
.fail-to-fetch-data-popup {
  position: absolute;
  top: calc(50% - 250px);
  left: calc(50% - 300px);
  width: 500px;
  height: 380px;
  background-color: hsl(0, 0%, 98%);
  z-index: 10;
  border-radius: 10px;
  box-shadow: 0px 0px 14px #888888;
  border: 1px solid #9e9e9e;
  text-align: center;
  padding: 50px;
  animation-name: windowAnimation;
  animation-duration: 1s;
}
.fail-to-fetch-data-app-logo {
    width: 400px;
    padding-bottom: 20px;
}
h1{
    font-family:  jumbo-the-sans-bold;
    font-size: 3rem;
    margin-bottom: 0;
}
p{
    font-family:  the-sans-plain;
    font-size: 1.5rem;
    line-height: 1.8rem;
    opacity: 0.4;
}
.divider {
    width: 100%;
    height: 1px;
    background-color: #EAEAEA;
}
@keyframes windowAnimation {
  from {top: 200%;}
  to {top: calc(50% - 250px);}
}
@keyframes coverAnimation {
  from {opacity: 0;}
  to {opacity: 1}
}
</style>