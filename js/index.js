let preloader_home = document.querySelector('.preloader_home')

preloader_home.classList.toggle('dn')

function preloader() {
    $(() => {
        setInterval(() => {
            let p = $('.preloader');

            p.css('opacity', 0)

            setInterval(
                () => p.remove(), preloader_home.classList.remove('dn'),preloader_home.classList.toggle('db'),
                parseInt(p.css('--duration')) * 1000

            );

        }, 1000);
    });
}

setInterval(() => preloader(), 100);