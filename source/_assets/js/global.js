//= require js/include/jquery.js
//= require js/include/jquery.stayInWebApp.js
//= require js/include/jquery.swipebox.js
//= require js/include/resizer.js
//= require js/include/contact.js
//= require js/include/audioplayer.js
//= require js/include/jquery.lazyloadxt.js
//= require js/include/jquery.lazyloadxt.widget.js

(function($) {
	$('.swipebox').swipebox();

})(jQuery);

$(function() {
    $.stayInWebApp();
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://cdn.andremoreno.com/analytics.js','ga');

  ga('create', 'UA-46991422-1', 'auto');
  ga('send', 'pageview');