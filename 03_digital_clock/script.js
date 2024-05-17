



let local_time = document.querySelector('#local_time');





setInterval(() => {
    let date = new Date();
    local_time.textContent = date.toLocaleTimeString();
}, 1000);
