 // created 和 beforeCreate 

		 // A 可以操作数据 B 数据没有初始化

		 // mounted 和 beforeMount

		 // A 可以操作DOM B 还未生成DOM

		 // updated 和 beforeUpdate

		 //  A 可以获取最终数据 B 可以二次修改

		 // destroyed 和 beforeDestroy
		var Test={
			template:`
				<div>我是Test组件{{ msg }}
				<button @click="msg+='1'">msg+1</button>
				</div>
			`,
			data(){
				return{
					msg:'HELLO VUE1111111222'
				}
			},
			//组件创建前
			beforeCreate(){
				console.log('组件创建前')
				console.log(this.msg)
			},
			//组件创建后
			created(){
				console.log('组件创建后')
				console.log(this.msg)
			},
			//Dom挂载前
			// beforeMount(){
			// 	console.log('Dom挂载前')
			// 	console.log(document.body.innerHTML)
			// },
			// //Dom挂载后
			// mounted(){
			// 	console.log('Dom挂载后')
			// 	console.log(document.body.innerHTML)
			// }
			//基于数据更新前
			beforeUpdate(){
					console.log('数据更新前')
					console.log(document.body.innerHTML)
			},

			//基于数据更新后
			updated(){
					console.log('数据更新后')
					console.log(document.body.innerHTML)
			},
			//销毁前
			beforeDestroy(){
				console.log('销毁前')
			},
			//销毁后
			destroyed(){
				console.log('销毁后')
			},
			//组件停用
			deactivated(){
				console.log('组件停用')
			},
			//组件激活
			activated (){
				console.log('组件激活')
			}
		}
		new Vue({
			el:'#app',
			components:{
				Test	
			},
			template:`
				<div>
					<keep-alive><test v-if='testshow'></test></keep-alive></br>
					<button @click='clickbut'>销毁组件</button>
				</div>
			`,
			data(){
				return {
					testshow:true
				}
			},
			methods:{
				clickbut(){
					this.testshow=!this.testshow
				}
			}
		})