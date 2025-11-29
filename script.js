document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navContent = document.getElementById('nav-content');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            if (navContent) {
                navContent.classList.toggle('hidden');
            }
        });
    }

    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    const copyButton = document.getElementById('copy-button');
    const closeButton = document.getElementById('close-button');

    const email = 'adriansyahfadli05@gmail.com';
    const phone = '+6285159148099';
    let textToCopy = '';

    function showNotification(text, copyValue) {
        if (notification && notificationText) {
            notificationText.innerText = text;
            textToCopy = copyValue;
            notification.classList.remove('hidden');
        }
    }

    const emailLinkFooter = document.getElementById('email-link-footer');
    if(emailLinkFooter) {
        emailLinkFooter.addEventListener('click', () => showNotification(email, email));
    }

    const phoneLinkFooter = document.getElementById('phone-link-footer');
    if(phoneLinkFooter) {
        phoneLinkFooter.addEventListener('click', () => showNotification(phone, phone));
    }

    const closeBtn = document.getElementById('close-button');
    if(closeBtn){
        closeBtn.addEventListener('click', () => {
            if(notification) {
                notification.classList.add('hidden');
            }
        });
    }

    const copyBtn = document.getElementById('copy-button');
    if(copyBtn){
        copyBtn.addEventListener('click', () => {
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px'; 
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                if(copyButton) copyButton.innerText = 'Tersalin!';
            } catch (err) {
                if(copyButton) copyButton.innerText = 'Gagal Menyalin';
            }
            document.body.removeChild(textarea);

            setTimeout(() => {
                if(copyButton) copyButton.innerText = 'Salin ke Clipboard';
                if(notification) notification.classList.add('hidden');
            }, 1500);
        });
    }
});