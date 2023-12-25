const themeBtn = document.getElementById("slider");

themeBtn.addEventListener("click", () => {
    const root = document.documentElement;
    const currentBgColor = getComputedStyle(root).getPropertyValue('--page').trim();

    if (currentBgColor === 'hsl(249, 19%, 14%)') {
    root.style.setProperty('--page', 'hsl(35, 17%, 55%)');
    root.style.setProperty('--highlight', 'white');
    root.style.setProperty('--gray', 'hsl(0, 0%, 0%)');
    root.style.setProperty('--dark', 'hsl(35, 32%, 49%)');
    root.style.setProperty('--background', 'white');
    root.style.setProperty('--orange__square', 'hsl(135, 54%, 38%)');
    root.style.setProperty('--text__gray', 'hsl(0, 0%, 0%)');
    root.style.setProperty('--text__white', 'hsl(0, 0%, 0%)');
} else {
    root.style.setProperty('--page', 'hsl(249, 19%, 14%)');
    root.style.setProperty('--highlight', 'white');
    root.style.setProperty('--gray', 'hsl(236, 7%, 54%)');
    root.style.setProperty('--dark', 'hsl(225, 14%, 16%)');
    root.style.setProperty('--background', 'hsl(249, 16%, 24%)');
    root.style.setProperty('--orange__square', 'hsl(12, 100%, 66%)');
    root.style.setProperty('--text__gray', 'hsl(236, 7%, 54%)');
    root.style.setProperty('--text__white', 'hsl(0, 0%, 100%)');
}
});