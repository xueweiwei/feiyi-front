<template>
    <div class="policy">
        <div class="policy-dataList">
            <div class="policy-dataList-item" :class="{'policy-dataList-item-selected': currentData == item.id}" v-for="(item, index) in dataList" :key="index" @click="handleDetail(item)">
                <div class="policy-dataList-item-box">
                    <div class="policy-dataList-item-box-left">
                        <div class="policy-dataList-item-box-left-code">{{item.id}}</div>
                        <div class="policy-dataList-item-box-left-date" :style="{'color': currentData == item.id ? '#FFF' : '#808695'}">{{item.date}}</div>
                    </div>
                    <div class="policy-dataList-item-box-right">
                        <div class="policy-dataList-item-box-right-title">{{item.title}}</div>
                        <div class="policy-dataList-item-box-right-content" :style="{'color': currentData == item.id ? '#FFF' : '#808695'}">
                            <span>{{item.content}}</span>
                            <span class="c-margin-left-20">>></span>
                        </div>
                    </div>
                </div>
                <div class="policy-dataList-item-splitline"></div>
            </div>
        </div>
        <div class="policy-footer">
            <Page :total="40" prev-text="上一页" next-text="下一页"/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentData: 1,
                dataList: [
                    { id: 1, title: '第二届中国丹寨非遗周盛大开幕 | 推动非遗旅游融合发展 助力乡村振兴', content: '全国政协文化文史和学习委员会副主任雒树刚，文化和旅游部党组成员、中国非物质文化遗产保护协会会长王晓峰，国家中医药管理局党组织成员、副局长孙达，贵州省副省长谭炯，成达集团董事长王健林等领导嘉宾出席开幕仪式，并为第二届中国丹寨非遗周启幕。', date: '2021.05'},
                    { id: 2, title: '第二届中国丹寨非遗周盛大开幕 | 推动非遗旅游融合发展 助力乡村振兴', content: '全国政协文化文史和学习委员会副主任雒树刚，文化和旅游部党组成员、中国非物质文化遗产保护协会会长王晓峰，国家中医药管理局党组织成员、副局长孙达，贵州省副省长谭炯，成达集团董事长王健林等领导嘉宾出席开幕仪式，并为第二届中国丹寨非遗周启幕。', date: '2021.05'},
                    { id: 3, title: '第二届中国丹寨非遗周盛大开幕 | 推动非遗旅游融合发展 助力乡村振兴', content: '全国政协文化文史和学习委员会副主任雒树刚，文化和旅游部党组成员、中国非物质文化遗产保护协会会长王晓峰，国家中医药管理局党组织成员、副局长孙达，贵州省副省长谭炯，成达集团董事长王健林等领导嘉宾出席开幕仪式，并为第二届中国丹寨非遗周启幕。', date: '2021.05'},
                    { id: 4, title: '第二届中国丹寨非遗周盛大开幕 | 推动非遗旅游融合发展 助力乡村振兴', content: '全国政协文化文史和学习委员会副主任雒树刚，文化和旅游部党组成员、中国非物质文化遗产保护协会会长王晓峰，国家中医药管理局党组织成员、副局长孙达，贵州省副省长谭炯，成达集团董事长王健林等领导嘉宾出席开幕仪式，并为第二届中国丹寨非遗周启幕。', date: '2021.05'},
                    { id: 5, title: '第二届中国丹寨非遗周盛大开幕 | 推动非遗旅游融合发展 助力乡村振兴', content: '全国政协文化文史和学习委员会副主任雒树刚，文化和旅游部党组成员、中国非物质文化遗产保护协会会长王晓峰，国家中医药管理局党组织成员、副局长孙达，贵州省副省长谭炯，成达集团董事长王健林等领导嘉宾出席开幕仪式，并为第二届中国丹寨非遗周启幕。', date: '2021.05'},
                    { id: 6, title: '第二届中国丹寨非遗周盛大开幕 | 推动非遗旅游融合发展 助力乡村振兴', content: '全国政协文化文史和学习委员会副主任雒树刚，文化和旅游部党组成员、中国非物质文化遗产保护协会会长王晓峰，国家中医药管理局党组织成员、副局长孙达，贵州省副省长谭炯，成达集团董事长王健林等领导嘉宾出席开幕仪式，并为第二届中国丹寨非遗周启幕。', date: '2021.05'},
                    { id: 7, title: '第二届中国丹寨非遗周盛大开幕 | 推动非遗旅游融合发展 助力乡村振兴', content: '全国政协文化文史和学习委员会副主任雒树刚，文化和旅游部党组成员、中国非物质文化遗产保护协会会长王晓峰，国家中医药管理局党组织成员、副局长孙达，贵州省副省长谭炯，成达集团董事长王健林等领导嘉宾出席开幕仪式，并为第二届中国丹寨非遗周启幕。', date: '2021.05'},
                    { id: 8, title: '第二届中国丹寨非遗周盛大开幕 | 推动非遗旅游融合发展 助力乡村振兴', content: '全国政协文化文史和学习委员会副主任雒树刚，文化和旅游部党组成员、中国非物质文化遗产保护协会会长王晓峰，国家中医药管理局党组织成员、副局长孙达，贵州省副省长谭炯，成达集团董事长王健林等领导嘉宾出席开幕仪式，并为第二届中国丹寨非遗周启幕。', date: '2021.05'},
                    { id: 9, title: '第二届中国丹寨非遗周盛大开幕 | 推动非遗旅游融合发展 助力乡村振兴', content: '全国政协文化文史和学习委员会副主任雒树刚，文化和旅游部党组成员、中国非物质文化遗产保护协会会长王晓峰，国家中医药管理局党组织成员、副局长孙达，贵州省副省长谭炯，成达集团董事长王健林等领导嘉宾出席开幕仪式，并为第二届中国丹寨非遗周启幕。', date: '2021.05'},
                    { id: 10, title: '第二届中国丹寨非遗周盛大开幕 | 推动非遗旅游融合发展 助力乡村振兴', content: '全国政协文化文史和学习委员会副主任雒树刚，文化和旅游部党组成员、中国非物质文化遗产保护协会会长王晓峰，国家中医药管理局党组织成员、副局长孙达，贵州省副省长谭炯，成达集团董事长王健林等领导嘉宾出席开幕仪式，并为第二届中国丹寨非遗周启幕。', date: '2021.05'}
                ]
            }
        },
        methods: {
            //选择菜单
            handleDetail(val) {
                this.currentData = val.id;
            }
        }
    }
</script>

<style lang="less" scoped>
    .policy {
        background-color: #FFF;
        width: 100%;
        &-dataList {
            display: flex;
            flex-direction: column;
            &-item {
                padding: 0 50px;
                &-box {
                    cursor: pointer;
                    padding: 20px 0;
                    display: flex;
                    align-items: center;
                    &-left {
                        text-align: center;
                        &-code {
                            font-size: 1.5rem;
                        }
                    }
                    &-right {
                        margin-left: 40px;
                        &-title {
                            font-weight: bold;
                        }
                        &-content {
                            margin-top: 10px;
                        }
                    }
                }
                &-selected {
                    background-image: url('../../../assets/images/expressLine/list-bg2.jpg');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    color: #FFF;
                    border-radius: 5px;
                }
                &-splitline {
                    padding: 0 50px;
                    margin: 5px 0;
                    width: 100%;
                    height: 1px;
                    border-bottom: 1px solid #dcdee2;
                }
            }
        }
        &-footer {
            padding: 40px 50px;
            display: flex;
            justify-content: flex-end;
        }
    }   
</style>