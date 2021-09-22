import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isMobile: false, // 是否为手机
        isTablet: false, // 是否为平板
        isDesktop: true, // 是否为桌面
        initDeviceWidth: '',
        deviceWidth: '', //设备宽度
        pageName: 'user'
    },
    mutations: {
        /**
         * @description 设置设备类型
         * @param {Object} state vuex state
         * @param {String} type 设备类型，可选值为 Mobile、Tablet、Desktop
         */
        setDevice (state, type) {
            state.isMobile = false;
            state.isTablet = false;
            state.isDesktop = false;
            state[`is${type}`] = true;
        },
       /**
         * @description 设置初駋化设备屏幕大小
         * @param {Object} state vuex state
         * @param {String} width 设备宽度，单位px
         */
        setInitDeviceWidth (state, width ) {
            state.initDeviceWidth = width;
        },
        /**
         * @description 设置设备屏幕大小
         * @param {Object} state vuex state
         * @param {String} width 设备宽度，单位px
         */
         setDeviceWidth (state, width ) {
            state.deviceWidth = width;
        }
     }
})