// https://www.sitepoint.com/get-url-parameters-with-javascript/

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')
console.log(id);

const formData = new FormData(document.getElementById('createLot'));
        formData.append("id", id);