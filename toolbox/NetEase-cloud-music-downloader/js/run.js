  // body宽高
  let cw = 530,ch =670//1950 757
  let body = document.getElementById('body')
  body.style.width = `${cw}px`
  body.style.height = `${ch}px`

  // body缩放
  function windowResize() {
    // 窗口宽高
    let w = window.innerWidth, h = window.innerHeight
    // 缩放比例
    let r = w / cw < h / ch ? w / cw : h / ch
    body.style.transform = `scale( ${r})`
    body.style.marginLeft = (-(cw - r * cw) / 2 + (w - r * cw) / 2) + 'px'
    body.style.marginTop = (-(ch - r * ch) / 2 + (h - r * ch) / 2) + 'px'
    body.style.marginBottom = (-(h>ch?h:ch - r * ch)) + 'px'
    body.style.marginRight = (-(w>cw?w:cw - r * cw)) + 'px'
  }
  windowResize()
  // 监听窗口尺寸变化
  window.addEventListener('resize', windowResize);


function setStorage(){
                if(localStorage.counter){
                    localStorage.counter=Number(localStorage.counter)+1;
                }else{
                    localStorage.counter=1;
                }
                return localStorage.counter;
            }
            var counter=setStorage();
			var time=counter
			console.log(time)
			var tips=document.getElementById('tips');
			tips.innerHTML="&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"下载器已经为你下载了"+counter+"次了"+"，小小的赞助一下作者可以吧！毕竟开发还是很辛苦的。";

function closepopo(){
	document.getElementById("popo").style.display = "none";
	document.getElementById("shelter").style.display = "none";
}
window.onload = function() {
	document.getElementById("video").style.display="none";
	document.getElementById("popo").style.display = "none";
	document.getElementById("shelter").style.display = "none";
}
function ok(){
	var video=document.getElementById("video");
	var music=document.getElementById("music-id");
	var button=document.getElementById("but1");
	var buttons=document.getElementById("but2");
	if(music.value===""){
		tips.innerHTML="未知错误";
		buttons.style.display = "none";
		button.innerHTML="&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"好的"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
	}else{
		button.innerHTML="下次一定"
		document.getElementById("video").style.display="block";
		buttons.style.display = "block";
		tips.innerHTML="&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"下载器已经为你下载了"+counter+"次了"+"，小小的赞助一下作者可以吧！毕竟开发还是很辛苦的。";
	    var url="http://music.163.com/song/media/outer/url?id="+music.value+".mp3";
		video.src=url;
		video.load();
		video.play();
	}
	
	document.getElementById("popo").style.display = "block";
	document.getElementById("shelter").style.display = "block";
	}