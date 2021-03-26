let singleUser=null;

$().ready(()=>{

    userDetail(1)
    .done((user)=>{
        singleUser=user;
        display(singleUser);
    })
    
});

const display = (user)=>{
    $("#pid").text(user.id);
    $("#pusername").text(user.username);
};