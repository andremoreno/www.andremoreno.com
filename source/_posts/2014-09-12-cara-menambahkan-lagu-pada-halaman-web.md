---
layout: post
title: "Cara Menambahkan Lagu Pada Halaman Web"
date: 2014-09-12
excerpt: <img src="https://cdn.andremoreno.com/static/wait.svg" class="resize js_show loading_image" data-href="/images/20140912/screenshot.jpg" alt="" /> Terkadang kita ingin menambahkan / memasukkan lagu pada halaman web. Biar kesannya lebih menarik, atau hanya sekedar menampilkan lagu favorit saat ini, ataupun alasan lain yang kadang-kadang suka tidak jelas. Apalagi saat ini ada banyak situs di internet yang memungkinkan untuk mengunduh jenis lagu secara <em>gratis</em>.
imagefeature: /images/20140912/screenshot.jpg
share: true
comments: true
audioplayer: true
---

<a href="{{site.staticurl}}/images/20140912/screenshot.jpg" class="swipebox" title=""><img src="{{site.staticurl}}/static/wait.svg" class="resize js_show loading_image" data-href="/images/20140912/screenshot.jpg" alt="" /></a>
<noscript><img src="{{site.staticurl}}/s720/images/20140912/screenshot.jpg" /></noscript>

Terkadang kita ingin menambahkan / memasukkan lagu pada halaman web. Biar kesannya lebih menarik, atau hanya sekedar menampilkan lagu favorit saat ini, ataupun alasan lain yang kadang-kadang suka tidak jelas. Apalagi saat ini ada banyak situs di internet yang memungkinkan untuk mengunduh jenis lagu secara *gratis*. Kira-kira seperti ini yang saya maksudkan:

<audio preload="auto" controls>
    <source src="{{site.staticurl}}/misc/CDC_teinytc.mp3" />
    <source src="{{site.staticurl}}/misc/CDC_teinytc.ogg" />
</audio>

> <a href="https://twitter.com/CDCJKT" target="_blank">Cemetery Dance Club</a> - The End Is Not Yet To Come

Masih ingat saya dulu pernah menggunakan Yahoo Media Player. Cara ini cukup mudah. Jadi saya hanya perlu memasukkan kode Javascript pada halaman web kita, lalu memasukan kode dengan link yang berisi file mp3

{% highlight html %}
<a href="song1.mp3">Putar Lagu 1</a>
{% endhighlight %}

Tapi nampaknya http://mediaplayer.yahoo.com/js sudah tidak aktif lagi.

Kalau menggunakan Wordpress, bisa mencari <a href="https://www.google.com/search?q=wordpress+audio+player" target="_blank">plugin audio player untuk Wordpress</a>. Karena saya tidak menggunakan wordpress, maka harus mencari sendiri "plugin" yang sesuai dengan keinginan. Pertama-tama saya mencari di jsDelivr dengan keyword audio. Kenapa jsDelivr? Karena jsDelivr mempunyai fitur untuk <a href="https://github.com/jsdelivr/jsdelivr#load-multiple-files-with-single-http-request">me-load beberapa file/script dengah satu http request</a>. Sebenarnya biar lebih gampang aja sih. Contoh bisa dilihat dibagian bawah pada source halaman ini.
Oke, lanjut lagi. Hasil pencarian menampilkan 2 hasil, yaitu Audio5js dan Audiojs. Setelah melihat panduan cara penggunaan di website masing-masing, sepertinya saya lebih tertarik untuk menggunakan <a href="http://kolber.github.io/audiojs/" target="_blank">AudioJs</a>.

Setelah melihat tutorial, untuk menggunakannya berarti dengan menambahkan file <a href="http://www.jsdelivr.com/#!audiojs" target="_blank">audiojs dari jsDelivr</a>. Jadi kira-kira seperti ini:

{% highlight html %}
<script src="https://cdn.jsdelivr.net/g/jquery,jquery.migrate,audiojs"></script>
{% endhighlight %}

Pada akhir html ditambahkan kode javascript berikut:

{% highlight html %}
<script>
  audiojs.events.ready(function() {
    var as = audiojs.createAll();
  });
</script>
{% endhighlight %}

Jadi tinggal menambahkan lagu format mp3 di halaman kita seperti ini:

{% highlight html %}
<audio src="song1.mp3" preload="auto" />
{% endhighlight %}

Sesudah saya masukan tag audio tersebut, saya perhatikan sepertinya tidak ada image "play" di player. Sedangkan kalau kode javascript nya dipisah menjadi seperti ini:

{% highlight html %}
<script src="https://cdn.jsdelivr.net/g/jquery,jquery.migrate"></script>
<script src="https://cdn.jsdelivr.net/audiojs/0.1/audio.min.js"></script>
{% endhighlight %}

icon "play" nya muncul. Mungkin ada yang kurang cocok sewaktu file-file javascript tersebut di combine.

Mudah bukan?


Setelah itu saya mencoba melihat beberapa tampilan dengan "Responsive Design View" di Firefox (ctrl+shift+m)

<a href="{{site.staticurl}}/images/20140912/screenshot2.jpg" class="swipebox" title=""><img src="{{site.staticurl}}/static/wait.svg" class="resize js_show loading_image" data-href="/images/20140912/screenshot2.jpg" alt="" /></a>
<noscript><img src="{{site.staticurl}}/s720/images/20140912/screenshot2.jpg" /></noscript>
screenshot 320x480px

<a href="{{site.staticurl}}/images/20140912/screenshot3.jpg" class="swipebox" title=""><img src="{{site.staticurl}}/static/wait.svg" class="resize js_show loading_image" data-href="/images/20140912/screenshot3.jpg" alt="" /></a>
<noscript><img src="{{site.staticurl}}/s720/images/20140912/screenshot3.jpg" /></noscript>
screenshot 480x320px

Saat melihat ini, saya merasa ada yang kurang sreg, sepertinya membuat halaman ini menjadi kurang 'responsive', jadi memutuskan untuk mencari 'plugin' lain agar tetap bisa sesuai dengan tujuan membuat situs ini tetap 'responsive'.

Lalu dengan semangat saya kembali <a href="https://www.google.com/search?q=responsive%20audio%20player" target="_blank">mencari dengan google</a>, dan menemukan artikel yang menarik <a href="http://osvaldas.info/audio-player-responsive-and-touch-friendly">http://osvaldas.info/audio-player-responsive-and-touch-friendly</a>. Menurut artikel tersebut saya tinggal memasukan file <a href="http://osvaldas.info/examples/audio-player-responsive-and-touch-friendly/audioplayer.js" target="_blank">audioplayer.js</a> (8KB) atau <a href="http://osvaldas.info/examples/audio-player-responsive-and-touch-friendly/audioplayer.min.js">audioplayer.min.js</a> (minified; 4KB).

Pada halaman tersebut juga ada <a href="https://osvaldas.info/examples/audio-player-responsive-and-touch-friendly/">demo</a>, untuk memudahkan, saya mengambil kode css dan javascript dari source code demo tersebut.
Karena ini adalah plugin untuk jQuery, maka jangan lupa untuk memasukkan kode jQuery dan file audioplayer.min.js ke dalam kode html.

{% highlight html %}
<script src="https://cdn.jsdelivr.net/jquery/2.1.1/jquery.js"></script>
<script src="{{site.staticurl}}/js/audioplayer.min.js"></script>
<script>
$( function() {
	$('audio').audioPlayer();
});
</script>
{% endhighlight %}

Lalu menambahkan kode css berikut ke dalam halaman web, agar tampilannya lebih menarik:

{% gist cb269c52439fc5258dc6 audioplayer.css %}

Setelah css dan javascript selesai ditambahkan, langsung mencoba memasukkan kode audio seperti yang dicontohkan. Di contoh tersebut diatas terdapat 3 jenis file audio, yaitu wav, mp3, dan ogg. Saya pribadi rada malas untuk mengubah menjadi wav, jadi memutuskan untuk menggunakan 2 jenis file saja, yaitu mp3 dan ogg.

{% highlight html %}
<audio preload="auto" controls>
    <source src="file_lagu.mp3" />
    <source src="file_lagu.ogg" />
</audio>
{% endhighlight %}

Perhatikan kemiripan dari nama kedua file dalam kode diatas, yang berbeda hanya pada bagian ekstensi file nya saja. Ini adalah bagian yang agak merepotkan. Jadi kita juga harus mengubah/mengkonvert file mp3 menjadi ogg dan mengupload kedua file (mp3 dan ogg) tersebut ke hosting. Kedua file tersebut saya ubah bitrate nya menjadi 64kbps agar lebih cepat(?) sewaktu streaming. Untuk konverter dari mp3 ke ogg saya menggunakan <a href="http://www.freac.org/" target="_blank">fre:ac</a>.
ps: saat ini masih mencari audio converter yang mudah dan *free*.

Jadilah tampilannya seperti <a href="#top">diatas</a>. Tinggal klik icon "play" untuk mendengarkan lagu.

Sekian dulu postingan kali ini.

Terima Kasih :D
