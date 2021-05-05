const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const slugToTitle = (slug, capitalizeOnlyFirst = false) => {
    let capitalizedTitle = '';

    const words = slug.replace(/-/gi, " ").split(" ");
    words.forEach((element, i) => {
        if (i === 0) capitalizedTitle += capitalize(element);
        else {
            capitalizedTitle += capitalizeOnlyFirst ? element : capitalize(element);
        }
        if (i < words.length - 1) capitalizedTitle += " ";
    });

    return capitalizedTitle;
};

module.exports = {
    slugToTitle
};