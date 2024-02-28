var videos = document.getElementById('video'),
 buttons = document.getElementById('button-container');

videos.onended = function() {
    buttons.style.display = 'block';
}