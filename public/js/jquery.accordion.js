$('.accordion').each(function(){

    function toggleAccordion(index){
        $('.accordion-body').eq(index).toggleClass('hidden')
        $('.accordion-arrow').eq(index).toggleClass('rotate-180')
    }

    $('.accordion-header').each(function(index){
        $(this).on('click', e=> toggleAccordion(index))
    })
})