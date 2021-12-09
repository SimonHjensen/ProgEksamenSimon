document.getElementById("showLot").addEventListener("click", async (e) => {

    let table = document.getElementById("lotList");

    let result = await fetch("http://localhost:3000/lots/get", {method: 'GET'})
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
        <th> Billede </th>
        

    </tr>
    `;
            

    for(let i = 0; i < result.length; i++){
        console.log(result[i])
        
        tableHtml += `
        <tr>
            
            <td> ${result[i].name}</td>
            <td> ${result[i].tlf}</td>
            <td> ${result[i].city}</td>
            <td> ${result[i].category}</td>
            <td> ${result[i].good}</td>
            <td> ${result[i].price}</td>
            <td> ${result[i].description}</td>
            <td> <img src="${result[i].image}" width="100" height="100"> </td>
            <td> <a href="http://localhost:3000/updateLot.html?id=${result[i].id}">
        <button>Opdater vare</button> </td>
        <td> <a href="http://localhost:3000/deleteLot.html?=id${result[i].id}">
        <button>Slet vare</button> </td>
        
        </tr>
        `;
        

    };

    table.innerHTML = tableHtml;
});

