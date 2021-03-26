let singleVendor=null;

$().ready(()=>{

$("button").click(()=>{
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


});

const display =(vendor) =>{
    $("#pid").text(vendor.id);
    $("#pcode").text(vendor.code);
    $("#pname").text(vendor.name);
    $("#paddress").text(vendor.address);
    $("#pemail").text(vendor.email?? "na");
    $("#pphone").text(vendor.phone?? "na");
};