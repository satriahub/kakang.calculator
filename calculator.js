const btn = document.querySelector('#btn');
const txt_sisi = document.querySelector('#sisi')
const luas = document.querySelector('.luas')

btn.addEventListener('click', function(){
  let sisi = parseFloat(txt_sisi.value)
  luas.innerHTML = sisi * sisi
});

document.addEventListener("DOMContentLoaded", function() {
  const panjangInput = document.getElementById("panjang");
  const lebarInput = document.getElementById("lebar");
  const tinggiInput = document.getElementById("tinggi");
  const hitungButton = document.getElementById("btn-hitung");
  const volumeOutput = document.querySelector(".volume");
  const luasPermukaanOutput = document.querySelector(".luas-permukaan");

  hitungButton.addEventListener("click", function() {
      const panjang = parseFloat(panjangInput.value);
      const lebar = parseFloat(lebarInput.value);
      const tinggi = parseFloat(tinggiInput.value);

      const volume = hitungVolumeBalok(panjang, lebar, tinggi);
      const luasPermukaan = hitungLuasPermukaanBalok(panjang, lebar, tinggi);

      volumeOutput.textContent = volume.toFixed(2); 
      luasPermukaanOutput.textContent = luasPermukaan.toFixed(2); 
  });
});


function hitungVolumeBalok(panjang, lebar, tinggi) {
  return panjang * lebar * tinggi;
}


function hitungLuasPermukaanBalok(panjang, lebar, tinggi) {
  return 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
}
