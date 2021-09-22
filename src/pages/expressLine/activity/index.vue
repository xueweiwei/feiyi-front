<template>
    <div class="activity">
        <Carousel v-model="currentBanner" loop autoplay :autoplay-speed="5000">
            <CarouselItem v-for="(item, index) in bannerList" :key="index">
                <Row>
                    <Col span="24">
                        <div class="activity-banner"><img :src="item.src"></div>
                    </Col>
                </Row>
            </CarouselItem>
        </Carousel>
        <div class="activity-body">
            <div class="activity-body-menu">
                <div class="activity-body-menu-item" :class="currentMenu == item.id ? 'activity-body-menu-item-selected' : 'activity-body-menu-item-noSelected'" v-for="(item, index) in menuList" :key="index" @click="handleSelectMenu(item)">
                    {{item.title}}
                </div>
            </div>
            <div class="activity-body-dataList">
                <Row :gutter="16">
                    <Col span="12" v-for="(item, index) in dataList" :key="index" :style="{'margin-top': index > 1 ? '20px' : '0'}">
                        <div class="activity-body-dataList-item">
                            <img class="activity-body-dataList-item-image" :src="item.src">
                            <div class="activity-body-dataList-item-box">
                                <div class="activity-body-dataList-item-box-title">{{item.title}}</div>
                                <div class="activity-body-dataList-item-box-date">{{item.date}}</div>
                                <div class="activity-body-dataList-item-box-content">{{item.content}}</div>
                                <div class="activity-body-dataList-item-box-btn">
                                    <img :src="singUp" v-if="item.state == 1">
                                    <img :src="noSingUp" v-else>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <div class="activity-footer">
            <Page :total="40" prev-text="上一页" next-text="下一页"/>
        </div>
    </div>
</template>

<script>
    import SingUp from '@/assets/images/expressLine/activity-singup.jpg';
    import NoSingUp from '@/assets/images/expressLine/activity-noSingup.jpg';
    export default {
        data() {
            return {
                singUp: SingUp,
                noSingUp: NoSingUp,
                currentBanner: 0,
                bannerList: [
                    { src: require('@/assets/images/expressLine/banner1.jpg') },
                    { src: require('@/assets/images/expressLine/banner2.jpg') },
                    { src: require('@/assets/images/expressLine/banner3.jpg') }
                ],
                currentMenu: 1,
                menuList: [
                    { id: 1, title: '非遗大赛' },
                    { id: 2, title: '非遗日' },
                    { id: 3, title: '其他非遗活动' },
                ],
                currentData: 1,
                dataList: [
                    { id: 1, src: require('@/assets/images/expressLine/activity-image1.jpg'), title: '非遗再造 成就未来-非遗创新设计大赛', content: '本次大赛围绕中国农历中的“二十四节气”展开。二十四个时间节点，二十四道自然变化，二十四场中国人与时间的对话，关于你，和你的生活', date: '2021.08.12', state: 1 },
                    { id: 2, src: require('@/assets/images/expressLine/activity-image2.jpg'), title: '非遗再造 成就未来-非遗创新设计大赛', content: '本次大赛围绕中国农历中的“二十四节气”展开。二十四个时间节点，二十四道自然变化，二十四场中国人与时间的对话，关于你，和你的生活', date: '2021.08.12', state: 1 },
                    { id: 3, src: require('@/assets/images/expressLine/activity-image3.jpg'), title: '非遗再造 成就未来-非遗创新设计大赛', content: '本次大赛围绕中国农历中的“二十四节气”展开。二十四个时间节点，二十四道自然变化，二十四场中国人与时间的对话，关于你，和你的生活', date: '2021.08.12', state: 1 },
                    { id: 4, src: require('@/assets/images/expressLine/activity-image4.jpg'), title: '非遗再造 成就未来-非遗创新设计大赛', content: '本次大赛围绕中国农历中的“二十四节气”展开。二十四个时间节点，二十四道自然变化，二十四场中国人与时间的对话，关于你，和你的生活', date: '2021.08.12', state: 1 },
                    { id: 5, src: require('@/assets/images/expressLine/activity-image5.jpg'), title: '非遗再造 成就未来-非遗创新设计大赛', content: '本次大赛围绕中国农历中的“二十四节气”展开。二十四个时间节点，二十四道自然变化，二十四场中国人与时间的对话，关于你，和你的生活', date: '2021.08.12', state: 1 },
                    { id: 6, src: require('@/assets/images/expressLine/activity-image6.jpg'), title: '非遗再造 成就未来-非遗创新设计大赛', content: '本次大赛围绕中国农历中的“二十四节气”展开。二十四个时间节点，二十四道自然变化，二十四场中国人与时间的对话，关于你，和你的生活', date: '2021.08.12', state: 1 },
                    { id: 7, src: require('@/assets/images/expressLine/activity-image7.jpg'), title: '非遗再造 成就未来-非遗创新设计大赛', content: '本次大赛围绕中国农历中的“二十四节气”展开。二十四个时间节点，二十四道自然变化，二十四场中国人与时间的对话，关于你，和你的生活', date: '2021.08.12', state: 0 },
                    { id: 8, src: require('@/assets/images/expressLine/activity-image8.jpg'), title: '非遗再造 成就未来-非遗创新设计大赛', content: '本次大赛围绕中国农历中的“二十四节气”展开。二十四个时间节点，二十四道自然变化，二十四场中国人与时间的对话，关于你，和你的生活', date: '2021.08.12', state: 0 }
                ]
            }
        },
        methods: {
            //选择菜单
            handleSelectMenu(val) {
                this.currentMenu = val.id;
            }
        }
    }
</script>

<style lang="less" scoped>
    .activity {
        width: 100%;
        background-color: #FFF;
        &-banner {
            width: 100%;
        }
        &-body {
            margin-top: 50px;
            &-menu {
                display: flex;
                justify-content: space-around;
                align-items: center;
                &-item {
                    padding: 10px 20px;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    cursor: pointer;
                    &-selected {
                        color: #FFF;
                        background-image: url('../../../assets/images/expressLine/activity-menuSelected.jpg');
                    }
                    &-noSelected {
                        background-image: url('../../../assets/images/expressLine/activity-menuNoSelected.jpg');
                    }
                }
            }
            &-dataList {
                margin-top: 50px;
                padding: 0 20px;
                &-item {
                    display: flex;
                    &-image {
                        width: 220px;
                        height: 150px;
                    }
                    &-box {
                        background-color: #f0f0f0;
                        padding: 10px;
                        margin-left: 20px;
                        &-title {
                            font-size: 0.8rem;
                            font-weight: bold;
                        }
                        &-date {
                            margin-top: 5px;
                            font-size: 0.5rem;
                            color: #808695;
                        }
                        &-content {
                            margin-top: 10px;
                            font-size: 0.5rem;
                            color: #808695;
                            line-height: 1rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            white-space:normal;
                        }
                        &-btn {
                            margin-top: 15px;
                            width: 150px;
                            height: 30px;
                        }
                    }
                }
            }
        }
        &-footer {
            padding: 30px 20px;
            display: flex;
            justify-content: flex-end;
        }
    }   
</style>