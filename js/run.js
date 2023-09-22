// body宽高
  let cw = 530,ch =650//1950 757
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