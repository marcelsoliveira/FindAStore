<template>
  <div>
    <img class="stores-app-logo" :src="appLogo" />
    <div class="stores-search-field-container">
      <img class="search-icon" :src="search" />
      <input placeholder="Type a city or a store name" @input="searchLocation($event)"/>
    </div>
    <div v-if="hideResults">
      <LoadingSearchResults  />
    </div>
    <div v-else>
      <div class="stores-total-number-of-ites-found-container"> Stores found ({{storesFound.length}})</div>
      <div>
        <div class="stores-list-scroll-area">
          <div v-for="store in storesFound">
              <StoreListItem @storeListItemClicked="storeListItemClicked" :storeData="store"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSearchResults from "./LoadingSearchResults.vue"
import searchIcon from "../assets/svg/search.svg";
import appLogoImage from "../assets/svg/app-logo.svg";
import StoreListItem from "./StoreListItem.vue";
import "../assets/css/Typefaces.css"

export default {
  props: {
    storesFound: Array
  },
  components: {
    LoadingSearchResults,
    StoreListItem
  },
  data() {
    return {
      search: searchIcon,
      appLogo: appLogoImage,
      storesDataProcessed: this.storesData,
      hideResults: true,
    };
  },
  methods: {
    searchLocation(event) {
      if (event.target.value === "") {
        this.$emit("expandSearchContainer", false, "")
        this.hideResults = true;
      } else {
        this.$emit("expandSearchContainer", true, event.target.value)
      }
    },
    storeListItemClicked(storeData) {
      this.$root.$emit("pan-to-store-location", [storeData.latitude, storeData.longitude])
      this.$root.$emit("transition-to-store-detail", true, storeData)
    }
  },
  watch: { 
    storesFound: function(newVal) {
        if (newVal.length > 0) {
          this.hideResults = false;
        }
      }
    }
};
</script>

<style lang="css" scoped>
.stores-app-logo {
  float: left;
  padding-top: 17px;
  height: 60px;
  margin-left: 15px;
  justify-self: center;
  margin-bottom: 0.8rem;
}
.stores-search-field-container {
  float: left;
  width: calc(100% - 35px);
  height: 38px;
  margin-left: 17px;
  border: 1px solid #9e9e9e;
  border-radius: 30px;
  padding-left: 10px;
  padding-right: 15px;
  box-sizing: border-box; 
  margin-bottom: 27px;
}
.search-icon {
  float: left;
  height: 25px;
  margin-top: 5px;
  margin-right: 10px;
  opacity: 0.5;
}
input {
  float: left;
  border: none;
  width: calc(100% - 45px);
  height: 34px;
  background-color: unset;
  outline: none;
  font-family: "jumbo-the-sans-bold";
  font-size: 1rem;
  line-height: 30px;  
}
.stores-total-number-of-ites-found-container {
  float: left;   
  width: 100%;
  height: 50px;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #ebebeb;
  text-align: center;
  font-size: 1.1rem;
  font-family: "jumbo-the-sans-bold";
  line-height: 50px;
  opacity: 0.5;
}
.stores-list-scroll-area {
  float:left; 
  overflow-y: scroll; 
  overflow-x: hidden;
  width: 100%; 
  height: 5%;
  max-height: calc(100vh - 285px);
}
</style>
