const readItem = async () => {
  return 1;
};

const sendInvoice = async (email: string, item: number) => {
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

// ts-node src/examples-TS/introduction/async-await.ts
// Compile Error:
// sendInvoice('alina@ignat.email', item);
// Did you forget to use 'await'?
