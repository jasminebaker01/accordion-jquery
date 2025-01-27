$('.accordion').each(function(){

    let accordionHeaders = $(this).find('.accordion-header')
    let accordionBodys = $(this).find('.accordion-body')

    function toggleAccordion(index){
        accordionBodys.eq(index).toggleClass('hidden')
        $('.accordion-arrow').eq(index).toggleClass('rotate-180')
    }

    accordionHeaders.each(function(index){
        $(this).on('click', e=> toggleAccordion(index))
    })
})