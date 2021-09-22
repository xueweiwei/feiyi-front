<template>
    <Layout class="i-layout" :style="{'width': deviceWidth}">
        <Header></Header>
        <Content>
            <!--banner图-->
            <Banner></Banner>
            <!--非遗快线-->
            <ExpressLine></ExpressLine>
            <!--非遗旅游-->
            <Travel></Travel>
        </Content>
        <Footer></Footer>
    </Layout>
</template>

<script>
    import Header from '@/components/header';
    import Footer from '@/components/footer';
    import mixinCommon from '@/mixin/common.vue';
    import Banner from './banner';
    import ExpressLine from './expressLine';
    import Travel from './travel';
    export default {
        components: { Header, Footer, Banner, ExpressLine, Travel },
        mixins: [mixinCommon],
        data() {
            return {
                
            }
        },
        mounted() {
            console.log("###")
            console.log(this.deviceWidth)
        }
    }
</script>

<style lang="less">
    
</style>