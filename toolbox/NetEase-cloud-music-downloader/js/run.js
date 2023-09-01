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
	if(music.value==="1320"){
		alert("欢迎开发者")
	}
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
	
	
	const watermarkId = "watermarkId";
	
	// 水印遮罩函数
	function watermarkUtils(settings, id) {
	    //默认设置
	    var defaultSettings={
	        watermark_txt: "text",
	        watermark_x: 0,//水印起始位置x轴坐标
	        watermark_y: 20,//水印起始位置Y轴坐标
	        watermark_rows: 1000,//水印行数
	        watermark_cols: 1000,//水印列数
	        watermark_x_space: 10,//水印x轴间隔
	        watermark_y_space: 40,//水印y轴间隔
	        watermark_color: '#000000',//水印字体颜色
	        watermark_alpha: 0.15,//水印透明度
	        watermark_fontsize: '15px',//水印字体大小
	        watermark_font: '../../fonts/cmdysj.ttf',//水印字体
	        watermark_width: 5,//水印宽度
	        watermark_height: 15,//水印长度
	        watermark_angle: 25//水印倾斜度数
	    };
	
	    if(typeof settings === "object") {
	        var src = settings;
	        for(let key in src) {
	            if(src[key] && defaultSettings[key] && src[key] === defaultSettings[key])
	            continue;
	            else if(src[key])
	            defaultSettings[key]=src[key];
	        }
	    }
	
	    var oTemp = document.createDocumentFragment();
	    //取页面最大宽度
	    var page_width = Math.max(document.body.scrollWidth,document.body.clientWidth);
	    //取页面最大长度
	    var page_height = Math.max(document.body.scrollHeight,document.body.clientHeight);
	
	    if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width *defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
	        defaultSettings.watermark_cols = parseInt((page_width-defaultSettings.watermark_x+defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
	        defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
	    }
	
	    if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
	        defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
	        defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
	    }
	    var x;
	    var y;
	    for (var i = 0; i < defaultSettings.watermark_rows; i++) {
	        y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
	        for (var j = 0; j < defaultSettings.watermark_cols; j++) {
	            x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;
	
	            var mask_div = document.createElement('div');
	            mask_div.id = 'mask_div' + i + j;
	            mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));
	            //水印div倾斜显示
	            mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
	            mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
	            mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
	            mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
	            mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
	            mask_div.style.visibility = "";
	            mask_div.style.position = "absolute";
	            //老子不让你选中
	            mask_div.style.left = x + 'px';
	            mask_div.style.top = y + 'px';
	            mask_div.style.overflow = "hidden";
	            mask_div.style.zIndex = "-9999";
	            mask_div.style.pointerEvents = "none";
	            mask_div.style.opacity = defaultSettings.watermark_alpha;
	            mask_div.style.fontSize = defaultSettings.watermark_fontsize;
	            mask_div.style.color = defaultSettings.watermark_color;
	            mask_div.style.textAlign = "center";
	            mask_div.style.width = defaultSettings.watermark_width + 'px';
	            mask_div.style.height = defaultSettings.watermark_height + 'px';
	            mask_div.style.display = "block";
	            oTemp.appendChild(mask_div);
	        };
	    };
	    try {
	        document.getElementById(id).appendChild(oTemp);
	    } catch(error) {
	        console.error(error, "？出猫饼了");
	    }
	};
	
	watermarkUtils({ watermark_txt: "@CHCAT1320", watermark_width: 120, watermark_fontsize: "14px" }, watermarkId);