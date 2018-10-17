
//  本地存储只能存字符串
//	数组 => 字符串 JSON.stringify()
//	字符串 => 数组 JSON.parse()

;((Vue) => {
	const todos = []

	window.app = new Vue({
		el:'#todoapp',
		data:{
			//数据
			todos:JSON.parse(window.localStorage.getItem('todos') || '[]'),
			//中间变量 编辑模式
			currentEditing:null,
			//过滤状态
			filterStat:'all',
		},
		computed:{
			//显示所有未完成的计划
			LeftCount () {
				return	this.todos.filter(item => item.completed === false).length
			},

			//控制清除被选中按钮的样式显示与隐藏
			clearButton () {
				return this.todos.filter(item => item.completed === true).length
			},

			//全选按钮静态属性
			allChecked:{
				get () {
					return this.todos.every(item => item.completed)
				},
				set (val) {
					this.todos.forEach(item => item.completed = val)
				}
			},

			//状态切换
			filterTodos () {
				switch (this.filterStat){
					case 'active':
						return this.todos.filter(item => !item.completed)
						break
					case 'completed':
						return this.todos.filter(item => item.completed)
						break
					default:
						return this.todos
						break
				}
			},
		},
		watch:{
			//观察者属性
			//默认只监视一层
			//如果您想让其深度监视,则需要配置deep为true
			//watch和计算属性不同，他用于定义你的业务功能
			todos:{
				handler:function (val) {
					//持久化数据 重写数据
					window.localStorage.setItem('todos',JSON.stringify(val))
				},
				deep:true
			}
		},
		methods:{
			//添加数据
			addTodo (event) {
				const todoText = event.target.value.trim()
				if(!todoText.length)return
				const id = this.todos.length === 0 ? 1 : this.todos[this.todos.length - 1].id + 1
				this.todos.push({
					id,
					title:todoText,
					completed:false
				})
				event.target.value = ''
			},

			//删除一条任务
			deleteTodo (index,event) {
				//删除数据，重写到本地存储中
				this.todos.splice(index,1)
			},

			//删除所有已完成
			deleteAllDone () {
				this.todos = this.todos.filter(item => !item.completed)
			},

			// 编辑模式处理
			saveEditing (item,index,event) {
				const value = event.target.value.trim()
				!value.length ? this.todos.splice(index,1) : item.title = value
				this.currentEditing = null
			},
		},
		directives:{
			focus:{
				inserted (el) {
					el.focus()
				}
			},
			'editing-focus':{
				update (el, binding) {
					if (binding) el.focus()
				}
			}
		}
	})
	//注册哈希事件
	window.onhashchange = function () {
		window.app.filterStat = window.location.hash.substr(2) || 'all'
	}
	//状态保持
	window.onhashchange()
})(Vue)
