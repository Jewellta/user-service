const url="http://localhost:59793/api/users";

const userList=()=>{
   return $.getJSON(url);
}

const userDetail =(id)=>{
    return $.getJSON(`${url}/${id}`);
}