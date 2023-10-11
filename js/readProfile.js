// This function will run when the page is loaded
window.onload = function() {
    // Parse the URL to get the 'id' parameter
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    // Set the 'id' value as the content of the 'h2' element
    document.getElementById('idDisplay').innerText = `ID: ${id}`;
}
