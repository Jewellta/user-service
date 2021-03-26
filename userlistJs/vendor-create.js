
$().ready(()=>{

    $("#create").click(()=>{
        let vendor={
        id:0,
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
        vendorCreate(vendor)
        .done((res)=>{
            console.log("create successful:",res);
        })
        .fail((err)=>{
            console.log("failed",res)
        })
    })

});
