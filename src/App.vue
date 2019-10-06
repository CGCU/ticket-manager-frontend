<template>
  <main id="app">
    <header>
      <router-link class="logo-link" to="/">
        <img class="logo" alt="CGCU Logo" src="./assets/logo.png">
      </router-link>
      <h1>CGCU Ticket Manager</h1>    
    </header>
    <router-view/>
  </main>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  created() {
    const query = location.search.substring(1);
    if (query.substr(0, 4) === 'key=') {
      localStorage.setItem('login-key', query.substring(4));
    }
  }
})
export default class AppComponent extends Vue {}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
  background: #eee;
  font-family: 'Arimo', Arial, sans-serif;
  font-weight: 500;
}
main#app {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 100%;
}
header {
  background: white;
  height: 60px;
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-shadow: 0 1px 4px #aaa;
          box-shadow: 0 1px 4px #aaa;
}
.logo-link {
  position: absolute;
  top: 2px;
  left: 8px;
}
header .logo {
  width: 56px;
}
header > h1 {
  margin: auto;
  text-align: center;
}
.page {
  overflow: auto;
  -webkit-box-flex: 1;
      -ms-flex: auto;
          flex: auto;
}
article {
  padding: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
h1 {
  font-size: 36px;
  margin-top: 0;
  font-weight: 500;
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none;
}
table {
  width: 100%;
  background: white;
  margin: 0 16px;
}
td {
  text-align: center;
}
</style>
