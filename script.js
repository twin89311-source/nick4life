// Commission Status Display
let commissionsOpen = true;

function updateCommissionDisplay() {
    const statusText = document.getElementById('statusText');
    const statusDot = document.querySelector('.status-dot');
    
    if (commissionsOpen) {
        statusText.textContent = 'OPEN';
        statusDot.classList.remove('closed');
        statusDot.classList.add('open');
    } else {
        statusText.textContent = 'CLOSED';
        statusDot.classList.remove('open');
        statusDot.classList.add('closed');
    }
}

// Load commission status from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('commissionsOpen');
    if (saved !== null) {
        commissionsOpen = saved === 'true';
    }
    updateCommissionDisplay();
});
