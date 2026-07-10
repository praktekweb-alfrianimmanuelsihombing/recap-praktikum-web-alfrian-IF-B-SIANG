function cekLogin() {
    let usernameInput = document.getElementById("usr").value.trim();
    let passwordInput = document.getElementById("pass").value;
    
    let keteranganElemen = document.getElementById("keterangan");

    if (usernameInput === "dea" && passwordInput === "dea123") {
        
        keteranganElemen.innerHTML = "Login Sukses";
        keteranganElemen.style.color = "white";
    } else {       
        keteranganElemen.innerHTML = "Username atau Password<br>Salah";
        keteranganElemen.style.color = "white"; 
    }
}