const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const slugToTitle = (slug) => {
    let capitalizedTitle = '';

    const words = slug.replace("-", " ").split(" ");
    words.forEach((element, i) => {
        capitalizedTitle += capitalize(element);
        if (i < words.length - 1) capitalizedTitle += " ";
    });

    return capitalizedTitle;
};

module.exports = {
    slugToTitle
};