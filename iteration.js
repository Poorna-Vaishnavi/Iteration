const myObject = {
    name: 'Poorna',          
    age: 21,              
    isStudent: true,      
    scores: [85, 92, 78],   
    address: {
      street: '123 Main St',
      city: 'Salem'
    },                     
    hobbies: ['reading', 'music']
  };
  

  for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      const value = myObject[key];
      console.log(key, value);
    }
  }
  

  for (const [key, value] of Object.entries(myObject)) {
    console.log(key, value);
  }
  

  Object.entries(myObject).forEach(([key, value]) => {
    console.log(key, value);
  });