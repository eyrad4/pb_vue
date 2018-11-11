<template>
  <b-container>
    <b-row>
      <b-col md="12" class="mt-5">
        <div 
          class="images-container hide-form"
          :style="{backgroundSize: backgroundSize +'%'}"
        >
          <div class="form text-center">
            <h2>Submit form</h2>
            <form @submit.prevent="submitForm">
              <transition name="fade" :duration="250">
                <div class="inputs" v-show="openHiddenForm">
                  <p><input 
                    type="text" 
                    v-model="$v.form.name.$model" 
                    placeholder="Name" 
                    :class="{ 'error': $v.form.name.$error }"
                  ></p>
                  <p><input 
                    type="text" 
                    v-model="$v.form.phone.$model" 
                    placeholder="Phone" 
                    :class="{ 'error': $v.form.phone.$error }"
                  ></p>
                  <p><input 
                    type="text" 
                    v-model="$v.form.email.$model" 
                    placeholder="Email" 
                    :class="{ 'error': $v.form.email.$error }"
                  ></p>
                  <p><textarea 
                    v-model="$v.form.message.$model" 
                    placeholder="Enter your message" 
                    :class="{ 'error': $v.form.message.$error }"
                  ></textarea></p>
                </div>
              </transition>
              <template v-if="openHiddenForm === true">
                <button type="submit">Submit form</button>
                <small class="close-form-btn"><a @click.prevent="showForm">close</a></small>
              </template>
              <template v-else>
                <button @click.prevent="showForm">Open form</button>
              </template>
            </form>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { required, email } from "vuelidate/lib/validators"

export default {
  data: () => ({
    openHiddenForm: false,
    formClass: '',
    backgroundSize: 100,
    form: {
      name: '',
      phone: '',
      email: '',
      message: ''
    },
    submitStatus: null
  }),
  methods: {
    showForm() {
      let form = document.querySelector('.images-container').classList
      this.formClass = form.toggle('hide-form') 
      this.backgroundSize = (!this.openHiddenForm) ? 70 : 100 

      if (!this.openHiddenForm === true) {
        setTimeout(() => {
          this.openHiddenForm = !this.openHiddenForm
        }, 500);
      } else {
        this.openHiddenForm = !this.openHiddenForm
      }
    },
    submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        alert(`Form send!!! Name: ${this.form.name}; Phone: ${this.form.phone}; Email: ${this.form.email}; Message: ${this.form.message}; `)
      }
    }
  },
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      phone: {
        required
      },
      message: {
        required
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .images-container{
    position: relative;
    width: 100%;
    height: 400px;
  }
  .images-container{
    background: url('./../assets/calc.jpg') no-repeat;
    background-size: 100%;
    width: 100%;
    transition: background-size 0.9s ease-in;
    -moz-transition: background-size 0.9s ease-in;
    -webkit-transition: background-size 0.9s ease-in;
    -o-transition: background-size 0.9s ease-in; 
    transition-delay: 0.3s;
    -moz-transition-delay: 0.3s;
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s; 
  }
  .images-container .form{
    max-height: 400px;
    height: 100%;
    width: 30%;
    background: #ddd;
    position: absolute;
    right: 0px;
    padding: 10px;
    transition: max-height 0.5s ease-in;
    bottom: 0px;   
  }  
  .images-container .form h2 {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
    letter-spacing: 0.5pt;
  }
  .images-container .form button{
    background: #333;
    border: none;
    color: #fff;
    display: block;
    margin: 0 auto;
    padding: 5px 8px;
    border-radius: 5px;
    font-size: 16px;
  }
  .images-container .form input,
  .images-container .form textarea{
    padding: 5px 8px;
    border-radius: 5px;
    margin-top: 5px;
    width: 100%;
    border: 1px solid #fff;
  }  
  .images-container .form input.error,
  .images-container .form textarea.error{
    border: 1px solid #ee3224;
  }
  .images-container .form textarea{
    resize: both;
    height: 120px;
  }
  .images-container .inputs{
    transition: all 0.5s ease-in;   
    -moz-transition: all 0.5s ease-in;
    -webkit-transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
    transition-delay: 0.5s;
    -moz-transition-delay: 0.5s;
    -webkit-transition-delay: 0.5s;
    -o-transition-delay: 0.5s;
  }
  .images-container.hide-form{
    transition: background-size 0.4s ease-in;
    -moz-transition: background-size 0.4s ease-in;
    -webkit-transition: background-size 0.4s ease-in;
    -o-transition: background-size 0.4s ease-in;
  }
  .images-container.hide-form .form{
    max-height: 80px;
    height: 100%;
    bottom: 0px;  
    transition: max-height 0.5s ease-in;   
    -moz-transition: max-height 0.5s ease-in; 
    -webkit-transition: max-height 0.5s ease-in; 
    -o-transition: max-height 0.5s ease-in;   
    transition-delay: 0.3s;
    -moz-transition-delay: 0.3s;
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
  }
  .images-container.hide-form .form button{
    top: 0px;
  }
  .images-container.hide-form .inputs{
    transition: all 0.1s ease-in;
    -moz-transition: all 0.1s ease-in;
    -webkit-transition: all 0.1s ease-in;
    -o-transition: all 0.1s ease-in;  
  }
  .close-form-btn{
    position: absolute;
    bottom: 15px;
    right: 20%;
    color: #ee3224
  }
  .close-form-btn:hover{
    cursor: pointer;
  }
</style>

