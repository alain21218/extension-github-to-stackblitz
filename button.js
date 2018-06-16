// Remove existing
document.querySelectorAll('#stackblitz-btn').forEach(item => item.remove());

const container = document.querySelector('.BtnGroup');

if(container) {
    const btn = document.createElement('button');
    const icon = document.createElement('img');
    let img = "";

    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
        img = browser.extension.getURL("logo.png");
    }else if( navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ){
        img = chrome.extension.getURL("logo.png");
    }
    
    icon.src = img;
    icon.alt = 'StackBlitz';
    icon.width = 15;
    icon.height = 15;
    icon.style.verticalAlign = 'middle';
    icon.style.marginRight = '5px';
    btn.appendChild(icon);
    
    btn.innerHTML += 'Open in StackBlitz';
    btn.classList.add('btn');
    btn.classList.add('btn-sm');
    btn.style.marginRight = '5px';
    btn.style.background = '#1366A1';
    btn.style.color = 'white';
    btn.id = 'stackblitz-btn';
    
    btn.addEventListener('click', (event) => {
        const url = document.URL.replace('github.com', 'stackblitz.com/github');;
        window.open(url, '_blank');
    });
    
    container.appendChild(btn);
}
