import { Injectable , NgZone} from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Order } from "../datatypes/order";
import {Menu} from "../datatypes/menu";
import * as dialogs from "ui/dialogs";
import {Observable} from "rxjs/Observable";
import {layout} from "tns-core-modules/utils/utils";
import * as moment from 'moment';
import {ObservableArray} from "tns-core-modules/data/observable-array";
//Stripe trial
// import stripePackage from 'stripe';


@Injectable()
export class OrderService {

    order:Order[]=[];
    orderList:{"orderNo":string,"status":string}[]=[];
    vorderNo:number=0;

    constructor(private _ngZone:NgZone){

    }

getOrder(){

    return this.order;

}

Order(menu:Menu,cafeId,specialInstruction){

    if(this.order.length==0){
    this.order.push({'cafeId':cafeId,'name':menu.name,'price':menu.price,'quantity':1,'specialInstruction':specialInstruction});
    }
    else {
        if(this.order[0].cafeId==cafeId){
            this.order.push({'cafeId':cafeId,'name':menu.name,'price':menu.price,'quantity':1,'specialInstruction':specialInstruction});
        }
        else{
            dialogs.alert("Can only order from one cafe at a time, please clear your cart first").then(()=> {
            });        }
}

}

removeOrder(order:Order){

    var index = this.order.indexOf(order);
    if(index>=0)
      return  this.order.splice(index, 1);

}

confirmOrder(order:Order[],cafe,payway,uid,location){

    //I am trying to control if cafeId is same.. not working yet
    // var status:boolean=true;
    if (payway == "Cash") {
                    firebase.push('/order-cafe/' + cafe,
                        {order, "status": "ordered", "uid": uid,"location":location} )
                        .then((res) => {
                    firebase.push('/order-user/' + uid, {
                                "status": "ordered",
                                "cafe": cafe,
                                "orderNo": res.key,
                                "orderNo2":Math.random() * 20
                            })
                                .then(()=>{this.orderNo(cafe,res.key)})
                        }).catch((err)=>{console.log(err)})

                }
                else {
                    firebase.push('/order-cafe/' + cafe, {order, "status": "ordered", "uid": uid,"location":location})
                        .then((res) => {
                        firebase.push('/order-user/' + uid, {
                                "status": "processing",
                                "cafe": cafe,
                                "orderNo": res.key,
                                "orderNo2":Math.random() * 20
                            })
                                .then(()=>{this.orderNo(cafe,res.key)})
                        }).catch((err)=>{console.log(err)})
                }
            }


fetchOrder(uid){
    this.orderList=[];
    var onQueryEvent = function(result) {}
    firebase.query(
        onQueryEvent,
        'order-user/'+uid,
        {
            singleEvent: true,
            orderBy: {
                type: firebase.QueryOrderByType.KEY}
        }
    ).then(
        (res)=>{
            Object.keys(res.value).map((x)=>{
                if(res.value[x].status!="collected") {
                    this.orderList.push({"orderNo": res.value[x].orderNo,
                        "status": res.value[x].status});
                }
            })
        })
    .catch();


    return this.orderList;

}

orderNo(cafe,key) {

// fix this later
    // var onQueryEvent = function (result) {
    // }
    // firebase.query(
    //     onQueryEvent,
    //     'orderCounter/' + cafe,
    //     {
    //         singleEvent: true,
    //         orderBy: {
    //             type: firebase.QueryOrderByType.KEY
    //         }
    //     }
    // ).then(
    //     (res) => {
    //         console.log(JSON.stringify(res.value))
    //     })
    //     .catch();
    // const path="orderCounter/"+key;
// //create entry in synthetic order number table
//     firebase.push([path],{})


}

frequentCafe(uid) {

    var onQueryEvent = function (result) {
    }
    firebase.query(
        onQueryEvent,
        'order-user/' + uid,
        {
            singleEvent: true,
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'uid'
            },
            ranges: [
                {
                    type: firebase.QueryRangeType.EQUAL_TO,
                    value: uid
                }]
        }
    ).then(
        (res) => {
            Object.keys(res.value).map((x) => {
                console.log("testing...", JSON.stringify(x))
            })
        })
        .catch();

}

}
