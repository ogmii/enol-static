/*! enol v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
$(".history .parallax-bg").parallax({imageSrc:"/img/archive-bg.jpg",speed:.5}),$(".news .parallax-bg").parallax({imageSrc:"/img/news-bg.jpg",speed:.5});

$("#save-answer").on('click', function () {
    if ($(".radio-answer").is(":checked")) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
})