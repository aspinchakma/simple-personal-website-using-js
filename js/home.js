const incoorectM = document.getElementById('incorrect-password');
console.log(incoorectM);
incoorectM.style.visibility = 'hidden';

document.getElementById('sign-in-button').addEventListener('click', function () {
    const userName = document.getElementById('user-name').value;
    const userPass = document.getElementById('user-pass').value;

    if (userName === 'aspinchakma@gmail.com' && userPass === '2021') {
        window.location.href = 'https://www.youtube.com'
    } else {
        incoorectM.style.visibility = 'visible';
    }
})