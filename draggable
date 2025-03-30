// Make the images and titles draggable
document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('mousedown', function(e) {
        let offsetX = e.clientX - item.getBoundingClientRect().left;
        let offsetY = e.clientY - item.getBoundingClientRect().top;

        function mouseMoveHandler(e) {
            item.style.left = e.clientX - offsetX + 'px';
            item.style.top = e.clientY - offsetY + 'px';
        }

        document.addEventListener('mousemove', mouseMoveHandler);

        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', mouseMoveHandler);
        });
    });
});
