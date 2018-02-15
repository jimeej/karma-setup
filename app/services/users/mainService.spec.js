describe('Services', function () { //describe your object type
    var myService,httpBackend;
    beforeEach(module('MyApp')); //load module<br />
    describe('myService', function () { //describe your app name<br />
        beforeEach(inject(function (_myService_,$httpBackend) { //instantiate service using $controller service
            myService = _myService_;
            httpBackend = $httpBackend;
            httpBackend.whenGET("https://jsonplaceholder.typicode.com/posts/1").respond({
                mockObj : {
                   mockData: 'mockData'
                }
            });
        }));
        it('Mode should be service', function () {  //write tests
            expect(myService.mode).toBe('service');
            myService.getUserData().then(function(response) {
                var result = response.data.mockObj.mockData;
                expect(result).toEqual("mockData");
              },function(error){
                  console.error(error);
              });
              httpBackend.flush();
        });


        // failing test
        it('service should be defined', function () {  //write tests
            expect(myService.getUserData).toBeDefined();
        });
    });
});
