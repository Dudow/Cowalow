var user = {
  name: 'Eduardo',
  age: 20,
  girlfriend: null,
};

function cleaning(dirtyObject) {
  for (var propName in dirtyObject) {
    if (dirtyObject[propName] === null || dirtyObject[propName] === undefined) {
      delete dirtyObject[propName];
    }
  }

  return dirtyObject;
}

console.log(cleaning(user));

// Essa foi bem mais internet do que eu, mas gostei de ver e entender que era possível fazer isso
