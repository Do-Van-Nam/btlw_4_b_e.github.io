const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// Chuc nang tim kiem
search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}



// chuyen sang pdf

const pdf_btn = document.querySelector('#toPDF');
const pdf_btn2 = document.querySelector('#toPDF2');
const students_table = document.querySelector('#score_table');
const students_table2 = document.querySelector('#score_table2');

const toPDF = function (score_table) {
    const html_code = `
    <!DOCTYPE html>
    <link rel="stylesheet" type="text/css" href="style2.css">
    <main class="table" id=score-table">${score_table.innerHTML}</div>`;

    const new_window = window.open();
     new_window.document.write(html_code);

    setTimeout(() => {
        new_window.print();
        new_window.close();
    }, 400);
}
const toPDF2 = function (score_table) {
    const html_code = `
    <!DOCTYPE html>
    <link rel="stylesheet" type="text/css" href="style2.css">
    <main class="table" id=score-table2">${score_table.innerHTML}</div>`;

    const new_window = window.open();
     new_window.document.write(html_code);

    setTimeout(() => {
        new_window.print();
        new_window.close();
    }, 400);
}
pdf_btn.onclick = () => {
    toPDF(students_table);
}
pdf_btn2.onclick = () => {
    toPDF2(students_table2);
}


const downloadFile = function (data, fileType, fileName = '') {
    const a = document.createElement('a');
    a.download = fileName;
    const mime_types = {
        'json': 'application/json',
        'csv': 'text/csv',
        'excel': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    }
    a.href = `
        data:${mime_types[fileType]};charset=utf-8,${encodeURIComponent(data)}
    `;
    document.body.appendChild(a);
    a.click();
    a.remove();
}


function show(){
    var s="score-container"
    if(Math.random()>0.5){
        s+='1'
    }
    else{
        s+='2'
    }
    
    document.getElementById(s).style.display="flex"
}
document.getElementById("close-button").addEventListener("click",function(){
    location.reload()
    
})
document.getElementById("close-button1").addEventListener("click",function(){
    location.reload()
})


function xemtriet(){
    document.getElementById("detriet").style.display="flex"
    document.getElementById("students_table").style.display="none"
    document.getElementById("score-container1").style.display="none"
    document.getElementById("score-container2").style.display="none"
}
function xemgiaitich(){
    document.getElementById("degiaitich").style.display="flex"
    document.getElementById("students_table").style.display="none"
    document.getElementById("score-container1").style.display="none"
    document.getElementById("score-container2").style.display="none"
}
function xemvatly(){
    document.getElementById("devatly").style.display="flex"
    document.getElementById("students_table").style.display="none"
    document.getElementById("score-container1").style.display="none"
    document.getElementById("score-container2").style.display="none"
}
function xemttdd(){
    document.getElementById("dethongtindidong").style.display="flex"
    document.getElementById("students_table").style.display="none"
    document.getElementById("score-container1").style.display="none"
    document.getElementById("score-container2").style.display="none"
}
function donganh(){
    document.getElementById("detriet").style.display="none"
    document.getElementById("degiaitich").style.display="none"
    document.getElementById("devatly").style.display="none"
    document.getElementById("dethongtindidong").style.display="none"

    document.getElementById("score-container1").style.display="flex"
    document.getElementById("score-container2").style.display="flex"
}