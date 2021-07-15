$(".testi_person_img_icon ul li img").bind('click', function(){

          let i = $(".testi_person_img_icon ul li img").index(this)+1
          $('.left_text_testi_contetn div').css("display","none")
          $(`.left_text_testi_contetn div:nth-child(${i})`).css("display","block")
         
          $('.testi_person_img_icon ul li').removeClass('active_user')
          $(this).parent().addClass('active_user')

          $(".img_peroson_fullsize img").attr("src",$(this).attr('src'))

        });