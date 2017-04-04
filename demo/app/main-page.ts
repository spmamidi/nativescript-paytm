import * as observable from 'data/observable';
import * as pages from 'ui/page';
import { HelloWorldModel } from './main-view-model';

import { PaytmPlugin } from 'nativescript-paytm';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}


export function onTap() {
    console.log('on tap initiated');
    let paytm = new PaytmPlugin();
    console.log(JSON.stringify(paytm)); 
    console.dump(paytm);
    let date = new Date();
    var paytmData = {
        merchant: {
            id: "Xavica12768024115898",
            channelId: "WEB",
            industryTypeId: "Retail",
            website: "WEB_STAGING"
        },
        customer: {
            id: "sarvagayatri@gmail.com", //'C' + date.getTime(),
            email: "sarvagayatri@gmail.com",
            mobileNumber: "8689835231",
            orderId: 'O' + date.getTime(),
            txnAmount: "50"
        },
        checksumUrls: {
            generation: "http://dev-qwipo.azurewebsites.net/paytm/GenerateChecksum.aspx",
            verification: "http://dev-qwipo.azurewebsites.net/paytm/verifychecksum.aspx"
        }
    };

    paytm.payment(paytmData);

}