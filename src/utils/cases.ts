export const toTitleCase = (str: string) => {
    if (str.length < 1) return '';
    return str.replace(/(^|\s)\S/g, function (text) {
        return text.toUpperCase();
    });
};
