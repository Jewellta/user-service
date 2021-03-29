


$().ready(()=>{
    $("#start").click(()=>{
        let id = $("#val").val();
        vendorDetail(id)
        .done((vendor)=>{
            console.log("vendor:", vendor);
            display(vendor)
        })
        .fail((err)=>{
            alert("vendor not found");
        });
    });

    $("#Delete").click(()=>{

    })

})

const display =(vendors)=>{
    let tbody=$("tbody");
    tbody.empty();
    for(let vendor of vendors){
        let tr=$("<tr></tr>");
        let tdId=$(`<td>${vendor.id}</td>`);
        tr.append(tdId);
        tr.append($(`<td>${vendor.id}</td>`))
        tr.append($(`<td>${vendor.code}</td>`));
        tr.append($(`<td>${vendor.name}</td>`));
        tr.append($(`<td>${vendor.address}</td>`));
        tbody.append(tr);
       }
    }
