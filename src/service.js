// SPDX-License-Identifier: Apache-2.0 
export default {
    getComponents() {
        return fetch('/components.json')
        .then(async (data) => {
            const res = await (data.json() || []);
            const max = res.reduce((a,b) => Math.max(a,b.order || 0), 0) + 1;
            // if all unodered, keep original order
            if (max == 1) return res;
            // unordered should be at the end
            res.forEach(element => element.order = (element.order != null && element.order != undefined) ? element.order : max);
            res.sort((a,b) => a.order -b.order);
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