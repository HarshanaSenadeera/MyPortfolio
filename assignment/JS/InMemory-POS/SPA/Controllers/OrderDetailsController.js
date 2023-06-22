/* ------------------Order details-----------------------*/

function loadAllOrders() {

    $("#T_body_Place_Order_detail1").empty();

    for (var order of orderArray) {
        console.log(order);
        var row = `<tr><td>${order.oId}</td><td>${order.cId}</td><td>${order.oDate}</td><td>${order.subTotal}</td><td>${order.discount}</td></tr>`;
        $("#T_body_Place_Order_detail1").append(row);
    }
}

function loadAllOrderDetails() {

    $("#T_body_Place_Order_detail2").empty();

    for (var orderDetail of orderDetails) {
        console.log(orderDetail);
        var row = `<tr><td>${orderDetail.orderId}</td><td>${orderDetail.cusId}</td><td>${orderDetail.itemId}</td><td>${orderDetail.qty}</td><td>${orderDetail.total}</td></tr>`;
        $("#T_body_Place_Order_detail2").append(row);
    }
}