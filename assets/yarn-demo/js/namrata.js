$( document ).ready(function() {
                       
    var notes_toggle = false;
    var dual_toggle = false;
    var full_toggle = false;
    var active = -1;    
    var flgAlt = 0;
    
   
    
    $('#notes_button').on("click",  function()
    { 
        if (notes_toggle == false)
        {
            $('#notes_button').attr("title", "Hide notes");
            notes_toggle = true;
        }   
        else
        {
            notes_toggle = false;
            $('#notes_button').attr("title", "Show notes");
        }
        
    });
        
    function do_dual(flag)
    {
            flgAlt=0;            
            
            
            
            if (dual_toggle == false)
            {
                dual_toggle = true;    
                $('#dual').attr("title", 'Hide alternates');
                $('#dual').find("img").first().attr("src", 'img/dual_active.png');
                
            }
            else
            {
                dual_toggle = false;
                $('#dual').attr("title", 'Show alternatives');
                $('#dual').find("img").first().attr("src", 'img/dual.png');             
                $('#blackout').hide();
            
            }
            
           
            $('#online').removeClass('borders');
            $("#alternative").css("display","block");
            //setBlackout();
            $(".hero-unit").css("float","left");
            $("#online").toggleClass("span5");
                                               
            var test=$('.active_dot').attr("id"); 
            console.log(test);
            var nav=test.split("_");
            var navactive=nav[nav.length-1];
        
            console.log(navactive);
         
            $('.contentbox').hide();
            $('#alt1_'+navactive).show();
            $('#alt2_'+navactive).show();
       
    
            $('.empty_dot').removeClass('altdot');
    
            if (!($('.hero-unit').hasClass("span5") && $('.hero-unit').hasClass("span10")))
            {
                $('#blackout').hide();                
            }                                    
            
            if ($('.altdot').length == 1)
            {
                dot = $('.altdot').first();
                current = dot.attr("id");
                current = getId(current);
                active = -1 ;               
                dot.removeClass("altdot");
                toggleActive(current);
            }
    }
    
    var heroleft, herowidth, alternateleft, alternatewidth, hero0left, hero0width;
    
    function setBlackout()
    {
        if (bl == 0) {
            heroleft =  $('.hero-unit').first().offset().left + "px";
            herowidth = $('#blackout').css("width", $('.hero-unit').first().innerWidth() + "px");

            alternateleft = $('#alternative').first().offset().left + "px";
            alternatewidth = ($('#alternative').first().innerWidth()+20) + "px";
            

            hero0left = "0px";
            hero0width = ($('.hero-unit').first().innerWidth()+60) + "px";                        
            //bl++;
            console.log("Blackout values! ");
            console.log("Alternate Left: " + alternateleft);
        }
    }
    
    
    var bl = 0;
    /* Clicking on link to see alternatives*/
    $('#dual').click( function()
    {   
        
        do_dual();
        setBlackout();
        setBlackout();
        setBlackout();
        setBlackout();
        
    
    });
    
    $('#newsec').click( function(){
       $('.hero-unit').removeClass('span5');
       dual_toggle = false;;
                $('#dual').attr("title", 'Show alternatives');
                $('#dual').find("img").first().attr("src", 'img/dual.png');
    });
    
    /*****When mousedown on herounit*/
    
    function getNumbersInID(string)
    {
        var numberPattern = /\d+/g;
        var numbers = string.match( numberPattern );    
        return numbers;
    }
    
function alt_qtip()
{
    $('.alternatives_td').each(function()
    {        
            $(this).find("span").each(function() {                
                if ( $(this).hasClass("filldot")) {
                    id = getNumbersInID($(this).attr("id"));                
                    $(this).first().qtip({                         
                         content: {                              
                             text: "<b>" + $('#alt' + (parseInt(id[1])+1) + '_' + id[0]).find("header").first().html().replace("ccc", "fff")  + ":</b><br />"+$('#alt' + (parseInt(id[1])+1) + '_' + id[0]).find(".altsubtitle").first().html().replace("ccc", "fff")
                         }
                    });
                }                
            });                        
    });
    $('.empty_dot').qtip({                         
        content: {                              
            text: "<b>" + "Click to create alternative" +"</b>"
        }
    });
}
    
    
    
    
    
    $('#online').mousedown(function(){    
        last_click = 1;
        blackout_to_alt();
    });
    



$(window).bind('resize', function () { 
    $('#blackout').css("width", $('.hero-unit').first().innerWidth() + "px");
});

    

    /* Clicking on the nav buttons */
   
    $('#content li a').click(function()   
    {            
            var test = $('.active_dot').attr("id"); 
            var line;
            var lineactoive;
            if (test == undefined)
            {
                test = $('.altdot').attr("id");                                
                lineactive = getId(test);
            }
            else {
                line = test.split("_");
                lineactive = line[ line.length - 1 ];
            }
            console.log(lineactive);
      
            var navpills = $(this).attr("id");
     
            var nav = navpills.split("v");
            var navaltactive = nav[ nav.length - 1 ];
            console.log( navpills );
      
            $("#alternative").animate({
                "left": -($('#alt' + navaltactive + '_' + lineactive).position().left)
            }, 100);
         
            // remove "active" class from all links inside #nav
            $('ul.navigation li a').removeClass('active_nav');
            
            $("#timeline span").removeClass("altdot");
            $("#timeline span").removeClass("altdot_ring");
            
            
            
            
            $('#alt_'+lineactive+'_'+(navaltactive-1)).addClass("altdot");            
            //$('#'+movement).removeClass('empty_dot');
            //$('#'+movement).addClass('filldot');
            
            
            
            the_dot = $('#alt_'+lineactive+'_'+(navaltactive-1));
            
            if ( the_dot.hasClass("empty_dot"))
            {
   //             the_dot.removeClass("empty_dot");
     //           the_dot.addClass("filldot");
      //          alt_qtip();
            }
	
            // add active class to the current link
            $(this).addClass('active_nav');	      
            
            
        });
         
function showAlternatives()    
    
    {
        /*
        var test=$('.active_dot').attr("id"); 
        console.log(test);
         var nav=test.split("_");
        var navactive=nav[nav.length-1]
        
         console.log(navactive);
         
         $('.contentbox').hide();
         $('#alt1_'+navactive).show();
         $('#alt2_'+navactive).show();
        
        */
    }         


   $("#timeline").on("click", ".plot_p, .subheading", function() {                    
        var id = $(this).attr("id");                                
        clickedDot = getId(id);                
        jumpTo(id);  
        $('#timeline span').removeClass('altdot');
        //$('.alternatives_td span').removeclass("altdot");
        $("#online").removeClass("span5");    
        showAlternatives();
        $('#blackout').hide();
        clickForDelete = -1;
    }); 
    
    var clickForDelete = -1;
    
    $("#timeline").on("click", ".plot_p, .subheading", function() {                               
        dual_toggle = false;
        $('#dual').attr("title", 'Show alternatives');
        $('#dual').find("img").first().attr("src", 'img/dual.png');    
        clickedDot = getId($(this).attr("id"));    
        clickForDelete = -1;
    });
    
    $("#timeline").on("click", ".dot", function() {                    
        var id = $(this).attr("id");                                
        clickedDot = getId(id);                
        jumpTo(id);  
        $('#timeline span').removeClass('altdot');
        //$('.alternatives_td span').removeclass("altdot");
        $("#online").removeClass("span5");    
        showAlternatives();
        $('#blackout').hide();
        dual_toggle = false;
        $('#dual').attr("title", 'Show alternatives');
        $('#dual').find("img").first().attr("src", 'img/dual.png');    
        clickedDot = getId($(this).attr("id"));            
        clickForDelete = clickedDot;
    });
    
    $('#alternative').on("keyup", function()
    {
     //   $('.alt2').css("top", "-" +  $('.alt1').innerHeight() + 10 +"px");
    });
    
    var last_click = 0;
    
    function blackout_to_alt()
    {
        console.log("Blackout To Alt");
        if($('#online').hasClass('span5')){                             
            val = $('#alternative').first().offset().left;
            if (val < 100)
                {
                    console.log("WWWWWW77777777777777777");
                    val = "50vh";
                    val = $('#content').offset().left + "px";
                }
                else
                    {
                        val += "px";
                    }
            $('#blackout').css("left", val);
            $('#blackout').css("width", ($('#alternative').first().innerWidth()+20) + "px");
            $('#blackout').show();                        
                         
        }                                 
    }
    
    function blackout_to_hero()
    {
        console.log("Blackout To Hero");
        if ( $('.hero-unit').hasClass("span10") ) {
            val = $('.hero-unit').first().offset().left;            
            $('#blackout').css("left", val);
            $('#blackout').css("width", $('#blackout').css("width", $('.hero-unit').first().innerWidth() + "px"));
            $('#blackout').show();                                               
        }
        else
            {                
            $('#blackout').css("left", "0px");
            $('#blackout').css("width", ($('.hero-unit').first().innerWidth()+60) + "px");                    
            $('#blackout').show();
            }
    }
    
    $('#alternative').on("click",".contentbox", function ()
    {
      
          last_click = 2;
     
        console.log(")))))))))))))))))))))))4545");
        blackout_to_hero();
            
        var test=$('.active_dot').attr("id"); 
        console.log(test);
        var line=test.split("_");
        var lineactive=line[line.length-1];
        
        
        var id=$(this).attr('id');
      
        // console.log(id);
      
        var nav=id.split("t");
        var navactive=nav[nav.length-1];
        
        var activedot=navactive.split("_");
        var active=activedot[0];
        
        
         
        
     
            $('#timeline').removeClass('altdot');
            
        
        /*
            $('#alt_'+lineactive+'_'+(active-1)).addClass('altdot');
    
            $('#alt_'+lineactive+'_'+(active-1)).animate({
                opacity:'1.0'
            },600);
        */
        
             
    
   
        $("#alternative").animate({
            "left": -($('#'+id).position().left)
        }, 600);
    
     
        // remove "active" class from all links inside #nav
        $('ul.navigation a').removeClass('active_nav');
	
        // add active class to the current link
        $('#nav'+active).addClass('active_nav');
	

    
    });
    
    
    /** Click on each dot***/

    
    $('#content').on("click", "section", function()
    {
 //       id = getId($(this).find("header").attr("id"));    
   //     toggleActive(id, true);       
        console.log("HEEER");
        blackout_to_hero();
   
    });
    
   
    $('#timeline').on("click",".alternatives_td span", function(event)         
    {
      
      flgAlt=1;
      var movement=event.target.id;
      
        var nav=movement.split("_");
        console.log(nav + '--------------------------------');    
        var navactive=nav[1];
        var posactive=nav[2];        
        dual_toggle = true;    
        $('#dual').attr("title", 'Hide alternates');
        $('#dual').find("img").first().attr("src", 'img/dual_active.png');
        
     // console.log(navactive);
        
    //    var test=$('.active_dot').attr("id"); 
        
      //   var line=test.split("_");
        //var lineactive=line[line.length-1];
        
      //   console.log("The number active on the line:"+lineactive);
         console.log("The number active of the alternative:"+posactive);
         
         $('#'+movement).removeClass('empty_dot');
         $('#'+movement).addClass('filldot');
         alt_qtip();
         
         
    
     $('.contentbox').hide();
     $('#alt1_'+navactive).show();
     $('#alt2_'+navactive).show(); 
     
     jumpTo(navactive, true);
     
     if(posactive==1)
        {
            console.log(navactive + "<------");
            $("#alternative").css("left", "-800px");            
            console.log($('#alt2_'+navactive).position().left);
            $('ul a').removeClass('active_nav');
	
            // add active class to the current link
            $('#nav2').addClass('active_nav');
             
        }
        
        else
            
        {
            $("#alternative").css({
                "left": -($('#alt1_'+navactive).position().left)
            }, 600);
            $('ul a').removeClass('active_nav');
	
            // add active class to the current link
            $('#nav1').addClass('active_nav');
                
        }
      
            
            
            
            
            
        $("#alternative").css("display","block");
        $("#online").addClass('span5',function(){
            
            if (flgAlt==1){
                
                
                return 'true';
            }
            else
                {
                    
                    return 'false'
                }
            
            
        });
        
       
     
    // }
     
        $('.filldot').removeClass('altdot');
        $('#'+movement).addClass('altdot');
        $('#'+movement).addClass('altdot_ring');
        $('#'+movement).animate({
            opacity:'1.0'
        },1000);
      
      $('.dot').removeClass("active_dot_color");            
      $('.plot_p').removeClass("vermillion");            
      
      $('#_' + navactive).addClass("active_dot_color");
         active = -1;                             
         alt_qtip();            
      
    });
 
     
     
     
     
     function alt_qtip()
{
    $('.alternatives_td').each(function()
    {        
        
            $(this).find("span").each(function() {                
                if ( $(this).hasClass("filldot")) {
                    console.log("AQUIIIIII");
                    id = getNumbersInID($(this).attr("id"));                
                    title = $('#alt' + (parseInt(id[1])+1) + '_' + id[0]).find("header").first().html();
                    if (title == "")
                        title = $('#alt' + (parseInt(id[1])+1) + '_' + id[0]).find("header").first().attr("placeholder");
                    subtitle = $('#alt' + (parseInt(id[1])+1) + '_' + id[0]).find(".altsubtitle").first().html();
                    if (subtitle == "") {
                        subtitle = $('#alt' + (parseInt(id[1])+1) + '_' + id[0]).find(".altsubtitle").first().attr("placeholder");                        
                    }
                    $(this).first().qtip({                         
                         content: {                              
                             text: "<b>" + title  + ":</b><br />"+ subtitle
                         }
                     });
                }
            });                        
    });
}
     
     
     
     
     
     
     
     
     
     
     
     
 
    /*
      
    $('#alternatives').on("dblclick","td", function(event) {
     
     

    
     
        $("#alternative").css("display","block");
        $("#online").removeClass("span5 offset2",5000);
        
        if($("#online").hasClass("span5 offset2")){
            $("#newsec").css("margin-left","20%");
              
     
        }
        else{
          
            $("#newsec").css("margin-left","28%");
            
        }
        
      
        $(".hero-unit").css("float","left");
        $("#alternative").removeClass("span5",5000);
        
        $("#timeline_container").removeClass("span2",5000);
        $(".alternatives_column").removeClass("span1",5000);
        $("#alternatives").css("float","left");
        $("#alternatives").css("width","5%");
        $("#timeline").removeClass("span1",5000);
        $("#timeline").css("width","210px");
       
   
     
     
    });
      
 */
    
 
 
 
 
 
 
 
 
    $('#full').click(function ()     
    {
        
            if (full_toggle == false) {
                full_toggle = true;
                $('#full').attr("title", "Show thread");
                $('#full').find("img").first().attr("src", "img/thread_active.png");
            }
            else {
                full_toggle = false;    
                $('#full').attr("title", "Hide thread");
                $('#full').find("img").first().attr("src", "img/thread.png");
            }
            
            console.log("HERO UNIT LEFT " + $('#online').offset().left + " -- " + $('.hero-unit').first().offset().left);            
             
            $("#timeline_container").toggle();
                                    
            $("#online").toggleClass("span10 offset2 span 12");
            
         
            var elem=window.getSelection();
            // ('#dual').toggle();                        
            
            if ($('#blackout').is(':visible'))
            {
                $('#blackout').hide();
            }
            
            if (last_click == 2) {
             //   blackout_to_hero();
                //$('#alternative').click();
            }
            else
            {
                  last_click = 1;
               //   blackout_to_alt();
                  ///$('#online').click()
            }                                
            
                               
        });
    
                       
     
    
     
   
   
   
    function jumpTo(id, flag)
    {
        if (flag) {
        id = getId(id);
   
        $('#online').scrollTo( '#header_' + id , {
            'duration': 500, 
            'easing' : 'easeInOutQuart', 
            onAfter: function(){
                $("#alternative").css("display","block");
                $("#online").addClass('span5',function(){
            
                    if (flgAlt==1){
                
                
                        return 'true';
                    }
                    else
                    {
                    
                        return 'false'
                    }
            
            
                });



            }
        } ); 
        
        toggleActive(id); 
        }
        else
            {

                id = getId(id);
                $('#online').scrollTo( '#header_' + id , {'duration': 800, 'easing' : 'easeInOutQuart'} ); 
                console.log("Jumping!" + id);
                $('.sidebar-nav').scrollTo( ('#dot_' + id) , {'duration': 800, 'easing' : 'easeInOutQuart'} ); 
                toggleActive(id);

            }
    
}


function getId( id )
{
    var numberPattern = /\d+/g;
    var numbers = id.match( numberPattern );
    numbers = numbers[0];                                
    return numbers;
}

function toggleActive(id, ring)
{
    //if (active != id) {
        $('.dot').removeClass("active_dot_color");    
        $('.dot').removeClass("active_dot");        
        
        $('.dot').removeClass("text");  
        if (ring)
            $('.dot').addClass("text");  
        $('#dot_' + id).toggleClass("active_dot");
        $('#dot_' + id).toggleClass("active_dot_color");
        
        $('.plot_p').removeClass("vermillion");
        $('#plot_p_' + id).toggleClass("vermillion");
        $('.filldot').removeClass('altdot');
        active = id;        
  /*  }
    else
        {
            console.log("FAILED");
        }*/
}


           
$('#online').on("keyup", ".section", function(e){ 
                                         
    id = $(this).attr("id");
    var alt=id.split('_');
    var altid=alt[alt.length-1];
            
    //var text=$('#header_'+altid).html();
    //console.log(text);
   /*
    $('#alt1_'+altid+' header').html($("#header_" + altid).html());
    $('#alt2_'+altid+' header').html($("#header_" + altid).html());*/
});
   
  
$(window).on("keydown",  function(event) {           
    
    le = $('.text').length;  
    
    if (event.keyCode == 46 && le == 0 && clickForDelete != -1)
    {
        header = $('#plot_p_' + clickedDot).html();
        subtitle = $('#sub_' + clickedDot).html();
        
        if (header == "") 
            header = $('#plot_p_' + clickedDot).attr("placeholder");
        if (subtitle == "") 
            subtitle = $('#sub_' + clickedDot).attr("placeholder");
        
        if (confirm("Are you sure you want to delete '" + header +" - " + subtitle + "'?") == true)
        {                        
            $("#alternative_" + clickedDot).parent().remove();
            $("#recordsArray_" + clickedDot).remove();                        
            $("#header_" + clickedDot).parent().remove();
                        
            
            old_c = new Array();
            alt_c = new Array();
            
            $('.section').each (function() {
                old_c.push($(this).html());
            });
    
            $('.dd').each (function() {
                alt_c.push($(this).html());
            });
            clickedDot = clickedDot -1;
            toggleActive(clickedDot + " ");
                                    
        }        
    }      
});





/*Circular Menu*/

     




});
     
     
     
   
    
    
        

    
    
    