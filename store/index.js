/**
 * 
 * author: magiclock
 * create_time: 2021/07/14
 * 
 **/

import Vue from 'vue'
import Vuex from 'vuex'
import {
	setField
} from "@/common/global.js"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token : uni.getStorageSync(`${setField.token}`) || null,
		userInfo: uni.getStorageSync(`${setField.userInfo}`) ? JSON.parse(uni.getStorageSync(`${setField.userInfo}`)) : null,
		storeInfo: uni.getStorageSync(`${setField.storeInfo}`) ? JSON.parse(uni.getStorageSync(`${setField.storeInfo}`)) : null,
		userLevel: uni.getStorageSync(`${setField.userLevel}`) ? JSON.parse(uni.getStorageSync(`${setField.userLevel}`)) : null,
		oneStart: uni.getStorageSync(`${setField.oneStart}`) === 0 ? false : true,
		globalData: {
			servicePhone: null,
			email: null,
			info: null,
			personInfo: null,
			finalInfo:null
		}
    },
	mutations: {
		SET_TOKEN(state,token){
			state.token = token
		},
		SET_USERINFO(state,userInfo){
			state.userInfo = userInfo
		},
		SET_STOREINFO(state,storeInfo){
			state.storeInfo = storeInfo
		},
		SET_ONESTART(state){
			uni.setStorageSync(`${setField.oneStart}`,0)
			state.oneStart = true
		},
		SET_GLOBALDATA(state,data) {
			state.globalData = data
		},
		SET_LEVELINFO(state,levelInfo) {
			state.userLevel = levelInfo
		}
	},
	actions:{		
		Login({commit},user){
			let userInfo = user.businessUser
			let token = userInfo.token
			let levelInfo = {level: user.level,name: user.vipName}
			
			uni.setStorageSync(`${setField.token}`,token)
			uni.setStorageSync(`${setField.userLevel}`,JSON.stringify(levelInfo))
			uni.setStorageSync(`${setField.userInfo}`,JSON.stringify(userInfo))
			
			commit("SET_TOKEN",token)
			commit("SET_USERINFO",userInfo)
			commit("SET_LEVELINFO",levelInfo)
			
		},
		Logout({commit}) {
			uni.clearStorageSync(`${setField.token}`)
			uni.clearStorageSync(`${setField.userInfo}`)
			uni.clearStorageSync(`${setField.storeInfo}`)
			commit("SET_TOKEN",null)
			commit("SET_USERINFO",null)
			commit("SET_STOREINFO",null)
		},
		SetUser({commit},user) {			
			let levelInfo = {level: user.level,name: user.vipName}
			let userInfo = user.businessUser
			uni.setStorageSync(`${setField.userLevel}`,JSON.stringify(levelInfo))
			uni.setStorageSync(`${setField.userInfo}`,JSON.stringify(userInfo))
			commit("SET_USERINFO",userInfo)
			commit("SET_LEVELINFO",levelInfo)
		},
		SetStore({commit},storeInfo) {			
			uni.setStorageSync(`${setField.storeInfo}`,JSON.stringify(storeInfo))
			commit("SET_STOREINFO",storeInfo)
		},
		SetGlobalData({commit},data) {
			commit("SET_GLOBALDATA",data)
		},
	},
	getters: {
	    userInfo: state => {
	        return state.userInfo
	    },
	    token: state => {
	        return state.token
	    },
		globalData: state => {
			return state.globalData
		}
	}
})

export default store