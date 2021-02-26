// create your loops here.

// This loop works.
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// This loop stops at 8 but should go on to 18.
for (var j = 0; j <= 20; j += 2) {
  console.log(j);
}

for (var k = 100; k <= 100 && k >= 0; k--) {
  console.log('Time till explosion ' + [k] + '!');
}
