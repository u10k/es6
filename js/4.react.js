var Person = React.createClass({
	//类似于约定了一个接口文档,用于这是验证传递给组件的属性，
	propTypes: {
		//定义msg的属性类型为字符串，必须传入
		name: React.PropTypes.string.isRequired,
		gender: React.PropTypes.string.isRequired,
		age:React.PropTypes.number.isRequired
	},
	getDefaultProps:function(){
		return {name:'无名氏'}
	},
	render: function() {
		//属性可以通过属性对象this.props中取出
		return (<h1>
			        {this.props.name}
					{this.props.gender}
					{this.props.age}
	            </h1>);
	}
});
var props = {
	gender:'男',
	age:18
}
ReactDOM.render(
<Person {...props} />,//属性可以在使用组件时传入
document.getElementById('app')
);