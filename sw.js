const staticCacheName ='site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/css/mysite.css',
    '/js/SearchTable.js',
    '/js/ShowHideTableColumns.js',
    '/js/SortTableByColumn.js',
    '/js/Export_Fetch_TableData.js',
    '/js/Caculates.js',
    '/js/AddRemoveRow.js',
    '/images/220px-Novak_Djokovic_(16650975118).jpg',
    '/images/NovacBackground.jpg',
    '/images/social-icons.png'
];

self.addEventListener('install', evt=> {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
             console.log('caching shell assets');
             cache.addAll(assets);
        })
    );
});

//activate event
self.addEventListener('activated', function (event) {
    console.log('sw has been activated');
});

//fetch event
self.addEventListener('fetch', evt=>{
    evt.respondWith(
        caches.match(evt.request).then(cacheRes=>{
            return cacheRes||fetch(evt.request);
        })
    );
});