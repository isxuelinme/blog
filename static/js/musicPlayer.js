(function($){
	$.musicPlayer = new Object();
	$.musicPlayer.musicList = [];
	$.musicPlayer.playIndex = 0;
	$.musicPlayer.init = function(){
		
		$.musicPlayer.handler = $('#audioHandler').get(0);
		$('.musicPlayer #play').on('click',function(){
			
			$.musicPlayer.play();
			
		});
		$('.musicPlayer #prev').on('click',function(){
			
			$.musicPlayer.prev();
			
		});

		$('.musicPlayer #next').on('click',function(){
			
			$.musicPlayer.next();
			
		});
		
		
	}
	
	$.musicPlayer.prev = function(){
		
		if($.musicPlayer.playIndex != 0 && $.musicPlayer.musicList.length > 1){
			
			$.musicPlayer.toPlay($.musicPlayer.musicList[$.musicPlayer.playIndex - 1].mp3);
			$.musicPlayer.playIndex = $.musicPlayer.playIndex - 1;
			
		}else{
			$.musicPlayer.playIndex = $.musicPlayer.musicList.length - 1;
			$.musicPlayer.toPlay($.musicPlayer.musicList[$.musicPlayer.musicList.length - 1].mp3);
		}
		
		
	}
	
	$.musicPlayer.next = function(){
		
		if($.musicPlayer.playIndex != $.musicPlayer.musicList.length -1 && $.musicPlayer.musicList.length > 1){
			
			$.musicPlayer.toPlay($.musicPlayer.musicList[$.musicPlayer.playIndex + 1].mp3);
			$.musicPlayer.playIndex = $.musicPlayer.playIndex + 1;
		}else{
			$.musicPlayer.playIndex = 0;
			$.musicPlayer.toPlay($.musicPlayer.musicList[0].mp3);
		}
		
		
	}
	
	$.musicPlayer.play = function(){
		
		//歌词
		//进度条
		//请求真实音乐地址
		$.musicPlayer.handler.play();
		$('.musicPlayer #play').attr('id','pause');
		$('.musicPlayer #pause').on('click',function(){
			
			$.musicPlayer.pause();
			
		});
		
		
	}
	
	$.musicPlayer.pause = function(){
		
		$.musicPlayer.handler.pause();
		$('.musicPlayer #pause').attr('id','play');
		$('.musicPlayer #play').on('click',function(){
			
			$.musicPlayer.play();
			
		});

	}
	
	$.musicPlayer.toPlay = function(musicURL){
		$.musicPlayer.handler.src = musicURL;
		$.musicPlayer.play();
	}
	
	
	$.musicPlayer.setMode = function(loopType){
		//设置循环模式 1 单曲 2 列表 3 随机
	}
	
})($);