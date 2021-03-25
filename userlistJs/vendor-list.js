
let allVendors=[];

$().ready(()=>{

    vendorList()
    .done((vendors)=>{
        allVendors = vendors;
        display(allVendors);
    })
    .fail()
    console.log(vendors);

 $.getJSON(url) 
    .done((vendors)=>{
        console.log(vendors);
    })
    .fail((err)=>{
        console.error(err);
    }) 
})
    const display =(vendors)=>{
    console.log("in display");
    let tbody=$("tbody");
    tbody.empty();
    for(let vendor of vendors){
        let tr=$("<tr></tr>");
        let tdId=$(`<td>${vendor.id}</td>`);
        tr.append(tdId);
        tr.append($(`<td>${vendor.code}</td>`));
        tr.append($(`<td>${vendor.name}</td>`));
        tr.append($(`<td>${vendor.address}</td>`));
        tbody.append(tr);
       }
    }