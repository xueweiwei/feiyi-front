<template>
    <Header class="i-layout-header" :class="headerClasses">
        <i-header-logo/>
        <i-header-menu v-if="!isMobile" ref="headerMenu" />
        <div class="i-layout-header-right">
            <i-header-menu v-if="isMobile" />
            <i-header-search />
            <i-header-user />
        </div>
    </Header>
</template>

<script>
    import { mapState } from 'vuex';
    import iHeaderLogo from './header-logo';
    import iHeaderMenu from './header-menu';
    import iHeaderSearch from './header-search';
    import iHeaderUser from './header-user';
    export default {
        components: {
            iHeaderLogo, iHeaderMenu, iHeaderSearch, iHeaderUser
        },
        computed: {
            ...mapState(['isMobile', 'isTablet', 'isDesktop']),
            headerClasses () {
                return [
                    {
                        'i-layout-header-mobile': this.isMobile,
                        'i-layout-header-pc': !this.isMobile,
                    }
                ];
            }
        }
    }

</script>
