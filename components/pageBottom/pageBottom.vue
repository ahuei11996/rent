<template>
	<u-gap :height="height"></u-gap>
</template>

<script>
	export default {
		name:"pageBottom",
		computed:{
			height() {
				return uni.getSystemInfoSync().safeAreaInsets.bottom + uni.upx2px(40)
			}
		}
	}
</script>

<style>
</style>
