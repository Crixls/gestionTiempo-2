export function desvanecimiento(selector) {
    return new Promise((resolve) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = 0;
            setTimeout(() => {
                element.style.opacity = 1;
                resolve();
            }, 3000);
        } else {
            resolve();
        }
    });
}