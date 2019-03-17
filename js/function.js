$(window).scroll(function(){
    var wScroll=$(this).scrollTop();

    if(wScroll>$('.teamcontainer').offset().top){
        $('.teamcontainer div.img-box').each(function(){
            $('.teamcontainer div.img-box').addClass('.is-showing');
        })
    }

    if(wScroll>$('#team').offset().top-400){
        $('#team div.teamcont').each(function(i){
            setTimeout(function(){
                $('#team div.teamcont').eq(i).addClass('is-showing');
            },350*(i+1));
        });
    }

    /*if(wScroll>$('#testimonials div.row').offset().top-$(window).height()){
        var offset=Math.min(0,wScroll-$('#testimonials div.row').offset().top +$(window).height()-350);
        $('.post-1').css({'transform':'translate('+offset+'px,'+ Math.abs(offset*0.2) +'px)'});

        $('.post-3').css({'transform':'translate('+Math.abs(offset)+'px,'+ Math.abs(offset*0.2) +'px)'});
    }*/
    if(wScroll>$('#testimonials').offset().top-$(window).height()){

        var offset = Math.min(0,wScroll - $('#testimonials').offset().top +$(window).height()-350);
        /*var offset=300;*/
    
        $('.post-1').css({'transform': 'translate('+ offset +'px, 20px)'});
    
        $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, 20px)'});
    
      }
});