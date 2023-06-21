
function placeOrderDTO(orderID,oderDate,customerId,customerName,itemCode,ItemName,unitPrice,qty) {
    var __orderId=orderID;
    var __orderDate=oderDate;
    var __customerId=customerId;
    var __customerName=customerName;
    var __itemCode=itemCode;
    var __itemName=ItemName;
    var __unitPrice=unitPrice;
    var __qty=qty;

    this.getOrderId=function () {
        return __orderId;
    }

    this.setOrderId=function (orderID) {
        __orderId=orderID;
    }

    this.getOrderDate=function () {
        return __orderDate;
    }

    this.setOrderDate=function (orderDate) {
        __orderDate=orderDate;
    }

    this.getCustomerId=function () {
        return __customerId;
    }

    this.setCustomerId=function (customerId) {
        __customerId=customerId;
    }

    this.getCustomerName=function () {
        return __customerName;
    }

    this.setCustomerName=function (customerName) {
        __customerName=customerName;
    }

    this.getItemCode=function () {
        return __itemCode;
    }

    this.setItemCode=function (ItemCode) {
        __itemCode=ItemCode;
    }

    this.getItemName=function () {
        return __itemName;
    }

    this.setItemName=function (ItemName) {
        __itemName=ItemName;
    }

    this.getUnitPrice=function () {
        return __unitPrice;
    }

    this.setUnitPrice=function (UnitPrice) {
        __unitPrice=UnitPrice;
    }

    this.getQty=function () {
        return __qty;
    }

    this.setQty=function (Qty) {
        __qty=Qty;
    }


}