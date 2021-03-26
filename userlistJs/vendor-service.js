const url="http://localhost:59793/api/vendors";

const vendorList=()=>{
   return $.getJSON(url);
}

const vendorDetali =(id)=>{
    return $.getJSON(`${url}/${id}}`);
}