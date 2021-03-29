


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

})