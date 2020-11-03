var $doc = $('html, body');
$('.nav-link a').click(function () {
    $doc.animate({
        scrollTop: $($.attr(this, 'href')).offset().
    }, 500);
    return false;
});

<script>
AOS.init();
</script>


