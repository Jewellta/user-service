
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
    
    
    $("#update").click(()=>{
        let vendor={
            id:$("#val").val(),
            code:$("#icode").val(),
            name:$("#iname").val(),
            address:$("#iaddress").val(),
            email:$("#iemail").val(),
            phone:$("#iphone").val(),
            city:$("#icity").val(),
            state:$("#istate").val(),
            zip:$("#izip").val(),
        }
        console.debug("vendor b4:", vendor);
        vendorUpdate(vendor)
        .done((resp)=>{
            console.log("create successful:", resp);
        })
        .fail((err)=>{
            console.log("failed",resp)
        })
    })
    
})

const display =(vendor) =>{
    console.log("display");
    $("#iid").val(vendor.id);
    $("#icode").val(vendor.code);
    $("#iname").val(vendor.name);
    $("#iaddress").val(vendor.address);
    $("#iemail").val(vendor.email?? "na");
    $("#iphone").val(vendor.phone?? "na");}