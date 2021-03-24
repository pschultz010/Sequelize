const foo = async () => {
    let test = await fetch('/api/dining');
    let body = await test.json()

    var trow = document.getElementById('table_body')
    let trows = body.data.map((r) => (
    `<tr>
        <td>${r.hall_id}</td>
        <td>${r.hall_name}</td>
        <td>${r.hall_address}</td>
    </tr>`
    ))
    trow.innerHTML = trows.join("");
}
foo();