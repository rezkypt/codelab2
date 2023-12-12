function validateForm() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  var errorNama = document.getElementById("error-nama");
  var errorEmail = document.getElementById("error-email");
  var errorAlamat = document.getElementById("error-alamat");

  errorNama.textContent = "";
  errorEmail.textContent = "";
  errorAlamat.textContent = "";

  if (nama === "" || email === "" || alamat === "") {
    alert("Anda harus mengisi data dengan lengkap!");
    return false;
  }
  alert("berhasil");
  return true;
}
