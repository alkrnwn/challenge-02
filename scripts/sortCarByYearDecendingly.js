function sortCarByYearDescendingly(cars) {
  // Menyalin array cars ke dalam variabel result untuk menghindari side-effect
  const result = [...cars];

  // Mengurutkan array result secara descending berdasarkan tahun (year)
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j].year < result[j + 1].year) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  console.log(result);
  console.table(result);

  // Mengembalikan array result yang sudah terurut secara descending
  return result;
}
