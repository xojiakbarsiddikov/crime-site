let preloader_feedback = document.querySelector('.preloader_feedback')

preloader_feedback.classList.toggle('dn')

function preloader() {
    $(() => {
        setInterval(() => {
            let p = $('.preloader');

            p.css('opacity', 0)

            setInterval(
                () => p.remove(), preloader_feedback.classList.remove('dn'),preloader_feedback.classList.toggle('db'),
                parseInt(p.css('--duration')) * 1000

            );

        }, 1000);
    });
}

setInterval(() => preloader(), 100);