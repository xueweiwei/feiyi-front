<template>
    <Footer class="i-layout-footer">
        <div class="i-layout-footer-wrap" :class="footerWrapClasses">
            <Row type="flex" justify="center" align="bottom">
                <Col :xs="24" :sm="12" :md="12" :lg="12">
                    <div class="i-layout-footer-wrap-links">
                        <div class="i-layout-footer-wrap-links-title">
                            <div class="i-layout-footer-wrap-links-title-text">友情链接</div>
                            <div class="i-layout-footer-wrap-links-title-tag"></div>
                        </div>
                        <Row class="i-layout-footer-wrap-links-list">
                            <Col class="i-layout-footer-wrap-links-list-item" :xs="24" :sm="12" :md="12" :lg="12" v-for="(item, index) in linkList" :key="index">{{item.title}}</Col>
                        </Row>
                    </div>
                </Col>
                <Col :xs="24" :sm="12" :md="12" :lg="12" :class="{'c-margin-top-20': isMobile}">
                    <div class="i-layout-footer-wrap-qrcodes">
                        <div class="i-layout-footer-wrap-qrcodes-placeholder" v-if="!isMobile"></div>
                        <div class="i-layout-footer-wrap-qrcodes-qrcode" v-for="(item, index) in qrcodeList" :key="index">
                            <img :src="item.src"/>
                            <div>{{item.title}}</div>
                            <div>{{item.des}}</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <div class="i-layout-footer-wrap-inlink" :class="!isMobile ? 'i-layout-footer-wrap-inlink-pc' : 'i-layout-footer-wrap-inlink-mobile'">
                        <div class="i-layout-footer-wrap-inlink-item" v-for="(item, index) in inLinkList" :key="index">
                            <div>{{item.title}}</div>
                            <div class="i-layout-footer-wrap-inlink-item-splitline" v-if="index < inLinkList.length-1"></div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row :gutter="48" class="i-layout-footer-wrap-manager">
                <Col class="i-layout-footer-wrap-manager-item" :class="{'i-layout-footer-wrap-manager-item-pcr': !isMobile}" :xs="24" :sm="12" :md="12" :lg="12">
                    <div>主管：{{admin}}</div>
                </Col>
                <Col class="i-layout-footer-wrap-manager-item" :class="{'i-layout-footer-wrap-manager-item-pcl': !isMobile}" :xs="24" :sm="12" :md="12" :lg="12">
                    <div>主办：{{handle}}</div>
                </Col>
                <Col class="i-layout-footer-wrap-manager-item" :class="{'i-layout-footer-wrap-manager-item-pcr': !isMobile}" :xs="24" :sm="12" :md="12" :lg="12">
                    <div>京ICP备{{icpRecord}}</div>
                </Col>
                <Col class="i-layout-footer-wrap-manager-item" :class="{'i-layout-footer-wrap-manager-item-pcl': !isMobile}" :xs="24" :sm="12" :md="12" :lg="12">
                    <div>京公安网备{{policeRecord}}</div>
                </Col>
            </Row>
        </div>
        <div class="i-layout-footer-bar"></div>
    </Footer>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        data() {
            return {
                linkList: [
                    { title: '中华人民共和国文化和旅游部', link: '#' },
                    { title: '故宫博物馆', link: '#' },
                    { title: '中国非物质文化遗产网', link: '#' },
                    { title: '国家图书馆', link: '#' },
                    { title: '国家文物馆', link: '#' },
                    { title: '中国艺术研究院', link: '#' },
                    { title: '中国民俗学网', link: '#' },
                    { title: '中国数字文化集团', link: '#' }
                ],
                qrcodeList: [
                    { src: require('@/assets/images/qrcode-feiyirenzhijia.jpg'), title: '非遗人之家', des: '官方微信公众号' },
                    { src: require('@/assets/images/qrcode-feiyirenshuzizhanlanguan.jpg'), title: '非遗数字展览馆', des: '官方微信公众号' },
                    { src: require('@/assets/images/qrcode-feiyishenbaozhinan.jpg'), title: '非遗申报指南', des: '官方微信公众号' }
                ],
                inLinkList: [
                    { title: '网站地图', link: '#' },
                    { title: '关于我们', link: '#' },
                    { title: '联系我们', link: '#' },
                    { title: '版权与免责声明', link: '#' }
                ],
                admin: '中华人民共和国文化和旅游部',
                handle: '中国非物质文化遗产保护协会',
                icpRecord: '京ICP备16018551号-2',
                policeRecord: '88888888'
            }
        },
        computed: {
            ...mapState(['isMobile', 'isTablet', 'isDesktop']),
            footerWrapClasses () {
                return [
                    {
                        'i-layout-footer-wrap-mobile': this.isMobile,
                        'i-layout-footer-wrap-pc': !this.isMobile,   
                    }
                ];
            }
        }
    }
</script>