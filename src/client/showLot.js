document.getElementById("showLot").addEventListener("click", async () => {

    let table = document.getElementById("lotList");

    let result = await fetch("http://localhost:3000/lots/create", {method: 'GET'})
        .then(res => res.json())
        .catch(error => console.log(error));


    let tableHtml = `
     <tr> 
        <th> Navn </th>
        <th> Tlf </th>
        <th> By </th>
        <th> Kategori </th>
        <th> Vare </th>
        <th> Pris </th>
        <th> Beskrivelse </th>
        <th> </th>

    </tr>
    `;
    for(const name in result){

        tableHtml += `
        <tr> 
        <td> ${name} </td>
        <td> ${result[name]} </td>
    </tr>
        
        `;

    }

    table.innerHTML = tableHtml;
});