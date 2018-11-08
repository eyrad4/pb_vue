<template>
  <b-container class="calculator-container">
    <b-row class="header-block">
      <b-col>
        <div class="calculator-header">
          <h1 class="text-center">{{ name }}</h1>
          <div class="price text-center">${{ price }}</div>
        </div>
      </b-col>
    </b-row>
    <b-row class="gallery-block">
      <b-col>
        <div class="auto-resize text-center">
          <img class="img-fluid" src="./../assets/calc.jpg" alt="" :style="{height: windowHeight + 'px'}" />
        </div>
      </b-col>
    </b-row>
    <b-row class="actions-block">
      <b-col>
        <div class="calculator-actions">
          <nav class="text-center">
            <ul>
             <li><a href="#"><font-awesome-icon icon="star" /> Save</a></li>
             <li><a href="#">Gallery {{ windowHeight }}</a></li>
             <li><a href="#">Floor Plan</a></li>
             <li><a href="#" @click="showCalculator = !showCalculator">Mortgage Calculator</a></li>
           </ul>
          </nav>
        </div>
      </b-col>
    </b-row>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <transition name="fade">
      <b-row class="popup-caclulator active text-center" v-if="showCalculator">      
        <b-col md="3" offset-md="5">
          <div class="calculator-container">
              <span 
                class="menu-link text-red close-calculator"
                @click="showCalculator = !showCalculator"
                ><font-awesome-icon icon="times" /></span>
            <h2>Mortgage Calculator</h2>
            <b-form>
              <b-form-group
                horizontal
                id=""
                label="Amount to borrow:"
                label-for="amount"
                label-cols="6"
                class="text-right calculator-elemet"
              >
                <b-form-input
                  id="amount"
                  type="number"
                  class="col-sm-6"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                horizontal
                id=""
                label="Downpayment %:"
                label-for="downpayment"
                label-cols="6"
                class="text-right calculator-elemet"
              >
                <b-form-input
                  id="downpayment"
                  type="number"
                  class="col-sm-6"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                horizontal
                id=""
                label="Term (in years):"
                label-for="terms"
                label-cols="6"
                class="text-right calculator-elemet"
              >
                <b-form-input
                  id="terms"
                  type="number"
                  class="col-sm-6"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                horizontal
                id=""
                label="Interest rate %:"
                label-for="interest"
                label-cols="6"
                class="text-right calculator-elemet"
              >
                <b-form-input
                  id="interest"
                  type="number"
                  class="col-sm-6"
                  required
                ></b-form-input>
              </b-form-group>
              <div class="calculator-results">
                <b-container>
                  <b-row>
                    <b-col sm="6" class="text-right"><span class="title">Down Payment:</span></b-col>
                    <b-col sm="6" class="text-left"><span class="value">$1000</span></b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="6" class="text-right"><span class="title">Amount Financed:</span></b-col>
                    <b-col sm="6" class="text-left"><span class="value">$3000</span></b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="6" class="text-right"><span class="title">Monthly Payment:</span></b-col>
                    <b-col sm="6" class="text-left"><span class="value">$4000</span></b-col>
                  </b-row>
                </b-container>              
              </div>
              <b-button type="submit" class="btn-calculate text-white">Calculate</b-button>
              <p class="small-info">Instructions: Enter numbers and decimal points. No commas or other characters.</p>
            </b-form>
          </div>
        </b-col>  
      </b-row>
    </transition>
  </b-container>
</template>

<script>
export default {
  data: () => ({
    name: '212 West 18th St PENTHOUSE1, NEW YORK, NY 10011',
    price: '45,000,000',
    windowHeight: 0,
    showCalculator: false
  }),
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowHeight);

      this.getWindowHeight()
    })
  },
  methods: {
    getWindowHeight(event) {
        let headerHeight = document.querySelector('header').offsetHeight
        let calculatorHeaderHeight = document.querySelector('.header-block').clientHeight
        let actionsHeight = document.querySelector('.actions-block').clientHeight
        const style = getComputedStyle(document.querySelector('.component-section'));
        this.windowHeight = document.documentElement.clientHeight - headerHeight - calculatorHeaderHeight - actionsHeight - parseFloat(style.marginTop);
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowHeight);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
