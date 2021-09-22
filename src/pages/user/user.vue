<template>
    <Layout class="i-layout" :style="{'width': deviceWidth}">
        <Header></Header>
        <Content class="content">
            <Row>
                <Col span="24" class="header">
                    <div class="header-menu">
                        <div class="header-menu-item" v-for="(item, index) in menuList" :key="index">
                            <div class="header-menu-item-text" :class="{'header-menu-item-text-selected': currentMenu == item.name}" @click="handleSelectMenu(item)">{{item.title}}</div>
                            <div class="header-menu-item-splitline" v-if="index < menuList.length-1"></div>
                        </div>
                    </div>
                </Col>
            </Row>
           <Row>
               <Col :xs="24" :sm="24" :md="24" :lg="24">
                   
                </Col>
            </Row>
        </Content>
        <Footer></Footer>
    </Layout>
</template>

<script>
    import Header from '@/components/header';
    import Footer from '@/components/footer';
    import mixinCommon from '@/mixin/common.vue';
   
    export default {
        components: { Header, Footer},
        mixins: [mixinCommon],
        data() {
            return {
                currentMenu: 'news',
                menuList: [
                    { name: 'news', title: '非遗新闻1' },
                    { name: 'activity', title: '非遗活动' },
                    { name: 'mice', title: '会展资讯' },
                    { name: 'policy', title: '政策法规' },
                    { name: 'other', title: '其他资讯' }
                ]
            }
        },
        methods: {
            //选择菜单
            handleSelectMenu(val) {
                this.currentMenu = val.name;
            }
        }
    }
</script>

<style lang="less">
    .content {
        background-image: url('../../assets/images/expressLine/shading2.jpg');
        width: 100%;
        padding: 0 360px 0 360px;
        .header {
            display: flex;
            justify-content: flex-end;
            padding: 40px 0;
            font-size: 0.8rem;
            &-menu {
                display: flex;
                align-items: center;
                &-item {
                    display: flex;
                    align-items: center;
                    &-text {
                        cursor: pointer;
                        padding: 3px 10px;
                        &-selected {
                            color: #5c0100;
                        }
                    }
                    &-splitline {
                        margin: 0 10px;
                        height: 1rem;
                        width: 2px;
                        background-color: #808695;
                    }
                }
            }
        }
    }
</style>