let preloader_contacts = document.querySelector('.preloader_contacts')

preloader_contacts.classList.toggle('dn')

function preloader() {
    $(() => {
        setInterval(() => {
            let p = $('.preloader');

            p.css('opacity', 0)

            setInterval(
                () => p.remove(), preloader_contacts.classList.remove('dn'),preloader_contacts.classList.toggle('db'),
                parseInt(p.css('--duration')) * 1000

            );

        }, 1000);
    });
}

setInterval(() => preloader(), 100);