
const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeihgt;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffest > animItemOffset - animItemPoint) && pageYOffest < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains('._anim-no-hide')){
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClienRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }    
    }

    setTimeout(() => {
        animOnScroll()
    }, 300);
}