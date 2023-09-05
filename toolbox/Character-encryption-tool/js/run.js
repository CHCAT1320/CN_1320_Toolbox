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
  
  var text = document.getElementById("text");
  function ok(){
	  var content = text.value
	  for(var CHCAT = 0; CHCAT < content.length ; CHCAT++){
		  var jsonStr = '{"a": "01%", "b": "02%"}'; // JSON字符串
		  var data = JSON.parse(jsonStr); // 解析JSON为对象
		   text.value = data.a; // 替换输入框的值为对象属性值
		  }
  }