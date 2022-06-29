<template>
    <div class="loading-search-results-container">
        <div>
            <img class="loading-search-results-loader" :src="LoaderImage" />
            <p class="loading-search-loading-text">Now looking for stores...</p>
        </div>
    </div>
</template>

<script>
import Loader from '../assets/svg/loader.svg';
import "../assets/css/Typefaces.css"

export default {
    components: {
    },
    data(){
        return{
            LoaderImage: Loader,
            showResults: false,
        }
    },
};
</script>

<style>
.loading-search-results-container {
    float: left;   
    width: 100%;
    height: 100%;
    border-top: 1px solid #dedede;
    text-align: center;
}
.loading-search-results-loader {
    transform: translateY(calc(50% - 30px));
    transform: translateX(calc(50% - 30px));
    width: 60px;
    padding-top: 40px;
}
.loading-search-loading-text {
    font-family: "jumbo-the-sans-bold";
    opacity: 0.2;
}
</style>