function order(){
    var invoice = document.form;

    var harga1 = 7000 * eval(invoice.harga1.value);
    var harga2 = 11000 * eval(invoice.harga2.value);
    var harga3 = 2000 * eval(invoice.harga3.value);
    var harga4 = 3000 * eval(invoice.harga4.value);
    var harga5 = 3000 * eval(invoice.harga5.value);

    var TotalPrice = 0;

    var TotalPrice = harga1 + harga2 + harga3 + harga4 + harga5;
        if(TotalPrice>50000){
            invoice.Total.value = TotalPrice;
            invoice.Discount.value = 5000;
            invoice.Payment.value = TotalPrice - eval(invoice.Discount.value);
        }
        else{
            invoice.Total.value = TotalPrice;
            invoice.Discount.value = 0;
            invoice.Payment.value = TotalPrice - eval(invoice.Discount.value);
        }

    var PaymentReceived = parseInt(invoice.PaymentReceived.value);
    
    
    var kembalian = PaymentReceived - TotalPrice;
    if(isNaN(PaymentReceived)||isNaN(TotalPrice)){
        alert("Please Enter Received Payment");
    }
    else{
        invoice.Total.value = TotalPrice;
        invoice.kembalian.value = PaymentReceived - (TotalPrice - invoice.Discount.value);
    }
}

function resetForm(){
    document.form.reset();
}