document.getElementById('formid').addEventListener('submit', function (e) {
    e.preventDefault();
    window.open(`mailto:evtim.lyonov@gmail.com?subject=${document.getElementById('subject').value}&body=${document.getElementById('text').value}`);
    document.getElementById('message-sent').style.display = 'block';
    document.getElementById('sent-email').style.display = 'none';
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
        input.disabled = 'true';
    })
    const text = document.getElementById('text');
    text.value = '';
    text.disabled = 'true';

    /* 
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const text = document.getElementById('text');

    name.value = '';
    name.disabled = 'true';
    email.value = '';
    email.disabled = 'true';
    subject.value = '';
    subject.disabled = 'true';
    text.value = '';
    text.disabled = 'true';
    */
});