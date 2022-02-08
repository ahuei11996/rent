<template>
	<view class="padding0-40">
		<u-gap height="120rpx"></u-gap>
		<view class="globalMask">
			<view class="flex-row flex-align-start" v-if="userInfo">
				<u-image class="flex-no-auto-zoom" mode="aspectFill" src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle" width="106rpx" height="106rpx"></u-image>
				<view class="flex-column flex-auto-zoom margin-left20">
					<text class="store-name">老谢</text>
					<view class="flex-row flex-align-center flex-between">
						<view class="flex-column flex-center authTags active">
							<text class="authTagsText">{{'未认证商家'}}</text>
						</view>
						<button class="defaultButton" @click="navTo('/pages/user/auth/edit')">
							<text class="defaultButtonText">去认证</text>
						</button>
						<button class="defaultButton" v-if="false" @click="navTo('/pages/user/auth/index')">
							<text class="defaultButtonText">审核中</text>
						</button>
					</view>
				</view>
			</view>
			<view class="flex-row flex-align-center" v-else  @click="navTo('/pages/user/login')">
				<u-image class="flex-no-auto-zoom" mode="aspectFill" src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle" width="106rpx" height="106rpx"></u-image>
				<view class="margin-left40 flex-auto-zoom">
					<view class="loginButton">
						<text class="loginButtonText">点击登录</text>
					</view>						
					<view class="flex-row flex-align-center flex-between margin-top10">
						<view class="flex-column flex-center authTags">
							<text class="authTagsText">未认证商家</text>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="globalMask margin-top40" style="padding:20rpx 40rpx;">
			<view class="flex-row flex-align-center flex-between userButton" 
				@click="navTo('/pages/set/auth/edit')"
				v-if="userStore && userStore.status == 4">
				<view class="flex-row flex-align-center">
					<!-- <image class="userButtonIcon" mode="aspectFit" src="@/static/images/set/b1.png"></image> -->
					<text class="margin-left30 userButtonText">修改认证信息</text>
				</view>
				<text class="iconfont-deer userButtonGo">&#xe61f;</text>
			</view>
			<view class="division" v-if="userStore && userStore.status == 4"></view>
			<view class="flex-row flex-align-center flex-between userButton"
				@click="navTo('/pages/set/pay_password')"
				v-if="userStore && userStore.status == 4">
				<view class="flex-row flex-align-center">
					<!-- <image class="userButtonIcon" mode="aspectFit" src="@/static/images/set/b2.png"></image> -->
					<text class="margin-left30 userButtonText">修改支付密码</text>
				</view>
				<text class="iconfont-deer userButtonGo">&#xe61f;</text>
			</view>
			<view class="division" v-if="userStore && userStore.status == 4"></view>
			<view class="flex-row flex-align-center flex-between userButton"
				@click="navTo('/pages/set/phone')"
				v-if="userInfo">
				<view class="flex-row flex-align-center">
					<!-- <image class="userButtonIcon" mode="aspectFit" src="@/static/images/set/b5.png"></image> -->
					<u-icon name="phone"></u-icon>
					<text class="margin-left30 userButtonText">修改绑定手机</text>
				</view>
				<u-icon name="arrow-right"></u-icon>
			</view>
			<view class="division" v-if="userInfo"></view>
			<view class="flex-row flex-align-center flex-between userButton"
			 @click="navTo('/pages/set/message')"
			 v-if="userInfo">
				<view class="flex-row flex-align-center">
					<!-- <image class="userButtonIcon" mode="aspectFit" src="@/static/images/set/b3.png"></image> -->
					<u-icon name="chat"></u-icon>
					<text class="margin-left30 userButtonText">消息提醒</text>
				</view>
				<u-icon name="arrow-right"></u-icon>
			</view>
			<view class="division" v-if="userInfo"></view>
			<view class="flex-row flex-align-center flex-between userButton"
			 @click="navTo('/pages/set/contact')"
			 >
				<view class="flex-row flex-align-center">
					<!-- <image class="userButtonIcon" mode="aspectFit" src="@/static/images/set/b4.png"></image> -->
					<u-icon name="kefu-ermai"></u-icon>
					<text class="margin-left30 userButtonText">联系客服</text>
				</view>
				<u-icon name="arrow-right"></u-icon>
			</view>
			<view class="division" v-if="userInfo"></view>
			<view class="flex-row flex-align-center flex-between userButton" v-if="userInfo" @click="userLogout">
				<view class="flex-row flex-align-center">
					<!-- <image class="userButtonIcon" mode="aspectFit" src="@/static/images/set/b6.png"></image> -->
					<u-icon name="lock-open"></u-icon>
					<text class="margin-left30 userButtonText">退出登录</text>
				</view>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		name: "",
		data() {
			return {
				
			}
		},
		computed:{
			userInfo() {
				return this.$store.state.userInfo
			},
			token() {
				return this.$store.state.token
			}
		},
		methods:{
			...mapActions (['Logout','SetUser']),
			userLogout() {
				this.Logout()
			},
			navTo(url) {
				uni.$u.route(url)
			}
		}
	}
</script>

<style>
	.defaultButton {
		width: 168rpx;
		height: 46rpx;
		background: #6952FC;
		border-radius: 26rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		/* padding: 0; */
		margin: 0;
	}
	
	.defaultButtonText {
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 40rpx;
	}
	
	.store-name {
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #141414;
		line-height: 50rpx;
	}
	
	.authTags {
		width: 144rpx;
		height: 40rpx;
		background: #DEDEDE;
		border-radius: 4rpx;
	}
	
	.authTags.active {
		background-color: #0091FF;
	}
	
	.authTagsText {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 33rpx;
	}
	
	.authTags.active .authTagsText {
		color: #FFFFFF;
	}
	
		.userButton {
			height: 100rpx;
		}
		
		.userButtonIcon {
			width: 40rpx;
			height: 40rpx;
		}
		
		.userButtonText {
			font-size: 30rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;
			line-height: 42rpx;
		}
		
		.explainBox {
			margin-top: 204rpx;
		}
		
		.loginButtonText {
			font-size: 36rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #141414;
			line-height: 50rpx;
		}
</style>
