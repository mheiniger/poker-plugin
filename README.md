poker-plugin
============

	var url = 'http://thecatontheflat.zu/all.js';

	var fileref = document.createElement('script');
	fileref.setAttribute("type","text/javascript");
	fileref.setAttribute("src", url);
	document.getElementsByTagName("head")[0].appendChild(fileref);


add it as a bookmarklet:
=======================

create a bookmark, name it poker-plugin and change the url to:
```
javascript:var url = 'https://raw.github.com/thecatontheflat/poker-plugin/master/all.js';var fileref = document.createElement('script');fileref.setAttribute("type","text/javascript");fileref.setAttribute("src", url);document.getElementsByTagName("head")[0].appendChild(fileref);
```
