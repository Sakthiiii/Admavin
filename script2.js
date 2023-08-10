let people = [
    { name: 'Alice', age: 21 },
    { name: 'Alice', age: 24 },
    { name: 'Max', age: 21 },
    { name: 'June', age: 23 },
    { name: 'July', age: 24 },
  ];
  
  function groupBy(arr) {
    return arr.reduce((result, person) => {
      const age = person.age.toString();
      if (!result[age]) {
        result[age] = [];
      }
      result[age].push(person);
      return result;
    }, {});
  }
  
  console.log(groupBy(people));
  