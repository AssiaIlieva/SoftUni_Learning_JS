function extractFile(address) {
  let fileInfo = address.split("\\").pop();
  let dotIndex = fileInfo.lastIndexOf('.');
  let fileExtention = fileInfo.slice(dotIndex + 1);
  let fileName = fileInfo.slice(0, dotIndex);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtention}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
