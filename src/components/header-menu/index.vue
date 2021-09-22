<template>
    <div class="i-layout-header-menu" :class="{ 'i-layout-header-menu-mobile': isMobile}">
        <Menu mode="horizontal" :active-name="pageName" v-if="!isMobile" ref="menu" theme="light" @on-select="handleSelectMenu">
            <MenuItem v-for="(item, index) in menuList" :name="item.name" :key="index">
                {{item.title}}
            </MenuItem>
        </Menu>
        <div class="i-layout-header-trigger i-layout-header-trigger-min" v-else>
            <Dropdown trigger="click" :class="{ 'i-layout-header-menu-mobile-drop': isMobile }">
                <Icon type="ios-apps" />
                <DropdownMenu slot="list">
                    <div v-for="item in menuList" :to="item.path" :key="item.path" @click="handleSelectMenu(item.name)">
                        <DropdownItem>{{item.title}}</DropdownItem>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script>
    import { mapState, mapMutations } from 'vuex';
    export default {
        name: 'iHeaderMenu',
        computed: {
            ...mapState(['isMobile', 'pageName'])
        },
        data () {
            return {
                menuList: [
                    { name: 'splitline', title: '' },
                    { name: 'index', title: '首页' },
                    { name: 'expressLine', title: '非遗快线' },
                    { name: 'page2', title: '荣誉榜' },
                    { name: 'page4', title: '非遗大学堂' },
                    { name: 'page3', title: '非遗数字体验' },
                    { name: 'page5', title: '非遗旅游' },
                    { name: 'page6', title: '非遗交流' },
                    { name: 'page7', title: '非遗大集' },
                    { name: 'page8', title: '后援团' },
                    { name: 'page9', title: '非遗大数据' },
                    { name: 'page10', title: '联系我们' }
                ]
            }
        },
        methods: {
            handleSelectMenu(val) {
                window.location.href = ('/' + val)
            }
        }
    }
</script>
