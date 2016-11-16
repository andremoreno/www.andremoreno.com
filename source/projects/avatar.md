---
layout: extra
title: Twitter Avatar API
stitle: Twitter Avatar API
comments: true
excerpt: This is is a RESTful API to a Twitter user's avatar built out of frustration of external Twitter apps breaking when the avatar url is stored, and then changed by that user later on Twitter - the result is a broken image on that app unless they constantly check for profile changes.
---

This is is a RESTful API to a Twitter user's avatar built out of frustration of external Twitter apps breaking when the avatar url is stored, and then changed by that user later on Twitter - the result is a broken image on that app unless they constantly check for profile changes.

### Consume
<a href="https://www.mashape.com/andremoreno/twitter-avatar?&amp;utm_campaign=mashape5-embed&amp;utm_medium=button&amp;utm_source=twitter-avatar&amp;utm_content=anchorlink&amp;utm_term=icon-light"><img alt="Mashape" src="https://d1g84eaw0qjo7s.cloudfront.net/images/badges/badge-icon-light-9e8eba63.png" height="38" width="143"></a>

---

### Rate Limiting
     There is no limitation at this moment, so please use it fairly.

---


### Usage

{% highlight html %}
<img src="http://twvtr.com/[screen_name]" />
{% endhighlight %}

Also, if you need it, you can use HTTPS:

{% highlight html %}
<img src="https://twvtr.com/[screen_name]" />
{% endhighlight %}

And you can specify the size image you want using this one of this options:

    mini (24x24)
    normal (48x48 - default)
    bigger (73x73)
    original

So the code will be like the example below:

{% highlight html %}
<img src="http://twvtr.com/[screen_name]/[size]" />
{% endhighlight %}

---

### Example:
###### HTTP Request

{% highlight html %}
<img src="http://twvtr.com/SnaptwitID/bigger" />
{% endhighlight %}

<img src="//twvtr.com/SnaptwitID/bigger" alt="" />


##### HTTPS Request

{% highlight html %}
<img src="https://twvtr.com/SnaptwitID/original" />
{% endhighlight %}

<img src="//twvtr.com/SnaptwitID/original" alt="" />

---

### Licence

This API is free to use, but you must provide a clickable link back to <a href="http://www.andremoreno.com">andremoreno.com</a>
Scraping of the site is not allowed. And please let me know if you use this API. Feedback is welcome. If you have any questions, feel free to Contact me. If the licence doesn't fit, send me an email and we might work something out. 

---

<!-- ### Uptime

This API is constantly monitored for uptime and response-times from around the world. Visit the <a href="http://dashboard.andremoreno.com" target="_blank">Uptime Status</a> reports for details. -->
