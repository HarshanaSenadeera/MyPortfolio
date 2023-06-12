function cus(id,name,address,salary) {
    var __id=id;
    var __name=name;
    var __address=address;
    var __salary=salary;

    this.getID=function (){
        return __id;
    }

    this.getName=function (){
        return __name;
    }

    this.getAddress=function (){
        return __address;
    }

    this.getSalary=function (){
        return __salary;
    }



}