export default {
    getComponents() {
        return fetch('/components.json')
        .then((data) => {
            return data.json();
        })
    }
}