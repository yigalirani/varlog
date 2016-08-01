'use strict'
var css=`<style>
.varlog .ns{
	color:red;
}
.varlog{
	background:#ffffcc;
	border: 1px solid Navy;
	display: inline-block;
	padding: 4px;
	margin: 2px;
}
.varlog table{
	display:none;
	border:1px dotted Navy;
	border-collapse: collapse;
}
.varlog  td{
	vertical-align: text-top;
	padding: 5px;

	border: 1px solid green;
}
.varlog  .odd{
	background:#eeffff;
}
.varlog  .even{
	background:white;	
}
</style>
<script>function attach_clicker(){
	function toggle(e){
		var d=e.style.display;
		e.style.display = (d == 'none'|| d == '') ? 'block' : 'none';
	}
	function clicker(evt){
		if (evt.target&&evt.target.className=='tg')
			toggle(evt.target.nextSibling);
	}
	document.addEventListener("click", clicker);//must be named function to aovid duplictaes
}
attach_clicker();
</script>
`;

module.exports = new function(){
	this.css=css; 
	this.dump=function(name,value,depth=3){
		return '<div class=varlog>'+name+':'+rd(value,3)+'</div>'
	}
}
function hi(x){
	return "<span class='ns'>"+x+"</span>"
}
function hasOwnProperty(x,name){//exception-tollerant x.hasOwnProperty 
	try{
		return x.hasOwnProperty(name)
	}catch(err){
		return true
	}
}
function rd(x,depth){
	var type=typeof x
	if (type in ['undefined','null','boolean','number'] || x ==null)
		return hi(x)
	if (type=='function')
		return hi('function')
	if (type=='string'){
		if (x=='')
			return hi('(empty string)')
		return x
	}
	if (type=='number'){
		return hi(x)
	}
	if (depth==0)
		return hi('(...)')
	if (x.length==0)
		return hi('array(0)');
	var count=0;
	var ans='';
	try{
		for (var name in x){
			if (!hasOwnProperty(x,name))
				continue
			count++
			var value=x[name];
			var cls=(count%2)?'odd':'even'
			ans+='<tr class='+cls+'><td>'+name+'</td><td>'+rd(value,depth-1)+'</td></tr>\n'
		}
	}catch(err){
		return hi(err.message);
	}
	if (count==0)
		return hi('object(0)')
	return ans='<a href=#'+count+' name='+count+' class=tg>object('+count+')</a><table>'+ans+'</table>'
}
