function func()
{
    console.log("jj");
    var table2=document.getElementById('table2');
        btnId=document.getElementById('show');
        var row = `<tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone No.</th>
        <th>Gender</th>
      
      </tr>`;
    
            // console.log(e.target.id);
                // console.log("HELLO");
                // console.log(formData);
                for(var item in formData)
                {
                    console.log(formData[item].fname);
                    row+=`
               <tr>
                  <td>${formData[item].fname} ${formData[item].lname}</td>
                  <td>${formData[item].email}</td>
                  <td>${formData[item].phone}</td>
                  <td>${formData[item].gender}</td>
                  <td id="del_td"> <button type="button" class="btn btn-success" id="del">Delete</button></td>
                </tr>
               `
            }
            
            table2.innerHTML = row;
        }
   


function validate(){
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    var male=document.getElementById('m');
    var female=document.getElementById('fm');
    var phone=document.getElementById('phone').value;
    if(fname.length == 0 || lname.length == 0)
    {
        alert("Name can not be empty");
        return false;
    }
    else if(email.length == 0)
    {
        alert("Email can not be empty");
        return false;
    }
    else if(phone.length > 0 && phone.length!=10)
    {
        alert("phone can not be empty");
        return false;
    }

  return true;
}
let k=0;
let formData = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [];

var form = document.getElementById('form');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    table=document.getElementById('table');
    table.innerHTML= `<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone No.</th>
    <th>Gender</th>
  
  </tr>`;
    console.log("working");
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    var male=document.getElementById('m');
    var female=document.getElementById('fm');
    var phone=document.getElementById('phone').value;
    var gen;
    if(male.checked)
        gen="Male";
    else
        gen="Female";
    var obj = {
        fname:fname,
        lname:lname,
        email:email,
        phone:phone,
        gender:gen,
    }
    row=document.createElement('tr');
    elem1=document.createElement('td');
    elem2=document.createElement('td');
    elem3=document.createElement('td');
    elem4=document.createElement('td');
    row.appendChild(elem1);
    row.appendChild(elem2);
    row.appendChild(elem3);
    row.appendChild(elem4);
   
    table.style.display="block";
   
    table.appendChild(row);
    elem1.innerText=fname+" "+lname;
    elem2.innerText=email;
    elem3.innerText=phone;
    elem4.innerText=gen;
    
    console.log(formData);
    formData.push(obj);
    localStorage.setItem("data", JSON.stringify(formData));
    // localStorage.setItem("data",fname);
   
    // func();
    console.log(fname);

  });

    

  document.addEventListener('click', (e)=> {
    var table2=document.getElementById('table2');
    // table2.innerHTML=
    
    
        btnId=document.getElementById('show');
        if(btnId == e.target)
        {
            var row = `<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone No.</th>
    <th>Gender</th>
  
  </tr>`;

        console.log(e.target.id);
            // console.log("HELLO");
            // console.log(formData);
            for(var item in formData)
            {
                console.log(formData[item].fname);
                /*
                var row=document.createElement('tr');
                elem1=document.createElement('td');
                elem2=document.createElement('td');
                elem3=document.createElement('td');
                elem4=document.createElement('td');
                row.appendChild(elem1);
                row.appendChild(elem2);
                row.appendChild(elem3);
                row.appendChild(elem4);
                
                table2.appendChild(row);
                elem1.innerText=formData[item].fname+formData[item].lname;
                elem2.innerText=formData[item].email;
                elem3.innerText=formData[item].phone;
                elem4.innerText=formData[item].phone;
                */
               row+=`
               <tr>
                  <td>${formData[item].fname} ${formData[item].lname}</td>
                  <td>${formData[item].email}</td>
                  <td>${formData[item].phone}</td>
                  <td>${formData[item].gender}</td>
                  <td id="del_td"> <button type="button" class="btn btn-success" id="del">Delete</button></td>
                </tr>
               `
            }
            
            table2.innerHTML = row;
        }
  })


document.addEventListener('click',(e)=>{
    if(e.target.id == 'del')
    {
        
        var row=e.target.parentElement.parentElement;
        console.log(row);
        var num = row.getElementsByTagName('td')[2].innerText;
        console.log(num);
      
        var temp=row;
        formData.splice(formData.findIndex(a => a.phone === num),1);
        localStorage.setItem("data", JSON.stringify(formData));
        func();
    }
})