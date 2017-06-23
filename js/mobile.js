/**
 * Created by Administrator on 2017/5/23.
 */

function creatCode(){
//html ？后边的room 作为传参
    var url1="http://192.168.1.60:3455/GetJsonData.aspx";
    var url2=window.location.search;
    //console.log(url2);
    $.ajax({
        //url:url1+url2,
        url:"1.php",
        //dataType:'jsonp',
        dataType:"json",
        //processData: false,
        type:'get',
        cache:false,
        async:false,
        success:function(data){
            if(data!=""){
                if($("#scrolldata").html()==""){
                    $(".issue").html(data[0].issue);
                    $(".issueTime").html(data[0].issueTime);
                    $(".issueHost").html(data[0].issueHost);
                    $(".issueTeacher").html(data[0].issueTeacher);
                    $(".issueTeacherTel").html(data[0].issueTeacherTel);
                    var html="";
                    $.each(data,function(i,item){
                        var timeT=data[i].beginTime.slice(-8,-3)+"-"+data[i].endTime.slice(-8,-3);
                        html+=    "<li class='class"+i+"'><span class='time'>"
                        +timeT+"</span><span class='kecheng'>"+data[i].courseName+
                        "</span><span class='jiangshi'>"+data[i].speaker+"</span></li>";
                    });
                    $("#scrolldata").append(html);


                }
                flag=0;//有课没课标示
                $.each(data,function(i,item){
                    //二维码需要提前给出因此设置为20min前
                    //console.log(i+"更新完成");
                    var beTime=data[i].beginTime.replace(new RegExp(/-/gm) ,"/");
                    var enTime=data[i].endTime.replace(new RegExp(/-/gm) ,"/");
                    //console.log(enTime+"格式"+new Date(enTime));
                    //console.log(beTime);
                    var beginMs=new Date(beTime).getTime()-5*60*1000;
                    //提前5min
                    var endMs=new Date(enTime).getTime();
                    var nowMs=new Date().getTime();
                    // 当前时间满足 课表 为1，不满足为0; 都不满足都是0 flag>0说明有匹配及播放此页。如果flag=0,说明无匹配 播放宣传页面。
                    if ((nowMs>=beginMs)&&(nowMs<=endMs)){
                        //如果存在就删除div#find_no_record
                        //有课find_no_record align 为 right 或者center
                        //alert("有数据");
                        $("#find_no_record").attr("align","right");
                        if($("#code").html()==""){
                            $("#code").qrcode({"render":"canvas",height:200,width:200,text:data[i].qrcodeUrl});
                        }
                        //var qrWidth=parseFloat($("#code").css("width"));
                        flag+=1;
                    }else{
                        flag+=0;
                    }
                });
                //当前时间没有匹配的时间段，就不是上课时间，即跳转到 宣传页面。
                //稍后进行封装
                if(flag==0){
                    //没课时候将二维码去掉
                    $("#code").html("");
                    //var jumpElement=document.createElement("div");
                    //jumpElement.setAttribute("id","find_no_record");
                    //jumpElement.setAttribute("align","center");
                    //var node=document.getElementById("header");
                    ////父元素.（要插入的元素，在哪个元素前添加）
                    //if(!document.getElementById("find_no_record")){
                    //    document.getElementsByClassName("content")[0].insertBefore(jumpElement,node);
                    //}
                    //alert("没有数据")
                    $("#find_no_record").attr("align","left");
                }
                if(flag==1){
                }
            }
        },
        error:function() {
            //console.log("数据传输失败");
        }});
    //生成二维码
}

//获得时间
function nowTime(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hour = date.getHours()<10?"0"+date.getHours():date.getHours();
        var minute = date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
        var second = date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds();
        var weekday=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
        var today=weekday[date.getDay()];
        return year+"年"+month+"月"+day+"日 "+today+" "+hour+":"+minute+":"+second;
}
//软件第一次不启动字幕，不论有课没课，都要求是没课状态，当有课时候切换时 就会有字幕

//更新时间
creatCode();
setInterval(function(){
    $(".date").html(nowTime);
},1000);
setInterval(function(){
    creatCode();
},5000);

//窗口尺寸变换
//document.onresize=function(){
//    var qrWidth=$(".qrcode").css("width");
//    console.log(qrWidth);
//    $(".qrcode").css("height",qrWidth).qrcode({text:"http://baidu.com"}).children("canvas").css({"width":qrWidth,"height":qrWidth});
//};
