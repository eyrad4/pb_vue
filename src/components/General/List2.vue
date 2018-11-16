<template>
  <section class="lists-items">
    <transition-group name="fade">
    <div 
      class="lists-items-row"
      v-for="i in Math.ceil(results.length / rows)" 
      :key="i"
    >
      <div 
      class="item" 
        v-for="item in results.slice((i - 1) * rows, i * rows)"
        :key="item.id"
        :style="{width: percentRow + '%'}"
      >
        <div class="image">
          <img :src="item.image_url" alt="">
        </div>
        <div class="category">{{ item.tagline }}</div>
        <div class="title">{{ item.name }}</div>
        <div class="price">$ 125</div>
      </div>
    </div>
    </transition-group>
    <transition name="fade">
      <div 
        class="loading"
        
      ><h2>Loading...</h2></div>
    </transition>
  </section>
</template>

<script>
export default {
  props: {
    rows: {
      type: Number,
      required: true
    },
    results: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    percentRow() {
      return 100 / this.rows
    }

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lists-items{
    position: relative;
  }
  .lists-items .lists-items-row{
    width: 100%;
    display:flex;
  }
  .lists-items .item{
    margin: 1%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  .lists-items .item .category{
    font-size: 0.8em;
    color: rgb(194, 194, 194);
  }
  .lists-items .item .title{
    font-size: 1.2em;
    color:rgb(0, 202, 202);
    font-weight: 500;
  }
  .lists-items .item .image{
    margin-bottom: 5px;
  }
  .lists-items .item .image img{
    height: 150px;
    margin: 0 auto;
    display: block;
  }
  .lists-items .loading{
    text-align: center;
    font-size: 12px;
    color: royalblue;
    position: absolute;
    bottom: -30px;
    width: 100%;
  }
</style>