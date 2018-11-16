<template>
  <div>
    <div v-if="results.length === 0" ><h2>Loading...</h2></div>
    <b-card-group 
      deck 
      v-for="i in Math.ceil(results.length / rows)" 
      :key="i"
    >
        <b-card title="Title"
                :img-src="item.image_url"
                img-alt="Img"
                img-top
                v-for="item in results.slice((i - 1) * rows, i * rows)"
                :key="item.id"
                >
            <p class="card-text">
                {{ item.name }}
            </p>
            <div slot="footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </b-card>
    </b-card-group>
    </div>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-img-top {
    width: 40%;
    margin: 0 auto;
  }
</style>