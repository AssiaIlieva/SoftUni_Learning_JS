function extractFile(address) {
  let fileNameIndex = address.lastIndexOf("\\");
  let fileExtentionIndex = address.lastIndexOf(".");
  let fileName = address.slice(fileNameIndex + 1, fileExtentionIndex);
  let extension = address.slice(fileExtentionIndex + 1);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
