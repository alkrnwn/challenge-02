function filterCarByAvailability(cars) {
  // Menampilkan array cars di console untuk keperluan debugging
  console.log(cars);

  // Tempat penampungan hasil filter
  const result = [];

  // Mengiterasi setiap objek mobil pada array cars
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available) {
      result.push(cars[i]);
    }
  }

  console.log(result);
  console.table(result);

  // Mengembalikan array result yang berisi objek-objek mobil yang ketersediaannya adalah true
  return result;
}
