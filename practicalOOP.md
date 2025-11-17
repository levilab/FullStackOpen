
```javascript


// Obscuring References (direct array indexing)
class ObscuringReferences {
  constructor(data) {
    this.data = data; // array of arrays, e.g. [[622, 20], [622, 23]]
  }

  diameters() {
    // 0 is rim, 1 is tire
    return this.data.map(cell => cell[0] + (cell[1] * 2));
  }

  // ... other methods that index into the array directly
}

const rawData = [[622, 20], [622, 23]];
const obscured = new ObscuringReferences(rawData);
console.log(obscured.diameters()); // [662, 668]

class Wheel {
  constructor(rim, tire) {
    this.rim = rim;
    this.tire = tire;
  }
}

// Revealing References (wrap data in a Wheel class)
class RevealingReferences {
  constructor(data) {
    this.wheels = this.wheelify(data);
  }

  diameters() {
    return this.wheels.map(wheel => wheel.rim + (wheel.tire * 2));
  }

  wheelify(data) {
    return data.map(cell => new Wheel(cell[0], cell[1]));
  }
}
const rawData = [[622, 20], [622, 23]];
const revealed = new RevealingReferences(rawData);
console.log(revealed.diameters()); // [662, 668]
```
🔥 Wrapping data structure inside a helper function would make the code more maintainable.
🔥 As we only need to edit this helper function in case the data structure change
