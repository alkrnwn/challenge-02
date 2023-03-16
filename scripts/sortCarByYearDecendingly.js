function sortCarByYearDescendingly(cars) {
  // Menyalin array cars ke dalam variabel result untuk menghindari side-effect
  const result = [...cars];

  // Mengurutkan array result secara descending berdasarkan tahun (year)
  result.sort((a, b) => b.year - a.year);

  // Mengembalikan array result yang sudah terurut secara descending
  return result;
}
