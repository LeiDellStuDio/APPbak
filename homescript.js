
        
function downloadApp(url) {
            window.location.href = url;
        }

function toggleLayout() {
            var container = document.querySelector('.app-list');
            container.classList.toggle('single-column');
        }
        




function startAnimation(dot) {

    // 应用动画
    dot.style.animation = `move-dot 9s linear infinite, size-dot 5s ease-in-out infinite`;
}

function stopAnimation(dot) {
    dot.style.animation = 'none'; // 停止动画
}

// 点击应用容器时启动动画
// 鼠标进入应用容器时启动动画
document.querySelectorAll('.app').forEach(app => {
    app.addEventListener('mouseenter', function() {
        const dot = this.querySelector('.dot');
        if (dot) {
            startAnimation(dot);
        }
    });
});

// 鼠标离开应用容器时停止动画
document.querySelectorAll('.app').forEach(app => {
    app.addEventListener('mouseleave', function() {
        const dot = this.querySelector('.dot');
        if (dot) {
            stopAnimation(dot);
        }
    });
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.getElementById('nav-list');
    if (nav.style.left === '0px') {
        nav.style.left = '-100%';
    } else {
        nav.style.left = '0px';
    }
});
// joinus彩蛋
 function getMultiLine(f) {
var lines =f.toString(); 
return lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));   
}
//字符画不能随意缩进，不然显示会错位
var console_text = function() {  
/* 

    ──────▄▀▄─────▄▀▄
─────▄█░░▀▀▀▀▀░░█▄
─▄▄──█░░░░░░░░░░░█──▄▄
█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  停止内卷 , 
  继续摆烂! ^ ^
          %c by LeiDell
   加入我们!QQ号:3593192586 
*/  
}
console.log(getMultiLine(console_text),'color:#337ab7;font-size:18px;font-style:italic')
