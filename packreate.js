var logIt = function(data) {
	if (!data) return;
	requestStylesheet('http://www.packreate.com/wp-content/plugins/packreate-api/packreate.css');
	var output='';
   for(i=0;i<data.length;i++){
	   
	   var packItemTitle=data[i]['title'];
	   var packItemThumb=data[i]['thumbnail'];
	   var packItemPrice=data[i]['amount'];
           var link=data[i]['link'];
	   output+='<div class="pack-item">';
	   output+='<div class="pack-thumb"><a href="'+link+'" target="_blank"><img src="'+packItemThumb+'"/></a></div>';
	   output+='<div class="pack-title">'+packItemTitle+'</div>';
	   output+='<div class="pack-price">$'+packItemPrice+'</div>';
	   output+='</div>';
   }
   window.console && console.log(output);
   document.getElementById('packreate-products').innerHTML='<div class="packreate-products">'+output+'<div class="pack-clear"></div></div>';
  
}

 
var scriptTag = document.createElement('SCRIPT');
scriptTag.src = "http://www.packreate.com/api?callback=logIt";
 
document.getElementsByTagName('HEAD')[0].appendChild(scriptTag);
function requestStylesheet(stylesheet_url) {
    stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = stylesheet_url;
    stylesheet.media = "all";
    document.lastChild.firstChild.appendChild(stylesheet);
  }
