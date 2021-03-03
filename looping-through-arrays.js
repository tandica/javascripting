const pets = ['cat', 'dog', 'rat'];

for (const i = 0; i < pets.length; i++) {
  return pets[i] = pets[i] + 's';
}

console.log(pets);