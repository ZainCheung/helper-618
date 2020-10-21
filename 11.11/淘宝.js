/**
 * 淘宝天猫双11喵喵喵赚喵币全自动
 * 作者:ZainCheung
 * 吾爱首发
 */

var i = 0;
var j = 0;

var taskList = ['去浏览','去逛逛','去搜索','领取奖励'];

var height = device.height;
var width = device.width;
setScreenMetrics(width, height);

//速度
var speed = 1;

dialogs.alert("请确认无障碍和悬浮窗权限已开启,感谢使用,双11列车即将发车\n作者:ZainCheung\n仅供学习参考, 吾爱首发");
menu: while (true) {
    var choose = dialogs.select("请根据你的手机性能(卡不卡)以及网速选择速度", "都挺好的,整个快速的", "一般吧,正常执行就好", "网速有点差,稍微慢点吧", "我手机很砖,整个最慢的吧");
    switch (choose) {
        case -1:
            toast("请选择");
            continue menu;
        case 0:
            toast("即将快速执行脚本");
            speed = 0.75;
            break menu;
        case 1:
            toast("即将一般速度执行脚本");
            speed = 1;
            break menu;
        case 2:
            toast("即将低速执行脚本");
            speed = 1.25;
            break menu;
        case 3:
            toast("即将缓慢执行脚本");
            speed = 1.5;
            break menu;
        default:
            break;
    }
}

console.show();
sleep(10);
console.setSize(device.width / 2, device.height / 3);
auto.waitFor();

sleep(random(1001, 1021) * speed);
//打开活动页面
log("正在打开淘宝");
launch("com.taobao.taobao");
sleep(random(1001, 1021) * speed);
log("正在等待进入天猫双11喵喵喵活动页面\n如果没有反应请手动点击搜索框");
className("android.view.View").desc("搜索").waitFor()
let search = className("android.view.View").desc("搜索").depth(12).findOne().bounds()
click(search.centerX(),search.centerY())
desc("搜索发现").findOne()
sleep(random(5, 10) * speed);
setText("喵币")
sleep(random(5, 10) * speed);
id("searchbtn").findOne().click()
className("android.widget.Button").text("赚喵币").waitFor()

sleep(random(1001, 1021) * speed);
className("android.widget.Button").text("赚喵币").findOne().click()

className("android.view.View").text("累计任务奖励").waitFor()
sleep(random(1501, 1521) * speed);

taskList.forEach(task => {
    while (textContains(task).exists()) {
        log((i+1) + "------任务开始");
        var a = text(task).findOnce(j);
        switch (task) {
            // case '去完成':
            //     var name = a.parent().child(0).child(0).text();
            //     if(name.indexOf("签到") != -1){
            //         a.click();
            //         log('签到成功')
            //         break;
            //     }else if((name.indexOf("邀请") != -1) || (name.indexOf("淘宝特价版") != -1)){
            //         j++;
            //         log('跳过该任务');
            //         break;
            //     }
            //     sleep(random(501, 515) * speed);
            case '去逛逛':
            case '去搜索':
            case '去浏览':
                sleep(random(501, 515) * speed);
                a.click();
                sleep(random(1501, 1515) * speed);
                swipe(width / 2, height - 500, width / 2, 0, random(801, 818)* speed);
                sleep(random(2501, 2601) * speed);
                swipe(width / 2, height - 500, width / 2, 0, random(801, 818) * speed);
                sleep(random(8001, 8042) * speed);
                swipe(width / 2, height - 500, width / 2, 0, random(801, 818) * speed);
                textContains("完成").findOne(random(10001, 10018) * speed);
                i++;
                log(i+ "------任务结束")
                sleep(random(601, 615) * speed);
                back();
                break;
            case '领取奖励':
                sleep(random(501, 515) * speed);
                a.click();
                log('奖励领取成功');
                break;
            default:
                log("default")
                break;
        }
        sleep(random(2001, 2101) * speed);
    }
});

log("任务貌似已经做完了\n如未完成，请重新运行");
exit();
