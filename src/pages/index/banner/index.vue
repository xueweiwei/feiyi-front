<template>
    <div class="container">
        <div class="leftArrow">
            <img  :class="{'leftArrow-mobile': isMobile}" :src="leftArrow">
        </div>
        <Carousel v-model="currentBanner" loop autoplay :autoplay-speed="5000" radius-dot>
            <CarouselItem v-for="(item, index) in bannerList" :key="index">
                <Row>
                    <Col span="24">
                        <div class="banner">
                            <img :src="item.src">
                        </div>
                    </Col>
                </Row>
            </CarouselItem>
        </Carousel>
        <div>
            <img class="rightArrow" :class="{'rightArrow-mobile': isMobile}" :src="rightArrow">
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import LeftArrow from '@/assets/icons/left-arrow.png';
    import RightArrow from '@/assets/icons/right-arrow.png';
    export default {
        data() {
            return {
                leftArrow: LeftArrow,
                rightArrow: RightArrow,
                currentBanner: 0,
                bannerList: [
                    { src: require('@/assets/images/banner1.jpg') },
                    { src: require('@/assets/images/banner1.jpg') }
                ]
            }
        },
        computed: {
            ...mapState(['isMobile'])
        }
    }

</script>

<style lang="less" scoped>
    .container {
        font-size: 1rem;
        width: 100%;
        position: relative;
    }
    .leftArrow {
        position: absolute;
        z-index: 1;
        top: 40%;
        left: 3%;
        cursor: pointer;
        &-mobile {
            width: 10px;
        }
    }
    .rightArrow {
        position: absolute;
        z-index: 1;
        top: 40%;
        right: 3%;
        cursor: pointer;
        &-mobile {
            width: 10px;
        }
    }
    .banner {
        img {
            width: 100%;
        }
    }
</style>