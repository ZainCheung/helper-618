//京东618叠蛋糕js脚本0521
/**
 * 作者:ZainCheung
 * 吾爱首发,地址:https://www.52pojie.cn/home.php?mod=space&uid=1304399&do=thread&view=me&from=space
 * 代码参考并感谢:Mr.Lih,以及没有找到出处的一位大佬
 */


//速度
var speed = 1;
var taskList = ['去加购','8秒', '浏览5个', '浏览可得'];

dialogs.alert("请确认无障碍和悬浮窗权限已开启,感谢使用\n作者:ZainCheung\n仅供学习参考\n吾爱首发");
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
auto.waitFor();

var i = 0;
var j = 0;
sleep(1000);
//打开活动页面
log("正在进入个人中心");
gotoJd();
log("到达任务中心");


//签到
sleep(1000 * speed);
if (text("去签到").exists()) {
  text("去签到").findOne().click();
  sleep(200 * speed);
  log("签到成功")
}
if (text("已签到").exists()) {
  sleep(1000 * speed);
  log("已签到")
} else {
  text("签到").findOne().click();
  sleep(1000 * speed);
  log("签到成功")
}
sleep(2000 * speed);

while (1) {
  var next = false;
  var a = text("去完成").findOnce(j);
  if (a != null) {
      //获取父控件
      var b = a.parent().parent().parent();
      //获取第一个子控件
      var c = b.child(0).child(1).text();
      taskList.forEach(task => {
          switch (task) {
              case '8秒':
                  if (c.search(task) != -1) {
                      i++;
                      next = true;
                      log("开始执行8秒任务");
                      sleep(random(501, 515) * speed);
                      a.click();
                      sleep(random(5001, 5011) * speed);
                      textStartsWith("恭喜完成").findOne(8000);
                      sleep(random(201, 211) * speed);
                      back();
                      log("已完成第" + i + "次任务！");
                      sleep(random(201, 211) * speed);
                      j = 0;
                  }
                  break;
              case '浏览5个':
                  if (c.search(task) != -1) {
                      i++;
                      next = true;
                      log("开始执行浏览5个商品任务");
                      sleep(random(501, 515) * speed);
                      a.click();
                      sleep(random(1001, 1031) * speed);
                      for (var t = 0; t < 5; t++) {
                          if (textContains("浏览以下").findOnce()) {
                              log("正在浏览第" + (t + 1) + "个商品！");
                              idContains("view_").findOnce(t).click();
                              sleep(random(1501, 1535) * speed)
                              back()
                              sleep(random(1501, 1535) * speed)
                          } else { }
                      }
                      textStartsWith("已完成").findOne(8000);
                      sleep(random(1001, 1031) * speed);
                      try {
                          // 点击左上角的返回键
                          id("fe").findOne().click();
                      } catch (error) {
                          back();
                      }
                      log("已完成第" + i + "次任务！");
                      sleep(random(2001, 2051) * speed);
                      j = 0;
                  }
                  break;
              case '去加购':
                  if (c.search(task) != -1) {
                      i++;
                      next = true;
                      a.click();
                      log("开始执行加购任务");
                      sleep(random(1001, 1031) * speed);
                      for (var t = 0; t < 5; t++) {
                          while (idContains("cart_") == null || idContains("cart_").findOnce(t) == null);
                          //修复加购问题,删掉了.child(2)子节点
                          idContains("cart_").findOnce(t).click();
                          sleep(random(1001, 1031) * speed)
                      }
                      try {
                        id("fe").findOne().click();
                      } catch (error) {
                          back();
                      }
                      log("已完成第" + i + "次任务！");
                      sleep(random(2001, 2051) * speed);
                      j = 0;
                  }
                  break;
              case '浏览可得':
                  if (c.search(task) != -1) {
                      i++;
                      next = true;
                      a.click();
                      log("开始执行快速浏览任务");
                      sleep(random(1001, 1031) * speed);
                      back();
                      log("已完成第" + i + "次任务！");
                      sleep(random(2001, 2051) * speed);
                      j = 0;
                  }
                  break;
              default:
                  break;
          }
      });
      if (next) { j = 0; }
      else { j++; }
  } else {
      correct();
  }
}

/**
 * 纠正方法
 */
function correct() {
  log("可能出了点问题,正在尝试第一次纠正");
  for (let index = 0; index < 5; index++) {
    back();
    sleep(1000 * speed);
    var d = text("去完成").findOnce(j);
    if (d != null) {
      return
    }
  }

  if (d == null) {
    log("正在尝试第二次纠正");
    app.startActivity({
      data: "openApp.jdMobile://virtual?params=%7B%22des%22%3A%22m%22%2C%22url%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22category%22%3A%22jump%22%2C%22sourceType%22%3A%22JSHOP_SOURCE_TYPE%22%2C%22sourceValue%22%3A%22JSHOP_SOURCE_VALUE%22%2C%22M_sourceFrom%22%3A%22lkyl%22%2C%22msf_type%22%3A%22click%22%2C%22m_param%22%3A%7B%22m_source%22%3A%220%22%2C%22event_series%22%3A%7B%7D%2C%22jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%2C%22usc%22%3A%22androidapp%22%2C%22ucp%22%3A%22t_335139774%22%2C%22umd%22%3A%22appshare%22%2C%22utr%22%3A%22CopyURL%22%2C%22jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22ref%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22psn%22%3A%221664140455%7C472%22%2C%22psq%22%3A5%2C%22pc_source%22%3A%22%22%2C%22mba_muid%22%3A%221664140455%22%2C%22mba_sid%22%3A%221572979455588510925986537476%22%2C%22std%22%3A%22MO-J2011-1%22%2C%22par%22%3A%22%22%2C%22event_id%22%3A%22Mnpm_ComponentApplied%22%2C%22mt_xid%22%3A%22%22%2C%22mt_subsite%22%3A%22%22%7D%2C%22SE%22%3A%7B%22mt_subsite%22%3A%22%22%2C%22__jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22__jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%7D%7D",
    });
    log("进入个人中心");
    sleep(1000 * speed);

    className("android.view.View").text("做任务领金币").waitFor();

    sleep(1000 * speed);
    if (!textContains("任务每日0点刷新").exists()) {
      className("android.view.View").text("做任务领金币").findOne().parent().click()

    }

    textContains("任务每日0点刷新").waitFor()
    sleep(1000 * speed);
    var e = text("去完成").findOnce(j);
    if (e == null) {
      log("貌似没有任务了，脚本退出\n如未完成，请重新运行");
      exit();
    }
  }
}

/**
 * 打开京东App并跳转到任务栏
 */
function gotoJd() {

  app.startActivity({
    data: "openApp.jdMobile://virtual?params=%7B%22des%22%3A%22m%22%2C%22url%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22category%22%3A%22jump%22%2C%22sourceType%22%3A%22JSHOP_SOURCE_TYPE%22%2C%22sourceValue%22%3A%22JSHOP_SOURCE_VALUE%22%2C%22M_sourceFrom%22%3A%22lkyl%22%2C%22msf_type%22%3A%22click%22%2C%22m_param%22%3A%7B%22m_source%22%3A%220%22%2C%22event_series%22%3A%7B%7D%2C%22jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%2C%22usc%22%3A%22androidapp%22%2C%22ucp%22%3A%22t_335139774%22%2C%22umd%22%3A%22appshare%22%2C%22utr%22%3A%22CopyURL%22%2C%22jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22ref%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22psn%22%3A%221664140455%7C472%22%2C%22psq%22%3A5%2C%22pc_source%22%3A%22%22%2C%22mba_muid%22%3A%221664140455%22%2C%22mba_sid%22%3A%221572979455588510925986537476%22%2C%22std%22%3A%22MO-J2011-1%22%2C%22par%22%3A%22%22%2C%22event_id%22%3A%22Mnpm_ComponentApplied%22%2C%22mt_xid%22%3A%22%22%2C%22mt_subsite%22%3A%22%22%7D%2C%22SE%22%3A%7B%22mt_subsite%22%3A%22%22%2C%22__jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22__jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%7D%7D",
  });

  sleep(1000 * speed);

  className("android.view.View").text("做任务领金币").waitFor();



  sleep(1000 * speed);
  if (!textContains("任务每日0点刷新").exists()) {
    className("android.view.View").text("做任务领金币").findOne().parent().click()

  }

  textContains("任务每日0点刷新").waitFor()
  sleep(1000 * speed);
}
