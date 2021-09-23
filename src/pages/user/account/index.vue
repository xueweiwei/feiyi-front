<template>
	<div class="user-content-main">
		<div class="user-contet-header"><img :src="contentLeftImg" /></div>
		<div class="person-box">
			<div class="person-box-left">
				<div class="person-box-item">
					<div class="title">用户名:</div>
					<div class="value">非遗文化</div>
				</div>
				<div class="person-box-item">
					<div class="title">会员等级:</div>
					<div class="value">匠人</div>
				</div>
				<div class="person-box-item">
					<div class="title">姓&emsp;&emsp;名:</div>
					<div class="value">非遗文化</div>
				</div>
				<div class="person-box-item">
					<div class="title">职业类型</div>
					<div class="value">0.00元</div>
				</div>
				<div class="person-box-item">
					<div class="title">单&emsp;&emsp;位:</div>
					<div class="value">北京民族大学</div>
				</div>
				<div class="person-box-item">
					<div class="title">职&emsp;&emsp;称:</div>
					<div class="value">二级教授</div>
				</div>
				<div class="person-box-item">
					<div class="title">所属地区:</div>
					<div class="value">北京-北京-朝阳区</div>
				</div>
				<div class="person-box-item">
					<div class="title">职&emsp;&emsp;称:</div>
					<div class="value">二级教授</div>
				</div>
				<div class="person-box-item">
					<div class="title">证件类型:</div>
					<div class="value">身份证</div>
				</div>
				<div class="person-box-item">
					<div class="title">证件号码:</div>
					<div class="value">110*************1345</div>
				</div>
				<div class="person-box-item">
					<div class="title">邮&emsp;&emsp;箱:</div>
					<div class="value">1717****@qq.com</div>
				</div>
				<div class="person-box-item">
					<div class="title">余&emsp;&emsp;额:</div>
					<div class="value">0.00元</div>
				</div>
				<div class="person-box-item">
					<div class="title">积&emsp;&emsp;分:</div>
					<div class="value">3650分</div>
				</div>
				<div class="person-box-item">
					<div class="title">手机号:</div>
					<div class="value">158*****3232</div>
				</div>
				<div class="person-box-item">
					<div class="title">邮&emsp;&emsp;箱:</div>
					<div class="value">1717****@qq.com</div>
				</div>
			</div>
			<div class="person-box-right">
				<img :src="avatar" style="width: 100px; height: 100px; margin-bottom: 16px;" />
				<Button>修改头像</Button>
				<div class="tip">支持jpg、jpeg、png格式的图片</div>
			</div>
		</div>
		
	</div>
</template>

<script>
import contentLeftImg from '@/assets/images/user/user-content-left.png';
import avatar from '@/assets/images/user/avatar.png';


export default {
	data() {
		return {
			contentLeftImg: contentLeftImg,
			avatar: avatar,
		};
	},
	methods: {}
};
</script>

<style lang="less" scoped>
.user-content-main {
	width: 100%;

	.header {
		display: flex;
		justify-content: center;
		padding: 70px 0;
	}
	.person-box {
		display: flex;
		justify-content: space-between;
		.person-box-left {
			display: flex;
			flex-direction: column;
			font-size: 14px;
			color: #000000;
			margin-left: 60px;
			.person-box-item {
				display: flex;
				margin: 10px 0;
				.title {
					width: 80px;
					font-weight: 500;
				}
			}
		}
		.person-box-right{
			display: flex;
			align-items: center;
			flex-direction: column;
			border-left: 1px solid #D2D2D2;
			padding:0 80px;
			.tip{
				color: #004638;
				font-size: 14px;
				margin-top: 12px;
			}
		}
	}
}
</style>
