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
		</div>
		<Divider></Divider>
	</div>
</template>

<script>
import contentLeftImg from '@/assets/images/user/user-content-left.png';
import heartImg from '@/assets/images/user/heart.png';
import publishImg from '@/assets/images/user/publish.png';
import feedbackImg from '@/assets/images/user/feedback.png';

export default {
	data() {
		return {
			contentLeftImg: contentLeftImg,
			heartImg: heartImg,
			publishImg: publishImg,
			feedbackImg: feedbackImg
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
	}
}
</style>
