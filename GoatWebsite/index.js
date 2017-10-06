$(document).ready(function (){
            $("#miss").click(function (){
                $('html, body').animate({
                    scrollTop: $(".our_mission").offset().top
                }, 2000);
            });

            $("#test").click(function (){
                $('html, body').animate({
                    scrollTop: $(".testimonials").offset().top
                }, 2000);
            });

            $("#babies").click(function (){
                $('html, body').animate({
                    scrollTop: $(".our_babies").offset().top
                }, 2000);
            });

            $("#us").click(function (){
                $('html, body').animate({
                    scrollTop: $(".contact_us").offset().top
                }, 2000);
            });


});