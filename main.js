chrome.contextMenus.create({
    title: "Search on Google",
    contexts: ["image"],
    id: "SearchOnGoogle"
})
chrome.contextMenus.create({
    title: "Search Anime",
    contexts: ["image"],
    id: "AnimeContext"
})
chrome.contextMenus.create({
    title: "Search on Trace.moe",
    contexts: ["image"],
    id: "Trace.moe",
    parentId: "AnimeContext"
})
chrome.contextMenus.create({
    title: "Search on IQDB",
    contexts: ["image"],
    id: "IQDB",
    parentId: "AnimeContext"
})
chrome.contextMenus.create({
    title: "Search on SauceNAO",
    contexts: ["image"],
    id: "SauceNAO"
})


chrome.contextMenus.onClicked.addListener(async function(info, tab) {
    if (info.menuItemId == "SearchOnGoogle") {
        chrome.tabs.create({url : "https://images.google.com/searchbyimage?image_url=".concat(info.srcUrl)})
    }
    if (info.menuItemId == "Trace.moe") {
        chrome.tabs.create({url : "https://trace.moe/?url=".concat(info.srcUrl)})
    }
    if (info.menuItemId == "SauceNAO") {
        chrome.tabs.create({url : "https://saucenao.com/search.php?db=999&url=".concat(info.srcUrl)})
    }
    if (info.menuItemId == "IQDB") {
        chrome.tabs.create({url : "https://iqdb.org/?url=".concat(info.srcUrl)})
    }
})