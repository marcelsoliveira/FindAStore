<template>
<div class="store-detail-container">
    <div class="store-detail-top-bar">
        <img class="store-detail-top-bar-chevron-icon" :src="ChevronLeft" @click="returnToStoreList" />
        <p class="store-detail-top-bar-title">Store Details</p>
    </div>
    <div style="float: left; height: calc(90vh - 60px); overflow-y:scroll; overflow-x: hidden">
        <h1 class="store-detail-store-name">{{storeData.addressName}}</h1>
        <h5 class="store-detail-city">{{storeData.city}}</h5>
        <div style="padding-bottom: 20px;">
            <img class="store-form-icon" :src="LocationIcon" />
            <div class="store-form-title">Store Address</div>
        </div>
        <br/>
        <div>
            <div>
                <div class="store-form-data">{{storeData.street}}</div>
                <div class="store-form-data">{{storeData.street2}}</div>
                <div class="store-form-data">{{storeData.street3}}</div>
                <div class="store-form-data">{{storeData.postalCode}}</div>
            </div>
            <br/>
            <div style="padding-bottom: 20px;">
                <img class="store-form-icon" :src="ServiceHoursIcon" />
                <div class="store-form-title">Service Hours</div>
            </div>
            <br/>
            <div>
                <div class="store-form-data">Monday - Saturday</div>
                <div class="store-form-data">{{storeData.todayOpen}}-{{storeData.todayClose}}</div>
                <br/>
                <div class="store-form-data">Sunday</div>
                <div class="store-form-data" v-if="storeData.sundayOpen">{{storeData.todayOpen}}-{{storeData.todayClose}}</div>
                <div class="store-form-data" v-else="storeData.sundayOpen">Closed</div>
            </div>
            <br/>
            <div style="padding-bottom: 20px;">
                <img class="store-form-icon" :src="ServicePoint" />
                <div class="store-form-title">Pick Up Point?</div>
            </div>
            <br/>
            <div>
                <div class="store-form-data" v-if="storeData.sundayOpen">This location is a</div>
                <div class="store-form-data" v-if="storeData.sundayOpen">Pick Up point</div>
                <div class="store-form-data" v-else="storeData.sundayOpen">No Pick Up available</div>
            </div>
            <br/>
        </div>
        <br/>
        <br/>
    </div>
</div>
</template>

<script>
import ChevronLeft from "../assets/svg/chevron-left.svg"
import "../assets/css/Typefaces.css"
import LocationIcon from "../assets/svg/location.svg";
import ServiceHoursIcon from "../assets/svg/cart.svg";
import ServicePoint from "../assets/svg/service-point.svg";

export default {
  props: {
    storeData: Object
  },
  data(){
    return{
        ChevronLeft: ChevronLeft,
        LocationIcon: LocationIcon,
        ServiceHoursIcon: ServiceHoursIcon,
        ServicePoint: ServicePoint,
    }
  },
  methods: {
    returnToStoreList() {
        this.$root.$emit("transition-to-store-detail", false)
    }
  }
}
</script>
<style>
.store-detail-container {
    position: absolute;
    width: 100%;
    height: 100%;
}
.store-detail-top-bar{
    float:left;
    width: 100%;
    height: 60px;
    background-color: #ffcc26;
}
.store-detail-top-bar-chevron-icon {
    float: left;
    width: 27px;
    margin-top: 14px;
    margin-left: 15px;
    cursor:pointer
}
.store-detail-top-bar-title {
    float: left;
    width: calc(100% - 73pt);
    color: #FFFFFF;
    text-align: center;
    font-size: 24px;
    line-height: 16px;
    font-family: "jumbo-the-sans-bold";
}
.store-detail-store-name {
    font-family: "jumbo-the-sans-bold";
    font-size: 2rem;
    padding-left: 23px;
    padding-right: 23px;
    line-height: 30px;
    margin:unset;
    margin-top: 20px;
}
.store-detail-city {
    font-family: "jumbo-the-sans-regular";
    font-size: 1.4rem;
    padding-left: 23px;
    padding-right: 23px;
    line-height: 30px;
    color: #a6a6a6;
    margin:unset;
    margin-top: 10px;
    margin-bottom: 40px;
}
.store-form-icon {
    float:left;
    width: 25px;
    padding-left: 23px;
}
.store-form-title {
    float:left;
    width: auto;
    padding-left: 18px;
    font-family: "jumbo-the-sans-bold";
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: #000000;
}
.store-form-data {
    width: calc(100% - 60px);
    padding-left: 65px;
    font-family: "the-sans-plain";
    font-size: 1.3rem;
    color: #a6a6a6;
    line-height: 1.6rem;
}
</style>