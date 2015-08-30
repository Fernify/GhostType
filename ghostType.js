(function($){
	$.fn.GhostType = function(options){
		var settings = $.extend({
			wordArray: ["Lorem Ipsum", "Foo bar", "Ghost Type"],
			timeInterval: 100,
			showWordTime: 3,
			hideWordTime: 1,
			startMode: 4,
			cursor: true,
			cursorChar: "|",
			cursorTime: 0.5,
			stutterType: false
		}, options);

		return this.each(function(){
			var mode = settings.startMode;
			var showTimeInterval = (settings.showWordTime*1000)/settings.timeInterval;
			var hideTimeInterval = (settings.hideWordTime*1000)/settings.timeInterval;
			var cursorInterval = (settings.cursorTime*1000)/settings.timeInterval;
			var keyWords = settings.wordArray;
			var cursorShow = settings.cursor;
			var intervalCount = 0;
			var wordIndex = 0;
			var letterIndex = 0;
			var cursorCount = 0;
			var stutterWrite = settings.stutterType;
			$(this).append("<span id=\"gtText\"></span>");
			if(cursorShow){
				$(this).append("<span id=\"gtCursor\">" + settings.cursorChar + "</span>");
			}

			setInterval($.proxy(ghoster, this), settings.timeInterval);

			function ghoster(){
				var inWord=$("#gtText").text();
				var currWord=keyWords[wordIndex];
				var inWordLength=inWord.length;
				if(cursorShow){
					cursorCount++;
					if(cursorCount==cursorInterval){
						if($("#gtCursor").is(":visible")){
							$("#gtCursor").hide();
						}else{
							$("#gtCursor").show();
						}
						cursorCount = 0;
					}
				}
				if(mode==1){
					var doAction = true;
					
					letterIndex++;
					$("#gtText").text(currWord.substring(0,letterIndex));
					if(letterIndex==currWord.length){
						mode++;
						letterIndex=inWordLength+1;
						wordIndex++;
						if(wordIndex==keyWords.length){
							wordIndex=0;
						}
					}
				}
				else if(mode==2){
					intervalCount++;
					if(intervalCount==showTimeInterval){
						mode++;
						intervalCount=0;
					}
				}
				else if(mode==3){
					letterIndex--;
					$("#gtText").text(inWord.substring(0,letterIndex));
					if(letterIndex==0){
						mode++;
					}
				}
				else if(mode==4){
					intervalCount++;
					if(intervalCount==hideTimeInterval){
						mode=1;
						intervalCount=0;
					}
				}
			}
		});
	};
}(jQuery));