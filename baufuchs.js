$(function() {
    $('#legal-basis-tab').on('click tap', () => {
        $('#quality-labels-content').hide();
        $('#health-protection-content').hide();
        $('#legal-basis-content').show();
        scrollToContent();
    });


    $('#quality-labels-tab').on('click tap', () => {
        $('#legal-basis-content').hide();
        $('#health-protection-content').hide();
        $('#quality-labels-content').show();
        scrollToContent();
    });

    $('#health-protection-tab').on('click tap', () => {
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
