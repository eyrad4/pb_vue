<template>
  <div class="search">
    <span class="search-btn text-red"><font-awesome-icon icon="search" /></span>
    <b-input
      v-model.trim="search" 
      placeholder="Search agents or properties by address, neighborhood, or zip code" 
    />    
    <div class="serach-results" v-if="searchResults.length > 0 || searchNoResults === true">
      <div 
        class="search-list search-address"
        v-for="(group, key, index) in searchResults" 
        :key="index"
        v-if="group.results"
      >
        <div class="seath-title">{{ group.name }}</div>
        <ul>
          <li
            v-for="result in group.results"
            :key="result.id"
          ><a href="">{{ result.title }}</a></li>
        </ul>
      </div>
      <div class="search-list search-empty" v-if="searchNoResults">
        <span>No results found</span>
      </div> 
    </div>
  </div>
</template>

<script>
//import { mapState } from 'vuex'
import _ from 'lodash'
export default {
  data: () => ({
    search: '',
    searchNoResults: false
  }),
  computed: {
    /*
    компутед свойство searchResults() нужно только в данном примере, что бы скомпоновать результаты
     ...mapState({
      searchResults: 'searchResults'
    })
    */
    searchResults() {
      let oldSearchResults = this.$store.state.searchResults

      let searchResults = []
      if (oldSearchResults.length > 0) {      
        searchResults.push({"name": "Address", "results": oldSearchResults.slice(0,4)})
        searchResults.push({"name": "Zipcode", "results": oldSearchResults.slice(5,8)})
        searchResults.push({"name": "Agent", "results": oldSearchResults.slice(10,13)})
        searchResults.push({"name": "Neighborhood", "results": oldSearchResults.slice(15,19)})
      }       
      return searchResults
    }
  },
  watch: {
    search () {
      this.debouncedSearch()
    }
  },
  created() {    
    this.debouncedSearch = _.debounce(this.getSearch, 1500)
  },
  methods: {
    getSearch() {
      if (this.search == 'no') {
        this.searchNoResults = true
      } else if (this.search.length != 0) {
        this.$store.dispatch('search', {search: this.search})
      } else {
        this.searchNoResults = false
        this.$store.dispatch('clearSearch')
      }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .serach-results{
    position: absolute;
    top: 23px;
    left: 0px;
    height: auto;    
    max-width: 480px;
    background-color: #fff;
    border-right: 1px solid rgba(228,228,228,0.6);
    border-bottom: 1px solid rgba(228,228,228,0.6);
    border-left: 1px solid rgba(228,228,228,0.6);
    min-width: 300px;
    margin-top: 25px;
    box-sizing: border-box;
    z-index: 10;
  }
  .serach-results .search-list{
    margin: 3px 0px; 
  }
  .serach-results .search-list:first-child{
    margin-top: 15px;
  }
  .serach-results .search-list:last-child{
    margin-bottom: 15px;
  }
  .serach-results .search-list .seath-title{    
    border-bottom: 1px solid rgba(228,228,228,0.2);
    padding: 3px 15px 5px 15px;
    font-size: 12px;
    color: #a6a4a9;
  }
  .serach-results .search-list ul{
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
  .serach-results .search-list ul li{
    padding: 2px 15px;
  }
  .serach-results .search-list ul li a, 
  .serach-results .search-empty span{
    color: #4a4a4a;
    text-decoration: none;
    font-size: 13px;
  }
  .serach-results .search-list ul li:hover{
    background: #fafafa;
  }
  .serach-results .search-empty span{
    padding: 2px 15px;
  }
</style>
