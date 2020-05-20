import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {
    render() {

        const onSuccess = (payment) => {
            // console.log(JSON.stringify(payment));
            this.props.onSuccess(payment);


            //Client ID
            //AUmex_6AT0MMzZMHTnECCQXLHLm65Bf2FOcLO8uEc5JIg_-JZ-evAuQOTv1-M5d1ILy_zj3WV1YLnTem
            //paymenID: sb-435d0l1849932@personal.example.com


            //REFERENCE IF DATA SUCCESS
            // { 
            //     "paid": true, 
            //     "cancelled": false, 
            //     "payerID": "3GFGQ6GNJ4PWA", 
            //     "paymentID": "PAY-0UB74233TB278434KLMYYMVY", 
            //     "paymentToken": "EC-2J270753AK460261B", 
            //     "returnUrl": "https://www.sandbox.paypal.com/?paymentId=PAY-0UB74233TB278434KLMYYMVY&token=EC-2J270753AK460261B&PayerID=3GFGQ6GNJ4PWA", 
            //     "address": { 
            //         "recipient_name": "test buyer", 
            //         "line1": "1 Main St", 
            //         "city": "San Jose", 
            //         "state": "CA", 
            //         "postal_code": "95131", 
            //         "country_code": "US" 
            //     }, 
            //     "email": "fernando.lobo.prez-buyer@gmail.com" 
            // }


        }

        const onCancel = (data) => {
            console.log(JSON.stringify(data))
        }

        const onError = (err) => {
            console.log(JSON.stringify(err))
        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.toPay;

        const client = {
            sandbox: 'AUmex_6AT0MMzZMHTnECCQXLHLm65Bf2FOcLO8uEc5JIg_-JZ-evAuQOTv1-M5d1ILy_zj3WV1YLnTem',
            production: ''
        }




        return (
            <div>
                <PaypalExpressBtn
                    env={env}
                    client={client}
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                    style={{
                        size: 'large',
                        color: 'black',
                        shape: 'rect',
                        label: 'checkout'
                    }}

                />
            </div>
        );
    }
}

export default Paypal;