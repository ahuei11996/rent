<template>
	<u-gap :height="height"></u-gap>
</template>

<script>
	export default {
		name:"pageBottom",
		computed:{
			height() {
				let bottomHeight = uni.getSystemInfoSync().safeAreaInsets.bottom
				if(bottomHeight > 0) {
					return bottomHeight + uni.upx2px(40)
				} else {
					return uni.upx2px(40)
				}
				
			}
		}
	}
</script>

<style>
</style>
