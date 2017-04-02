var app = require("application");
var utils = require("utils/utils");

// ignore TS error

export class PaytmPlugin  {

     public payment(args) {
        console.dump(com.paytm);
        let service = com.paytm.pgsdk.PaytmPGService.getStagingService();

        let merchantObject: any = args.merchant;
        let customer: any = args.customer;
        let checksumUrls: any = args.checksumUrls;

        let paramObject = {
            ORDER_ID: customer.orderId,
            MID: merchantObject.id,
            CUST_ID: customer.id,
            CHANNEL_ID: merchantObject.channelId,
            INDUSTRY_TYPE_ID: merchantObject.industryTypeId,
            WEBSITE: merchantObject.website,
            TXN_AMOUNT: customer.txnAmount,
            THEME: "merchant",
            EMAIL: customer.email,
            MOBILE_NO: customer.mobileNumber,
            REQUEST_TYPE: "DEFAULT"
        }
        let paramMap = new java.util.HashMap<java.lang.String, java.lang.String>();
        paramMap.put(new java.lang.String("ORDER_ID"), customer.orderId);
        paramMap.put(new java.lang.String("MID"), merchantObject.id);
        paramMap.put(new java.lang.String("CUST_ID"), customer.id);
        paramMap.put(new java.lang.String("CANNEL_ID"), merchantObject.channelId);
        paramMap.put(new java.lang.String("INDUSTRY_TYPE_ID"), merchantObject.industryTypeId);
        paramMap.put(new java.lang.String("WEBSITE"), merchantObject.website);
        paramMap.put(new java.lang.String("TXN_AMOUNT"), customer.txnAmount);
        paramMap.put(new java.lang.String("THEME"), new java.lang.String("merchant"));
        paramMap.put(new java.lang.String("EMAIL"), customer.email);
        paramMap.put(new java.lang.String("MOBILE_NO"), customer.mobileNumber);
        paramMap.put(new java.lang.String("REQUEST_TYPE"), new java.lang.String("DEFAULT"));

        // let paramMap = this.toHashMap(paramObject);
        console.log("parammap:::", paramMap);

        let order = new com.paytm.pgsdk.PaytmOrder(paramMap);
        console.log("Order:::", order);

        // //Create new Merchant Object having all merchant configuration.
        let merchant = new com.paytm.pgsdk.PaytmMerchant(checksumUrls.generation, checksumUrls.verification);
        console.log("Merchant:::", merchant);

        // //Set PaytmOrder and PaytmMerchant objects. Call this method and set both objects before starting transaction.
        service.initialize(order, merchant, null);
        console.log("Service intialised");

        //Start the Payment Transaction. Before starting the transaction ensure that initialize method is called.
        service.startPaymentTransaction(
            utils.ad.getApplicationContext(), false, true,
            new com.paytm.pgsdk.PaytmPaymentTransactionCallback({
                onTransactionSuccess: function (paramBundle) {
                    app.android.widget.Toast.makeText(app.app.android.context, "Transaction Successful", app.android.widget.Toast.LENGTH_SHORT).show();
                },

                onTransactionFailure: function (paramString, paramBundle) {
                    app.android.widget.Toast.makeText(app.app.android.context, "Transaction Failure", app.android.widget.Toast.LENGTH_SHORT).show();
                },

                networkNotAvailable: function () {
                    app.android.widget.Toast.makeText(app.app.android.context, "Check Network connection", app.android.widget.Toast.LENGTH_SHORT).show();
                },

                clientAuthenticationFailed: function (paramString) {
                    app.android.widget.Toast.makeText(app.app.android.context, "Client Authentication Failed", app.android.widget.Toast.LENGTH_SHORT).show();
                },

                someUIErrorOccurred: function (paramString) {
                    app.android.widget.Toast.makeText(app.app.android.context, "UI Error Occur", app.android.widget.Toast.LENGTH_SHORT).show();
                },

                onErrorLoadingWebPage: function (paramInt, paramString1, paramString2) {
                    app.android.widget.Toast.makeText(app.app.android.context, "Error On Loading", app.android.widget.Toast.LENGTH_SHORT).show();
                },

                onBackPressedCancelTransaction: function () {
                    app.android.widget.Toast.makeText(app.app.android.context, "Back Button pressed by user", app.android.widget.Toast.LENGTH_SHORT).show();
                }
            })
        );
    }
}

