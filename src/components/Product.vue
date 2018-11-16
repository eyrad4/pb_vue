<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <h1>Product list</h1>
        <h3>rows 4</h3>
        <div class="list-elements">
          <app-list 
            :rows="4"
            :results="itemsResult"
          ></app-list> 
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    list: null,
    page: 1,
    perPage: 12,
    bottom: false
  }),
  computed: {
    ...mapState({
      itemsResult: 'itemsResult'
    })
  },
  mounted() {
    window.addEventListener('scroll', () => {      
      this.bottom = this.bottomVisible()
    })
    this.addItem()
  },
  methods: {
    bottomVisible() {
      let a = document.documentElement.scrollTop;
      let b = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let c = a / b;
      return (c == 1) ? true : false
    },
    addItem() {
      this.page = (this.page === 1) ? this.page : this.page + 1      
      this.$store.dispatch('getItems', {page: this.page, perPage: this.perPage})
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.addItem()
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

