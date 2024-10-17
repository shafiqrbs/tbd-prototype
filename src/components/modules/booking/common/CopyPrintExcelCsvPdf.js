import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";

const handlePrint = () => {
  window.print();
};

const handleCopy = (IdWithHash) => {
  const table = document.querySelector(IdWithHash);
  const range = document.createRange();
  range.selectNode(table);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Copied to clipboard!");
};

const handlePdf = (Id) => {
  const input = document.getElementById(Id);
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "JPEG", 0, 0);
    pdf.save("emr.pdf");
  });
};

const handleExcel = (Id) => {
  const table = document.getElementById(Id);
  const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet JS" });
  XLSX.writeFile(wb, "emr.xlsx");
};

const handleCsv = (Id) => {
  const table = document.getElementById(Id);
  const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet JS" });
  XLSX.writeFile(wb, "emr.csv", { bookType: "csv" });
};

const handleDelete = (arrayData, index, setArrayData) => {
  const updatedCards = arrayData.filter((_, i) => i !== index);
  setArrayData(updatedCards);
};

export {
  handlePrint,
  handleCopy,
  handlePdf,
  handleExcel,
  handleCsv,
  handleDelete,
};
