<template>
    <div class="container">
        <!--旅游线路-->
        <div class="line">
            <Row>
                <Col span="24" class="line-header">
                    <div><img :src="lineTitle1"></div>
                    <div class="c-margin-top-50"><img :src="lineTitle2"></div>
                </Col>
            </Row>
            <Row class="line-body">
                <Col :xs="0" :sm="12" :md="12" :lg="20">
                    <Row :gutter="16">
                        <Col span="6" v-for="(item, index) in lineDataList" :key="index">
                            <div class="line-body-box">
                                <div><img :src="item.src"></div>
                                <div class="line-body-box-title">{{item.title}}</div>
                                <div class="line-body-box-desc">{{item.desc}}</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col :xs="24" :sm="12" :md="12" :lg="4" class="line-body-select">
                    <div dis-hover v-for="(item, index) in privateList" :key="index" style="margin: 32px 0">
                        <div>{{item}}</div>
                    </div>
                </Col>
            </Row>
        </div>
        <!--网红打卡-->
        <div class="singin">
            <Row>
                <Col span="24" class="singin-header">
                    <div><img :src="singinTitle"></div>
                </Col>
            </Row>
            <div class="singin-body">
                <Waterfall col="5" :gutterWidth="5" :data="singinDataList">
                    <template>
                        <div class="singin-body-box" v-for="(item,index) in singinDataList" :key="index">
                            <img :src="item.src"  />
                            <div class="item-body">
                                <div class="item-descA">{{item.title}}</div>
                                <div class="item-descB">{{item.class}}</div>
                            </div>
                        </div>
                    </template>
                </Waterfall>
            </div>
            <Row>
                <Col span="24" class="singin-footer">
                    <div><img :src="singinMore"></div>
                </Col>
            </Row>
        </div>
         <!--体验、文创中心-->
        <div class="experience">
            <Row>
                <Col span="24" class="experience-header">
                    <div><img :src="experienceTitle"></div>
                </Col>
            </Row>
            <div class="experience-body">
                <div class="experience-body-image1"><img :src="experienceImage1"></div>
                <div class="experience-body-image2"><img :src="experienceImage2"></div>
                <div class="experience-body-shading">
                    <div class="experience-body-shading-header">
                        <div>河南非遗体验馆</div>
                    </div>
                    <div class="experience-body-shading-body">
                        <div>河南非遗体验馆是河南非遗网与河南非遗文创联盟共同打造的以非遗展示、非遗研学、手工体验为主题的展馆，体验馆展示项目近百种，体验项目设置有50多项。</div>
                    </div>
                    <div class="experience-body-shading-footer"><img :src="experienceDecorate"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Waterfall from 'vue-waterfall2';
    import LineTitle1 from '@/assets/images/travel/line-title1.png';
    import LineTitle2 from '@/assets/images/travel/line-title2.png';
    import SinginTitle from '@/assets/images/travel/singin-title.png';
    import SinginMore from '@/assets/images/travel/singin-more.png';
    import SinginFollow from '@/assets/images/travel/singin-follow.png';
    import SinginNoFollow from '@/assets/images/travel/singin-noFollow.png';
    import ExperienceTitle from '@/assets/images/travel/experience-title.png';
    import ExperienceImage1 from '@/assets/images/travel/experience-image1.png';
    import ExperienceImage2 from '@/assets/images/travel/experience-image2.png';
    import ExperienceDecorate from '@/assets/images/travel/experience-decorate.png';
    export default {
        components: { Waterfall },
        data() {
            return {
                lineTitle1: LineTitle1,
                lineTitle2: LineTitle2,
                singinTitle: SinginTitle,
                singinMore: SinginMore,
                singinFollow: SinginFollow,
                singinNoFollow: SinginNoFollow,
                experienceTitle: ExperienceTitle,
                experienceImage1: ExperienceImage1,
                experienceImage2: ExperienceImage2,
                experienceDecorate: ExperienceDecorate,
                lineDataList: [
                    {
                        src: require('@/assets/images/travel/line-image1.jpg'),
                        title: '丹寨万达小镇+贵州丹寨锦绣谷+苗族长桌宴',
                        desc: '丹寨万达小镇举行丰富多彩的“非遗进景区活动”，包括"軡地守艺“传统手工艺作品展、展示贵州省代表性非遗项目的'
                    },
                    {
                        src: require('@/assets/images/travel/line-image2.jpg'),
                        title: '丹寨万达小镇+贵州丹寨锦绣谷+苗族长桌宴',
                        desc: '丹寨万达小镇举行丰富多彩的“非遗进景区活动”，包括"軡地守艺“传统手工艺作品展、展示贵州省代表性非遗项目的'
                    },
                    {
                        src: require('@/assets/images/travel/line-image3.jpg'),
                        title: '丹寨万达小镇+贵州丹寨锦绣谷+苗族长桌宴',
                        desc: '丹寨万达小镇举行丰富多彩的“非遗进景区活动”，包括"軡地守艺“传统手工艺作品展、展示贵州省代表性非遗项目的'
                    },
                    {
                        src: require('@/assets/images/travel/line-image4.jpg'),
                        title: '丹寨万达小镇+贵州丹寨锦绣谷+苗族长桌宴',
                        desc: '丹寨万达小镇举行丰富多彩的“非遗进景区活动”，包括"軡地守艺“传统手工艺作品展、展示贵州省代表性非遗项目的'
                    }
                ],
                privateList: ['北京', '上海', '天津'],
                singinDataList: [
                    { src: require('@/assets/images/travel/singin-image1.jpg'), title: '30个文创品牌齐聚南京夫子庙龙门市集，玩转非遗+原创', avatar: require('@/assets/images/travel/singin-avatar.jpg'), author: '江苏非遗人', state: 0, fans: 888 },
                    { src: require('@/assets/images/travel/singin-image2.jpg'), title: '30个文创品牌齐聚南京夫子庙龙门市集，玩转非遗+原创', avatar: require('@/assets/images/travel/singin-avatar.jpg'), author: '江苏非遗人', state: 1, fans: 888 },
                    { src: require('@/assets/images/travel/singin-image3.jpg'), title: '30个文创品牌齐聚南京夫子庙龙门市集，玩转非遗+原创', avatar: require('@/assets/images/travel/singin-avatar.jpg'), author: '江苏非遗人', state: 0, fans: 888 },
                    { src: require('@/assets/images/travel/singin-image4.jpg'), title: '30个文创品牌齐聚南京夫子庙龙门市集，玩转非遗+原创', avatar: require('@/assets/images/travel/singin-avatar.jpg'), author: '江苏非遗人', state: 1, fans: 888 },
                    { src: require('@/assets/images/travel/singin-image5.jpg'), title: '30个文创品牌齐聚南京夫子庙龙门市集，玩转非遗+原创', avatar: require('@/assets/images/travel/singin-avatar.jpg'), author: '江苏非遗人', state: 0, fans: 888 },
                    { src: require('@/assets/images/travel/singin-image6.jpg'), title: '30个文创品牌齐聚南京夫子庙龙门市集，玩转非遗+原创', avatar: require('@/assets/images/travel/singin-avatar.jpg'), author: '江苏非遗人', state: 1, fans: 888 },
                    { src: require('@/assets/images/travel/singin-image7.jpg'), title: '30个文创品牌齐聚南京夫子庙龙门市集，玩转非遗+原创', avatar: require('@/assets/images/travel/singin-avatar.jpg'), author: '江苏非遗人', state: 0, fans: 888 },
                    { src: require('@/assets/images/travel/singin-image8.jpg'), title: '30个文创品牌齐聚南京夫子庙龙门市集，玩转非遗+原创', avatar: require('@/assets/images/travel/singin-avatar.jpg'), author: '江苏非遗人', state: 1, fans: 888 },
                    { src: require('@/assets/images/travel/singin-image9.jpg'), title: '30个文创品牌齐聚南京夫子庙龙门市集，玩转非遗+原创', avatar: require('@/assets/images/travel/singin-avatar.jpg'), author: '江苏非遗人', state: 0, fans: 888 },
                    { src: require('@/assets/images/travel/singin-image10.jpg'), title: '30个文创品牌齐聚南京夫子庙龙门市集，玩转非遗+原创', avatar: require('@/assets/images/travel/singin-avatar.jpg'), author: '江苏非遗人', state: 1, fans: 888 },
                    { src: require('@/assets/images/travel/singin-image11.jpg'), title: '30个文创品牌齐聚南京夫子庙龙门市集，玩转非遗+原创', avatar: require('@/assets/images/travel/singin-avatar.jpg'), author: '江苏非遗人', state: 0, fans: 888 }
                ]
            }
        },
        methods: {
            //选择菜单
            handleSelectMenu(val) {
                this.currentMenu = val.name;
            },
            //查看数据详情
            handleDetail(val) {
                this.currentData = val.id;
            }
        }
    }

</script>

<style lang="less" scoped>
    .container {
        width: 100%;
        font-size: 1rem;
        .line {
            background-image: url('../../../assets/images/travel/line-shading.jpg');
            padding: 70px 0;
            &-header {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            &-body {
                margin-top: 60px;
                padding: 0 200px;
                &-box {
                    width: 270px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    &-title {
                        margin-top: 10px;
                    }
                    &-desc {
                        margin-top: 10px;
                        font-size: 0.8rem;
                        line-height: 1.5rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        white-space:normal;
                    }
                }
                &-select {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
        .singin {
            background-color: #f8f8f8;
            padding: 70px 0;
            &-header {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &-body {
                margin-top: 60px;
                &-box {
                    width: 270px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    &-title {
                        margin-top: 10px;
                    }
                    &-desc {
                        margin-top: 10px;
                        font-size: 0.8rem;
                        line-height: 1.5rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        white-space:normal;
                    }
                }
                &-select {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
            &-footer {
                margin-top: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .experience {
            background-color: #FFF;
            padding: 70px 0 0 0;
            &-header {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &-body {
                margin-top: 60px;
                height: 880px;
                position: relative;
                &-image1 {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 11;
                }
                &-image2 {
                    position: absolute;
                    bottom: 0;
                    right: 120px;
                    z-index: 10;
                }
                &-shading {
                    position: absolute;
                    right: 150px;
                    bottom: 30px;
                    z-index: 12;
                    width: 555px;
                    height: 315px;
                    padding: 80px 40px 40px 40px;
                    background-image: url('../../../assets/images/travel/experience-shading.jpg');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    &-header{
                        font-size: 1.5rem;
                        font-weight: bold;
                    }
                    &-body {
                        margin-top: 30px;
                    }
                    &-footer {
                        margin-top: 30px;
                    }
                }
            }
        }
    }
</style>