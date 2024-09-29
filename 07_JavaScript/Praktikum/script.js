function swapValues1(a, b) {
    let temp = a; 
    a = b; 
    b = temp; 

    console.log('a:', a, 'b:', b);
}
swapValues1(5, 10); 


function swapValues2(a, b) {
   
    var temp = a; 
    a = b; 
    b = temp; 


    console.log('a:', a, 'b:', b);
}
swapValues2(5, 10); 


function swapValues3(a, b) {
                
    const temp = a; 
    a = b; 
    b = temp; 

   
    console.log('a:', a, 'b:', b);
}
swapValues3(5, 10); 
//Sebaiknya Gunakan const, karena membantu menjaga nilai tetap stabil, mencegah kesalahan, dan membuat kode lebih jelas. (saya mengambil dari forum dan saya simpulkan)
