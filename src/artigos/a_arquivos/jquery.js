(function(b,a){$window=b(a);b.fn.lazyload=function(c){var e=this;var d={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:a,data_attribute:"original",skip_invisible:true,appear:null,load:null};function f(){var g=0;e.each(function(){var h=b(this);if(d.skip_invisible&&!h.is(":visible")){return}if(b.abovethetop(this,d)||b.leftofbegin(this,d)){}else{if(!b.belowthefold(this,d)&&!b.rightoffold(this,d)){h.trigger("appear")}else{if(++g>d.failure_limit){return false}}}})}if(c){if(undefined!==c.failurelimit){c.failure_limit=c.failurelimit;delete c.failurelimit}if(undefined!==c.effectspeed){c.effect_speed=c.effectspeed;delete c.effectspeed}b.extend(d,c)}$container=(d.container===undefined||d.container===a)?$window:b(d.container);if(0===d.event.indexOf("scroll")){$container.bind(d.event,function(g){return f()})}this.each(function(){var g=this;var h=b(g);g.loaded=false;h.one("appear",function(){if(!this.loaded){if(d.appear){var i=e.length;d.appear.call(g,i,d)}b("<img />").bind("load",function(){h.hide().attr("src",h.data(d.data_attribute))[d.effect](d.effect_speed);g.loaded=true;var j=b.grep(e,function(l){return !l.loaded});e=b(j);if(d.load){var k=e.length;d.load.call(g,k,d)}}).attr("src",h.data(d.data_attribute))}});if(0!==d.event.indexOf("scroll")){h.bind(d.event,function(i){if(!g.loaded){h.trigger("appear")}})}});$window.bind("resize",function(g){f()});f();return this};b.belowthefold=function(d,e){var c;if(e.container===undefined||e.container===a){c=$window.height()+$window.scrollTop()}else{c=$container.offset().top+$container.height()}return c<=b(d).offset().top-e.threshold};b.rightoffold=function(d,e){var c;if(e.container===undefined||e.container===a){c=$window.width()+$window.scrollLeft()}else{c=$container.offset().left+$container.width()}return c<=b(d).offset().left-e.threshold};b.abovethetop=function(d,e){var c;if(e.container===undefined||e.container===a){c=$window.scrollTop()}else{c=$container.offset().top}return c>=b(d).offset().top+e.threshold+b(d).height()};b.leftofbegin=function(d,e){var c;if(e.container===undefined||e.container===a){c=$window.scrollLeft()}else{c=$container.offset().left}return c>=b(d).offset().left+e.threshold+b(d).width()};b.inviewport=function(c,d){return !b.rightofscreen(c,d)&&!b.leftofscreen(c,d)&&!b.belowthefold(c,d)&&!b.abovethetop(c,d)};b.extend(b.expr[":"],{"below-the-fold":function(c){return b.belowthefold(c,{threshold:0,container:a})},"above-the-top":function(c){return !b.belowthefold(c,{threshold:0,container:a})},"right-of-screen":function(c){return b.rightoffold(c,{threshold:0,container:a})},"left-of-screen":function(c){return !b.rightoffold(c,{threshold:0,container:a})},"in-viewport":function(c){return !b.inviewport(c,{threshold:0,container:a})},"above-the-fold":function(c){return !b.belowthefold(c,{threshold:0,container:a})},"right-of-fold":function(c){return b.rightoffold(c,{threshold:0,container:a})},"left-of-fold":function(c){return !b.rightoffold(c,{threshold:0,container:a})}})})(jQuery,window);

/*
     FILE ARCHIVED ON 13:13:24 Jun 02, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:13 Dec 12, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.223
  esindex: 0.011
  RedisCDXSource: 49.001
  load_resource: 508.202
  CDXLines.iter: 38.68 (3)
  PetaboxLoader3.datanode: 599.679 (5)
  exclusion.robots: 0.238
  LoadShardBlock: 661.493 (3)
  PetaboxLoader3.resolve: 542.331 (3)
  captures_list: 1418.754
*/