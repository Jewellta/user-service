//const url ="http://localhost:59793/api/users";      //add /id# to end to get by id


let newuser={id: 0, username: "Jewell tst jq", email:"new", password: "1234", firstname: "T tester", lastname: "Je", phone: "513", isAdmin: true,
isReviewer: true}

let allUsers =[];

$().ready(()=>{

    userList()
    .done((users)=>{
        allUsers = users;
        display(allUsers);
    })
    .fail()
/*
    $.ajax({
        method:"POST",
        url: url,
        data: JSON.stringify(newuser),
        contentType: 'application/json'
    }).done((res)=>{
        console.log(res);
    }) .fail((err)=>{
        console.error(err);
    })
*/
console.log("before call to JSON");
 $.getJSON(url)                 //for both reads
    .done((users)=>{
        console.log(users);
        console.log("after call completed to get JSON")
    })
    .fail((err)=>{
        console.error(err);
    }) 
    console.log("after call to get JSON");
})

const display =(users)=>{
    console.log("in display");
    let tbody=$("tbody");
    tbody.empty();
    for(let user of users){
        let tr=$("<tr></tr>");
        let tdId=$(`<td>${user.id}</td>`);
        tr.append(tdId);
        tr.append($(`<td>${user.username}</td>`));        
        let tdName=$(`<td>${user.firstname} ${user.lastname}</td>`);
        tr.append(tdName);
        tr.append($(`<td>${user.isReviewer ? "yes": "no"}</td>`));
        tr.append($(`<td>${user.isAdmin ? "yes": "no"}</td>`));
        tbody.append(tr);
    }
}

