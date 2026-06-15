document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.our-job__button').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            console.log('path:', path);
            document.querySelectorAll('.our-job__card').forEach(function(tabContent) {
                tabContent.classList.remove('our-job__card-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('our-job__card-active')
        })
    })
})