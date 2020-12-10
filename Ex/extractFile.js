function extractFile(text) {
    let i = text.lastIndexOf('.');
    let extension = text.substring(i + 1);
    let index = text.lastIndexOf('\\');
    let name = text.slice(index + 1, i);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');