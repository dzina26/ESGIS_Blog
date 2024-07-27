// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});
function shareArticle(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        }).then(() => {
            console.log('Article partagé avec succès.');
        }).catch((error) => {
            console.log('Erreur lors du partage de l\'article:', error);
        });
    } else {
        alert('Le partage web n\'est pas pris en charge par votre navigateur.');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const filterItems = document.querySelectorAll('.filter-item');
    const posts = document.querySelectorAll('.post-box');

    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            const filter = item.getAttribute('data-filter');

            // Mettre à jour l'état actif du filtre
            filterItems.forEach(i => i.classList.remove('active-filter'));
            item.classList.add('active-filter');

            // Afficher/masquer les posts en fonction du filtre
            posts.forEach(post => {
                if (filter === 'all' || post.classList.contains(filter)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});


let currentIndex = 0;

function scrollCarousel(direction) {
    const images = document.querySelector('.carousel-images');
    const totalImages = images.children.length;
    const imageWidth = images.children[0].offsetWidth;
    
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    
    const offset = -currentIndex * imageWidth;
    images.style.transform = `translateX(${offset}px)`;
};