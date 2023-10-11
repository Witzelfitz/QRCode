function generateQRCode() {
    let qrcodePlace = document.getElementById("qrcode");
    qrcodePlace.innerHTML = "";
    const id = document.getElementById("id").value; // Hier muss die gewünschte ID aus der Datenbank eingefügt werden
    let qrcode = new QRCode(qrcodePlace, {
        text: `http://127.0.0.1:5500/profil.html?id=${id}`,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    //show the link from the QR Code under the QR Code
    let link = `http://127.0.0.1:5500/profil.html?id=${id}`;
    //add a href
    linkAdd = `<a href="${link}" target="_blank">${link}</a>`;
    document.getElementById("link").innerHTML = linkAdd;
}

// Attach the generateQRCode function to the button's click event
document.getElementById("generateQR").addEventListener("click", generateQRCode);
