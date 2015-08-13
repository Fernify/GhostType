(function($){
	$.fn.GhostType = function(options){
		var settings = $.extend({
			wordArray: ["Lorem Ipsum", "Foo bar", "Ghost Type"],
			timeInterval: 200,
			showWordTime: 4,
			hideWordTime: 1,
			startMode: 4
		}, options);

		return this.each(function(){
			var mode = settings.startMode;
			var showTimeInterval = settings.showWordTime/(settings.timeInterval/1000);
			var hideTimeInterval = settings.hideWordTime/(settings.timeInterval/1000);
			var intervalCount = 0;
			var wordIndex = 0;
			var letterIndex = 0;
			var keyWords = settings.wordArray;

			setInterval($.proxy(ghoster, this), settings.timeInterval);

			function ghoster(){
				var inWord=$(this).text();
				var currWord=keyWords[wordIndex];
				var inWordLength=inWord.length;
				if(mode==1){
					letterIndex++;
					$(this).text(currWord.substring(0,letterIndex));
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
					$(this).text(inWord.substring(0,letterIndex));
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