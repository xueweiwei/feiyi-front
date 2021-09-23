<template>
	<div class="user-content-main">
		<div class="user-contet-header"><img :src="contentLeftImg" /></div>
		<div class="person-box">
			<div class="person-box-item">
				<div class="title">用户名:</div>
				<div class="value">非遗文化</div>
			</div>
			<div class="person-box-item">
				<div class="title">会员等级:</div>
				<div class="value">匠人</div>
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
				<div class="title">邮&emsp;&emsp;箱:</div>
				<div class="value">1717****@qq.com</div>
			</div>
		</div>
		<Divider></Divider>
		<div class="person-count">
			<div class="person-count-item">
				<div class="icon"><img :src="heartImg" style="width: 18px; height: 16px;" /></div>
				<div class="title">点赞</div>
				<div class="value">2+</div>
			</div>
			<div class="person-count-item">
				<div class="icon"><img :src="publishImg" style="width: 18px; height: 16px;" /></div>
				<div class="title">发布</div>
				<div class="value">2+</div>
			</div>
			<div class="person-count-item">
				<div class="icon"><img :src="feedbackImg" style="width: 18px; height: 16px;" /></div>
				<div class="title">评论</div>
				<div class="value">2+</div>
			</div>
		</div>
		<div class="person-btn">
			<img :src="waitHandle" style="width: 150px; height: 45px;" />
			<img :src="audit" style="width: 150px; height: 45px;" />
			<img :src="notPass" style="width: 150px; height: 45px;" />
			<img :src="waitUpdate" style="width: 150px; height: 45px;" />
		</div>	
	</div>
</template>

<script>
import contentLeftImg from '@/assets/images/user/user-content-left.png';
import heartImg from '@/assets/images/user/heart.png';
import publishImg from '@/assets/images/user/publish.png';
import feedbackImg from '@/assets/images/user/feedback.png';
import waitHandleChecked from '@/assets/images/user/wait-handle-checked.png';
import waitHandle from '@/assets/images/user/wait-handle.png';
import auditChecked from '@/assets/images/user/audit-checked.png';
import audit from '@/assets/images/user/audit.png';
import notPassChecked from '@/assets/images/user/not-pass-checked.png';
import notPass from '@/assets/images/user/not-pass.png';
import waitUpdateChecked from '@/assets/images/user/wait-update-checked.png';
import waitUpdate from '@/assets/images/user/wait-update.png';

export default {
	data() {
		return {
			contentLeftImg: contentLeftImg,
			heartImg: heartImg,
			publishImg: publishImg,
			feedbackImg: feedbackImg,
			waitHandleChecked:waitHandleChecked,
			waitHandle:waitHandle,
			auditChecked:auditChecked,
			audit:audit,
			notPassChecked:notPassChecked,
			notPass:notPass,
			waitUpdateChecked:waitUpdateChecked,
			waitUpdate:waitUpdate
		};
	},
	methods: {
	}
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
	.person-count {
		display: flex;
		flex-direction: row;
		font-size: 14px;
		color: #000000;
		justify-content: space-around;
		justify-items: center;
		.person-count-item {
			display: flex;
			margin: 10px 0;
			.title {
				font-weight: 500;
				margin: 0 10px;
			}
			.value {
				color: #408077;
			}
		}
	}
	.person-btn {
		margin-top: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		justify-items: center;
	}
	
}
</style>
