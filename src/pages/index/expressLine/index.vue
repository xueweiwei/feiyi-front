<template>
    <div class="container">
        <Row>
            <Col span="24" class="header">
                <img :src="titleImg">
            </Col>
        </Row>
        <Row type="flex" align="top" class="body">
            <Col :xs="0" :sm="12" :md="12" :lg="12" class="left">
                <img :src="image1" class="image1">
                <img :src="image2" class="image2">
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="12" class="right">
                <div class="menu">
                    <div class="menu-item" v-for="(item, index) in menuList" :key="index">
                        <div class="menu-item-text" :class="{'menu-item-text-selected': currentMenu == item.name}" @click="handleSelectMenu(item)">{{item.title}}</div>
                        <div class="menu-item-splitline" v-if="index < menuList.length-1"></div>
                    </div>
                </div>
                <div class="dataList">
                    <div class="dataList-item" v-for="(item, index) in dataList" :key="index">
                        <div class="dataList-item-box" :class="{'dataList-item-box-selected': currentData == item.id}" @click="handleDetail(item)">
                            <div>{{item.title}}</div>
                            <div class="dataList-item-box-content">{{item.content}}</div>
                            <div class="dataList-item-box-date">{{item.date}}</div>
                        </div>
                        <div class="dataList-item-splitline" v-if="index < dataList.length-1"></div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import TitleImg from '@/assets/images/expressLine/title.png';
    import Image1 from '@/assets/images/expressLine/image1.jpg';
    import Image2 from '@/assets/images/expressLine/image2.jpg';
    export default {
        data() {
            return {
                titleImg: TitleImg,
                image1: Image1,
                image2: Image2,
                currentMenu: 'news',
                currentData: 1,
                menuList: [
                    { name: 'news', title: '非遗新闻' },
                    { name: 'activity', title: '非遗活动' },
                    { name: 'mice', title: '会展资讯' },
                    { name: 'policy', title: '政策法规' },
                    { name: 'other', title: '其他资讯' }
                ],
                dataList: [
                    { id: 1, title: '中国非物质文化遗产保护协会非遗数字专业委员会成立', content: '王晓峰指出数字化对非遗保护传播的基础性作用和战略性作用越来越突出。非遗是历史的光芒，数字是当代的符号，非遗要从历史走向当代，必然要汲取当代科技，融入当代生活。数字化正在加速改变。科技，融入当代生活。数字化正在加速改变', date: '2021.07.25'},
                    { id: 2, title: '中国非物质文化遗产保护协会非遗数字专业委员会成立', content: '王晓峰指出数字化对非遗保护传播的基础性作用和战略性作用越来越突出。非遗是历史的光芒，数字是当代的符号，非遗要从历史走向当代，必然要汲取当代科技，融入当代生活。数字化正在加速改变。', date: '2021.07.25'},
                    { id: 3, title: '中国非物质文化遗产保护协会非遗数字专业委员会成立', content: '王晓峰指出数字化对非遗保护传播的基础性作用和战略性作用越来越突出。非遗是历史的光芒，数字是当代的符号，非遗要从历史走向当代，必然要汲取当代科技，融入当代生活。数字化正在加速改变。', date: '2021.07.25'},
                    { id: 4, title: '中国非物质文化遗产保护协会非遗数字专业委员会成立', content: '王晓峰指出数字化对非遗保护传播的基础性作用和战略性作用越来越突出。非遗是历史的光芒，数字是当代的符号，非遗要从历史走向当代，必然要汲取当代科技，融入当代生活。数字化正在加速改变。', date: '2021.07.25'}
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
        font-size: 1rem;
        background-image: url('../../../assets/images/expressLine/shading.jpg');
        width: 100%;
        padding-right: 200px;
        .header {
            display: flex;
            justify-content: center;
            padding: 70px 0;
        }
        .body {
            height: 770px;
        }
        .left {
            position: relative;
            .image1 {
                height: 100%;
            }
            .image2 {
                position: absolute;
                top: 240px;
                left: 200px;
            }
        }
        .right {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .menu {
                display: flex;
                align-items: center;
                margin-top: 20px;
                &-item {
                    display: flex;
                    align-items: center;
                    &-text {
                        cursor: pointer;
                        padding: 3px 10px;
                        &-selected {
                            background-color: #51b8aa;
                            color: #FFF;
                            border-radius: 3px;
                        }
                    }
                    &-splitline {
                        margin: 0 15px;
                        height: 1rem;
                        width: 2px;
                        background-color: #e8eaec;
                    }
                }
            }
            .dataList {
                height: 600px;
                margin-top: 70px;
                display: flex;
                flex-direction: column;
                overflow: auto;
                &-item {
                    &-box {
                        cursor: pointer;
                        padding: 20px 50px;
                        &-content {
                            margin-top: 5px;
                            font-size: 0.5rem;
                            line-height: 1.2rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            white-space:normal;
                        }
                        &-date {
                            margin-top: 10px;
                            font-size: 0.5rem;
                        }
                        &-selected {
                            background-image: url('../../../assets/images/expressLine/list-bg.jpg');
                            background-size: 100% 100%;
                            background-repeat: no-repeat;
                            color: #FFF;
                            border-radius: 5px;
                        }
                    }
                    &-splitline {
                        margin: 5px 0;
                        width: 100%;
                        height: 1px;
                        border-bottom: 1px dashed #dcdee2;
                    }
                }
            }
        }
    }
</style>