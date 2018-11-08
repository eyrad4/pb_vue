<template>
  <div id="app">
    <header>
      <b-container fluid>
        <b-row fluid>
          <b-col>
            <div class="search">
              <span class="search-btn text-red"><font-awesome-icon icon="search" /></span>
              <b-input value="" name="" placeholder="Search agents or properties by address, neighborhood, or zip code" />
            </div>
          </b-col>
          <b-col>
            <div class="text-center logo"><img src="./assets/logo.png" /></div>
            </b-col>
          <b-col class="text-right">
            <span class="menu-link text-red"><font-awesome-icon icon="bars" /></span>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <section class="popup-menu">
      <nav>
        <b-nav class="pb-3 pt-3">
          <b-nav-item :to="{name:'Calculator'}">Calculator</b-nav-item>
          <b-nav-item>Gradient</b-nav-item>
          <b-nav-item>Form</b-nav-item>
        </b-nav>
      </nav>
    </section>
    <section class="component-section">
      <router-view/>
    </section>
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
    
  </div>
</template>

<script>

export default {
  data: () => ({
    siteName: 'Logo'
  })
}
</script>
  
<style>
    header .main-menu{
      list-style: none
    }
    header .main-menu li{
      display: inline-block;
      margin-right: 5px;
    }
    header .main-menu li:last-child{
      margin-right:0px;
    }
</style>
