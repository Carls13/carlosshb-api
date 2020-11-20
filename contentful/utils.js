const formatEntry = (entry, images, wantsDate = false) => {
    const elementData = entry.fields;
    const { id } = entry.sys;
    if (wantsDate) {
        const { createdAt } = entry.sys;
        elementData.createdAt = createdAt;
    }
    images.forEach(image => {
        const imageItem = entry.fields.preview.fields.file.url;
        elementData[image] = imageItem;
    });

    return {
        ...elementData,
        id
    };
}

module.exports = {
    formatEntry
};