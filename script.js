
var acc=[
    {
        id: "B21DCCN123",
        name:"Nguyễn Văn An",
        email:"annv@gmail.com",
        password: "nam123@"
    },
{
        id: "B21DCCN345",
        name:"Đào Văn Bình",
        email:"binhdv@gmail.com",
        password: "binhdidj"
    },
{
        id: "B21DCCN676",
        name:"Đào Mai Anh",
        email:"anhdm@gmail.com",
        password: "fdksafk"
    },
{
        id: "B21DCCN444",
        name:"Dương Sỹ Long",
        email:"longds@gmail.com",
        password: "fh4567"
    },
    {
        id: "B21DCCN023",
        name:"Nguyễn Xuân Tuấn",
        email:"tuannx@gmail.com",
        password: "tuanghita"
    },
{
        id: "B21DCCN356",
        name:"Đào Dương Huy",
        email:"huydd@gmail.com",
        password: "huy1234"
    },
{
        id: "B21DCCN666",
        name:"Nguyễn Thế Duy",
        email:"duynt@gmail.com",
        password: "duythe1212"
    },
{
        id: "B21DCCN464",
        name:"Dương Tuấn Hiệp",
        email:"hiepdt@gmail.com",
        password: "ghgh123gh"
    },
]

var rowNumber1=1;

document.addEventListener("DOMContentLoaded", function() {
    loadTableAcc();
  });

document.getElementById("plus-button").addEventListener("click",function(){
    document.getElementById('id').value = "";
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";  
document.querySelector(".container").style.display="flex"
})


//   NUT close
document.getElementById("close-button").addEventListener("click",function(){
    document.querySelector(".container").style.display="none"
    // document.querySelector(".container-edit").style.display="none"
})
document.getElementById("close-button1").addEventListener("click",function(){
    // document.querySelector(".container").style.display="none"
    document.querySelector(".container-edit").style.display="none"
})


document.getElementById("btnThem").addEventListener("click",function(){
    var id = document.getElementById('id').value 
    var name = document.getElementById('name').value 
    var email = document.getElementById('email').value 
    var password = document.getElementById('password').value 
    acc.push({
        id:id,
        name:name,
        email:email,
        password:password
    })


    loadTableAcc()
    document.querySelector(".container").style.display="none"
    
})




function loadTableAcc() {
    var tableBody = document.querySelector("#dataTable tbody");
  
    // Xóa dữ liệu hiện có
    tableBody.innerHTML = "";
  
    // Lặp qua mảng dữ liệu và tạo các hàng trong bảng
    for (var i = 0; i < acc.length; i++) {
      var rowAcc = acc[i];
      var row = document.createElement("tr");
  
      // Tạo các ô dữ liệu trong hàng
      var msvCell = document.createElement("td");
      msvCell.textContent = rowAcc.id;
      row.appendChild(msvCell);
  
      var nameCell = document.createElement("td");
      nameCell.textContent = rowAcc.name;
      row.appendChild(nameCell);
  
        var emailCell = document.createElement("td");
      emailCell.textContent = rowAcc.email;
      row.appendChild(emailCell);
  

      var passwordCell = document.createElement("td");
      passwordCell.textContent = rowAcc.password;
      row.appendChild(passwordCell);
  

    // Tạo một div chứa cả hai nút Xóa và Sửa
    var buttonContainer = document.createElement("div");
        buttonContainer.classList.add("icon-container")
// Tạo nút Sửa
    var editButton = document.createElement("button");
    editButton.textContent="Sửa"
    editButton.classList.add("edit-button")
    // editButton.className="edit-button"
        // editButton.rowNo=i
        editButton.id=i.toString()


 // nhan nut sua

    editButton.addEventListener("click", function() {
        var x =Number.parseInt(this.id)
        rowNumber1=Number.parseInt(this.id)
        document.querySelector('.container-edit').style.display="flex"
        var roww=acc[x]
        
    document.getElementById('id-edit').value = roww.id;
    document.getElementById('name-edit').value = roww.name;
    document.getElementById('email-edit').value = roww.email;
    document.getElementById('password-edit').value = roww.password;
        console.log(rowNumber1)


    });
buttonContainer.appendChild(editButton);

    // Tạo nút Xóa
    var deleteButton = document.createElement("button");
    deleteButton.textContent="Xóa"
deleteButton.classList.add("delete-button")
deleteButton.id=i.toString()
    deleteButton.addEventListener("click", function() {
        var rowindex=this.id
        acc.splice(Number.parseInt(rowindex),1)

      console.log(acc)
      loadTableAcc()
    });
    

    



    
    buttonContainer.appendChild(deleteButton);


    // Gắn div chứa nút vào ô dữ liệu tương ứng trong hàng
    var buttonCell = document.createElement("td");
    buttonCell.appendChild(buttonContainer);
    row.appendChild(buttonCell);



      // Gắn hàng vào tbody của bảng
      tableBody.appendChild(row);
    }
  }


// nut xac nhan sua
document.getElementById("btnSua").addEventListener("lick",function(){
    var id = document.getElementById('id-edit').value 
    var name = document.getElementById('name-edit').value 
    var email = document.getElementById('email-edit').value 
    var password = document.getElementById('password-edit').value 
    // console.log(rowIndex)
    console.log(id+" "+name+" "+email+" "+password)
    acc[rowNumber1]={
        id:id.toString(),
        name:name.toString(),
        email:email.toString(),
        password:password.toString()
    }

loadTableAcc()
    document.querySelector('.container-edit').style.display="none"
    
    

})

function Xacnhansua(){
    var id = document.getElementById('id-edit').value 
    var name = document.getElementById('name-edit').value 
    var email = document.getElementById('email-edit').value 
    var password = document.getElementById('password-edit').value 
    // console.log(rowIndex)
    console.log(id+" "+name+" "+email+" "+password)
    acc[rowNumber1]={
        id:id.toString(),
        name:name.toString(),
        email:email.toString(),
        password:password.toString()
    }

    loadTableAcc()
    document.querySelector('.container-edit').style.display="none"
    
}