export default {
    getComponents() {
        return fetch('/components.json')
        .then((data) => {
            return data.json();
        })
    },
    getMonitoring() {
        return fetch('/monitoring.json')
        .then((data) => {
            return data.json();
        })
    }
}