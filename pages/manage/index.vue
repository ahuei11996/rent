<template>
	<view class="padding0-40">
		<u-gap height="120rpx"></u-gap>
		<view class="flex-row globalMask" v-for="(item,key) in lists" :key="key" @click="navTo(`/pages/manage/detail`)" :class="{
			'margin-top20': key > 0
		}">
			<u-image class="flex-no-auto-zoom" src="https://cdn.uviewui.com/uview/album/1.jpg" radius="16rpx" width="180rpx" height="180rpx"></u-image>
			<view class="flex-auto-zoom margin-left20 flex-column flex-between">
				<text class="title">简写</text>
				<text class="lableText">海南·三亚·吉阳区</text>
				<text class="desc">望海花园 504</text>
				<text class="lableText">待租</text>
			</view>
		</view>
		<pageBottom></pageBottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: [
					{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
				]
			}
		},
		onLoad() {

		},
		onShow() {
			// uni.$u.route('/pages/user/login');
		},
		methods: {
			navTo(url) {
				uni.$u.route(url)
			}
		}
	}
</script>

<style>
</style>
