function data() {
  console.log("Webpack Works Successfully!!");
}

const obj = {
  name: "yasin",
  age: 26
}

class Logger {
  success(message) {
    console.log('success ==>', message);
  }
  
  error(message) {
    console.log('success ==>', message);
  }
}

export {
  data,
  obj
}

export default new Logger()