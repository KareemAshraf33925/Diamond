// nice scroll
$(function() {  
    $("body").niceScroll({
         cursorcolor: "#333"
    });
    $(".head").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });
    $(".p-1").fitText(1.2, { minFontSize: '15px', maxFontSize: '16px' });
});
