<template>
	<view class="padding0-40">
		<u-gap height="40rpx"></u-gap>
		<view class="flex-column">
			<text class="margin-top40 title">基础信息</text>
			<u-row customStyle="margin-top: 20rpx">
			    <u-col span="3">
			        <text class="small-title">简称</text>
			    </u-col>
			    <u-col span="9">
			        <u-input fontSize="24rpx" border="bottom" placeholder="简称"></u-input>
			    </u-col>
			</u-row>
			<u-row customStyle="margin-top: 20rpx">
			    <u-col span="3">
			        <text class="small-title">详细地址</text>
			    </u-col>
			    <u-col span="9">
			        <u-input fontSize="24rpx" border="bottom" placeholder="详细地址"></u-input>
			    </u-col>
			</u-row>
			<u-row customStyle="margin-top: 20rpx">
			    <u-col span="3">
			        <text class="small-title">小区名称</text>
			    </u-col>
			    <u-col span="9">
			        <u-input fontSize="24rpx" border="bottom" placeholder="小区名称"></u-input>
			    </u-col>
			</u-row>
			<u-row customStyle="margin-top: 20rpx">
			    <u-col span="3">
			        <text class="small-title">楼栋房号</text>
			    </u-col>
			    <u-col span="9">
			        <u-input fontSize="24rpx" border="bottom" placeholder="楼栋房号"></u-input>
			    </u-col>
			</u-row>
			<text class="margin-top40 title">物品清单</text>
			<view>
				<view class="margin-top40 globalMask" v-for="i in 2" :key="i">
					<u-row>
					    <u-col span="3">
					        <text class="small-title">名称</text>
					    </u-col>
					    <u-col span="9">
					        <u-input fontSize="24rpx" border="bottom" placeholder="名称"></u-input>
					    </u-col>
					</u-row>
					<u-row customStyle="margin-top: 20rpx">
					    <u-col span="3">
					        <text class="small-title">品牌</text>
					    </u-col>
					    <u-col span="9">
					        <u-input fontSize="24rpx" border="bottom" placeholder="品牌"></u-input>
					    </u-col>
					</u-row>
					<u-row customStyle="margin-top: 20rpx">
					    <u-col span="3">
					        <text class="small-title">型号</text>
					    </u-col>
					    <u-col span="9">
					        <u-input fontSize="24rpx" border="bottom" placeholder="型号"></u-input>
					    </u-col>
					</u-row>
					<u-row customStyle="margin-top: 20rpx">
					    <u-col span="3">
					        <text class="small-title">购买日期</text>
					    </u-col>
					    <u-col span="9">
					        <u-input fontSize="24rpx" border="bottom" placeholder="购买日期"></u-input>
					    </u-col>
					</u-row>
					<view class="flex-row flex-align-start flex-wrap margin-top20">
						<u-image 
							v-for="(i,k) in 6" :key="k"
							width="190rpx" height="190rpx" 
							mode="aspectFill" :class="{
								'margin-top20' : k >= 3,
								'margin-left10' : k != 0 && k != 3
							}"
							radius="16rpx"
							src="https://cdn.uviewui.com/uview/album/1.jpg"></u-image>
					</view>
				</view>
			</view>
			
			<text class="margin-top40 title">租房信息</text>
			<u-row customStyle="margin-top: 20rpx">
			    <u-col span="3">
			        <text class="small-title">租期</text>
			    </u-col>
			    <u-col span="9">
			        <u-input fontSize="24rpx" border="bottom" placeholder="租期"></u-input>
			    </u-col>
			</u-row>
			<u-row customStyle="margin-top: 20rpx">
			    <u-col span="3">
			        <text class="small-title">租金</text>
			    </u-col>
			    <u-col span="9">
			        <u-input fontSize="24rpx" border="bottom" placeholder="租金"></u-input>
			    </u-col>
			</u-row>
			<u-row customStyle="margin-top: 20rpx">
			    <u-col span="3">
			        <text class="small-title">支付方式</text>
			    </u-col>
			    <u-col span="9">
			        <u-input fontSize="24rpx" border="bottom" placeholder="支付方式(押一付二/年付/季付)"></u-input>
			    </u-col>
			</u-row>
			<u-row customStyle="margin-top: 20rpx">
			    <u-col span="3">
			        <text class="small-title">电费</text>
			    </u-col>
			    <u-col span="9">
			        <u-input fontSize="24rpx" border="bottom" placeholder="按供电收"></u-input>
			    </u-col>
			</u-row>
			<u-row customStyle="margin-top: 20rpx">
			    <u-col span="3">
			        <text class="small-title">水费</text>
			    </u-col>
			    <u-col span="9">
			        <u-input fontSize="24rpx" border="bottom" placeholder="按供电收"></u-input>
			    </u-col>
			</u-row>
			
			<view class="flex-row flex-between flex-align-center margin-top40">
				<text class="title">承租人</text>
				<view>
					<u-image src="/static/images/detail/scan.png" width="40rpx" height="40rpx"></u-image>
				</view>
			</view>			
			<u-row customStyle="margin-top: 20rpx">
			    <u-col span="3">
			        <text class="small-title">手机号</text>
			    </u-col>
			    <u-col span="9">
			        <u-input fontSize="24rpx" border="bottom" placeholder="手机号"></u-input>
			    </u-col>
			</u-row>
			<u-row customStyle="margin-top: 20rpx">
			    <u-col span="3">
			        <text class="small-title">姓名</text>
			    </u-col>
			    <u-col span="9">
			        <u-input fontSize="24rpx" border="bottom" placeholder="姓名"></u-input>
			    </u-col>
			</u-row>
			<u-row customStyle="margin-top: 20rpx">
			    <u-col span="3">
			        <text class="small-title">身份证号</text>
			    </u-col>
			    <u-col span="9">
			        <u-input fontSize="24rpx" border="bottom" placeholder="身份证号"></u-input>
			    </u-col>
			</u-row>
			<view class="flex-row flex-align-start flex-wrap margin-top20">
				<u-image style="background-color: #D1D1D1;"
					v-for="(i,k) in 2" :key="k"
					width="320rpx" height="320rpx" 
					mode="aspectFit" :class="{
						'margin-left30' : k == 1
					}"
					radius="16rpx"
					src="https://cdn.uviewui.com/uview/album/1.jpg"></u-image>
			</view>
			<u-button type="primary" :plain="buttonPlain" :disabled="buttonPlain" class="margin-top40" text="保存"></u-button>
			<pageBottom></pageBottom>
		</view>
	</view>
</template>

<script>
	export default {
		computed:{
			buttonPlain() {
				return false
				// if(this.phone && this.password) {
				// 	return false
				// } else {
				// 	return true
				// }
			} 
			
		}
	}
</script>

<style>
</style>
