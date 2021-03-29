


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


const display =(vendor) =>{
    console.log("display");
    $("#pid").val(vendor.id);
    $("#pcode").val(vendor.code);
    $("#pname").val(vendor.name);
    $("#paddress").val(vendor.address);
    $("#pemail").val(vendor.email?? "na");
    $("#pphone").val(vendor.phone?? "na");}