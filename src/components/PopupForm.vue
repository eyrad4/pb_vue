<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <a 
          href="#"
          @click.prevent="showPopup = !showPopup"
        >popup</a>
      </b-col>
    </b-row>
    <transition name="fade">
      <div class="popup-block" v-if="showPopup">
        <b-container class="popup-container">
          <b-row>
            <b-col md="8" class="form-block">
              <h2>Customer Infromation</h2>
              <b-form @submit.prevent="send">
                <b-form-row>
                  <b-col>
                    <b-form-group
                      id="name"
                      label="First Name"
                      label-for="name"
                      :class="{ 'error-group': $v.form.name.$error }"
                    >
                      <b-form-input 
                        id="name"
                        v-model.trim="form.name"
                        :state="!$v.form.name.$invalid"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group
                      id="lastname"
                      label="Last Name"
                      label-for="lastname"
                      :class="{ 'error-group': $v.form.lastname.$error }"
                    >
                      <b-form-input 
                        id="lastname"
                        v-model.trim="form.lastname"
                        :state="!$v.form.lastname.$invalid"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-form-row>              
                <b-form-row>
                  <b-col>
                    <b-form-group
                      id="address"
                      label="Address"
                      label-for="address"
                      :class="{ 'error-group': $v.form.address.$error }"
                    >
                      <b-form-input 
                        id="address"
                        v-model.trim="form.address"
                        :state="!$v.form.address.$invalid"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col>
                    <b-form-group
                      id="country"
                      label="Country"
                      label-for="country"
                      :class="{ 'error-group': $v.form.country.$error }"
                    >
                      <b-form-select 
                        v-model="form.country" 
                        :options="countryList"
                        :state="!$v.form.country.$invalid"
                      >
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group
                      id="city"
                      label="City"
                      label-for="city"
                      :class="{ 'error-group': $v.form.city.$error }"
                    >
                      <b-form-input 
                        id="city"
                        v-model.trim="form.city"
                        :state="!$v.form.city.$invalid"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-form-row>  
                <b-form-row>
                  <b-col>
                    <b-form-group
                      id="code"
                      label="Postal code"
                      label-for="code"
                      :class="{ 'error-group': $v.form.code.$error }"
                    >
                      <b-input-group>
                        <b-form-input 
                          id="code" 
                          v-model.trim="form.code"
                          :state="!$v.form.code.$invalid"
                        ></b-form-input>
                          <b-input-group-append>
                            <b-btn class="find-code-btn" variant="outline-secondary">Find</b-btn>
                          </b-input-group-append>
                      </b-input-group> 
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group
                      id="phone"
                      label="Phone"
                      label-for="phone"
                      :class="{ 'error-group': $v.form.phone.$error }"
                    >
                      <b-form-input 
                        id="phone"
                        v-model.trim="form.phone"
                        :state="!$v.form.phone.$invalid"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-form-row> 
                <b-form-row>
                  <b-col>
                    <a 
                    href="#"
                    class="return-btn"
                    @click.prevent="showPopup = !showPopup"
                    >&larr; Return to Page</a>
                  </b-col>
                  <b-col class="text-right">
                    <b-button 
                      type="submit"
                    >Purchase Land</b-button>
                  </b-col>
                </b-form-row>         
              </b-form>
            </b-col>
            <b-col md="4" class="purchases-item-block">
              <h2>Buy lands</h2>
              <div class="items">
                  <div class="item">
                    <div class="item-image">
                    <img src="./../assets/popup.jpg" alt="" width="175" height="175">
                    </div>
                    <div class="item-description">
                      <div class="title">Port Charlotte, Florida Land</div>
                      <div class="price">$ 1.2m</div>
                    </div>
                  </div>
                </div>
                <div class="total">
                  <span>Total</span>
                  <span>$ 1.2m</span>
                </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </transition>
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required } from "vuelidate/lib/validators"
export default {
  data: () => ({
    showPopup: false,
    form: {
      name: '',
      lastname: '',
      address: '',
      country: null,
      city: '',
      code: '',
      phone: ''
    },
    countryList: [
        { value: null, text: 'Select your country' },
        { value: 'Austria', text: 'Austria' },
        { value: 'Australia', text: 'Australia' },
        { value: 'Canada', text: 'Canada' },
        { value: 'Brazil', text: 'Brazil' },
        { value: 'Poland', text: 'Poland' },
        { value: 'Hungary', text: 'Hungary' },
      ]
  }),
  mixins: [
      validationMixin
    ],
  validations: {
    form: {
      name: {
        required
      },
      lastname: {
        required
      },
      address: {
        required
      },
      country: {
        required
      },
      city: {
        required
      },
      code: {
        required
      },
      phone: {
        required
      }
    }
  },
  methods: {
    send() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        alert(`Form send!!!`)
        this.$nextTick(() => {
          this.showPopup = !this.showPopup
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .popup-block{
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(228,228,228,0.8);
    left: 0px;
    top: 0px;
    z-index: 10;
  }
  .popup-block .popup-container {
    background: #fff;
    top: 20%;
    position: relative;
  }
  .popup-block h2{
    color: #333;
    font-weight: 400;
    font-size: 1.5rem;
  }
  .form-block,
  .purchases-item-block{    
    padding: 40px 30px;
  }
  .form-block form{
    margin-top: 30px;
  }
  .form-block form .form-row{
    margin-bottom: 10px;
  }
  .form-block form .form-row:last-child{
    margin-bottom: 0px;
  }
  .form-block form .b-form-group.form-group{
    color: #d4d9dc;
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 600;
  }
  .form-block form input.form-control,
  .form-block form select.form-control,
  .form-block form .find-code-btn {
    border-color: #dde3e7;
  }
  .form-block form .form-control{
    height: calc(2.25rem + 10px);
    border-radius: 0.15rem;
  }
  .form-block form .find-code-btn{
    color: #08cac3;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 500;
  } 
  .form-block form .find-code-btn:hover,
  .form-block form button[type="submit"]{
    color: #fff;
    background: #08cac3;
  }  
  .form-block form .return-btn{
    color: #788894;
    padding-top: 15px;
    display: block;
  }
  .form-block form .return-btn:hover{
    text-decoration: none;
    color: #69757e;
  }
  .form-block form button[type="submit"]{
    text-transform: uppercase;
    font-size: 0.8em;
    border: none;
    padding: 15px 60px;
  }
  .form-block form button[type="submit"]:hover{
    background: #04beb8;
  }
  .form-block form .error-group input,
  .form-block form .error-group select,
  .form-block form .error-group .find-code-btn{
    border-color: #ee3224 !important;
  }
  .purchases-item-block{
    background: #f0fafa;
  }
  .purchases-item-block h2 {
    padding-bottom: 30px;
  }
  .purchases-item-block .items{
    padding: 35px 0 30px 0;
    border-top: 1px solid #eee;
    border-bottom: 2px solid #e4e9ed;
  }
  .purchases-item-block .item{
    margin-top: 5px;
    display: flex;
  }
  .purchases-item-block .item .item-image img{
    width: 100px;
    height: 100px;
  }
  .purchases-item-block .item .item-description{ 
    vertical-align: top;
    margin-left: 1.5em;
    color: #778894;
    font-size: 17px; 
  }
  .purchases-item-block .item .item-description .title{       
    line-height: 1.8em;
  }
  .purchases-item-block .item .item-description .price{
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 0.5em
  }
  .purchases-item-block .total{
    display: flex;
    margin-top: 1.2em;
  }
  .purchases-item-block .total span{
    font-size: 1.2rem;
    color: #000;
    font-weight: 400;
    width: 50%;
  }
  .purchases-item-block .total span:first-child{
    text-align: left;
  }
  .purchases-item-block .total span:last-child{
    text-align: right;
    text-transform: uppercase;
  }
</style>

