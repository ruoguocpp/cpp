/**
 * Created by chenxiaopeng on 2016/10/13.
 */
var loadingHandel = null;
function initLoadingAnimate() {
    var step = 0;
    var bg = $('.vip-cvs')[0];
    var ctx = bg.getContext('2d');
    var imd = null;
    var circ = Math.PI * 2;
    var quart = Math.PI / 2;
    var lineColor = '#e5007f';
    var backforward = true;

    ctx.clearRect(0, 0, 120, 120);
    ctx.beginPath();
    ctx.strokeStyle = lineColor;
    ctx.lineCap = 'square';
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = 2.8;
    imd = ctx.getImageData(0, 0, 120, 120);
    
    var draw = function(current) {
        ctx.putImageData(imd,0,0,0,0,120,120);
        ctx.beginPath();
        ctx.arc(60, 60, 50, -(quart), ((circ) * current) - quart, backforward);
        ctx.stroke();
    }

    function stepDraw() {
    	//draw(0.5);
        step += 0.01;
        draw(step);
        if (step >= 0.99) {
            step = 0;
            if (!backforward) {
                backforward = true;
            } else {
                backforward = false;
            }
        }
    }

    loadingHandel = setInterval(stepDraw, 10);
}

function clearLoadingAnimation() {
    clearInterval(loadingHandel);
}

function showLoadingScreen() {
    initLoadingAnimate();
    $('#loading').show();
}

function hideLoadingScreen() {
    clearLoadingAnimation();
    $('#loading').hide();
}