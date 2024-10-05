const produk = [
  { no: 1001, nama: "Lorem", kategori: "quum" },
  { no: 1002, nama: "Lonem", kategori: "quum" },
];

function hapusProdukTerakhir() {
  if (produk.length === 0) return alert("Tidak ada produk untuk dihapus.");
  if (confirm("Apakah Anda yakin ingin menghapus produk terakhir?")) {
    produk.pop();
    perbaruiTabelProduk();
  }
}

function buatBarisProduk({ no, nama, kategori }) {
  const baris = document.createElement("tr");
  [no, nama, kategori].forEach((nilai) => {
    const sel = document.createElement("td");
    sel.textContent = nilai;
    baris.appendChild(sel);
  });
  return baris;
}

function perbaruiTabelProduk() {
  const badanTabel = document.querySelector("#tabelProduk tbody");
  badanTabel.innerHTML = "";
  produk.forEach((produkItem) => {
    badanTabel.appendChild(buatBarisProduk(produkItem));
  });
}

function tambahProduk() {
  const namaProduk = document.getElementById("namaProdukBaru").value;
  const kategoriProduk = document.getElementById("kategoriProdukBaru").value;
  if (!namaProduk || !kategoriProduk) return alert("Nama dan kategori produk harus diisi.");

  produk.push({ no: produk.length + 1, nama: namaProduk, kategori: kategoriProduk });
  perbaruiTabelProduk();
  document.getElementById("formProduk").reset();
}

function cariProduk(termPencarian) {
  const termPencarianKecil = termPencarian.toLowerCase();
  const produkTersaring = produk.filter(({ nama }) =>
    nama.toLowerCase().includes(termPencarianKecil)
  );
  const badanTabel = document.querySelector("#tabelProduk tbody");
  badanTabel.innerHTML = "";
  produkTersaring.forEach((produkItem) => {
    badanTabel.appendChild(buatBarisProduk(produkItem));
  });
}

document.getElementById("formProduk").addEventListener("submit", (event) => {
  event.preventDefault();
  tambahProduk();
});

document.getElementById("inputPencarian").addEventListener("input", (event) => {
  cariProduk(event.target.value);
});

perbaruiTabelProduk();
