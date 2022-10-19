"use strict"
import jsondata from './data.json' assert {type: "json"}
let data = document.getElementById('filter')
let tbody = document.getElementById('tbody')
let loadBtn = document.getElementById('loadBtn')
// listeners stats
loadBtn.addEventListener('click', (e) => {
    tbody.innerHTML = ''
    filters(data.value)
})
// filter logic starts here
function filters(status) {
    let output = jsondata.filter((option) => (option.status === status))
    output.forEach((obj) => (
        tbody.innerHTML += `<tr>
            <td>${obj.capsule_serial}</td>
            <td>${obj.capsule_id}</td>
            <td>${obj.status}</td>
            <td>${obj.original_launch_unix}</td>
            <td>${obj.landings}</td>
            <td>${obj.type}</td>
            <td>${obj.details}</td>
            <td>${obj.reuse_count}</td>
           <td>${obj.missions.length}</td>
        </tr>`
    ))
}