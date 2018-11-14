<template>
  <div id="app">
    <header>
      <b-container fluid>
        <b-row fluid>
          <b-col>
            <!--div class="search">
              <span class="search-btn text-red"><font-awesome-icon icon="search" /></span>
              <b-input value="" name="" placeholder="Search agents or properties by address, neighborhood, or zip code" />
            </div-->
            <app-search></app-search>
          </b-col>
          <b-col>
            <div class="text-center logo"><img src="./assets/logo.png" /></div>
            </b-col>
          <b-col class="text-right">
            <span 
            class="menu-link text-red"
            @click="openMenu"
            >
            <transition name="fade">
              <font-awesome-icon icon="bars" v-if="showPopupMenu == false" />
              <font-awesome-icon icon="times" v-else />
            </transition>
            </span>
          </b-col>
        </b-row>
      </b-container>
    </header>    
    <transition name="fade" :duration="1000">
      <section class="component-section">
        <router-view/>
      </section>
    </transition>
    <footer>
      <b-container>
        <b-row>
          <b-col>
            <div class="copyright">
              &copy; {{ new Date().getFullYear() }}
            </div>
          </b-col>
        </b-row>
      </b-container>
    </footer>
    <transition name="fade" :duration="100">
      <section class="popup-menu active" v-show="showPopupMenu">
        <b-container>
          <b-row class="text-center">
            <b-col md="3" class="centered-menu">
              <nav>
                <b-nav vertical class="pb-3 pt-3">
                  <b-nav-item 
                    @click="toComponent('Calculator')"
                  >Calculator</b-nav-item>
                  <b-nav-item 
                    @click="toComponent('ProgressBar')"
                  >Gradient</b-nav-item>
                  <b-nav-item 
                    @click="toComponent('Form')"
                  >Form</b-nav-item>
                </b-nav>
              </nav>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </transition>
  </div>
</template>

<script>

export default {
  data: () => ({
    showPopupMenu: false
  }),
  methods: {
    openMenu() {      
      this.showPopupMenu= !this.showPopupMenu
      this.hideShowScroll()
    },
     hideShowScroll() {
      (this.showPopupMenu) ? document.querySelector('body').style = 'overflow: hidden' : document.querySelector('body').style = 'overflow: auto'
    },
    toComponent(componentName) {
      this.showPopupMenu = !this.showPopupMenu
      this.$router.push({name: componentName});
      this.$nextTick(() => {
        this.hideShowScroll()
      })
    }
  }
}
</script>
  
<style>
  .centered-menu{
    margin: 0 auto;
  }
</style>
