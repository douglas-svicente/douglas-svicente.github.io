var SLoader=function(){var instanceMethod="getInstance",regExp=new RegExp("(.*)(javaScriptName)(.*)","gi"),replacementBefore="$1",replacementAfter="$3",isDussanti=(new RegExp("/dussanti/jsp/page","gi")).test(document.location.href),isWordpress=(new RegExp("wp.[a-zA-Z0-9-]*.com.br","gi")).test(document.location.host),isCongenit=(new RegExp("/jsp/(cebedit|beta_cebedit|beta_filler).jsp","gi")).test(document.location.href),subdomain,namePattern=function(publishPath){if(!subdomain){return isDussanti?("/admin/dussanti/jsp/proxy.jsp?url=http%3A//www.clicrbs.com.br"+publishPath+"javaScriptName.js"):(isWordpress?("/proxy.php?contentType=application%2Fx-javascript&charset=ISO-8859-1&url=http%3A//www.clicrbs.com.br"+publishPath+"javaScriptName.js"):(isCongenit?("/admin/dussanti/jsp/proxy.jsp?url=http%3A//www.clicrbs.com.br"+publishPath+"javaScriptName.js"):(publishPath+"javaScriptName.js")))}else{return isDussanti?("/admin/dussanti/jsp/proxy.jsp?charset=UTF-8&url=http%3A//"+subdomain+".clicrbs.com.br"+publishPath+"javaScriptName.js"):(isWordpress?("/proxy.php?contentType=application%2Fx-javascript&charset=UTF-8&url=http%3A//"+subdomain+".clicrbs.com.br"+publishPath+"javaScriptName.js"):(publishPath+"javaScriptName.js"))}},loadScript=function(publishPath,replacement){jQuery.ajax({type:"GET",url:(namePattern(publishPath)).replace(regExp,replacement),dataType:"script",async:false,cache:true})};return{getObj:function(publishPath,objName){objName+="ClicRbs";if(eval("typeof "+objName)!="function"){loadScript(publishPath,replacementBefore+objName+replacementAfter)}return eval(objName+"."+instanceMethod+"()")},newObj:function(publishPath,objName){objName+="ClicRbs";if(eval("typeof "+objName)!="function"){loadScript(publishPath,replacementBefore+objName+replacementAfter)}return eval("new "+objName+"()")},setSubdomain:function(subdomain_){subdomain=subdomain_}}};SLoader.instance=null,SLoader.getInstance=function(){if(!SLoader.instance){SLoader.instance=new SLoader()}return SLoader.instance},SLoader.getObj=function(b,a){return SLoader.getInstance().getObj(b,a)},SLoader.newObj=function(b,a){return SLoader.getInstance().newObj(b,a)},SLoader.setSubdomain=function(a){return SLoader.getInstance().setSubdomain(a)};

/*
     FILE ARCHIVED ON 13:13:24 Jun 02, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:14 Dec 12, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.249
  esindex: 0.016
  exclusion.robots.policy: 0.231
  CDXLines.iter: 30.613 (3)
  LoadShardBlock: 86.069 (3)
  RedisCDXSource: 0.674
  PetaboxLoader3.resolve: 855.951 (2)
  captures_list: 300.176
  load_resource: 964.718
  PetaboxLoader3.datanode: 98.33 (5)
*/