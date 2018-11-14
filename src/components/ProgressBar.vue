<template>
  <b-container>
    <b-row>
       <b-col md="12" class="mt-5">
        <h2>Custom progress bar!</h2>
        <div class="custom-progress text-center">
          <h2>{{ bar2.counter }}/{{ bar2.max }} Investors</h2>
          <h3>Recruited of the moment</h3>
          <div class="progress-bar-container">
            <div 
              class="progressed" 
              :class="progressClass" 
              :style="{width: width  + '%' }"
            ></div>
          </div>
          <div class="progress-text text-left">Numbers of investor recruired</div>

          <hr>
          <h2>Chenge investors counter</h2>
          <input 
          type="text" 
          v-model="bar2.counter"
          >
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data: () => ({
    bar1: {
      max: 13,
      counter: 7
    },
    bar2: {
      max: 13,
      counter: 10,
      width: null
    },
    progressClass: null
  }),
  computed: {
      width() {
        if (this.bar2.counter <= this.bar2.max) {
          //this.progressClass = ''
          return (this.bar2.counter * 100) / this.bar2.max
        } else if (this.bar2.counter > this.bar2.max) {
          //this.progressClass = 'complete'
          return 100
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .custom-progress h2{
    font-size: 24px;
    letter-spacing: 0.1em;
  }
  .custom-progress h3{
    font-size: 16px;
    font-weight: 300;
  }
  .progress-bar-container,
  .progress-bar-container .progressed{
    height: 20px;
    border-radius: 5px;
  }
  .progress-bar-container{
    background: #eee;
    width: 100%;
    margin: 20px 0px 5px 0px
  }
  .progress-bar-container .progressed{
    background-image: linear-gradient(to right, rgb(0, 0, 104) , rgb(74, 74, 253));
    position: relative;    
    transition: width 2s;
    -webkit-transition: width 2s;
    -moz-transition: width 2s; 
    -o-transition: width 2s;
    border-radius: 5px 0px 0px 5px;
  }
  .progress-bar-container .progressed.complete{
    border-radius: 5px;
  }
  .progress-bar-container .progressed::after{
    position: absolute;
    right: -6px;
    top: -11px;
    content: "";
    width: 0; 
    height: 0; 
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;    
    border-top: 9px solid rgb(74, 74, 253);
  }
  .custom-progress .progress-text{
    font-size: 14px;
    font-weight: 300;
  }
</style>

