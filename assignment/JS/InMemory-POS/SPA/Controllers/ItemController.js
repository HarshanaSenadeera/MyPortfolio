/*--------------item----------------*/

/*document.getElementById("btnItem").addEventListener("click",function () {

    let cus_id = document.getElementById("item_id").value;
    let cus_name = document.getElementById("item_name").value;
    let cus_address = document.getElementById("item_price").value;
    let cus_salary = document.getElementById("item_Quantity").value;

    let tbl_body = document.getElementById("T_body_Item");

    let tbl_row = document.createElement("tr");

    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");

    col1.textContent=cus_id;
    col2.textContent=cus_name;
    col3.textContent=cus_address;
    col4.textContent=cus_salary;

    tbl_row.appendChild(col1);
    tbl_row.appendChild(col2);
    tbl_row.appendChild(col3);
    tbl_row.appendChild(col4);

    tbl_body.appendChild(tbl_row);
});*/

/*========================SAVE ITEM=============================*/



function saveItem() {
    let Item_id= $("#item_id").val();
    if (searchItem(Item_id.trim()) == undefined) {
        let Item_name=$("#item_name").val();
        let Item_price=$("#item_price").val();
        let Item_qty= $("#item_Quantity").val();

        /* let item={
             id:Item_id,
             name:Item_name,
             price:Item_price,
             qty:Item_qty
         }*/

        let newItems=Object.assign({},itemObject);
        newItems.itemId=Item_id;
        newItems.descriptions=Item_name;
        newItems.unitprice=Item_price;
        newItems.qty=Item_qty;

        itemArray.push(newItems);
        clearItemInputFields();
        getAllItem();

        loadAllItemsForOption();

    }else {
        alert("Item already exits.!");
        clearItemInputFields();
    }

}

$("#btnItem").click(function(){

    loadAllCustomersForOption();
    saveItem();
    $("#item_id").val(generateItemID());
});

/*=========================GENERATE ITEM ID============================*/
function generateItemID() {
    if (itemArray.length > 0) {
        let lastId = itemArray[itemArray.length - 1].itemId;
        let digit = lastId.substring(6);
        let number = parseInt(digit) + 1;
        return lastId.replace(digit, number);
    } else {
        return "I00-001";
    }
}

/*=========================SEARCH ITEM============================*/

function searchItem(id) {
    return itemArray.find(function (item) {
        //if the search id match with customer record
        //then return that object
        return item.itemId == id;
    });
}

/*=========================GET ALL ITEM============================*/
function getAllItem() {
    $("#T_body_Item").empty();

    for (let i=0;i<itemArray.length;i++){
        let id=itemArray[i].itemId;
        let name=itemArray[i].descriptions;
        let price=itemArray[i].unitprice;
        let qty=itemArray[i].qty;

        let row= `<tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${price}</td>
                <td>${qty}</td>
            </tr>`;

        $("#T_body_Item").append(row);
        getAllRowBindItem();
        loadAllItemsForOption();

    }
}

$("#btnItemGetAll").click(function () {
    getAllItem();
    $("#item_id").val(generateItemID());
});


/*========================GET ALL ITEM TO TEXT FIELD=============================*/


function getAllRowBindItem() {
    $("#T_body_Item").on('click', 'tr', function() {

        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let price = $(this).children(":eq(2)").text();
        let qty = $(this).children(":eq(3)").text();

        $("#item_id").val(id);
        $("#item_name").val(name);
        $("#item_price").val(price);
        $("#item_Quantity").val(qty);

    });
}


/*========================DELETE ITEM=============================*/
$("#btnItemDelete").click(function () {

    let id = $("#item_id").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteItem(id);
        if (response) {
            alert("Item Deleted");
            clearItemInputFields();
            getAllItem();
            $("#item_id").val(generateItemID());
        } else {
            alert("Item Not Removed..!");
        }
    }
});

function deleteItem(id) {
    for (let i = 0; i < itemArray.length; i++) {
        if (itemArray[i].itemId == id) {
            itemArray.splice(i, 1);
            return true;
        }
    }
    return false;
}

/*========================CLEAR ITEM TEXT FIELD=============================*/

$("#btn-clearItem").click(function () {
    clearItemInputFields();
    $("#item_id").val(generateItemID());
});
function clearItemInputFields() {
    $("#item_id,#item_name,#item_price,#item_Quantity").val("");
    $("#item_id").focus();
}


/*========================UPDATE ITEM=============================*/

$("#btnItemUpdate").click(function () {
    let id = $("#item_id").val();
    updateItem(id);
    clearItemInputFields();
    $("#item_id").val(generateItemID());
});


function updateItem(id) {
    if (searchItem(id) == undefined) {
        alert("No such Item..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this item.?");
        if (consent) {
            let item = searchItem(id);
            //if the customer available can we update.?

            let itemName = $("#item_name").val();
            let itemPrice = $("#item_price").val();
            let itemQTY = $("#item_Quantity").val();

            item.descriptions = itemName;
            item.unitprice = itemPrice;
            item.qty = itemQTY;

            getAllItem();
        }
    }

}


/*========================ITEM REGEX=============================*/
$("#item_id").keyup(function (e) {
    const pattern = /^(I00-)[0-9]{3}$/;
    if (pattern.test($("#item_id").val())){
        $("#item_id").css('border','2px solid green');
    }else{
        $("#item_id").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});
$("#item_name").keyup(function (e) {
    const pattern = /^[a-zA-Z\s']+$/u;
    if (pattern.test($("#item_name").val())){
        $("#item_name").css('border','2px solid green');
    }else{
        $("#item_name").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});
$("#item_price").keyup(function (e) {
    const pattern = /^(?:\d{1,3}(?:,?\d{3})*(?:\.\d{2})?|\d{1,3}(?:,?\d{3})*)$/;
    if (pattern.test($("#item_price").val())){
        $("#item_price").css('border','2px solid green');
    }else{
        $("#item_price").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});

/*========================ENTER BUTTON ACTION=============================*/

$('#item_id, #item_name , #item_price , #item_Quantity').keydown(function (e){

    if (e.key == "Tab") {
        e.preventDefault();
    }
});

//focus name
$('#item_id').keydown(function (e){
    if (e.key=="Enter"){
        $('#item_name').focus();
    }
});

//focus Address
$('#item_name').keydown(function (e){
    if (e.key=="Enter"){
        $('#item_price').focus();
    }
});

//focus Contact
$('#item_price').keydown(function (e){
    if (e.key=="Enter"){
        $('#item_Quantity').focus();
    }
});

$('#item_Quantity').keydown(function (e){
    if (e.key=="Enter"){
        saveItem();
        clearItemInputFields();
        loadAllCustomersForOption();
        $('#item_name').focus();
        $("#item_id").val(generateItemID());
    }
});