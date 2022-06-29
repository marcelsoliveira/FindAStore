<template>
<div class="store-list-item-container" @click="listItemClicked">
    <div class="store-list-name-container">
        {{storeData.addressName}}
    </div>
    <img class="store-list-item-chevron-icon" :src="ChevronRight" />
</div>
</template>
<script>
import "../assets/css/Typefaces.css"
import ChevronRight from "../assets/svg/chevron-right.svg"
export default {
  props: {
    storeData: Object
  },
  data(){
    return{
        ChevronRight: ChevronRight,
    }
  },
  methods: {
    listItemClicked() {
        this.$emit("storeListItemClicked", this.storeData);
    }
  }
}
</script>
<style>
.store-list-item-container {
    float: left;   
    width: calc(100% - 20px);
    height: 60px;
    border-top: 1px solid #dedede;
    text-align: center;
    padding-left: 20px;
    transition: all 300ms;
    white-space: nowrap;
    cursor:pointer;
}
.store-list-item-container:hover {
    background-color: #F4F4F4;
    color: #deb221;
}
.store-list-name-container {
    float:left;
    width: calc(80% - 10px);
    height: 100%;
    font-size: 1.1rem;
    font-family: "jumbo-the-sans-bold";
    text-align: left;
    line-height: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

}
.store-list-item-chevron-icon {
    height :20px;
    margin-top: 20px;
}
</style>