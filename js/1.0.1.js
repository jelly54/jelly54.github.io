var i = 0;
var str ="L柳絮抚风，微醺了浅湖L我轻触你指尖的纹路L诧异流连眼眸L抵不过掌心的温柔L你不问我来方L我不知你去向L只默然凝望L欢迎来到 Jelly 的 blog，希望我的文章对你的学习有帮助。Lblog中如有不妥之处，欢迎随时留言指正。"
        
window.onload=function typing (){
	//js 获取div
	var mydiv = document.getElementById("post-js");
	if(str.charAt(i) == 'L'){
    	mydiv.innerHTML += '<br/>';
	}else{
	    mydiv.innerHTML += str.charAt(i);
	}
	i++;
	var id = setTimeout(typing,100);
	if(i==str.length){
		clearTimeout(id);
	}

}