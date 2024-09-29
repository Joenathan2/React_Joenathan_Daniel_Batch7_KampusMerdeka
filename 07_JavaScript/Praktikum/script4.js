const calculator = {
    // Metode untuk menjumlahkan dua angka
    add: function(a, b) {
        return a + b;
    },

    // Metode untuk mengurangkan dua angka
    subtract: function(a, b) {
        return a - b;
    },

    // Metode untuk mengalikan dua angka
    multiply: function(a, b) {
        return a * b;
    },

    // Metode untuk membagi dua angka
    divide: function(a, b) {
        // Menangani pembagian dengan nol
        if (b === 0) {
            return "gagal"; 
        }
        return a / b;
    }
};


console.log(calculator.add(5, 3));       
console.log(calculator.subtract(5, 3));  
console.log(calculator.multiply(5, 3));  
console.log(calculator.divide(5, 3));    
console.log(calculator.divide(5, 0));  
