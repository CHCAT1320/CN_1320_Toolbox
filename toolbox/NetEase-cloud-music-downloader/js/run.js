  // body宽高
  let cw = 550,ch =670//1950 757
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
			//console.log(time)
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
	document.getElementById("cw").style.display = "none";
}
function ok(){
	var video=document.getElementById("video");
	var music=document.getElementById("music-id");
	var button=document.getElementById("but1");
	var buttons=document.getElementById("but2");
	if(music.value==="1320"){
		alert("欢迎开发者")
	}
	if(music.value==="1964090997"){
		alert("啊🤪～啊🤪～啊咦😬啊咦😬啊→啊↑啊↓😨啊😰～嗯💥哎哎🤗哎哦哎嗯😋～哦哎🥳爱爱爱爱爱😍啊🤪～啊🤪～啊咦😬啊咦😬啊→啊↑啊↓😨啊😰～嗯💥嗯嗯👿滴嘚滴嘚😈唔😱嘟⬅️嘟↖️嘟⬆️嘟↗️嘟➡️嘟↘️嘟⬇️");
		var result = confirm(`确定要执行这个操作吗？(⊙ˍ⊙)
		光敏性癫痫警告╮（╯＿╰）╭
		警告:请在使用前阅读
		当暴露在特定光影图案或闪光光亮下时,有极小部分人群会引发癫痫。这种情形可能是由于某些未查出的癫痫症状引起,即使该人员并没有患癫痫病史也有可能造成此类病症。如果您的家人或任何家庭成员曾有过类似症状,请在进行游戏前咨询您的医生或医师。如果您在游戏过程中出现任何症状,包括头晕、目眩、眼部或肌肉抽搐、失去意识、失去方向感、抽搐或出现任何自己无法控制的动作,请立即停止使用并在继续使用前咨询您的医生或医师。
		注意：光敏性癫痫最好不要打开
		如果发生了意外情况本人及开发者不负责任`);
		if (result) {
		    // 确定
		    // 执行操作
		    document.body.classList.add('two-zero-eight-five');
		} else {
		    // 取消
		    // 刷新页面
		    location.reload();
		}
		setInterval(function(){
			document.getElementById("shelter").style.display = "none";
			document.getElementById("popo").style.display = "block";
		},1);
		setInterval(function(){
			var red = Math.floor(Math.random() * 256);
			var green = Math.floor(Math.random() * 256);
			var blue = Math.floor(Math.random() * 256);
			document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
		},100);
		//setInterval(function(){
			//document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
		//},1000);
		}

	if(music.value===""){
		tips.innerHTML="未知错误";
		buttons.style.display = "none";
		button.innerHTML="&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"好的"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
	}else{
		button.innerHTML="下次一定"
		document.getElementById("video").style.display="block";
		document.getElementById("zhilian").style.display="block";
		document.getElementById("aaa").style.display="block";
		var aa = document.getElementById("aaa");
		buttons.style.display = "block";
		tips.innerHTML="&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"下载器已经为你下载了"+counter+"次了"+"，小小的赞助一下作者可以吧！毕竟开发还是很辛苦的。";
	    var url="http://music.163.com/song/media/outer/url?id="+music.value+".mp3";
		video.src=url;
		aa.href = url;
		video.load();
		video.play();
	};
	
	document.getElementById("popo").style.display = "block";
	document.getElementById("shelter").style.display = "block";
	// 监听视频时间更新事件
	video.addEventListener("timeupdate", function() {
	  // 获取当前视频的进度时间
	  var currentTime = video.currentTime;
	
	  // 判断视频进度时间是否为0:00
	  if (currentTime === 0) {
	    // 显示无效的ID
		document.getElementById("cw").innerHTML="未知错误";
	    document.getElementById("cw").style.display = "block";
		document.getElementById("video").style.display = "none";
		document.getElementById("zhilian").style.display = "none";
		document.getElementById("aaa").style.display = "none";
	  } else {
	    // 清空显示
	    document.getElementById("cw").style.display = "none";
		document.getElementById("video").style.display = "block";
		document.getElementById("zhilian").style.display = "block";
		document.getElementById("aaa").style.display = "block";
	  };
	  if (video.ended) {
		  location.reload();
	  };
	});
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
	        watermark_alpha: 0.3,//水印透明度
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
	
document.addEventListener("click", function(event) {
    event.stopPropagation(); // 阻止事件冒泡

    var effect = document.getElementById("sb");
    var x = event.clientX; // 调整特效div位置居中
    var y = event.clientY;
    
    effect.style.left = x + "px";
    effect.style.top = y + "px";

    effect.style.display = "block"; // 显示特效div

    setTimeout(function() {
        effect.style.display = "none"; // 延迟一秒后隐藏特效div
    }, 1000);
});