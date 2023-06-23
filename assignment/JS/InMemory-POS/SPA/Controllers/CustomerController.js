/*--------------customer----------------*/
/* document.getElementById("btnCustomer").addEventListener("click",function () {

     /!*let cus_id = document.getElementById("cus_id").value;
     let cus_name = document.getElementById("cus_name").value;
     let cus_address = document.getElementById("cus_address").value;
     let cus_salary = document.getElementById("cus_salary").value;*!/


     let tbl_body = document.getElementById("tbl-body_cus");

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

/*========================SAVE CUSTOMER=============================*/

function saveCustomer() {

    let customerID = $("#cus_id").val();
    if (searchCustomer(customerID.trim()) == undefined) {
        let customerName = $("#cus_name").val();
        let customerAddress = $("#cus_address").val();
        let customerEmail = $("#cus_email").val();


        /*
                    let customerOb = {
                        id: customerID,
                        name: customerName,
                        address: customerAddress,
                        salary: customerEmail
                    }*/

        let newCustomer= Object.assign({},customerObject);
        newCustomer.id=customerID;
        newCustomer.name=customerName;
        newCustomer.address=customerAddress;
        newCustomer.e_mail=customerEmail;

        //add customer record to the customer array
        customerArray.push(newCustomer);
        clearCustomerInputFields();
        getAllCustomer();
        loadAllCustomersForOption();

    } else {
        alert("Customer already exits.!");
        clearCustomerInputFields();
    }
}
$("#btnCustomer").click(function(){

    saveCustomer();
    $("#cus_id").val(generateCustomerID());

});

/*========================GENERATE CUSTOMER ID=============================*/

function generateCustomerID() {
    if (customerArray.length > 0) {
        let lastId = customerArray[customerArray.length - 1].id;
        let digit = lastId.substring(6);
        let number = parseInt(digit) + 1;
        return lastId.replace(digit, number);
    } else {
        return "C00-001";
    }
}



/*========================GET ALL CUSTOMER=============================*/

function getAllCustomer() {

    $("#tbl-body_cus").empty();

    for (let i=0 ;i<customerArray.length;i++){
        let id=customerArray[i].id;
        let name=customerArray[i].name;
        let address=customerArray[i].address;
        let e_mail=customerArray[i].e_mail;

        let cus=`<tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${address}</td>
                <td>${e_mail}</td>
            </tr>`;

        $("#tbl-body_cus").append(cus);
        getAllRowBindCustomer();

    }
}
$("#btnGetAll").click(function () {

    getAllCustomer();
    loadAllCustomersForOption();

});


/*========================GET ALL CUSTOMER TO TEXT FIELD=============================*/

function getAllRowBindCustomer() {
    $("#tbl-body_cus").on('click', 'tr', function() {

        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let male = $(this).children(":eq(3)").text();

        $("#cus_id").val(id);
        $("#cus_name").val(name);
        $("#cus_address").val(address);
        $("#cus_email").val(male);

    });
}

/*========================DELETE CUSTOMER=============================*/
$("#btnCusDelete").click(function () {

    let id = $("#cus_id").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteCustomer(id);
        if (response) {
            alert("Customer Deleted");
            clearCustomerInputFields();
            getAllCustomer();
            $("#cus_id").val(generateCustomerID());
        } else {
            alert("Customer Not Removed..!");
        }
    }
});

function deleteCustomer(id) {
    for (let i = 0; i < customerArray.length; i++) {
        if (customerArray[i].id == id) {
            customerArray.splice(i, 1);
            return true;
        }
    }
    return false;
}

/*========================UPDATE CUSTOMER=============================*/

$("#btnUpdate").click(function () {
    let id = $("#cus_id").val();
    updateCustomer(id);
    clearCustomerInputFields();
    $("#cus_id").val(generateCustomerID());

});


function updateCustomer(id) {
    if (searchCustomer(id) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);
            //if the customer available can we update.?

            let customerName = $("#cus_name").val();
            let customerAddress = $("#cus_address").val();
            let customerSalary = $("#cus_email").val();

            customer.name = customerName;
            customer.address = customerAddress;
            customer.salary = customerSalary;

            getAllCustomer();

        }
    }

}


/*========================SEARCH CUSTOMER=============================*/

function searchCustomer(id) {
    return customerArray.find(function (customer) {
        //if the search id match with customer record
        //then return that object
        return customer.id == id;
    });
}


/*========================CLEAR CUSTOMER TEXT FIELD=============================*/

$("#btnClear").click(function () {
    clearCustomerInputFields();
    $("#cus_id").val(generateCustomerID());
});
function clearCustomerInputFields() {
    $("#cus_id,#cus_name,#cus_address,#cus_email").val("");
    $("#cus_id").focus();

}

/*========================CUSTOMER REGEX=============================*/
$("#cus_id").keyup(function (e) {
    const pattern = /^(C00-)[0-9]{3}$/;
    if (pattern.test($("#cus_id").val())){
        $("#cus_id").css('border','2px solid green');
    }else{
        $("#cus_id").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});
$("#cus_name").keyup(function (e) {
    const pattern = /^[a-zA-Z\s']+$/u;
    if (pattern.test($("#cus_name").val())){
        $("#cus_name").css('border','2px solid green');
    }else{
        $("#cus_name").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});
$("#cus_address").keyup(function (e) {
    const pattern = /^[a-zA-Z\s']+$/u;
    if (pattern.test($("#cus_address").val())){
        $("#cus_address").css('border','2px solid green');
    }else{
        $("#cus_address").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});
$("#cus_email").keyup(function (e) {
    const pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (pattern.test($("#cus_email").val())){
        $("#cus_email").css('border','2px solid green');
    }else{
        $("#cus_email").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});

/*========================ENTER BUTTON ACTION=============================*/

$('#cus_id, #cus_name , #cus_address , #cus_email').keydown(function (e){

    if (e.key == "Tab") {
        e.preventDefault();
    }
});

//focus name
$('#cus_id').keydown(function (e){
    if (e.key=="Enter"){
        $('#cus_name').focus();
    }
});

//focus Address
$('#cus_name').keydown(function (e){
    if (e.key=="Enter"){
        $('#cus_address').focus();
    }
});

//focus Contact
$('#cus_address').keydown(function (e){
    if (e.key=="Enter"){
        $('#cus_email').focus();
    }
});

$('#cus_email').keydown(function (e){
    if (e.key=="Enter"){
        saveCustomer();
        clearCustomerInputFields();
        $('#cus_name').focus();
        $("#cus_id").val(generateCustomerID());
    }
});