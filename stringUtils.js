/* fonction slugify */
export const slugify = (text) => {
    return text.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim()
};

/* fonction truncate */
export const truncate = (text, limit) => {
    if (text.length <= limit) return text;
    const sub = text.substring(0, limit);
    return sub.substring(0, sub.lastIndexOf(' ')) + "...";
};

/* fonction countWords */
export const countWords = (text) => {
    return text.trim().split(/\s+/).filter(word => word !== "").length;
};

/* fonction escapeHTML */
export const escapeHTML = (text) => {
    const map = { '&': '&amp;', '<': '&lt', '>': '&gt;', '"': '&quot;', "'": '&#39;'};
    return text.replace(/[&<>"']/g, m => map[m]);
}