<?php
    header("Content-Type=>application/json;charset=UTF-8");
    $output=[];
    $output[]=["courseID"=>"1","issue"=>"网大项目测试","issueTime"=>"2017年5月17日-2017年5月22日","issueHost"=>"中国移动学院","issueTeacher"=>"易中天","issueTeacherTel"=>"18612562171","beginTime"=>"2017-06-16 08:35:00","endTime"=>"2017-06-16 08:59:00","courseName"=>"数学","speaker"=>"于丹","roomID"=>"302","roomName"=>"第三教室","qrcodeUrl"=>"https://www.baidu.com/"];
	$output[]=["courseID"=>"2","issue"=>"网大项目测试","issueTime"=>"2017年5月17日-2017年5月22日","issueHost"=>"中国移动学院","issueTeacher"=>"易中天","issueTeacherTel"=>"18612562171","beginTime"=>"2017-06-16 09:00:00","endTime"=>"2017-06-16 09:24:00","courseName"=>"语文","speaker"=>"王丹","roomID"=>"302","roomName"=>"第三教室","qrcodeUrl"=>"http://www.cnblogs.com/hamsterPP/p/6763458.html"];
	$output[]=["courseID"=>"3","issue"=>"网大项目测试","issueTime"=>"2017年5月17日-2017年5月22日","issueHost"=>"中国移动学院","issueTeacher"=>"易中天","issueTeacherTel"=>"18612562171","beginTime"=>"2017-06-16 09:25:00","endTime"=>"2017-06-16 09:26:00","courseName"=>"历史","speaker"=>"赵丹","roomID"=>"302","roomName"=>"第三教室","qrcodeUrl"=>"http://www.cnblogs.com/hamsterPP/p/6763458.html"];
	$output[]=["courseID"=>"4","issue"=>"网大项目测试","issueTime"=>"2017年5月17日-2017年5月22日","issueHost"=>"中国移动学院","issueTeacher"=>"易中天","issueTeacherTel"=>"18612562171","beginTime"=>"2017-06-16 09:27:00","endTime"=>"2017-06-16 09:35:00","courseName"=>"历史","speaker"=>"赵丹","roomID"=>"302","roomName"=>"第三教室","qrcodeUrl"=>"http://www.cnblogs.com/hamsterPP/p/6763458.html"];
	$output[]=["courseID"=>"5","issue"=>"网大项目测试","issueTime"=>"2017年5月17日-2017年5月22日","issueHost"=>"中国移动学院","issueTeacher"=>"易中天","issueTeacherTel"=>"18612562171","beginTime"=>"2017-06-16 09:35:00","endTime"=>"2017-06-16 19:40:00","courseName"=>"历史","speaker"=>"赵丹","roomID"=>"302","roomName"=>"第三教室","qrcodeUrl"=>"http://www.cnblogs.com/hamsterPP/p/6763458.html"];
	echo json_encode($output);