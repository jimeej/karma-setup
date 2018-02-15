describe('Controllers', function () { //describe your object type
    beforeEach(module('MyApp')); //load module<br />
    describe('myctrl', function () { //describe your app name<br />
        var myctrl;
        beforeEach(inject(function ($controller) { //instantiate controller using $controller service
            myctrl = $controller('myctrl');
        }));
        it('Mode should be fun', function () {  //write tests
            expect(myctrl.mode).toBe('fun'); //pass
        });
    });
});
