function sortCarByYearAscendingly(cars) {
  // Menyalin array cars ke dalam variabel result untuk menghindari side-effect
  const result = [...cars];

  // Mengurutkan array result secara ascending berdasarkan tahun (year)
  result.sort((a, b) => a.year - b.year);
  console.log = (cars);

  // Mengembalikan array result yang sudah terurut secara ascending
  return result;
}