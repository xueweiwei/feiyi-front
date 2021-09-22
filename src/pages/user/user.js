// Vue
import Vue from 'vue';
import App from './user.vue';

// store
import store from './store';

//自定义指令
import importDirective from '@/directive'
importDirective(Vue);

//加载iview
import '@/styles/index.less';
import Iview from '@/components/iview/src';
Vue.component('Layout', Iview.Layout);
Vue.component('Header', Iview.Header);
Vue.component('Content', Iview.Content);
Vue.component('Footer', Iview.Footer);
Vue.component('Row', Iview.Row);
Vue.component('Col', Iview.Col);
Vue.component('Icon', Iview.Icon);
Vue.component('Carousel', Iview.Carousel);
Vue.component('CarouselItem', Iview.CarouselItem);
Vue.component('Menu', Iview.Menu);
Vue.component('MenuItem', Iview.MenuItem);
Vue.component('Dropdown', Iview.Dropdown);
Vue.component('DropdownMenu', Iview.DropdownMenu);
Vue.component('DropdownItem', Iview.DropdownItem);
Vue.component('Page', Iview.Page);



new Vue({
    store,
    render: h => h(App),
}).$mount('#app');
