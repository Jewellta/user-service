const url="http://localhost:59793/api/RequestLines";

const requestlineDetail =(id)=>{
    return $.getJSON(`${url}/${id}`);
}

