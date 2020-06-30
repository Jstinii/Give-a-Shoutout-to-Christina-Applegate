var activeURL = window.location.href;
//var random = getRandomInt(100);

/*function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
*/
if (activeURL != 'https://www.youtube.com/watch?v=1QyY4jei6rM')
{
browser.storage.local.get('enabled', data => {
    if(data.enabled)
    {
        if(activeURL == 'https://www.jstinii.me/project')
        {
            setTimeout(() => window.open('https://www.youtube.com/watch?v=yAQq5WHVgTk', '_blank'),1000);
            win.focus();
        }
        else
        {
            setTimeout(() => window.open('https://www.youtube.com/watch?v=1QyY4jei6rM', '_blank'),1000);
            win.focus();
        }
    }
    else{}
});
}