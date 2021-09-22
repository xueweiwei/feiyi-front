<template>
    <div class="i-layout-header-logo">
        <img :src="logoImg" class="i-layout-header-logo-pc" v-if="!isMobile">
        <img :src="logoImg" class="i-layout-header-logo-mobile" v-else>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import LogoImg from '@/assets/images/logo.png';
    import LogoSmallImg from '@/assets/images/logo-small.png';

    export default {
        name: 'iHeaderLogo',
        data() {
            return {
                logoImg: LogoImg,
                logoSmall: LogoSmallImg
            }
        },
        computed: {
            ...mapState(['isMobile'])
        }
    }
</script>
