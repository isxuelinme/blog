<?php

$type = intval($_GET['type']);

if ($type == 1) {
	$key = $_GET['key'];
	$limit = 20;
	
	if(!$key||!$limit){
		$tempArr = array("code"=>-1,"msg"=>"输入参数有误！");
		echo  json_encode($tempArr);
	}else{
		$url= "http://music.163.com/api/search/get/web?csrf_token=";
	
		header("Content-type:text/html;charset=utf-8");
		echo getMusicJSON($url, $key, $limit);
	}
}else if ($type == 2) {
	$id = intval($_GET['id']);
	$url= "http://music.163.com/api/song/detail/?id=".$id."&ids=%5B".$id."%5D";
	
	header("Content-type:text/html;charset=utf-8");
	echo getMusicJSON($url, 1, 10);
}





function getMusicJSON($url,$key,$limit){
    $curl = curl_init();
    $post_data = 'hlpretag=<span class="s-fc7">&hlposttag=</span>&s='. $key . '&type=1&offset=0&total=true&limit=' . $limit;
    curl_setopt($curl, CURLOPT_URL,$url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,1);

    $header =array(
        'Host: music.163.com',
        'Origin: http://music.163.com',
        'User-Agent: Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36',
        'Content-Type: application/x-www-form-urlencoded',
        'Referer: http://music.163.com/search/',
    );

    curl_setopt($curl, CURLOPT_HTTPHEADER, $header);

    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
    $src = curl_exec($curl);
    curl_close($curl);
    return $src;
}

