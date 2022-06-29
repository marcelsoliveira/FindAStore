<template>
  <div id="app">
    <Map />
    <div class="search-container" :class="expandStores ? 'search-container-expanded' : ''">
      <div class="stores-container" :class="hideSearch ? 'stores-container-hidden' : ''">
        <Stores @expandSearchContainer="expandSearchContainer" :storesFound="storesFound" />
      </div>
      <div class="detail-container"  :class="hideSearch ? 'detail-container-visible ' : ''">
        <StoreDetail :storeData="selectedStoreData"/>
      </div>
    </div>
    <div v-if="showError">
      <FailToFetchData />
    </div>
  </div>
</template>

<script>
import { RestService } from './services/RestService'; 
import { SearchStoreService } from './services/SearchStoreService';
import Stores from "./components/Stores";
import StoreDetail from "./components/StoreDetail"
import Map from "./components/Map";
import FailToFetchData from './components/FailToFetchData';

export default {
  name: "App",
  components: {
    Stores,
    Map,
    StoreDetail,
    FailToFetchData,
  },
  mounted() {
    this.$root.$on("transition-to-store-detail", (transition, storeData) => {
      this.hideSearch = transition;
      this.selectedStoreData = storeData;
      console.log(storeData)
    })
  },
  data() {
    RestService("https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e", this.handleStoreData, this.handleFetchError)
    return {
      expandStores: false,
      storesList: [],
      storesFound: [],
      hideSearch: false,
      selectedStoreData: undefined,
      showError: false
    };
  },
  methods: {
    expandSearchContainer(expand, searchTerm) {
      this.expandStores = expand;
      this.storesFound = SearchStoreService(this.storesList, searchTerm);
    },
    handleStoreData(data) {
      this.storesList = data;
    },
    handleFetchError() {
      this.showError = true;
    }
  }
};
</script>

<style>
.search-container {
  position:absolute;
  top: 2rem;
  left: 3rem;
  width: 360px;
  height: 148px;
  background-color: hsl(0, 0%, 98%);
  z-index: 10;
  border-radius: 10px;
  box-shadow: 0px 0px 14px #888888;
  border: 1px solid #9e9e9e;
  box-sizing: border-box; 
  transition: all 500ms;
  overflow: hidden;
}
.search-container-expanded {
  height: calc(100% - 5rem);
}
.stores-container {
  position: relative;
  top: 0px;
  left: 0px; 
  transition: all 300ms; 
}
.stores-container-hidden {
  left: -120%;
}
.detail-container {
  position: relative;
  top: 0px;
  left: 100%;
  width: 100%; 
  height: 100%;
  transition: all 300ms; 
}
.detail-container-visible {
  left: 0%;
}
</style>
