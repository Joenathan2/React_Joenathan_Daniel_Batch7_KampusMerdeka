## Event Handling - 3 Key Takeaways

1. **Event Listener Binding**  
   Event handling melibatkan penambahan event listeners seperti `onClick`, `onChange`, dll., untuk menangani interaksi pengguna. React memungkinkan kita untuk mengikat event handler langsung ke elemen DOM dalam JSX.

2. **State Management with Events**  
   Event biasanya memicu perubahan state komponen menggunakan hooks seperti `useState`. Ini memungkinkan perubahan dinamis pada tampilan komponen berdasarkan interaksi pengguna, seperti input form atau klik tombol.

3. **Using Hooks for Side Effects**  
   Event handling seringkali membutuhkan penanganan efek samping, seperti fetching data atau memperbarui komponen setelah suatu event terjadi. Hooks seperti `useEffect` sangat berguna untuk mengelola efek samping ini, memastikan logika event dijalankan pada waktu yang tepat (misalnya, setelah render atau pembaruan state).
