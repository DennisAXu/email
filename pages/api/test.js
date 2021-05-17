const { MemClient } = require("@mem-labs/mem-node");

const memClient = new MemClient({
  apiKey: "3c37816e-c46c-4a55-8b99-f9c137d5c65c"
});

memClient.createMem({
content: "this shit works"
})