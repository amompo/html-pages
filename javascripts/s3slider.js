/* ------------------------------------------------------------------------
	s3Slider
	
	Developped By: Boban Karišik -> http://www.serie3.info/
        CSS Help: Mészáros Róbert -> http://www.perspectived.com/
	Version: 1.0
	
	Copyright: Feel free to redistribute the script/modify it, as
			   long as you leave my infos at the top.
------------------------------------------------------------------------- */


(function($){  

    $.fn.s3Slider = function(vars) {       
        
        var element     = this;
        var timeOut     = (vars.timeOut != undefined) ? vars.timeOut : 4000; /* 4 seconds  = 4000 millisecs */
        var current     = null;
        var timeOutFn   = null;
        var faderStat   = true;
        var mOver       = false;
        var readFactors = vars.readFactors;

        var itemsDefault       = "#" + element[0].id + "Content ." + element[0].id + "Image";
        var itemsSpanDefault   = "#" + element[0].id + "Content ." + element[0].id + "Image span";

        var items = $(vars.items || itemsDefault);
        var itemsSpan = $(vars.itemsSpan || itemsSpanDefault);
            
        items.each(function(i) {
    
            $(items[i]).mouseover(function() {
               mOver = true;
            });
            
            $(items[i]).mouseout(function() {
                mOver   = false;
                fadeElement(true);
            });
            
        });
        
        var readFactor = function(slideNo) {
        	if (!readFactors) {
        		return 1;
        	} else {
        	  return readFactors[slideNo];
        	}
        }

        var fadeElement = function(slideNo, isMouseOut) {
			readFac = readFactor(slideNo);
			// console.log('readFac', slideNo, readFac);

        	timeToRead = timeOut * 1.5 * readFac;
        	quickTime = timeOut * readFac;

			// console.log('timeToRead', timeToRead);
			// console.log('quickTime', quickTime);

            var thisTimeOut = (isMouseOut) ? quickTime : timeToRead;
            thisTimeOut = (faderStat) ? 10 : thisTimeOut;
            if(items.length > 0) {
                timeOutFn = setTimeout(makeSlider, thisTimeOut);
            } else {
                console.log("Poof..");
            }
        }
        
        var makeSlider = function() {
            current = (current != null) ? current : items[(items.length-1)];
            var currNo      = jQuery.inArray(current, items) + 1
            currNo = (currNo == items.length) ? 0 : (currNo - 1);
            var newMargin   = $(element).width() * currNo;


			var timeIn =  timeOut;
            var fadeInTime =  timeIn/3.2;
            var fadeOutTime = timeOut/3.2;
            var slideDownTime = timeOut/6;
            var slideUpTime = timeOut/6;

            if(faderStat == true) {
                if(!mOver) {
                    $(items[currNo]).fadeIn(fadeInTime, function() {
                        if($(itemsSpan[currNo]).css('bottom') == 0) {
                            $(itemsSpan[currNo]).slideUp(slideUpTime, function() {
                                faderStat = false;
                                current = items[currNo];
                                if(!mOver) {
                                    fadeElement(currNo, false);
                                }
                            });
                        } else {
                            $(itemsSpan[currNo]).slideDown(slideDownTime, function() {
                                faderStat = false;
                                current = items[currNo];
                                if(!mOver) {
                                    fadeElement(currNo, false);
                                }
                            });
                        }
                    });
                }
            } else {
                if(!mOver) {
                    if($(itemsSpan[currNo]).css('bottom') == 0) {
                        $(itemsSpan[currNo]).slideDown(slideDownTime, function() {
                            $(items[currNo]).fadeOut(fadeOutTime, function() {
                                faderStat = true;
                                current = items[(currNo+1)];
                                if(!mOver) {
                                    fadeElement(currNo, false);
                                }
                            });
                        });
                    } else {
                        $(itemsSpan[currNo]).slideUp(slideUpTime, function() {
                        $(items[currNo]).fadeOut(fadeOutTime, function() {
                                faderStat = true;
                                current = items[(currNo+1)];
                                if(!mOver) {
                                    fadeElement(currNo, false);
                                }
                            });
                        });
                    }
                }
            }
        }
        
        makeSlider();
        return this;

    };  

})(jQuery);  