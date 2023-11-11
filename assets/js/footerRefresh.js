document.getElementById('refresh-btn').addEventListener('click', function() {
    location.reload();
});

document.getElementById('scroll-up-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
