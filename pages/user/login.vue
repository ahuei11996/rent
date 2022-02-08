<template>
	<view class="padding0-40">
		<u-gap height="120rpx"></u-gap>
		<view class="margin-top40 globalMask">
			<u-input v-model="phone" placeholder="请输入手机号"></u-input>
			<u-gap height="40rpx"></u-gap>
			<u-input v-model="password" placeholder="请输入密码"></u-input>
			<u-gap height="40rpx"></u-gap>
			<u-button type="primary" :plain="buttonPlain" :disabled="buttonPlain" text="登录"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				phone: "",
				password: "",
				
			}
		},
		computed:{
			buttonPlain() {
				if(this.phone && this.password) {
					return false
				} else {
					return true
				}
			} 
			
		}
		
	}
</script>

<style>
</style>
