$(document).ready(function(){
    $('#switchBg').on('click touch', function(){
        if (this.value === "true") {
            $('body').css('background-image','url(img/fadebg.png)');
            $("#titleImg").attr("src", 'img/fadeTitle.png');
            $('.container').css('background-color', 'black');
            $('.home h3, p, #about, li').css('color', 'white');
            this.value = "false";
        }
        else{
            $('body').css('background-image','url(img/lumebg.png)');
            $("#titleImg").attr("src", 'img/lumeTitle.png');
            $('.container').css('background-color', '#f6f5f6');
            $('.home h3, p, #about, li').css('color', 'black');
            this.value = "true";
        }
    });
});
