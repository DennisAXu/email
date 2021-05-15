// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { MemClient } = require("@mem-labs/mem-node");

const memClient = new MemClient({
  apiKey: "3c37816e-c46c-4a55-8b99-f9c137d5c65c"
});

export default (req, res) => {
  res.statusCode = 200
  //res.json(req)
  console.log(req.headers.subject);
  console.log(req.body.plain);
  memClient.createMem({
    content: `${req.headers.subject}\n ${req.body.plain}`
  })
  res.send("done");
}
