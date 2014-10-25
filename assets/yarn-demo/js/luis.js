$(function() {    
              
              
 var last_jump = -1;              
              
 $.elementFromPoint = function(x,y)
  {
    if(!document.elementFromPoint) return null;

    if(!check)
    {
      var sl;
      if((sl = $(document).scrollTop()) >0)
      {
       isRelative = (document.elementFromPoint(0, sl + $(window).height() -1) == null);
      }
      else if((sl = $(document).scrollLeft()) >0)
      {
       isRelative = (document.elementFromPoint(sl + $(window).width() -1, 0) == null);
      }
      check = (sl>0);
    }

    if(!isRelative)
    {
      x += $(document).scrollLeft();
      y += $(document).scrollTop();
    }

    return document.elementFromPoint(x,y);
  }	
    



  $('#online').on("click", "article, .subtitle, header", function()
  {
      //$('.dot.active_dot_color').addClass("text");
      //console.log("????");
  });






  
  $("section").on("keydown", function(event) {    
  
  if (event.altKey)
  {
     
  }    
      
  if (event.ctrlKey)
  {        
      
      $('article').onmousedown = function() {
          this.focus();
         };
       $('#timeline').sortable( "refresh" );
       $("#online").find("article").sortable(
           {                        
            appendTo: "body",
            connectWith: $("#online").find("article"),
            helper: "clone",        
            items: "p",                               
            start: function() {
                moving_content = $(this).find("p").first().html();                                
            },
            sort: function(event, ui) {  
        
                var x = event.pageX;
                var y = event.pageY;
                var jump = -1;
                
                if (x > 41 && x <86 && y > 99 && y < 130)
                {
                    jump = 0;
                }
                
                if (x > 41 && x <86 && y > 180 && y < 210)
                {
                    jump = 1;
                }
                
                if (x > 41 && x <86 && y > 260 && y < 290)
                {
                    jump = 2;
                }
                
                if (x > 41 && x <86 && y > 340 && y < 370)
                {
                    jump = 3;
                }
                
                if (jump != -1 && last_jump != jump) {
                    jumpToSet(jump + "_");
                    last_jump = jump;
                }                
                
            },                  
            update: function() {
                html = $(this).html();                    
                    var id = $(this).prev().prev().attr("id");     
                    
                    var numberPattern = /\d+/g;
                    var numbers = id.match( numberPattern );
                    numbers = numbers[0];                                
                    id = numbers;
                    old_c[id] = $('#section_' + id).html();                                    
            }                   
        }
      );
       
      
  }
});

/*
$("article").sortable({"connectWith": "#timeline"
    ,             
            start: function() {
                moving_content = $(this).find("p").first().html();        
              //  alert(moving_content);
            },
            update: function() {
                html = $(this).html();                    
                    var id = $(this).prev().prev().attr("id");     
                    
                    var numberPattern = /\d+/g;
                    var numbers = id.match( numberPattern );
                    numbers = numbers[0];                                
                    id = numbers;
                    console.log(old_c);
                    if (id < 100)
                        old_c[id] = $('#s_' + id).html();  
            }    
        }
      );*/

section_count = -1;
alt_count=0;

$('.alt_box').hide();

function addSection(title, subtitle, content)
{
    
    section_count++;
    var text = "";
    text = '<section id="section_'+section_count+'" class="section">';
    var section_title = 'Chapter ' + (section_count + 1);
 //   section_title = 'Chapter ';
    /*if (title != undefined)
        section_title = html.substr(0,75);*/
    var ret_text = '<header contenteditable="true" id="header_'+section_count+'" class="header default_text" placeholder="'+section_title+'">';
    if (title != undefined)
        ret_text += title;
    ret_text += '</header>';
    ret_text += '<div contenteditable="true" id="subtitle_'+section_count+'" class="subtitle default_text" placeholder="Type brief summary">';
    if (subtitle != undefined)
        ret_text += subtitle;
    ret_text += '</div>';
    var section_text = 'Type your story  '+ section_count;
    ret_text += '<article contenteditable="true" class="content default_text" id="article_'+section_count+'" placeholder="Type your story">';
    if (content != undefined)
        ret_text += content;
    ret_text += '</article>';
    text += ret_text;
    text += '</section>';
    $('.hero-unit').append(text);    
    makeDefaultText();

    return ret_text;
}


$.fn.selectRange = function(start, end) {
    if(!end) end = start; 
    return this.each(function() {
        if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(start, end);
        } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    });
};

/*
$('.default_text').onfocus = function() {
    window.setTimeout(function() {
        var sel, range;
        if (window.getSelection && document.createRange) {
            range = document.createRange();
            range.selectNodeContents(div);
            range.collapse(true);
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(div);
            range.collapse(true);
            range.select();
        }
    }, 1);
};


$('.default_text').on("click", function()
{
    
    
    $(this).focus();
    
});
*/

/*
$('article').on("keyup", function() {
console.log("!!!");
            var html = $(this).html();

            if (html.length == 1)
            {
                $(this).html("<p>" + html + "</p>");                    
            }        
});
*/



function makeDefaultText() {
/*            
    $('.default_text').each(function() {
                        
        var default_value = $(this).html();        
                                
        if ($(this).attr("class") != "content default_text") {
            $(this).keypress(function() {                
                if($(this).html() == default_value) {
                    $(this).html('');
                }                                                
            });

            $(this).blur(function() {

                if($(this).html() == "") {                    
                    id = $(this).attr("id");    
                    $('#plot_p_' + getId(id)).html("Chapter");
                    $(this).html(default_value);
                }
            });
        }
        
        $('article > p').focus();
    });*/
}


$('.add_float').on("mouseover", function() {
   
   $(this).find("span").show().animate({height: "90px"}, 1500);
});




var clickedDot = -1;

function inViewport (el) {

    var r, html;
    if ( !el || 1 !== el.nodeType ) { return false; }
    html = document.documentElement;
    r = el.getBoundingClientRect();

    return ( !!r 
      && r.bottom >= 0 
      && r.right >= 0 
      && r.top <= html.clientHeight 
      && r.left <= html.clientWidth 
    );

}

var x = 0;










function showAlternatives()    
    
    {
        
        var test=$('.active_dot').attr("id"); 
        console.log(test);
         var nav=test.split("_");
        var navactive=nav[nav.length-1]
        
         console.log(navactive);
         
         $('.contentbox').hide();
         $('#alt1_'+navactive).show();
         $('#alt2_'+navactive).show();
        
        
    }
    



/*
$("#timeline").on("click", ".dot", function() {                    
            var id = $(this).attr("id");          
            
            var numberPattern = /\d+/g;
            var numbers = id.match( numberPattern );
            numbers = numbers[0];                                
            id = numbers;
            jumpTo(id);
            
});*/


/*
(function() {
    var ev = new $.Event('style'),
        orig = $.fn.css;
    $.fn.css = function() {
        orig.apply(this, arguments);
        $(this).trigger(ev);
    }
})();

*/

function pulseSave()
{
    if (x) { x.abort() } // If there is an existing XHR, abort it.
    clearTimeout(timer); // Clear the timer so we don't end up with dupes.
        timer = setTimeout(function() { // assign timer a new timeout 
            x = $.getJSON(); // run ajax request and store in x variable (so we can cancel)                        
            $('#save_panel').html("Document Saved");
            $('#save_panel').delay(2500).css("opacity", "0");
    }, 1000);     
}

function document_save() {        
    $('#save_panel').html("Saving Document");
    $('#save_panel').css("opacity", "1");
    pulseSave();    
}

(function() {
    orig = $.fn.css;
    $.fn.css = function() {
        var result = orig.apply(this, arguments);
        $(this).trigger("style");
        return result;
    }
})();

$('.timeline_row').bind('style', function(e) {
    console.log( $(this).attr('style') );
});

function allTheMaths()
{   
    $('.timeline_row').each(function() {        
        var top = $(this).position().top;        
       // $(this).css("margin-left", Math.cos(top) * 7.5).show(300);        
    });
    
    $('.empty_dot').each(function() {        
        var top = $(this).position().top;        
       // $(this).parent().css("margin-right", 5 + Math.cos(top) * 7.5);        
    });
}

function getId( id )
{
    var numberPattern = /\d+/g;
    var numbers = id.match( numberPattern );
    numbers = numbers[0];                                
    return numbers;
}

$('#menu_table a[title]').qtip({
    style: { classes: 'custom-qtip' }
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
                    if (subtitle == "")
                        $('#alt' + (parseInt(id[1])+1) + '_' + id[0]).find(".altsubtitle").first().attr("placeholder");
                    $(this).first().qtip({                         
                         content: {                              
                             text: "<b>" + title  + ":</b><br />"+ subtitle
                         }
                     });
                }
            });                        
    });
}

$(document).on("mouseover", "#add_button", function()
{
    $('#add_button').attr("src", 'img/add_button_hover.png');
});

$(document).on("mouseout", "#add_button", function()
{
    $('#add_button').attr("src", 'img/add_button.png');
});

$('#timeline').on("mouseover", '.filldot', function()
{
    //console.log("@@@" + $(this).attr("id"));        
});

function addPlotPoint(title, subtitle)
{
    var count = section_count;
    // ad float <div class="add_float"><span class="add_button">+</span></div>
    $('#alternatives').append(alternative()); 
    alt_c.push(alternative_text());
   
   
   // $('#alt_'+count+'_0').css('opacity','0');
   // $('#alt_'+count+'_1').css('opacity','0');
   
    $('#alternative_'+count).attr('title','Start writing alternate');            
    
     var text =  '<div class="timeline_row" id="recordsArray_' + count + '"><table class="dot_table" id="table_' + count + '"><tr><td class="alternatives_td" style="vertical-align:top; padding-top:2px;"><span id="alt_'+count+'_0" class="empty_dot hi-icon">&nbsp;&nbsp;&nbsp;&nbsp;</span></td><td class="alternatives_td" style="vertical-align:top; padding-top:2px;"><span id="alt_'+count+'_1" class="empty_dot hi-icon">&nbsp;&nbsp;&nbsp;&nbsp;</span></td><td style="vertical-align: top;" class="ontheline"><span class="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a"><a href="javascript:void(0);" id="dot_'+count+'" class="hi-icon dot"></a></span></td><td class="last_column_pp"><span contentEditable="true" class="plot_p ' + (timeline ? '' : 'small_plot') +'" id="plot_p_' + count + '" placeholder="Chapter '+(count+1)+'">';
     if (title != undefined)
        text += title; 
     text += '</span><div contenteditable="true" class="subheading" placeholder="Type brief summary" id="sub_' + count + '">';
     if (subtitle != undefined) 
        text += subtitle;
     text += '</div><span class="alt_box" id="alt_' + count +'"></span></td></tr></table></div>';
    
    $("#new_section").before(text);
    
    $('#recordsArray_' + count).hide();
    $('#recordsArray_' + count).show({ opacity: 0.75, top: "+=50", height: "toggle" }, 5000 );    
    $('.add_button').hide();
    
    jumpToLast("recordsArray_" + count);  
    alt_count=count;
    count++;          
    
    allTheMaths();
    headingButtons();
    
    
}

  //Creating alternative
    
  function createAlternative(title1, subtitle1, alt1, title2, subtitle2, alt2){         
    console.log("sectioncount "+section_count);       
    var text="";
    text='<div id="alt1_'+section_count+'" class="alt1 contentbox contentbox_1">';
    text +='<section id="altsection_1" class="alt">';
    
    var placeholder = 'Chapter ' + (section_count + 1);
    
    text += '<header contenteditable="true" placeholder="'+placeholder+'" id="altheader_'+section_count+'" class="header default_text">';
    if (title1 != undefined)
        text += title1;
    text += '</header>';
    text += '<div contenteditable="true" id="altsubtitle_'+section_count+'" class="subtitle default_text altsubtitle" placeholder="Type brief summary">';
    if (subtitle1 != undefined)
        text += subtitle1;
    text += '</div>';
    var section_text = 'Create first alternate '+ section_count;
   
    text+= '<article contenteditable="true" placeholder="Create first alternate" class="content default_text" placeholder="Create first alternate" id="article_'+section_count+'">';    
    if (alt1 != undefined)
        text += '<p>' + alt1 + '</p>';
    text += '</article>';
   
    text += '</section>';
    text += '</div>';
   
   
    text+='<div id="alt2_'+section_count+'" class="alt2 contentbox contentbox_2">';
    text +='<section id="altsection_2" class="alt">';
    var placeholder = 'Chapter ' + (section_count+1);
    
    text += '<header contenteditable="true" placeholder="'+placeholder+'" id="altheader_'+section_count+'" class="header default_text">';
    if (title2 != undefined)
        text += title2;
    text += '</header>';
    text += '<div contenteditable="true" id="altsubtitle_'+section_count+'" class="subtitle default_text altsubtitle" placeholder="Type brief summary">';
    if (subtitle2 != undefined)
        text += subtitle2;
    text += '</div>';
    
    var section_text_second = 'Create second alternate  '+ section_count;
   
    text += '<article contenteditable="true" class="content default_text" placeholder="Create second alternate" id="article_'+section_count+'">';
    if (alt2 != undefined)
        text += '<p>' + alt2 + '</p>';        
    text += '</article>';
   
    text += '</section>';
    text += '</div>';   
     
    
        $('#alternative').append(text);
     
    $('.empty_dot').removeClass('altdot');
        
    var test=$('.active_dot').attr("id");        
         var nav=test.split("_");
         var navactive=nav[nav.length-1];        
         console.log(navactive);         
         $('.contentbox').hide();
         $('#alt1_'+navactive).show();
         $('#alt2_'+navactive).show();     
         makeDefaultText();
 }  

function alignDots()
{
    $('.dot').each(function () {            
        pos = $(this).position().top;
    //    $('#d_' + getId($(this).attr("id")) ).css("top", pos - 7 + 40 - 20);
      //  $('#d_' + getId($(this).attr("id")) ).css("position", "fixed");                
    });
}





function saveToArray(id)
{                
    old_c[id] = $("#header_" + id).parent().html();         
}

var timer;
var timeout = 1000;

function showText(id)
{            
    $("#header_" + id).html($("#plot_p_" + id).html());    
    $("#subtitle_" + id).html($("#sub_" + id).html());        
    
    old_c[id] = $("#header_" + id).parent().html();                   
    
    jumpTo(id);
}




function showTextR(id, header)
{
    
    
    if (header)
        $("#plot_p_" + id).html($("#header_" + id).html().substring(0,32));
    else
        $("#sub_" + id).html($("#subtitle_" + id).html().substring(0,32));
        
    old_c[id] = $("#header_" + id).parent().html();            
    
}

var moving_flag = 0;

function sortable_alternatives()
{
    $(".alternatives div").sortable({"connectWith": "#timeline",
            start: function() {              
                    moving_content = $(this).find("span").first().html();        
                    moving_flag = 2;
            },
            update: function() {
                   html = $(this).html();                    
                    var id = $(this).attr("id");     
                    
                    var numberPattern = /\d+/g;
                    var numbers = id.match( numberPattern );
                    numbers = numbers[0];                                
                    id = numbers;
                    alt_c[id] = $('#d_' + id).html();  
                    
                /*
               console.log(id);*/
            } 
    });
}

var timer;
var x;

$('#timeline').on("keyup", ".plot_p",  function(e) {     
            var id = getId($(this).attr("id"));                    
            
            
            showText(id);            
            
            the_text = $(this);
            
            alignDots();
            text = $(this).html();            
            /*
            if (text.length > 26)
            {
                    trim = text.substr(0,26);
                    $(this).html(trim);
            }*/
            document_save();
            
});





$('#timeline').on("keyup", ".subheading",  function(e) { 
    
            var id = getId($(this).attr("id"));                    
            
            showText(id);            
            
            the_text = $(this);
            
            alignDots();
            text = $(this).html();            
            
            if (text.length > 26)
            {
                    trim = text.substr(0,26);
                    $(this).html(trim);
            }
            document_save();
    
});

active = -1;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
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

function adjustHero()
{
   $('.hero-unit').css('height',($(window).height() - 175)+'px');   
   $('.sidebar-nav').css('height',($(window).height() - 175)+'px');   
   $('#content').css('height',($(window).height() - 175)+'px');   
    var val = 0;
   
   
}

$('#content').on("keyup", ".alt1", function(e) {
         
   $('.alt1').each(function () {
       current = $(this);
       val = current.innerHeight();
      $(this).next().css("top", "-" + (current.height()) +"px"); 
   });
   document_save();
    
});

$('#online').on("click", "section", function(e) {
    id = getId($(this).find("header").attr("id"));    
    toggleActive(id, true);        
});



function jumpTo(id)
{    
    id = getId(id);
    $('#online').scrollTo( '#header_' + id , {'duration': 800, 'easing' : 'easeInOutQuart'} ); 
    console.log("Jumping!" + id);
    $('.sidebar-nav').scrollTo( ('#dot_' + id) , {'duration': 800, 'easing' : 'easeInOutQuart'} ); 
    toggleActive(id);
}


$('#content').on("click", "header, subtitle, article", function()
{
   var ids = getNumbersInID($(this).parent().parent().attr("id"));
   dots = "alt_" + ids[1] + "_" + (ids[0] - 1);
   console.log(dots);
   if ( !($("#" + dots).hasClass("empty_dot")))
   {
                $("#" + dots).removeClass("empty_dot");
                $("#" + dots).removeClass("altdot_ring");
                $("#" + dots).addClass("filldot");
                $("#" + dots).addClass("altdot");
                console.log("#dot" + (ids[1]));
          
                $("#dot_" + (ids[1])).removeClass("active_dot");
                $("#dot_" + (ids[1])).removeClass("active_dot_color"); 
                $('.plot_p').removeClass("vermillion");
                alt_qtip();
   }
});

$('#content').on("keyup", "header, subtitle, article", function()
{
   var ids = getNumbersInID($(this).parent().parent().attr("id"));
   dots = "alt_" + ids[1] + "_" + (ids[0] - 1);
   console.log(dots);
   if ( $("#" + dots).hasClass("empty_dot"))
   {
                $("#" + dots).removeClass("empty_dot");
                $("#" + dots).addClass("filldot");
                $("#" + dots).addClass("altdot");
                console.log("#dot" + (ids[1]));
          
                $("#dot_" + (ids[1])).removeClass("active_dot");
                $("#dot_" + (ids[1])).removeClass("active_dot_color"); 
                $('.plot_p').removeClass("vermillion");
                alt_qtip();
   }
});

$('.logo').on("click", function() {
    
    if ( $('#logo_menu_wrapper').css("opacity") == "1" ) {
        $('#logo_menu_wrapper').css("opacity", 0);    
        $('#logo_menu_wrapper').css("z-index", "1");    
                
    }
    else {
        
        $('#logo_menu_wrapper').css("opacity", 1);    
        $('#logo_menu_wrapper').css("z-index", "1700");    
        console.log("!!!")
    }
});

$('#page, #menu_wrapper').on("click", function() {
   
    $('#logo_menu_wrapper').css("opacity", 0);    
    $('#logo_menu_wrapper').css("z-index", "0");    
});

function jumpToSet(id)
{
        
    
    var i = 0;
    var jump_id = -1;
    id = getId(id);
    
    
    $('.plot_p').each(function ()
    {
        if (i == id)
        {
            jump_id = $(this).attr("id");            
            console.log( $(this).attr('id'));
        }
        i++;
    });
    
    id = getId(jump_id);            
    
    $('#online').scrollTo( '#header_' + id , {'duration': 800, 'easing' : 'easeInOutQuart'} );     
    $('.sidebar-nav').scrollTo( ('#dot_' + id) , {'duration': 800, 'easing' : 'easeInOutQuart'} ); 
    toggleActive(id);    
    
}

function jumpToLast(id)
{
    
    id = getId(id);
    $('#online').scrollTo( '#header_' + id , {'duration': 800, 'easing' : 'easeInOutQuart'} ); 
    console.log("Jumping!" + id);
    $('.sidebar-nav').animate({scrollTop: $('#timeline').innerHeight()}, 1000);   
    toggleActive(id);    
}

 var char = 0, sel; // character at which to place caret
content.focus();
if (document.selection) {
  sel = document.selection.createRange();
  sel.moveStart('character', char);
  sel.select();
}
else {
   sel = window.getSelection();
  sel.collapse(content.firstChild, char);
}



function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    { 
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}

$('#online').on("keyup", "article", function(e){ 
            
            
            
                if ($(this).html().charAt(0) != "<")
                    {
                        $(this).html("<p>" + $(this).html() + "</p>");
                        $(this).find("p").focus();
                        setEndOfContenteditable($(this).get(0));
                    }
            
                                    
            
            var id = $(this).attr("id");                    
            var numberPattern = /\d+/g;
            var numbers = id.match( numberPattern );
            numbers = numbers[0];                                
            id = numbers;
            saveToArray(id);
            document_save();
            
});



function setCaret(el)
{
    var el = $(el).get(0);
    var range = document.createRange();
    var sel = window.getSelection();
    
    range.setStart(el.childNodes[0], 0);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
    console.log("WOpsadas");
}

$('article[contenteditable="true"]').focus(function(){
    
  //  setCaret($(this));
    
});

$('#online').on("keyup", ".header", function(e){             
            id = getId( $(this).attr("id"));
            showTextR(id, true);
            document_save();
            alt_qtip();
});

$('#online').on("keyup", ".subtitle", function(e){ 
                                         
            id = getId($(this).attr("id"));
            showTextR(id, false);
            document_save();
            alt_qtip();            
});

$('#content').on("keyup", ".header", function(e){                         
            document_save();
            alt_qtip();
});

$('#content').on("keyup", ".subtitle", function(e){                                          
            document_save();
            alt_qtip();            
});
/*
$('#online').on("keyup", ".subtitle", function(e){ 
            var id = $(this).attr("id");                    
       //     alignDots();
            var numberPattern = /\d+/g;
            var numbers = id.match( numberPattern );
            numbers = numbers[0];                                
            id = numbers;
            saveToArray(id);
            document_save();
            alt_qtip();
});*/

function alternative()
{
    return '<div class="dd" id="d_'+section_count+'" >' + alternative_text() + '</div>';
}

function alternative_text()
{
    return '<table class="alternatives" id="alternative_' + section_count + '"><tr><td><div class="alternatives_container" id="alt_cont_'+section_count+'" ><span id="alt_' + section_count + '_0" class="empty_dot hi-icon">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id="alt_' + section_count + '_1" class="empty_dot hi-icon">&nbsp;&nbsp;&nbsp;&nbsp;</span></td></tr></table>';
    
}

function getNumberInID(string)
{
    var numberPattern = /\d+/g;
    var numbers = string.match( numberPattern );
    string = numbers[0];      
    return string;
}

function getNumbersInID(string)
{
    var numberPattern = /\d+/g;
    var numbers = string.match( numberPattern );    
    return numbers;
}

$(document).on("mouseup", function() {
    $(".alternatives").parent().css("position", "inherit");
    $(".alternatives").parent().css("top", "0");
    $('.dd').css("opacity", "1.0");
    $("#d_placeholder").remove();
    try {
    $("article").sortable('destroy');
    }
    catch(e)
    {
        
    }
});


var placeholder_start = -1;

function alternative_placeholder()
{
    return '<div class="dd ui-sortable-placeholder" style="visibility: hidden;" id="d_placeholder" >' + alternative_text() + '</div>';
}


$("#timeline").sortable({ opacity: 0.6, cursor: 'move',
            placeholder: 'marker',            
            forcePlaceholderSize: true,
            handle: ".ontheline" ,
            tolerance: "intersect",            
            axis: "y",
            revert: true,
            forcePlaceholderSize: true ,
            start:  function (event, ui)
            {   
                placeholder_start = -1;
                var c = 0;
                $('.timeline_row').each(function() {
                   id = $(this).attr("id") ;
                   if (id == undefined)
                       placeholder_start = c;
                   c++;
                });
             //    $(ui.placeholder).hide(300);                 
           //      $('#d_placeholder').hide(300);
           
            $(".marker").css({"height": "0px"});
            } ,                    
            change: function (e,ui){
              //  $(ui.placeholder).hide().show(300);                
          //      $('#d_placeholder').hide().show(300);
          
          $(".marker").css({"height": "0px"});
        setTimeout(function(){
            $(".marker").css({"height": "80px"});
        },10);
          
          
            }   ,       
            beforeStop: function (e,ui){
              //  $(ui.placeholder).hide().show(300);                
                //console.log($(ui.position.top));
            }   ,
                    
            sort: function (event, ui)
            {                
                //console.log(ui.position.top);
                id = getNumberInID(ui.item.attr("id"));                                
                $("#alternative_" + id).parent().css("position", "absolute");
                $("#alternative_" + id).parent().css("top", ui.position.top);
                                          
                
                var c = 0;
                placeholder = -1;
                $('.timeline_row').each(function() {
                   id = $(this).attr("id") ;
                   if (id == undefined)
                       placeholder = c;
                   c++;
                });
                
                c = 0;
                $("#d_placeholder").remove();                
                $('.dd').each(function() {
                    
                    id = $('.timeline_row').eq(c).attr("id");
                    if (id == undefined)
                    {
                        $(this).before(alternative_placeholder());     
                    }
                                                          
                    c++;
                });                              
              
              
            },
            stop: function (event, ui)
            {                
              //  alignDots();
                
            },
            receive: function (event, ui)    
            {                                    
                              
              html = moving_content.trim();                                                                                       
              section_count++;              
              
              console.log("ADDING" + html);

              text = '<div class="timeline_row" id="recordsArray_' + section_count + '"><table class="dot_table" id="table_' + section_count + '"><tr><td class="alternatives_td" style="vertical-align:top; padding-top:2px;"><span id="alt_'+section_count+'_0" class="empty_dot hi-icon">&nbsp;&nbsp;&nbsp;&nbsp;</span></td><td class="alternatives_td" style="vertical-align:top; padding-top:2px;"><span id="alt_'+section_count+'_1" class="empty_dot hi-icon">&nbsp;&nbsp;&nbsp;&nbsp;</span></td><td style="vertical-align: top;" class="ontheline"><span class="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a"><a href="javascript:void(0);" id="dot_'+section_count+'" class="hi-icon dot"></a></span></td><td class="last_column_pp"><span contentEditable="true" class="plot_p ' + (timeline ? '' : 'small_plot') +'" id="plot_p_' + section_count + '" href="javascript: void(0);"><b style="font-size: 1em" class="alt_button" id="alt_button_'+section_count+'">*</b>';
             //  $('#alternatives').append(alternative()); 
               alt_c.push(alternative_text());
                
              
              
              text += (moving_flag != 2) ? html.substr(0,75) : 'The Alt';
              
              text += '</span><div class="subheading" contenteditable="true" style="display: block;" id="sub_' + section_count + '">' + section_count +'</div><span class="alt_box" id="alt_' + count +'"></span></td></tr></table></div>';
              ui.item.html(text);
              ui.item.attr("id", "r_" + section_count);
              $('#r_' + section_count).before(text);
              $('#r_' + section_count).remove();
              
              
              if (moving_flag == 2)
              {
                  console.log("ALTTT");
                $('#r_' + section_count).after(text);//
                
                prev = $("#r_" + section_count).prev().attr("id");
                                                       
                
                if (prev != undefined)
                {                    
                    console.log("DEFINED");
                    var numberPattern = /\d+/g;
                    var numbers = prev.match( numberPattern );
                    prev = numbers[0];                                
                    $('#d_' + prev).after(alternative());
                    sortable_alternatives();
                    alt_c.push(alternative_text());
                }
                else
                {
                    console.log("UNDEFINED");
                    $('.alternatives').first().before(alternative());
                    alt_c.push(alternative_text());
                    sortable_alternatives();
                }
                                
                
                element = document.getElementById("r_" + section_count);
                element.parentNode.removeChild(element);
                sortable_alternatives();
                
                
                
                html = "THE ALT";
                moving_flag == 0;
              }
              
              section_count--;
              console.log(old_c);
              
              old_c.push(addSection(html));            
                            
              console.log(old_c);
              console.log("HERE");
            },
            stop: function() {    
                                
            },
            update: function(event, ui) {                                                
                 //     alignDots();                                                  
                      var order = $(this).sortable("serialize");
                      var numberPattern = /\d+/g;
                      var numbers = order.match( numberPattern );
                      console.log(order);
                
                      for (var i = 0; i < numbers.length; i++)
                      {                                                  
                        $("#section_" + i ).html( old_c[parseInt(numbers[i])]);                                                        
                        
                      }
                      var txt = "";
                      
                      var count = 0;
                      $('.timeline_row').each(function()
                      {
                        id = $(this).attr("id");                        
                        var numberPattern = /\d+/g;
                        id = id.match( numberPattern );
                        id = id[0];
                        
                        txt += '<div class="dd" id="d_'+count+'">' + $("#alternative_" + id).parent().html() + '</div>';                        
                        count++;                      
                      }
                      );
                      $("#alternatives").html(txt);
                      jumpTo(getId($(ui.item).attr("id")));
                        
    }								  
});


function headingButtons() {
 //   $('.alt_button').html("*");
}
/*

function do_dual()
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
                dual_toggle = false;;
                $('#dual').attr("title", 'Show alternatives');
                $('#dual').find("img").first().attr("src", 'img/dual.png');
            }
           
            $('#online').removeClass('borders');
            $("#alternative").css("display","block");
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


/* Adding using the new section button*/

 $('#newsec').click( function(){
         
    section = addSection();
    addPlotPoint();
    createAlternative();
    $(".empty_dot").qtip({content: {                              
            text: "<b>" + "Click to create alternate" +"</b>"
        }});
    old_c.push(section);          
    
         
});



var old_c = new Array();			
var new_c = new Array();




$('#online').scroll(function () {                            
           
            var scale = ($(window).height() - 175);
            var total = 0;
                                    
            $('.section').each(function() {
               total += $(this).innerHeight(); 
            });                                                
            
            var value = ((scale / total) * ($('#online').scrollTop())) * 0.50 ;            
            
            if (value > scale)
                value = scale;
                        
        //    $('#timeline_progress').css("height",  value +"px");                */
                       
});

$("article").on("keyup", "p", function(event) {
    
  if (event.keyCode == 17)
  {
          
  }
});

var $menu = $('.span3'),
$html = $('html, body');

//$menu.mmenu();

$('.span3').on("click", function() {
    $menu.trigger("close");
});
  
rangy.init();
var cssClassApplierModule = rangy.modules.CssClassApplier;
var count = 0;

var alt_c = new Array();
adjustHero();

function initialize()
{
    clickedDot = 0;
    $("#alternative_" + clickedDot).parent().remove();
    $("#recordsArray_" + clickedDot).remove();                        
    $("#section_" + clickedDot).remove(); 
   /* $("#alt2_" + clickedDot).remove();
    $("#alt1_" + clickedDot). remove();
        */                
            
            old_c = new Array();
            alt_c = new Array();
            
            $('.section').each (function() {
                old_c.push($(this).html());
            });
    
            $('.dd').each (function() {
                alt_c.push($(this).html());
            });
    
            
     addSection();
    addPlotPoint();
    createAlternative();            
            
            /*
    addSection("This is a sentence", "Description of sentence", "Yarn is a writing application!");
    addPlotPoint("This is a sentence", "Description of sentence");
    createAlternative();            
    
    addSection("This is a paragraph", "Description of paragraph", "Yarn supports the existing model that writers follow where they begin with fragments of a story and later move them around. It allows for the ambiguity involved in the writing process while encouraging writers to plan their stories. It also provides writers the ability to create and save different possibilities each part of their story can explore.");
    addPlotPoint("This is a paragraph", "Description of paragraph");
    createAlternative();            
    
    addSection("This is an entire page", "Description of page", "It allows writers to focus on parts of their story easily.</p><p>The outline allows the writer to break the story in sections and hence work on a single piece at a time.</p><p>It also encourages planning. </p><p>When writers start writing, they may not know where the story is headed or where it begins.</p><p>They start with a quote or a scene before they develop the plot or concept.</p><p>It allows writers to move writing easily.</p><p>The thread lets users shuffle the order of their writing.</p> <p>This helps users concentrate on writing first and facilitates easy reorganisation.");
    addPlotPoint("This is an entire page", "Description of page");
    createAlternative();            
      */      
      /*      
    addSection("Hero's call to adventure", "Backstory of the hero", "A minimal text editor is the central focus of the application. With the essential formatting options, it allows me to concentrate on the writing.");
    addPlotPoint("Hero's call to adventure", "Backstory of the hero");
    createAlternative();
    
    addSection("Hero refuses call", "Tension is built");
    addPlotPoint("Hero refuses call", "Tension is built ");
    createAlternative();
    
    addSection("Mentor persuades hero", "Introduction of mentor");
    addPlotPoint("Mentor persuades hero", "Introduction of mentor");
    createAlternative();
         
    
    addSection("The Collapse", "The hero is too late", "The thread allows me to break the story in sections and work on a single piece at a time.");
    addPlotPoint("The Collapse", "The hero is too late");
    createAlternative("The Savior Rises", "Hero rescues city", "I can create and see different ways their story can go. This helps me write the best possible story.");
          
    */
    old_c = new Array();
    $('.section').each (function() {
     old_c.push($(this).html());
    });
    
    $('.dd').each (function() {
     alt_c.push($(this).html());
    });
    
    
    sortable_alternatives();
    headingButtons();
    alt_qtip();
    $(".empty_dot").qtip({content: {                              
            text: "<b>" + "Click to create alternate" +"</b>"
        }});
    
}
/*
$('#timeline').on("click", '.last_column_pp b', function() {
   id = getId($(this).attr("id"));      
   $('#sub_'+id).toggleClass("subheading_visible");  
});
*/





initialize();



/*

$('#alternative_'+alt_count).hover(function(event){
      
      $(event.target).css('opacity','1.0');
      console.log(event.target);
  },function(){
  $(event.target).css('opacity','0.1');
}
 

);
*/



});