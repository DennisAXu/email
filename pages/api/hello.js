// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MemClient } from "@mem-labs/mem-node";

const memClient = new MemClient({
  apiKey: "3c37816e-c46c-4a55-8b99-f9c137d5c65c"
});

export default (req, res) => {
  res.statusCode = 200
  //res.json(req)
  memClient.createMem({
    content: "hello"
  })
  res.send("success");
}
