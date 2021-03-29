let singleRequestline = null;


$().ready(()=>{

    requestlineDetail(3)
    .done((requestlines)=>{
        singleRequestline=requestlines;
        display(singleRequestline);
    })
});


const display = (requestlines)=>{
    $("#pid").text(requestlines.id);
    $("#prequestid").text(requestlines.requestid);
    $("#prequest").text(requestlines.request);
    $("#pproduct").text(requestlines.productid);
    $("#pproductid").text(requestlines.productid);
    $("#pproduct").text(requestlines.product);
    $("#quantity").text(requestlines.quantity);
};