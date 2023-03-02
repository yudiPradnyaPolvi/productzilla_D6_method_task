// method Function biasa
function dataDiri1(nama,asal="  Jimbaran ",suku = " Bali ", asal_kampus = " Universitas Udayana ", jurusan = " Teknik Elektro "){
    console.log("Perkenalkan nama saya " + nama + " saya berasal dari "+ asal +" suku saya "+ suku + "  saya berkuliah di "+ asal_kampus + "jurusan saya " + jurusan)
  }
 
//annonymus function

  const dataDiri2 = function (nama,asal="  Jimbaran ",suku = " Bali ", asal_kampus = " Universitas Udayana ", jurusan = " Teknik Elektro "){
    console.log("Perkenalkan nama saya " + nama + " saya berasal dari "+ asal +" suku saya "+ suku + "  saya berkuliah di "+ asal_kampus + "jurusan saya " + jurusan)
} 
//Arrow function 
  const dataDiri3 = (nama,asal="  Jimbaran ",suku = " Bali ", asal_kampus = " Universitas Udayana ", jurusan = " Teknik Elektro ")=>{
    console.log("Perkenalkan nama saya " + nama + " saya berasal dari "+ asal +" suku saya "+ suku + "  saya berkuliah di "+ asal_kampus + "jurusan saya " + jurusan)
  }

  dataDiri1 ("yudi")
  dataDiri1 ("kadek","seminyak")
  dataDiri2 ("Mitha")
  dataDiri2 ("Amanda","Negaroa")
  dataDiri3 ("Wasthu","Bangli","Bali","UB")
  dataDiri3 ("abong","Buleleng","Jawa")
  