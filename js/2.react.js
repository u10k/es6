var persons = ['刘德华', '范冰冰', '郭跃'];
var style = {color:'red','font-size':'20px'};
ReactDOM.render(
<div>
{
	persons.map(function (person) {
	return <div style={style}>Hello, {person}!</div>
})
}
</div>,
	document.getElementById('app')
);