function getUrl() {
    if (window.location.href.includes("join-us")) {
        return "https://join-us2.herokuapp.com"
    } else {
        return "http://localhost:3000"
    }
}
export default getUrl;