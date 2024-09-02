export default {
    getComponents() {
        return fetch('/components.json')
        .then(async (data) => {
            const res = await (data.json() || []);
            res.sort((a,b) => (a.order || 0) - (b.order || 0));
            return res;
        })
    },
    getMonitoring() {
        return fetch('/monitoring.json')
        .then((data) => {
            return data.json();
        })
    },
    hasMonitoring() {
        return this.getMonitoring().then((components) => components.length > 0);
    }
}