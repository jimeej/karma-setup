angular.module("utility",[])
.service("math",function(){
    this.add = function(a,b){
        var c = a+ b;
        return c;
    }
})

// add(3,4);