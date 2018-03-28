$(function() {
    $('#legal-basis-tab').bind('click touchstart', () => {
        alert("wtf");
        $('#quality-labels-content').hide();
        $('#health-protection-content').hide();
        $('#legal-basis-content').show();
        scrollToContent();
    });


    $('#quality-labels-tab').bind('click touchstart', () => {
        $('#legal-basis-content').hide();
        $('#health-protection-content').hide();
        $('#quality-labels-content').show();
        scrollToContent();
    });

    $('#health-protection-tab').bind('click touchstart', () => {
        $('#legal-basis-content').hide();
        $('#quality-labels-content').hide();
        $('#health-protection-content').show();
        scrollToContent();
    })

    const scrollToContent = () => {
        $('html, body').animate({
            scrollTop: $(".tab-content").offset().top
        }, 1000);
    }
});
