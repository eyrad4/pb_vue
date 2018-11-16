<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <h1>Product list</h1>
        <h3>rows 4</h3>
        <div class="list-elements">
          <app-list-copy 
            :rows="4"
            :results="itemsResult"
            :loading="loading"
          ></app-list-copy> 
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'
export default {
  data: () => ({
    list: null,
    page: 1,
    perPage: 12,
    bottom: false,
    loading: false
  }),
  computed: {
    ...mapState({
      itemsResult: 'itemsResult'
    })
  },
  created() {
    window.addEventListener('scroll', () => {      
      this.bottom = this.bottomVisible()
    })
    this.debouncedAddItem = _.debounce(this.wrapAddItem, 1000)
    this.$nextTick(() => {
      this.debouncedAddItem()
    })
  },
  methods: {
    bottomVisible() {
      let a = document.documentElement.scrollTop;
      let b = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let c = a / b;
      return (c == 1) ? true : false
    },
    wrapAddItem() {
      this.loading = true
      setTimeout(() => {
        this.addItem()
      }, 1000)
      
    },
    addItem() {
      this.page = (this.page === 1) ? this.page : this.page + 1      
      this.$store.dispatch('getItems', {page: this.page, perPage: this.perPage}).then(() => {
        this.loading = false
      })
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.wrapAddItem()
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

