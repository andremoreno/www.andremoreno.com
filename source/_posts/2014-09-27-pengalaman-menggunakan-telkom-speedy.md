---
layout: post
title: "Pengalaman Menggunakan Telkom Speedy"
date: 2014-09-27
excerpt: Beberapa hari belakangan ini saya merasa ada yang kurang sreg dengan koneksi internet dari Telkom Speedy yang biasa saya pakai. Ping besar, sering timeout, dan koneksi down. Biasanya kalau down, tidak lama kemudian koneksi lancar kembali. Tapi kali ini setelah down, up lagi, tak lama kemudian down lagi.
imagefeature: /images/20140927/telkomspeedy.jpg
comments: false
embedtweet: true
---

Beberapa hari belakangan ini saya merasa ada yang kurang sreg dengan koneksi internet dari Telkom Speedy yang biasa saya pakai. Ping besar, sering timeout, dan koneksi down. Biasanya kalau down, tidak lama kemudian koneksi lancar kembali. Tapi kali ini setelah down, up lagi, tak lama kemudian down lagi. Terkadang mengesalkan apabila sedang streaming Youtube, sudah diturunkan ke resolusi 144 kbps, eh masih buffer juga. Hal seperti ini belum pernah terjadi sebelumnya.

Saya mungkin bukan pengguna lama Telkom Speedy. Sebelumnya saya menggunakan First Media, namun karena area rumah saya tidak ada dalam coverage First Media, maka beralihlah menggunakan Telkom Speedy. Saya ingat dulu sering baca artikel-artikel mengenai pelayanan Telkom Speedy yang kurang memuaskan, namun saya pikir tidak ada salahnya untuk mencoba dulu.

Setelah beberapa lama menggunakan Telkom Speedy ini, menurut saya pribadi, pelayanan Telkom Speedy ini cukup memuaskan. Kalaupun ada beberapa down time, biasanya cepat teratasi setelah lapor via twitter ke <a href="https://twitter.com/TelkomCare" target="_blank">@TelkomCare</a>. Beberapa kali juga teknisi datang ke tempat saya karena laporan adanya masalah dengan Speedy saya.

Nah, untuk masalah kali ini, pada tanggal 26 September saya kembali melaporkannya via Twitter ke @TelkomCare.

<blockquote class="twitter-tweet" lang="en" data-cards="hidden"><p><a href="https://twitter.com/TelkomCare">@TelkomCare</a> malam .. speedy saya down lagi nih.. sudah restart modem.. blakangan ini sering banget down. mohon pncerahan..</p>&mdash; Snaptwit (@SnaptwitID) <a href="https://twitter.com/SnaptwitID/status/515508559342477312">September 26, 2014</a></blockquote>

Yang saya suka dari @TelkomCare ini adalah mereka cukup cepat membalas tweet-tweet yang ditujukan kepada mereka. Kali ini balasan / reply dari @TelkomCare atas tweet saya tadi dimulai dengan <a href="https://twitter.com/TelkomCare/status/515510050572357634">menanyakan apakah ada gangguan pada line telp yang dipakai</a>, "<a href="https://twitter.com/TelkomCare/status/515512062550614016">restart modem</a>", "<a href="https://twitter.com/TelkomCare/status/515527153362812929">setting dns manual</a>". Saya tidak keberatan dengan <a href="https://twitter.com/SnaptwitID/status/515508559342477312" target="_blank">tweet balasan yang diberikan oleh @TelkomCare atas tweet dari saya tadi</a>. Walaupun memang tidak menyelesaikan masalah, namun kalau saya pikir, kebanyakan orang pasti suka bila ada reply dari tweet yang mereka kirimkan. Salut untuk mereka. Kalo istilah di cover DVD bajakan adalah "two thumbs up".

Modem yang saya pakai adalah TP-Link W8951ND. Dan seperti ini lah salah satu dari log yang saya dapat dari 192.168.1.1.

{% highlight html %}
1/1/2000 0:26:59> Connect() to NTP server fail
1/1/2000 0:26:59> adjTimeTask fail: id = 5, ip = 76626197
1/1/2000 0:26:59> sending request to NTP server(656)
1/1/2000 0:26:59> received from NTP server(656)
9/26/2014 17:16:34> Adjust time to 54259f72
9/26/2014 17:16:34> adjtime task pause 1 day
9/26/2014 17:17:35> netMakeChannDial: err=-3000 rn_p=80543d40
9/26/2014 17:17:44> Last errorlog repeat 4 Times
9/26/2014 17:17:50> netMakeChannDial: err=-3000 rn_p=80543d40
9/26/2014 17:17:55> Last errorlog repeat 3 Times
9/26/2014 17:17:58> netMakeChannDial: err=-3000 rn_p=80543d40
9/26/2014 17:18:11> Call drop because echo reply not received in time
9/26/2014 17:18:11> SNMP TRAP 2: link down
{% endhighlight %}
-----

Sebenarnya ada hal lain yang saya kurang suka dengan koneksi internet dari Telkom Speedy ini adalah mereka memasukkan kode iklan di bagian bawah (atau footer atau apalah istilahnya) pada halaman web. Saya kaget melihat kode halaman web yang pernah saya buat muncul kode tersebut. Saya periksa kembali kode asli ternyata tidak ada kode javascript tersebut. _Kode iklan paksaan_ tersebut dimasukkan sebelum tag `</body>` pada halaman web. Kira-kira seperti ini isinya:

{% highlight html %}
<script type="text/javascript">if(self==top){var idc_glo_url = (location.protocol=="https:" ? "https://" : "http://");var idc_glo_r = Math.floor(Math.random()*99999999999);document.write("<scr"+"ipt type=text/javascript src="+idc_glo_url+ "cfs.u-ad.info/cfspushadsv2/request");document.write("?id=1");document.write("&amp;enc=telkom2");document.write("&amp;params=" + "4TtHaUQnUEiP6K%2fc5C582PlvV7TskJKDdxy6Zk4ANLatakrGnEJHn7llT3hKQG8%2bEGU31K5CH7wU0WbbdX5EZUBSSBHNQxPhm1IfrMNczzwRUOEefAQMNmaSr6aeszmhmMHAdrTFJYcXnsCvbbQjVJKB%2fk3ZPWqGZzk2pndeYqMJxDgn2nA1Cymjlg7u%2bzd6XEpxSd89B3FXFEcNKAftAUGT5vt%2buSCMbhG05xoMRgEo3YmTlFP0dei6iUmDSDCoiE2Nsa5oc2aYPNId8XVuOyHDdJ9COn%2bkOeaQo25u3jhSm8w0Jh1QNUT%2fh9EPq5K6ULUmmxrsaH1MJbm3zYGps8OWd%2bhQQMK1SRHwICDc%2fF8%3d");document.write("&amp;idc_r="+idc_glo_r);document.write("&amp;domain="+document.domain);document.write("&amp;sw="+screen.width+"&amp;sh="+screen.height);document.write("></scr"+"ipt>");}</script><noscript>activate javascript</noscript>
</body>
</html>
{% endhighlight %}

Dan yang mengesalkan adalah sepertinya server iklan itu lambat, jadi akses halaman web pun jadi terasa agak berat.

Postingan ini dibuat saat internet masih *offline*, karena koneksi internet masih down, dan masih berharap koneksi kembali normal.

-------

### Update

2014-09-27 08:00 - Internet masih Down. Ini down terlama yang pernah terjadi selain down karena telat bayar tagihan internet. :D

2014-09-27 14:00 - Koneksi internet Up!!

2014-09-27 14:19 - Tak lama kemudian koneksi down kembali.

<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p>.<a href="https://twitter.com/TelkomCare">@TelkomCare</a> akhirnya koneksi up jam 2 siang.. dan down lagi jam 14:20 .. :D</p>&mdash; Snaptwit (@SnaptwitID) <a href="https://twitter.com/SnaptwitID/status/515763101354835968">September 27, 2014</a></blockquote>

2014-09-27 16:15 - Internet Up!<br /><a href="http://www.speedtest.net/my-result/3791145599"><img src="https://cdn.andremoreno.com/static/3791145599.png" /></a>

2014-09-27 20:46 - Internet Down!

2014-09-27 21:12 - Internet Up!

<a href="https://cdn.andremoreno.com/images/20140927/capture3.jpg" class="swipebox" title=""><img id="top" src="//cdn.andremoreno.com/static/wait.gif" class="resize js_show loading_image" data-href="/images/20140927/capture3.jpg" alt="" /></a><br />
Tapi sepertinya masih belum normal. Upstream 64kbps? >.<


2014-09-29 11:00 - Internet Down! dan seperti biasa <a href="https://twitter.com/SnaptwitID/status/516456073369120768" target="_blank">kembali melaporkan via Twitter</a>.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/TelkomCare">@TelkomCare</a> siang kk.. mohon dicek apakah speedy saya ada masalah, karena down.. sudah direstart, 5 menit, masih tetep down :(</p>&mdash; Snaptwit (@SnaptwitID) <a href="https://twitter.com/SnaptwitID/status/516456073369120768">September 29, 2014</a></blockquote>


2014-09-29 14:52 - Pihak Telkom Speedy menghubungi saya untuk mengecek kembali mengenai koneksi Internet, dan setelah saya periksa nampaknya sudah normal.

<a href="https://cdn.andremoreno.com/images/20140927/capture4.jpg" class="swipebox" title=""><img id="top" src="https://cdn.andremoreno.com/static/wait.gif" class="resize js_show loading_image" data-href="/images/20140927/capture4.jpg" alt="" /></a>
