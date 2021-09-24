<template>
	<Layout class="i-layout" :style="{ width: deviceWidth }">
		<Header></Header>
		<Content class="content">
			<div class="user-box">
				<div class="user-left">
					<Menu :active-name="currentMenu" v-if="!isMobile" ref="menu" theme="light" @on-select="handleSelectMenu" class="user-menu">
						<div class="menu-header">
							<img src="../../assets/images/user/user-menu-top-left.png" />
							<img src="../../assets/images/user/user-menu-top-right.png" />
						</div>
						<div class="menu-avatar"><img src="../../assets/images/user/avatar.png" style="width: 100%;" /></div>
						<MenuItem v-for="(item, index) in menuList" :name="item.name" :key="index">{{ item.title }}</MenuItem>
					</Menu>
					<img src="../../assets/images/user/user-bottom.png" width="240px" />
				</div>
				<div class="user-content">
					<index v-if="currentMenu=='index'"></index>
					<account v-if="currentMenu=='account'"></account>
					<password v-if="currentMenu=='password'"></password>
				</div>
			</div>
		</Content>
		<Footer></Footer>
	</Layout>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/header';
import Footer from '@/components/footer';
import mixinCommon from '@/mixin/common.vue';
import index from './index/index';
import account from './account/index';
import password from './password/index';

export default {
	components: { Header, Footer, index, account, password },
	mixins: [mixinCommon],
	computed: {
		...mapState(['isMobile'])
	},
	data () {
		return {
			currentMenu: 'index',
			menuList: [
				{ name: 'account', title: '我的账户' },
				{ name: 'myOrder', title: '我的订单' },
				{ name: 'myLike', title: '我的点赞' },
				{ name: 'myPublish', title: '我的发布' },
				{ name: 'page3', title: '消息通知' },
				{ name: 'page5', title: '历史记录' },
				{ name: 'info', title: '个人资料' },
				{ name: 'password', title: '修改密码' },
				{ name: 'grade', title: '等级成长' }
			]
		};
	},
	methods: {
		// 选择菜单
		handleSelectMenu (val) {
			this.currentMenu = val
			// window.location.href = '/' + val;
		}
	}
};
</script>

<style lang="less">
.content {
	background-image: url('../../assets/images/expressLine/shading2.jpg');
	width: 100%;
	padding: 0 240px 0 240px;
	.user-box {
		margin: 50px 0;
		display: flex;
		.user-left {
			.user-menu {
				.menu-header {
					display: flex;
					justify-content: space-between;
				}
				.menu-avatar {
					padding: 20px 30px;
					display: flex;
					justify-content: space-between;
				}
			}
		}
		.user-content {
			margin-left: 20px;
			padding: 16px;
			width: 100%;
			background-color: #ffffff;
		}
	}
}
</style>
