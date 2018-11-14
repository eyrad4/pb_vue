<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <input style="display:none" ref="file" type="file" name="file" @change="chouseFile">
        <a 
          href="#" 
          @click.prevent="openFileExplorer()"
        >Upload file</a>
        <a 
          :href="$store.state.fileDownload" 
          download
        >Donwload file</a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data: () => ({
    file: ''
  }),
  methods: {
     openFileExplorer () {
      this.$refs.file.click()
    },
    chouseFile (e) {
      this.file = e.target.files[0]
      this.$nextTick(() => {
        this.$store.dispatch('sendFile', {file: this.file})
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    padding: 20px;
  }
</style>