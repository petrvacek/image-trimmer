(function ( $ ) {
 
    $.fn.imgTrimmer = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            backgroundColor: "white"
        }, options );
        
        
        return methods.inicialize(this,options);
 
    };
 
var move = false; 
var methods = {
    inicialize : function(t,options){
        return t.each(function(){
            $(this).wrap('<div class="trimmer-wrap" ><div class="img ui-widget-content">');
            $(this).closest(".trimmer-wrap").append("<div class=\"menu\"><ul></ul></div>");
            
            // add lb layer
            var menu = $(this).closest(".trimmer-wrap").find(".img").prepend("<div class=\"lb\"></div>");
            
            // add buttons to menu
            var menu = $(this).closest(".trimmer-wrap").find(".menu > ul");
            //menu.append("<li ><a href=\"#\" data-noclick data-typ=\"point\">Point</a></li>");
            //menu.append("<li ><a href=\"#\" data-noclick data-typ=\"box\">Box</a></li>");
            
            
            $(this).closest(".trimmer-wrap").on("click",".lb",function(e){
                var offset_t = $(this).offset().top - $(window).scrollTop();
                var offset_l = $(this).offset().left - $(window).scrollLeft();
                var left = Math.round( (e.clientX - offset_l) );
                var top = Math.round( (e.clientY - offset_t) );
                methods.addElement($(this),left, top)})
            .on("click",".lb .element",function(e){
                e.stopPropagation();
            });
            
        });
    },
    
    addElement: function(el,left, top){
        left-=10;
        top-=10;
        var pocet = 1 + el.find(".element").length;
        var v = $("<div class=\"element ui-widget-content\" data-count=\""+pocet+"\"></div>").css({left: left+"px", top: top+"px"})
        el.prepend(v);
        v.draggable();
        v.resizable();
    }
}
 
}( jQuery ));

