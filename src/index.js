import * as XLSX from 'xlsx';
import './style.css';

const fileInput = document.querySelector('.file-input');
const container = document.querySelector('.container');

fileInput.addEventListener('change', (e) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(e.target.files[0]);

  reader.onload = (e) => {
    const data = new Uint8Array(reader.result);
    const array = XLSX.read(data, { type: 'array' });
    const htmlStr = XLSX.write(array, {
      type: 'binary',
      bookType: 'html'
    });
    container.innerHTML = htmlStr;
  };
});
