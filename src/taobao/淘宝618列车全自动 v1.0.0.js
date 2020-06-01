//京东618叠蛋糕js脚本0521
/**
 * 作者:ZainCheung
 * 吾爱首发,地址:https://www.52pojie.cn/home.php?mod=space&uid=1304399&do=thread&view=me&from=space
 */

var i = 0;
var j = 0;
// 暂时去掉,'去收菜'
var taskList = ['去兑换', '去搜索', '去围观', '去浏览'];

var height = device.height;
var width = device.width;
setScreenMetrics(width, height);

//速度
var speed = 1;

dialogs.alert("请确认无障碍和悬浮窗权限已开启,感谢使用,618列车即将发车\n作者:ZainCheung\n仅供学习参考, 吾爱首发");
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
            speed = 1.5;
            break menu;
        case 3:
            toast("即将缓慢执行脚本");
            speed = 2;
            break menu;

        default:
            break;
    }
}

console.show();
auto.waitFor();

sleep(1000 * speed);
//打开活动页面
log("正在打开淘宝");
launch("com.taobao.taobao");
sleep(1000 * speed);
log("正在等待进入列车活动页面");
log("请手动点进列车活动页面")
// sleep(5000);
className("android.widget.Button").text("做任务，领喵币").waitFor()

sleep(1000);
if (!textContains("淘宝成就点").exists()) {
    className("android.widget.Button").text("做任务，领喵币").findOne().click()
    log("点击成功");
}
sleep(1500 * speed);
if (className("android.widget.Button").text("签到").exists()) {
    className("android.widget.Button").text("签到").click()
    sleep(200);
    log("签到成功");
} else { log("已签到"); }
sleep(1500 * speed);

taskList.forEach(task => {
    while (textContains(task).exists()) {
        log("开始做第" + (i+1) + "次任务！");
        var a = text(task).findOnce(j);
        switch (task) {
            case '去兑换':
                log("开始兑换喵币");
                sleep(500 * speed);
                a.click();
                sleep(500 * speed);
                i++;
                log("已完成兑换");
                log("已完成第" + i + "次任务！");
                break;
            case '去收菜':
                log("开始去收菜");
                sleep(500 * speed);
                a.click();
                sleep(500 * speed);
                textStartsWith("收3次作物").findOne(5000);
                sleep(500 * speed);
                if (text("立即去收").exists()) {
                    text("立即去收").findOne().click();
                }
                sleep(500 * speed);
                for (var t = 0; t < 5; t++) {
                    try {
                        textContains("万").findOnce(t).click();
                        sleep(random(5, 10) * 200 * speed)
                    } catch (error) {
                        log("收菜出错了")
                        continue;
                    }
                }
                sleep(1500 * speed);
                i++;
                log("收完菜准备回去了")
                log("已完成第" + i + "次任务！")
                back();
                break;
            case '去搜索':
            case '去围观':
            case '去浏览':
                sleep(500 * speed);
                a.click();
                sleep(1500 * speed);
                swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
                sleep(2500 * speed);
                swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
                sleep(8000 * speed);
                swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
                textContains("完成").findOne(10000 * speed);
                i++;
                log("已完成第" + i + "次任务！")
                back();
                break;
            default:
                log("default")
                break;
        }
        sleep(2000 * speed);
    }
});

log("任务貌似已经做完了\n收菜任务暂时还不支持的哈\n如未完成，请重新运行");
exit();