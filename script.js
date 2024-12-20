let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news(){
	list.innerHTML =list.innerHTML+ `
	<div class="news">
		<h2>${title.value}</h2>
		<p>${content.value}</p><hr>		
	</div>	
	`;
	title.value = "";
	content.value = "";
}

let i=0, imgArr=new Array();  //宣告使用變數 i 及 陣列 imgArr
imgArr[0] = "https://ncyuweb.ncyu.edu.tw/files/site_content/ncyu/emblem.jpg";
imgArr[1] = "http://ncyuweb.ncyu.edu.tw/files/list/secretary/%E5%9C%8B%E7%AB%8B%E5%98%89%E7%BE%A9%E6%8A%80%E8%A1%93%E5%AD%B8%E9%99%A2.jpg";
imgArr[2] = "https://upload.wikimedia.org/wikipedia/zh/thumb/4/49/National_Chiayi_University_seal.svg/1024px-National_Chiayi_University_seal.svg.png";
imgArr[3] = "https://www.ncyu.edu.tw/Uploads/Banner/01bef7ad-9f3f-4dc6-b1d3-749b12ace9d3.jpeg";


function showImg() {
  document.getElementById('ico').src = imgArr[i]; // 指定 img 的 src
  i = (i+1) % 4;  // 把 i加1 之後，除以3(因有三張圖輪播)，將餘數再放回變數 i 裡
} 

function show() { 
  setInterval(showImg, 2000);  //每隔2秒呼叫一次showImg函數
}