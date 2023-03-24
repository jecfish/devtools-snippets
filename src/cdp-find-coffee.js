const input = { 
  command: "Runtime.evaluate",
  parameters: { 
      expression: "document.querySelector('[data-test=\"Espresso\"]')" 
  }
};

copy(JSON.stringify(input));
// console.log(JSON.stringify(input));
// console.log('Copied find coffee command to clipboard');