console.log("OK!")

$("a").each(function (index, element) {

    console.log("編號:" + index);

    var target = $(this).attr("data-bb-target");
    var duration = $(this).attr("data-bb-duration");

    console.log("目標:" + target);
    console.log("時間:" + duration);

    var offset = $("#" + target).offset();
    var top = offset.top;

    console.log("上方:" + top);

    $(this).click(function (e) {
        e.preventDefault();
        
        // parseInt() 將文字轉為數字
        // stop() 停止當前所有動畫
        $("html").stop().animate({
            scrollTop: top
        },parseInt(duration));
    });
});