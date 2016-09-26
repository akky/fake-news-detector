var content = "<div id='fake_news' style='display: inline-block; color: #fff; background: #900; z-index: 9999; width: 100%; top: 0; padding: 5px; text-align: center; font-size: 1.2em; line-height: 1.5; font-family: Meiryo, Helvetica, Arial;border-bottom:2px solid #fff; -webkit-box-shadow: 0 0 2px 3px #eee; box-shadow: 0 0 2px 3px #eee;'>"
    + "<span style='font-weight: 900;'>"
    + chrome.i18n.getMessage("this_is_a_fake_news_site")
    + "</span>"
    + "<div style='padding-right: 1em;float:right;'>"
    + "<a target='_blank' style='color: #fff' href='http://developer.cybozu.co.jp/akky/'>?</a> "
    + "<span id='fake_news_dismiss' style='color: #fff;padding-right: 0.4em;cursor:pointer;'>&times;</span></div></div>";
document.body.innerHTML = content + document.body.innerHTML;

var close = document.getElementById('fake_news_dismiss');
close.addEventListener('click',function() {
    document.getElementById('fake_news').style.display = 'none';

});