const play_trailer = document.querySelector('.play');
const close_icon = document.querySelector('.close-icon');
const video = document.querySelector('video');
play_trailer.addEventListener('click', ()=> {
    togggleVideo();
});
close_icon.addEventListener('click', ()=> {
    togggleVideo();
});


function togggleVideo() {
    const trailer = document.querySelector('.trailer');
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause;
}