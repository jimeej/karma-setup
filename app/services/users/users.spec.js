describe('Users factory', function() {
    var Users;
    beforeEach(angular.mock.module('utility'));
    
      // Set our injected Users factory (_Users_) to our local Users variable
      beforeEach(inject(function(_math_) {
        Users = _math_;
      }));
    it('has a dummy spec to test 2 + 2', function() {
        var addition = Users.add(5,3);
        // An intentionally failing test. No code within expect() will never equal 4.
        expect(addition).toEqual(8);
      });
}); 