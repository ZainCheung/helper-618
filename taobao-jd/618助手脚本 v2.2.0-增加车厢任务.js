"ui";

var color = "#009688";

main();

function main() {

    ui.layout(
        <drawer id="drawer">
            <vertical>
                <appbar>
                    <toolbar id="toolbar" title="618小助手" />
                    <tabs id="tabs" />
                </appbar>
                <viewpager id="viewpager">
                    {/* 淘宝页面 */}
                    <frame>
                        <vertical>
                            <card w="*" h="85" margin="10 5" cardCornerRadius="2dp"
                                cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 8" h="auto">
                                    <text text="执行速度(默认正常速度50,越大越快)" textColor="#222222" textSize="18sp" />
                                    <input id="taobaoSpeed" inputType="number" hint="最小为1,最大为100" />
                                </vertical>
                                <View bg="#f44336" h="*" w="10" />
                            </card>

                            <list id="taobaoList">
                                <card w="*" h="50" margin="10 5" cardCornerRadius="2dp"
                                    cardElevation="1dp" foreground="?selectableItemBackground">
                                    <horizontal gravity="center_vertical">
                                        <View bg="{{this.color}}" h="*" w="10" />
                                        <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                            <text id="title" text="{{this.title}}" textColor="#222222" textSize="18sp" maxLines="1" />
                                        </vertical>
                                        <checkbox id="done" marginLeft="4" marginRight="6" checked="{{this.done}}" />
                                    </horizontal>
                                </card>
                            </list>
                            <horizontal gravity="center">
                                <button style="Widget.AppCompat.Button.Colored" w="auto" h="auto" id="gototb" text="开始任务" textSize="26sp" />
                            </horizontal>
                        </vertical>
                    </frame>

                    {/* 京东界面 */}
                    <frame>
                        <vertical>
                            <card w="*" h="85" margin="10 5" cardCornerRadius="2dp"
                                cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 8" h="auto">
                                    <text text="执行速度(默认正常速度50,越大越快)" textColor="#222222" textSize="18sp" />
                                    <input id="jdSpeed" inputType="number" hint="最小为1,最大为100" />
                                </vertical>
                                <View bg="#f44336" h="*" w="10" />
                            </card>
                            <card w="*" h="85" margin="10 5" cardCornerRadius="2dp"
                                cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 8" h="auto">
                                    <text text="设置小金人任务次数" textColor="#222222" textSize="18sp" />
                                    <input id="goldTime" inputType="number" hint="最小为1,最大为50" />
                                </vertical>
                                <View bg="#78909c" h="*" w="10" />
                            </card>
                            <list id="jdList">
                                <card w="*" h="50" margin="10 5" cardCornerRadius="2dp"
                                    cardElevation="1dp" foreground="?selectableItemBackground">
                                    <horizontal gravity="center_vertical">
                                        <View bg="{{this.color}}" h="*" w="10" />
                                        <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                            <text id="title" text="{{this.title}}" textColor="#222222" textSize="18sp" maxLines="1" />
                                        </vertical>
                                        <checkbox id="done" marginLeft="4" marginRight="6" checked="{{this.done}}" />
                                    </horizontal>
                                </card>
                            </list>
                            <horizontal gravity="center">
                                <button style="Widget.AppCompat.Button.Colored" w="auto" h="auto" id="gotojd" text="开始任务" textSize="26sp" />
                                <button style="Widget.AppCompat.Button.Colored" w="auto" h="auto" id="gotojdGold" text="小金人" textSize="26sp" />
                            </horizontal>
                        </vertical>
                    </frame>
                    {/* 关于 */}
                    <frame>
                        <ScrollView>
                            <vertical>
                                <horizontal gravity="center" margin="10 5" w="*" h="auto">
                                    <text text="使用方法" textStyle="bold" textColor="#222222" textSize="22sp" maxLines="1" />
                                </horizontal>
                                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp"
                                    cardElevation="1dp" foreground="?selectableItemBackground">
                                    <horizontal gravity="center_vertical">
                                        <vertical padding="15 8" h="auto" w="auto" layout_weight="1">
                                            <text id="help" text="" textColor="#222222" textSize="18sp" maxLines="50" />
                                        </vertical>
                                    </horizontal>
                                </card>

                                <horizontal gravity="center" margin="10 5" w="*" h="auto">
                                    <text text="常见问题" textStyle="bold" textColor="#222222" textSize="22sp" maxLines="1" />
                                </horizontal>
                                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp"
                                    cardElevation="1dp" foreground="?selectableItemBackground">
                                    <horizontal gravity="center_vertical">
                                        <vertical padding="15 8" h="auto" w="auto" layout_weight="1">
                                            <text id="question" text="" textColor="#222222" textSize="18sp" maxLines="100" />
                                        </vertical>
                                    </horizontal>
                                </card>

                                <horizontal gravity="center" margin="10 5" w="*" h="auto">
                                    <text text="关于软件" textStyle="bold" textColor="#222222" textSize="22sp" maxLines="1" />
                                </horizontal>
                                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp"
                                    cardElevation="1dp" foreground="?selectableItemBackground">
                                    <horizontal gravity="center_vertical">
                                        <vertical padding="15 8" h="auto" w="auto" layout_weight="1">
                                            <text id="about" text="" textColor="#222222" textSize="18sp" maxLines="10" />
                                        </vertical>
                                    </horizontal>
                                </card>
                            </vertical>
                        </ScrollView>

                    </frame>
                </viewpager>
            </vertical>
            <vertical layout_gravity="left" bg="#ffffff" h="*" w="280">
                <img w="280" h="200" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg" />
                <list id="menu">
                    <horizontal bg="?selectableItemBackground" w="*">
                        <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}" />
                        <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center" />
                    </horizontal>
                </list>
            </vertical>
        </drawer>
    );

    // storages.remove("config");
    var config = storages.create("config");
    var taobao = config.get("taobao", {
        speed: 50,
        list: [
            {
                id: "duihuan",
                title: "是否开启兑换",
                task: "去兑换",
                color: "#e91e63",
                done: true
            },
            {
                id: "search",
                title: "是否开启搜索",
                task: "去搜索",
                color: "#ab47bc",
                done: true
            },
            {
                id: "weiguan",
                title: "是否开启围观",
                task: "去围观",
                color: "#5c6bc0",
                done: true
            },
            {
                id: "liulan",
                title: "是否开启浏览",
                task: "去浏览",
                color: "#7e57c2",
                done: true
            },
            {
                id: "chexiang",
                title: "是否开启车厢任务",
                task: "车厢",
                color: "#7e57c2",
                done: true
            }
        ]
    });
    var jd = config.get("jd", {
        speed: 50,
        goldTime: 20,
        gold: false,
        list: [
            {
                id: "jiagou",
                title: "是否开启加购",
                color: "#5c6bc0",
                done: true
            },
            {
                id: "auto",
                title: "是否开启全自动",
                color: "#7e57c2",
                done: true
            }
        ]
    })

    var helpText = '按下音量键上键即可关闭正在运行的脚本。\n\n手机性能以及网络情况错综复杂，自定义最适合自己的运行速度（1-100），作者建议一般情况使用50的增幅即可。\n\n勾选你需要的功能开关即可使用对应的自动化服务。\n\n淘宝目前需要手动打开活动页面。\n\n京东默认自带纠正，如果试用体验不好可以及时前往吾爱帖子下反馈。\n\n如果悬浮窗不显示可以检查是否给予app悬浮窗权限或者重启app。\n\n最后欢迎前往吾爱破解论坛搜索ZainCheung或者superBoyJack，在帖子下留言反馈。';
    var questionText = '1.为什么app在打开京东后就没有反应了咋回事？\n答：在使用之前你需要先关掉京东的后台，确保app打开时是从首页进去的，而不是你的购物车页面或者商品页面。\n\n2.纠正功能为什么没有让我回到正确的页面？\n答：纠正功能主要是为了防止弹出窗口，以及浏览8秒商品的长时间等待期间误触而新增的，脚本正在加购或者快速浏览时请不要干扰它，它干起活来很专注（滑稽）。\n\n3.加购任务为什么执行完一次就回到桌面了？\n答：因为任务完成后执行了返回操作，然而系统给它指向了桌面，不过这些问题已经在新版本里解决了，纠正功能可以自动回到活动页面继续刷任务。需要注意的是回到桌面后大约会等待5秒左右才可以回去,这是因为在第二次纠正前还有五次第一次纠正，所以还烦请稍稍耐心等待一下，不要见没有回去以为出问题就草草关掉了。如果实在忍受不了加购的可以选择不勾选它的框框。\n\n4.单靠这个app可以完成所有的任务吗？\n答：除了京东的邀请好友助力，AR游戏以及淘宝的收菜等任务无法帮你完成，其他已经全部覆盖，目前京东可以做到一次打开，刷完所有非主观任务，最高可以做完50次不断开。\n\n5.为什么要用app而不是去调用接口一键完成所有任务？\n答：app运行的原理就是模拟你对屏幕的操作，这样JD和淘宝不能认为这是违规行为，如果是要通过调用接口挂多个号，，有黑号的风险，我觉得为了这个活动没必要冒这个风险。\n\n6.可以给多个账号刷任务么？\n答：可以。如果有应用分身可以不开启全自动，借助分身，然后app启动时会弹出选择分身。如果不用分身，在上一个账号做完所有任务后，切换到下一个账号，多个账号轮流切换，虽然稍有些麻烦，但比较保险。';
    var aboutText = '618助手 v2.0.0\n\n软件仅供学习参考使用,切勿用于非法操作。\n\n软件代码全部免费开源，如有通过网上购买此软件可以要求退款。\n\n作者ZainCheung享有代码以及软件的最终解释权。';
    ui.help.setText(helpText);
    ui.question.setText(questionText);
    ui.about.setText(aboutText);

    // 淘宝配置项
    ui.taobaoSpeed.setText(taobao.speed.toString());
    ui.taobaoList.setDataSource(taobao.list);
    ui.taobaoSpeed.addTextChangedListener({
        afterTextChanged: (text) => {
            var tbSpeed = Number(text);
            if ((tbSpeed >= 1) && (tbSpeed <= 100)) {
                taobao.speed = tbSpeed;
            } else {
                ui.taobaoSpeed.setError("请填写1-100的数字")
            }

        }
    })
    ui.taobaoList.on("item_bind", function (itemView, itemHolder) {
        //绑定勾选框事件
        itemView.done.on("check", function (checked) {
            let item = itemHolder.item;
            item.done = checked;
            let paint = itemView.title.paint;
            itemView.title.invalidate();
        });
    });
    ui.taobaoList.on("item_click", function (item, i, itemView, listView) {
        itemView.done.checked = !itemView.done.checked;
    });

    // 京东配置项
    ui.jdSpeed.setText(jd.speed.toString());
    ui.goldTime.setText(jd.goldTime.toString());
    ui.jdList.setDataSource(jd.list);
    ui.jdSpeed.addTextChangedListener({
        afterTextChanged: (text) => {
            var jdSpeed = Number(text);
            if ((jdSpeed >= 1) && (jdSpeed <= 100)) {
                jd.speed = jdSpeed;
            } else {
                ui.jdSpeed.setError("请填写1-100的数字")
            }

        }
    })
    ui.goldTime.addTextChangedListener({
        afterTextChanged: (text) => {
            var time = Number(text);
            if ((time >= 1) && (time <= 50)) {
                jd.goldTime = time;
            } else {
                ui.goldTime.setError("请填写1-50的数字")
            }

        }
    })
    ui.jdList.on("item_bind", function (itemView, itemHolder) {
        //绑定勾选框事件
        itemView.done.on("check", function (checked) {
            let item = itemHolder.item;
            item.done = checked;
            let paint = itemView.title.paint;
            itemView.title.invalidate();
        });
    });
    ui.jdList.on("item_click", function (item, i, itemView, listView) {
        itemView.done.checked = !itemView.done.checked;
    });



    //当离开本界面时保存
    ui.emitter.on("pause", () => {
        config.put("taobao", taobao);
        config.put("jd", jd);
    });

    //创建选项菜单(右上角)
    // ui.emitter.on("create_options_menu", menu => {
    //     menu.add("关于");
    // });
    //监听选项菜单点击
    // ui.emitter.on("options_item_selected", (e, item) => {
    //     switch (item.getTitle()) {
    //         case "关于":
    //             alert("关于", "欢迎使用618助手v2.0.0");
    //             break;
    //     }
    //     e.consumed = true;
    // });
    activity.setSupportActionBar(ui.toolbar);

    //设置滑动页面的标题
    ui.viewpager.setTitles(["淘宝", "京东", "更多"]);
    //让滑动页面和标签栏联动
    ui.tabs.setupWithViewPager(ui.viewpager);

    //让工具栏左上角可以打开侧拉菜单
    ui.toolbar.setupWithDrawer(ui.drawer);

    ui.menu.setDataSource([
        {
            title: "喜欢软件",
            icon: "@drawable/ic_favorite_black_48dp"
        },
        {
            title: "作者",
            icon: "@drawable/ic_android_black_48dp"
        },
        {
            title: "版本",
            icon: "@drawable/ic_settings_black_48dp"
        },
        {
            title: "退出",
            icon: "@drawable/ic_exit_to_app_black_48dp"
        }
    ]);

    ui.menu.on("item_click", item => {
        switch (item.title) {
            case "喜欢软件":
                app.openUrl('https://www.52pojie.cn/thread-1186000-1-1.html');
                break;
            case "作者":
                alert("作者", "ZainCheung");
                break;
            case "版本":
                alert("版本", "尝鲜版 v2.2.0");
                break;
            case "退出":
                ui.finish();
                break;
        }
    });

    ui.gototb.click(function () {
        threads.start(function () {
            var i = 0;
            var j = 0;
            // 暂时去掉,'去收菜'
            // var taskList = ['去兑换', '去搜索', '去围观', '去浏览'];
            var taskList = [];
            taobao.list.forEach(element => {
                if (element.done) {
                    taskList.push(element.task);
                }
            });
            var speed = 100 - taobao.speed;

            var height = device.height;
            var width = device.width;
            setScreenMetrics(width, height);

            console.show();
            sleep(10);
            console.setSize(device.width / 2, device.height / 3);
            auto.waitFor();

            sleep(random(21, 31) * speed);
            //打开活动页面
            log("正在打开淘宝");
            launch("com.taobao.taobao");
            sleep(random(21, 31) * speed);
            log("正在等待进入列车活动页面");
            log("请手动点进列车活动页面")
            sleep(5000);
            className("android.widget.Button").text("做任务，领喵币").waitFor()

            sleep(random(21, 31) * speed);
            if (!textContains("淘宝成就点").exists()) {
                className("android.widget.Button").text("做任务，领喵币").findOne().click()
                log("点击成功");
            }
            sleep(random(31, 41) * speed);
            if (className("android.widget.Button").text("签到").exists()) {
                className("android.widget.Button").text("签到").click()
                sleep(random(201, 211));
                log("签到成功");
            } else { log("已签到"); }
            sleep(random(31, 41) * speed);

            taskList.forEach(task => {
                while (textContains(task).exists()) {
                    log("开始做第" + (i + 1) + "次任务！");
                    var a = text(task).findOnce(j);
                    switch (task) {
                        case '去兑换':
                            log("开始兑换喵币");
                            sleep(random(11, 21) * speed);
                            a.click();
                            sleep(random(11, 21) * speed);
                            i++;
                            log("已完成兑换");
                            log("已完成第" + i + "次任务！");
                            break;
                        case '去收菜':
                            log("开始去收菜");
                            sleep(random(11, 21) * speed);
                            a.click();
                            sleep(random(11, 21) * speed);
                            textStartsWith("收3次作物").findOne(5000);
                            sleep(random(11, 21) * speed);
                            if (text("立即去收").exists()) {
                                text("立即去收").findOne().click();
                            }
                            sleep(random(11, 21) * speed);
                            for (var t = 0; t < 5; t++) {
                                try {
                                    textContains("万").findOnce(t).click();
                                    sleep(random(21, 41) * speed)
                                } catch (error) {
                                    log("收菜出错了")
                                    continue;
                                }
                            }
                            sleep(random(31, 41) * speed);
                            i++;
                            log("收完菜准备回去了")
                            log("已完成第" + i + "次任务！")
                            back();
                            break;
                        case '去搜索':
                        case '去围观':
                        case '去浏览':
                            sleep(random(11, 21) * speed);
                            a.click();
                            sleep(random(31, 41) * speed);
                            swipe(width / 2, height - 500, width / 2, 0, random(16, 18) * speed);
                            sleep(random(51, 61) * speed);
                            swipe(width / 2, height - 500, width / 2, 0, random(16, 18) * speed);
                            sleep(random(121, 131) * speed);
                            swipe(width / 2, height - 500, width / 2, 0, random(16, 18) * speed);
                            textContains("完成").findOne(random(201, 211) * speed);
                            i++;
                            log("已完成第" + i + "次任务！")
                            back();
                            break;
                        default:
                            log("default")
                            break;
                    }
                    sleep(random(41, 51) * speed);
                }
            });
            className("android.widget.Button").text("关闭").findOne().click();
            if (taskList.indexOf("车厢")>=0) {
                sleep(600);
                var my = textContains("我的列车").findOne();
                var myLevel = my.getText().toString()
                myLevel = myLevel.replace(/[^0-9]/ig, "");
                log("当前列车级别" + myLevel)
                className("android.widget.Button").text("打开图鉴").findOne().click();
                sleep(random(21, 31) * speed);
                var trainPro = [];
                for (l = myLevel; l >= 1; l--) {
                    if (l % 3 == 0) {
                        trainPro.push(l)
                    }
                }
                do {
                    // log(trainPro)
                    trainPro.forEach(element => {
                        if (className("android.widget.Button").text(element + "号车厢").exists()) {
                            log("找到" + element + "号车厢" + className("android.widget.Button").text(element + "号车厢").exists())
                            className("android.widget.Button").text(element + "号车厢").click();
                            sleep(random(21, 31) * speed);
                            if (className("android.view.View").desc("店铺任务").exists()) {
                                log("进入" + element + "号车厢任务店铺")
                                sleep(random(21, 31) * speed);
                                // back();
                                trainPro.shift()
                                if (className("android.view.View").desc("签到").exists()) {
                                    className("android.view.View").desc("签到").findOne().parent().parent().click()
                                    sleep(random(201, 211));
                                    log("成功签到");
                                } else { log("已签到"); }
                                if (className("android.view.View").desc("去浏览").exists()) {
                                    while (className("android.view.View").desc("去浏览").exists()) {
                                        log("执行浏览任务")
                                        sleep(random(11, 21) * speed);
                                        className("android.view.View").desc("去浏览").findOne().parent().parent().click()

                                        sleep(200);
                                        if (textContains("任务完成").exists()) {
                                            i++;
                                            log("已完成第" + i + "次任务！")
                                            back();
                                        } else {
                                            sleep(random(31, 41) * speed);
                                            swipe(width / 2, height - 500, width / 2, 0, random(16, 18) * speed);
                                            sleep(random(51, 61) * speed);
                                            swipe(width / 2, height - 500, width / 2, 0, random(16, 18) * speed);
                                            sleep(random(121, 131) * speed);
                                            swipe(width / 2, height - 500, width / 2, 0, random(16, 18) * speed);
                                            textContains("完成").findOne(random(201, 211) * speed);
                                            i++;
                                            log("已完成第" + i + "次任务！")
                                            back();
                                        }
                                        sleep(random(31, 41) * speed);
                                        if (!className("android.view.View").desc("去浏览").exists()) {
                                            log("浏览任务全完成")
                                            back();
                                        }
                                    }
                                } else {
                                    log("未找到浏览任务")
                                    back();
                                }
                            } else {
                                back();
                            }
                        }
                    });
                    swipe(width / 2, height - 300, width / 2, 0, random(16, 18) * speed);
                    // if(className("android.widget.Button").text("1号车厢").exists()){
                    //     log(className("android.widget.Button").text("1号车厢").exists())
                    //     break;
                    // }
                    sleep(random(21, 31) * speed);
                } while (!className("android.widget.Button").text("1号车厢").exists())
            }
            console.info("任务貌似已经做完了\n如未完成，请重新运行");
            threads.shutDownAll();
        });
    });

    ui.gotojd.click(function () {
        threads.start(function () {
            console.show();
            sleep(10);
            console.setSize(device.width / 2, device.height / 3);
            auto.waitFor();

            var jdAuto;
            var taskList = ['8秒', '浏览5个', '浏览可得'];
            var speed = 100 - jd.speed;
            var i = 0;
            var j = 0;

            jd.list.forEach(element => {
                switch (element.id) {
                    case 'jiagou':
                        if (element.done) {
                            taskList.push('去加购');
                        }
                        break;
                    case 'auto':
                        jdAuto = element.done;
                        break;
                    default:
                        break;
                }
            });
            sleep(random(11, 21) * speed);

            if (jdAuto) {
                //打开活动页面
                log("正在进入个人中心");
                gotoJd(speed);
                log("到达任务中心");
            } else {
                console.warn("请手动打开活动的任务列表")
                textContains("任务每日0点刷新").waitFor()
                sleep(random(21, 31) * speed);
                log("到达任务中心");
            }
            //签到
            sleep(random(11, 21) * speed);
            if (text("去签到").exists()) {
                text("去签到").findOne().click();
                sleep(random(4, 9) * speed);
                log("签到成功")
            }
            if (text("已签到").exists()) {
                sleep(random(11, 21) * speed);
                log("已签到")
            } else {
                text("签到").findOne().click();
                sleep(random(11, 21) * speed);
                log("签到成功")
            }
            sleep(random(31, 31) * speed);

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
                                    sleep(random(11, 15) * speed);
                                    a.click();
                                    sleep(random(101, 111) * speed);
                                    textStartsWith("恭喜完成").findOne(8000);
                                    sleep(random(4, 11) * speed);
                                    back();
                                    log("已完成第" + i + "次任务！");
                                    sleep(random(41, 21) * speed);
                                    j = 0;
                                }
                                break;
                            case '浏览5个':
                                if (c.search(task) != -1) {
                                    i++;
                                    next = true;
                                    log("开始执行浏览5个商品任务");
                                    sleep(random(11, 15) * speed);
                                    a.click();
                                    sleep(random(25, 31) * speed);
                                    for (var t = 0; t < 5; t++) {
                                        if (textContains("浏览以下").findOnce()) {
                                            log("正在浏览第" + (t + 1) + "个商品！");
                                            idContains("view_").findOnce(t).click();
                                            sleep(random(32, 35) * speed)
                                            back()
                                            sleep(random(32, 35) * speed)
                                        } else { }
                                    }
                                    textStartsWith("已完成").findOne(8000);
                                    sleep(random(21, 31) * speed);
                                    try {
                                        // 点击左上角的返回键
                                        id("fe").findOne().click();
                                    } catch (error) {
                                        back();
                                    }
                                    log("已完成第" + i + "次任务！");
                                    sleep(random(41, 51) * speed);
                                    j = 0;
                                }
                                break;
                            case '去加购':
                                if (c.search(task) != -1) {
                                    i++;
                                    next = true;
                                    a.click();
                                    log("开始执行加购任务");
                                    sleep(random(21, 31) * speed);
                                    for (var t = 0; t < 5; t++) {
                                        //修复加购问题,删掉了.child(2)子节点
                                        idContains("cart_").findOnce(t).click();
                                        sleep(random(21, 31) * speed)
                                    }
                                    try {
                                        // 点击左上角的返回键
                                        id("fe").findOne().click();
                                    } catch (error) {
                                        back();
                                    }
                                    log("已完成第" + i + "次任务！");
                                    sleep(random(41, 51) * speed);
                                    j = 0;
                                }
                                break;
                            case '浏览可得':
                                if (c.search(task) != -1) {
                                    i++;
                                    next = true;
                                    a.click();
                                    log("开始执行快速浏览任务");
                                    sleep(random(21, 31) * speed);
                                    sleep(random(11, 15) * speed);
                                    back();
                                    log("已完成第" + i + "次任务！");
                                    sleep(random(41, 51) * speed);
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
            // }

            /**
             * 纠正方法
             */
            function correct() {
                log("可能出了点问题,正在尝试第一次纠正");

                log("尝鲜版将直接进入第二次纠正");

                log("正在尝试第二次纠正");
                app.startActivity({
                    data: "openApp.jdMobile://virtual?params=%7B%22des%22%3A%22m%22%2C%22url%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22category%22%3A%22jump%22%2C%22sourceType%22%3A%22JSHOP_SOURCE_TYPE%22%2C%22sourceValue%22%3A%22JSHOP_SOURCE_VALUE%22%2C%22M_sourceFrom%22%3A%22lkyl%22%2C%22msf_type%22%3A%22click%22%2C%22m_param%22%3A%7B%22m_source%22%3A%220%22%2C%22event_series%22%3A%7B%7D%2C%22jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%2C%22usc%22%3A%22androidapp%22%2C%22ucp%22%3A%22t_335139774%22%2C%22umd%22%3A%22appshare%22%2C%22utr%22%3A%22CopyURL%22%2C%22jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22ref%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22psn%22%3A%221664140455%7C472%22%2C%22psq%22%3A5%2C%22pc_source%22%3A%22%22%2C%22mba_muid%22%3A%221664140455%22%2C%22mba_sid%22%3A%221572979455588510925986537476%22%2C%22std%22%3A%22MO-J2011-1%22%2C%22par%22%3A%22%22%2C%22event_id%22%3A%22Mnpm_ComponentApplied%22%2C%22mt_xid%22%3A%22%22%2C%22mt_subsite%22%3A%22%22%7D%2C%22SE%22%3A%7B%22mt_subsite%22%3A%22%22%2C%22__jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22__jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%7D%7D",
                });
                log("进入个人中心");
                sleep(random(21, 31) * speed);

                className("android.view.View").text("做任务领金币").waitFor();

                sleep(random(21, 31) * speed);
                if (!textContains("任务每日0点刷新").exists()) {
                    className("android.view.View").text("做任务领金币").findOne().parent().click()

                }

                textContains("任务每日0点刷新").waitFor()
                sleep(random(21, 31) * speed);
                var e = text("去完成").findOnce(j);
                if (e == null) {
                    console.info("貌似没有任务了，脚本退出\n如未完成，请重新运行");
                    threads.shutDownAll();
                }
            }

            /**
             * 打开京东App并跳转到任务栏
             */
            function gotoJd() {

                app.startActivity({
                    data: "openApp.jdMobile://virtual?params=%7B%22des%22%3A%22m%22%2C%22url%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22category%22%3A%22jump%22%2C%22sourceType%22%3A%22JSHOP_SOURCE_TYPE%22%2C%22sourceValue%22%3A%22JSHOP_SOURCE_VALUE%22%2C%22M_sourceFrom%22%3A%22lkyl%22%2C%22msf_type%22%3A%22click%22%2C%22m_param%22%3A%7B%22m_source%22%3A%220%22%2C%22event_series%22%3A%7B%7D%2C%22jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%2C%22usc%22%3A%22androidapp%22%2C%22ucp%22%3A%22t_335139774%22%2C%22umd%22%3A%22appshare%22%2C%22utr%22%3A%22CopyURL%22%2C%22jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22ref%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22psn%22%3A%221664140455%7C472%22%2C%22psq%22%3A5%2C%22pc_source%22%3A%22%22%2C%22mba_muid%22%3A%221664140455%22%2C%22mba_sid%22%3A%221572979455588510925986537476%22%2C%22std%22%3A%22MO-J2011-1%22%2C%22par%22%3A%22%22%2C%22event_id%22%3A%22Mnpm_ComponentApplied%22%2C%22mt_xid%22%3A%22%22%2C%22mt_subsite%22%3A%22%22%7D%2C%22SE%22%3A%7B%22mt_subsite%22%3A%22%22%2C%22__jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22__jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%7D%7D",
                });

                sleep(random(21, 31) * speed);

                className("android.view.View").text("做任务领金币").waitFor();
                sleep(random(21, 31) * speed);
                if (!textContains("任务每日0点刷新").exists()) {
                    className("android.view.View").text("做任务领金币").findOne().parent().click()
                }

                textContains("任务每日0点刷新").waitFor()
                sleep(random(21, 31) * speed);
            }
        });
    });

    ui.gotojdGold.click(function () {
        threads.start(function () {

            console.show();
            sleep(10);
            console.setSize(device.width / 2, device.height / 3);
            auto.waitFor();
            var jdAuto = true;
            var speed = 100 - jd.speed;

            jd.list.forEach(element => {
                switch (element.id) {
                    case 'auto':
                        jdAuto = element.done;
                        break;
                    default:
                        break;
                }
            });

            if (jdAuto) {
                //打开活动页面
                log("正在进入个人中心");

                app.startActivity({
                    data: "openApp.jdMobile://virtual?params=%7B%22des%22%3A%22m%22%2C%22url%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22category%22%3A%22jump%22%2C%22sourceType%22%3A%22JSHOP_SOURCE_TYPE%22%2C%22sourceValue%22%3A%22JSHOP_SOURCE_VALUE%22%2C%22M_sourceFrom%22%3A%22lkyl%22%2C%22msf_type%22%3A%22click%22%2C%22m_param%22%3A%7B%22m_source%22%3A%220%22%2C%22event_series%22%3A%7B%7D%2C%22jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%2C%22usc%22%3A%22androidapp%22%2C%22ucp%22%3A%22t_335139774%22%2C%22umd%22%3A%22appshare%22%2C%22utr%22%3A%22CopyURL%22%2C%22jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22ref%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22psn%22%3A%221664140455%7C472%22%2C%22psq%22%3A5%2C%22pc_source%22%3A%22%22%2C%22mba_muid%22%3A%221664140455%22%2C%22mba_sid%22%3A%221572979455588510925986537476%22%2C%22std%22%3A%22MO-J2011-1%22%2C%22par%22%3A%22%22%2C%22event_id%22%3A%22Mnpm_ComponentApplied%22%2C%22mt_xid%22%3A%22%22%2C%22mt_subsite%22%3A%22%22%7D%2C%22SE%22%3A%7B%22mt_subsite%22%3A%22%22%2C%22__jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22__jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%7D%7D",
                });
                sleep(1000);
            } else { console.warn("请手动打开活动的小金人页面") }
            className("android.view.View").text("做任务领金币").waitFor();
            log("到达个人中心");
            sleep(1000);

            var x;
            var y;
            var count = 1;

            if (!textContains("点我得金币").exists()) {
                console.warn("请确保页面上存在小金人且有'点我得金币'等字样!!")
                textContains("点我得金币").waitFor();
            }
            var g = textContains("点我得金币").findOne();
            x = g.bounds().centerX();
            y = g.bounds().centerY();
            log("小金人位置获取成功!");

            while (count <= jd.goldTime) {
                for (var i = 0; i < 5; i++) {
                    click(x, y);
                    sleep(200);
                }
                log("第" + count + "次任务已完成");
                sleep(random(121, 131) * speed);
                count++;
            }
            log("小金人任务成功!");
            return
        });
    });

}

//启用按键监听
events.observeKey();
//监听音量上键按下
events.onKeyDown("volume_up", function (event) {
    threads.shutDownAll();
    console.clear();
    console.hide();
    toast("任务停止");
});