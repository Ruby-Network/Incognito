function initServiceWorker() {
    return new Promise<void>((resolve) => {
        if (localStorage.getItem('incog||proxy') === 'uv') {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(async () => {
                    //await registerRemoteListener(sw.active!)
                    console.log('Service Worker Ready');
                    //@ts-ignore these are a fucking thing
                    //wait for the scripts to load
                    await window.loadProxyScripts();
                    //@ts-ignore these fucking exist
                    //make sure the transport is set before continuing
                    await window.setTransport(localStorage.getItem('incog||transport'));
                    resolve();
                });
                navigator.serviceWorker.register('/sw.js', { scope: '/' });
            }
        } else {
            //@ts-ignore
            window.loadProxyScripts().then(() => {
                resolve();
            });
        }
    });
}

export { initServiceWorker };
