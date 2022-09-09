let article_preloader = document.querySelector('.article_preloader')

article_preloader.classList.toggle('dn')

function preloader() {
    $(() => {
        setInterval(() => {
            let p = $('.preloader');

            p.css('opacity', 0)

            setInterval(
                () => p.remove(), article_preloader.classList.remove('dn'),article_preloader.classList.toggle('db'),
                parseInt(p.css('--duration')) * 100

            );

        }, 1000);
    });
}

setInterval(() => preloader(), 100);