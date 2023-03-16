function filterCarByAvailability(cars) {
  // Menampilkan array cars di console untuk keperluan debugging
  console.log(cars);

  // Tempat penampungan hasil filter
  const result = [];

  // Mengiterasi setiap objek mobil pada array cars
  for (let i = 0; i < cars.length; i++) {
    // Jika availability pada objek mobil saat ini adalah true, maka tambahkan objek tersebut ke dalam array result
    if (cars[i].availability) {
      result.push(cars[i]);
    }
  }

  // Mengembalikan array result yang berisi objek-objek mobil yang ketersediaannya adalah true
  return result;
}
