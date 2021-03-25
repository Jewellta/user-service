const url="http://localhost:59793/api/vendors";

const vendorList=()=>{
   return $.getJSON(url);
}