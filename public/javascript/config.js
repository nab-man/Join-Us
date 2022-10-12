function getUrl() {
    if (window.location.href.includes("join-us")) {
        return "http://join-us2.herokuapp.com"
    } else {
        return "http://localhost:3000"
    }
}
export default getUrl;