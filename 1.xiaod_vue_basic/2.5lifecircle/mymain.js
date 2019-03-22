 		// created 和 beforeCreate
		// A 可以操作数据 B 数据没有初始化

		// mounted 和 beforeMount
		// A 可以操作DOM B 还未生成DOM

		// updated 和 beforeUpdate
		//  A 可以获取最终数据 B 可以二次修改

		// destroyed 和 beforeDestroy

		// 组件的激活和停用
		// activated 和 deactivated


		var Test={
			template:`<div>
				我是test组件:{{ msg }}
				<button @click="msg+='1'">msg+1</button>
				</div>`,

			data(){
				return {
					msg:'HELLO VUE'
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

			//DOM挂载后
			beforeMount(){
				console.log('DOM挂载前')
				console.log(document.body.innerHTML)
			},

			//DOM挂载前
			mounted(){
				console.log('DOM挂载后')
				console.log(document.body.innerHTML)
			},

			beforeUpdate(){
				console.log('数据更新前')
				console.log(document.body.innerHTML)
			},

			updated(){
				console.log('数据更新后')
				console.log(document.body.innerHTML)
			},

			beforeDestroy(){
				console.log('销毁前')
			},

			destroyed(){
				console.log('销毁后')

			},

			activated(){
				console.log('组件激活')
			},

			deactivated(){
				console.log('组件停用')
			}
		}

		//没有使用keep-alive
		//当点击'创建/销毁组件'按钮
		//点击第一次 销毁前
		//点击第二次 销毁后
		new Vue({
			el:'#app',
			components:{
				Test
			},
			template:`
				<div>
					<test v-if="testshow"></test><br>
					<button @click='clickbut'>创建/销毁组件</button>
				</div>
			`,
			data(){
				return{
					'testshow':true
				}
			},
			methods:{
				clickbut(){
					this.testshow=!this.testshow
				}
			}
		})

		//使用keep-alive,防止总是创建销毁同一个组件引起的不必要的消耗
		//当点击'启动/停止组件'按钮
		//点击第一次 组件停用
		//点击第二次 组件激活
		new Vue({
			el:'#app2',
			components:{
				Test
			},
			template:`
				<div>
					<keep-alive><test v-if="testshow"></test></keep-alive><br>
					<button @click='clickbut'>启动/停止组件</button>
				</div>
			`,
			data(){
				return{
					'testshow':true
				}
			},
			methods:{
				clickbut(){
					this.testshow=!this.testshow
				}
			}
		})
