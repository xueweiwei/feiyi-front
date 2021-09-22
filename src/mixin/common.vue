<script>
    import { on, off } from 'view-design/src/utils/dom';
    import { setMatchMedia } from 'view-design/src/utils/assist';

    import { mapMutations, mapState } from 'vuex';

    setMatchMedia();

    export default {
        computed: {
            ...mapState(['isMobile', 'initDeviceWidth', 'deviceWidth'])
        },
        methods: {
            ...mapMutations(['setDevice', 'setInitDeviceWidth', 'setDeviceWidth']),
            handleWindowResize () {
                this.handleMatchMedia();
            },
            handleMatchMedia () {
                const matchMedia = window.matchMedia;
                if (matchMedia('(max-width: 600px)').matches) {
                    this.setDevice('Mobile');
                    this.setDeviceWidth('100%');
                } else if (matchMedia('(max-width: 992px)').matches) {
                    this.setDevice('Tablet');
                    this.setDeviceWidth(this.initDeviceWidth);
                } else {
                    this.setDevice('Desktop');
                    this.setDeviceWidth(this.initDeviceWidth);
                }
            }
        },
        mounted () {
            on(window, 'resize', this.handleWindowResize);
            this.handleMatchMedia();
            this.setInitDeviceWidth(document.body.offsetWidth + 'px');
        },
        beforeDestroy () {
            off(window, 'resize', this.handleWindowResize);
        }
    }
</script>
