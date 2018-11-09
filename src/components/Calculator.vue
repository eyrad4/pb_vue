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
             <li><a href="#">Gallery</a></li>
             <li><a href="#">Floor Plan</a></li>
             <li><a href="#" @click="runCalculator">Mortgage Calculator</a></li>
           </ul>
          </nav>
        </div>
      </b-col>
    </b-row>
    <section style="height:600px;"></section>
    <transition name="fade">
      <b-row class="popup-caclulator active text-center" v-if="showCalculator">      
        <b-col md="3" offset-md="5">
          <div class="calculator-container">
              <span 
                class="menu-link text-red close-calculator"
                @click="showCalculator = !showCalculator"
                ><font-awesome-icon icon="times" /></span>
            <h2>Mortgage Calculator</h2>
            <b-form @submit.prevent="calculated">
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
                  v-model.trim="calc.amount"
                  :state="!$v.calc.amount.$invalid"
                  type="number"
                  class="col-sm-6"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                horizontal
                id=""
                label="Downpayment %:"
                label-for="calc.downpayment"
                label-cols="6"
                class="text-right calculator-elemet"
              >
                <b-form-input
                  id="downpayment"
                  type="number"
                  v-model.trim="calc.downpayment"
                  :state="!$v.calc.downpayment.$invalid"
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
                  v-model.trim="calc.terms"                  
                  :state="!$v.calc.terms.$invalid"
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
                  v-model.trim="calc.interest"
                  :state="!$v.calc.interest.$invalid"
                  class="col-sm-6"
                  required
                ></b-form-input>
              </b-form-group>
              <div class="calculator-results">
                <b-container>
                  <b-row>
                    <b-col sm="6" class="text-right"><span class="title">Down Payment:</span></b-col>
                    <b-col sm="6" class="text-left"><span class="value">${{ downpaymentResult }}</span></b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="6" class="text-right"><span class="title">Amount Financed:</span></b-col>
                    <b-col sm="6" class="text-left"><span class="value">${{ amountFinancedResult }}</span></b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="6" class="text-right"><span class="title">Monthly Payment:</span></b-col>
                    <b-col sm="6" class="text-left"><span class="value">${{ monthlyPaymentResult }}</span></b-col>
                  </b-row>
                </b-container>              
              </div>
              <b-button 
                type="submit" 
                class="btn-calculate text-white"
                :disabled="$v.calc.$invalid"
              >Calculate</b-button>
              <p class="small-info">Instructions: Enter numbers and decimal points. No commas or other characters.</p>
            </b-form>
          </div>
        </b-col>  
      </b-row>
    </transition>
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required } from "vuelidate/lib/validators"

export default {
  data: () => ({
    name: '212 West 18th St PENTHOUSE1, NEW YORK, NY 10011',
    price: '45,000,000',
    windowHeight: 0,
    showCalculator: false,
    downpaymentResult: 0,
    amountFinancedResult: 0,
    monthlyPaymentResult: 0,
    calc: {
      amount: 0,
      downpayment: 20,
      terms: 30,
      interest: 4.5,
    }
  }),
  mixins: [
      validationMixin
    ],
  validations: {
    calc: {
      amount: {
        required
      },
      downpayment: {
        required
      },
      terms: {
        required
      },
      interest: {
        required
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowHeight);

      this.getWindowHeight()
      this.calc.amount = parseFloat(this.price.replace(/,/g, ''))
    })
  },
  methods: {
    getWindowHeight() {
        let headerHeight = document.querySelector('header').offsetHeight
        let calculatorHeaderHeight = document.querySelector('.header-block').clientHeight
        let actionsHeight = document.querySelector('.actions-block').clientHeight
        const style = getComputedStyle(document.querySelector('.component-section'));
        this.windowHeight = document.documentElement.clientHeight - headerHeight - calculatorHeaderHeight - actionsHeight - parseFloat(style.marginTop);
    },
    calculated() {
      let interest = this.calc.interest
      this.downpaymentResult = this.calc.amount * (this.calc.downpayment / 100)
      this.amountFinancedResult = this.calc.amount - this.downpaymentResult
      const calc = ((interest / 100 / 12) * this.amountFinancedResult) / (1 - (Math.pow((1 + (interest / 100 / 12)), ((this.calc.terms - (this.calc.terms * 2)) * 12))))

      const numberFormat = new Intl.NumberFormat();
      this.monthlyPaymentResult = numberFormat.format(calc.toFixed(2))
    },
    runCalculator() {
      this.showCalculator = !this.showCalculator
      this.calculated()
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
