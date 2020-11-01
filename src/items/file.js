/**
 * AJAX请求方法集
 */
/**
 * 文件下载
 * @param {文件内容} data 
 * @param {文件名称} fileName 
 * @param {文件类别} type 
 */
export function Download(data, fileName, type="text/plain") {
  // Create an invisible A element
  // eslint-disable-next-line no-irregular-whitespace
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  // Set the HREF to a Blob representation of the data to be downloaded
  a.href = window.URL.createObjectURL(
    // eslint-disable-next-line no-irregular-whitespace
    new Blob([data], { type })
  );
  // Use download attribute to set set desired file name
  a.setAttribute("download", fileName); 
  // Trigger the download by simulating click
  a.click();
  // Cleanup
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}
export default {Download};