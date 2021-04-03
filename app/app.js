import Vue from "nativescript-vue";
import App from "./components/App";
import Alert from "./components/Alert";
import DrawerContent from "./components/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
Vue.use(RadSideDrawer);

Vue.config.silent = (TNS_ENV === 'production');

new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(Alert, { slot: 'mainContent' })
          ]
        )
      }
  }).$start();
