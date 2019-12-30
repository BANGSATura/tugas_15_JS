function perhitungan() {
  var ab = 8;
  var cb = 6;
  console.log("Nilai AB : ",ab);
  console.log("Nilai BC : ",cb);
  var nilai_ab = Math.pow(ab,2);
  var nilai_cb = Math.pow(cb,2);
  var total = nilai_ab + nilai_cb;
  var hasil = Math.sqrt(total);
  console.log("Panjang sisi AC pada segitiga siku-siku tersebut adalah : ",hasil,"cm");
}
perhitungan();
