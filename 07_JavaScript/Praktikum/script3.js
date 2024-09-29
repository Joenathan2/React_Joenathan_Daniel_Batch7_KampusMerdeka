function findLargest(arr) {
    if (arr.length === 0) {
        return null; // atau Anda bisa mengembalikan nilai lain sesuai kebutuhan
    }

    // Menginisialisasi variabel terbesar dengan nilai pertama dari array
    let largest = arr[0];

    // Melakukan iterasi melalui setiap elemen dalam array
    for (let i = 1; i < arr.length; i++) {
        // Jika elemen saat ini lebih besar dari 'largest', perbarui 'largest'
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    // Mengembalikan nilai terbesar yang ditemukan
    return largest;
}

// Contoh penggunaan
const numbers = [5, 3, 9, 1, 6];
const result = findLargest(numbers);
console.log(result); // Output: 9