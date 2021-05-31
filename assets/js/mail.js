document.getElementById('formid').addEventListener('submit', function (e) {
    e.preventDefault();
    const subject = document.getElementById('subject').value;
    const text = document.getElementById('text').value;
    window.open(`mailto:evtim.lyonov@gmail.com?subject=${subject}&body=${text}`);
    document.getElementById('message-sent').style.display = 'block';
    document.getElementById('sent-email').style.display = 'none';
});