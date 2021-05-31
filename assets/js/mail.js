document.getElementById('formid').addEventListener('submit', function (e) {
    e.preventDefault();
    window.open(`mailto:evtim.lyonov@gmail.com?subject=${document.getElementById('subject').value}&body=${document.getElementById('text').value}`);
    document.getElementById('message-sent').style.display = 'block';
    document.getElementById('sent-email').style.display = 'none';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('text').value = '';
});