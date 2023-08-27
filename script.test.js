describe('#createInstructor', function(){
  it('should create an instructor name', function(){
    expect(createInstructor('Scott', 'Stodghill')).toEqual({
      firstName: 'Scott',
      lastName: 'Stodghill'
    })
  });
  it('should show the instructors favorite number', function(){
    expect(favoriteNumber).toEqual(5)
  });
  it('should have the instructors say hi', function(){
    expect(instructors.sayHi()).toEqual("Hi!")
  });
  it('should have the instructors say bye', function(){
    expect(instructors.sayBye()).toEqual("Scott says bye!")
  })
});

describe('#createAnimal', function(){
  it('should create an animal and return its noise', function(){
    expect(r.crow()).toEqual("cock-a-doodle-doo")
    })
  })
