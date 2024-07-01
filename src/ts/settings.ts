function setTheme(name: string | null) {
    if (name === 'ocean') {
        localStorage.setItem('incog||currentTheme', 'ocean');
        document.documentElement.className = '';
    } else {
        localStorage.setItem('incog||currentTheme', name as string);
        document.documentElement.className = name as string;
    }
}
function setProxy(name: string) {
    localStorage.setItem('incog||proxy', name);
}
function setTransport(name: string) {
    localStorage.setItem('incog||transport', name);
}
function changeTitle(title: string | null) {
    localStorage.setItem('incog||title', title as string);
    if (title === null || title === 'null') {
        return;
    } else {
        document.title = title;
    }
}
function changeFavicon(url: string | null) {
    localStorage.setItem('incog||favicon', url as string);
    if (url === null || url === 'null') {
        return;
    } else {
        let favicon = document.getElementById('favicon') as HTMLLinkElement;
        favicon.href = url;
    }
}

export { setTheme, setProxy, setTransport, changeTitle, changeFavicon };
