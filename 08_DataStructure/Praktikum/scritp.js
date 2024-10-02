// Simulasi data produk (ganti dengan data asli Anda)
const products = [
    { no: 1001, name: "Lorem", category: "quum", image: "dolor", freshness: "Brand new", description: "adipiscing", price: 10 },
    { no: 1002, name: "Lonem", category: "quum", image: "dolor", freshness: "Brand new", description: "adipiscing", price: 20 },
  ];
  
  function deleteLastProduct() {
    if (products.length > 0) {
      if (confirm("Apakah Anda yakin ingin menghapus produk terakhir?")) {
        products.pop();
        populateTable(products);
      }
    } else {
      alert("Tidak ada data untuk dihapus.");
    }
  }

  function createTableRow(product) {
    const row = document.createElement('tr');
    for (const key in product) {
      const cell = document.createElement('td');
      cell.textContent = product[key];
      row.appendChild(cell);
    }
    return row;
  }
  
  function populateTable(data) {
    const tableBody = document.getElementById('productTable').querySelector('tbody');
    tableBody.innerHTML = ''; 
    data.forEach(product => {
      const row = createTableRow(product);
      tableBody.appendChild(row);
    });
  }
  
  function addProduct() {
    const form = document.getElementById('productForm');
    const newProductName = document.getElementById('newProductName').value;
    const newProductCategory = document.getElementById('newProductCategory').value;
  
    const newProduct = {
      no: products.length + 1,
      name: newProductName,
      category: newProductCategory,
    };
  
    products.push(newProduct);
    populateTable(products);
    form.reset(); 
  }
  
  const productForm = document.getElementById('productForm');
  productForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    addProduct();
  });

  populateTable(products);
  
  function searchProducts(searchTerm) {
    const tableRows = document.querySelectorAll('#productTable tbody tr');
    tableRows.forEach(row => {
      const nameCell = row.cells[1];
      if (nameCell.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }
  
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    searchProducts(searchInput.value);
  });
  