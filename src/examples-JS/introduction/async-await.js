const readItem = async () => {
  return 1;
};

const sendInvoice = async (email, item) => {
  console.log(`
    Hi ${email},
    Your invoice is ${item}
`);
};

const runProgram = async () => {
  const item = readItem();
  sendInvoice('alina@ignat.email', item);
};

runProgram();

// node src/examples-JS/introduction/async-await.js
// Hi alina@ignat.email,
// Your invoice is [object Promise]
