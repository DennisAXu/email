// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { MemClient } = require("@mem-labs/mem-node");

const memClient = new MemClient({
  apiKey: "3c37816e-c46c-4a55-8b99-f9c137d5c65c"
});

export default async (req, res) => {
  res.statusCode = 200
  //res.json(req)
  // console.log(req.headers.subject);
  console.log(req.body.headers.subject, typeof req.body.headers.subject)
  // console.log(req.body.plain);
  await memClient.createMem({
    content: `Subject: ${req.body.headers.subject}\n\nBody: ${req.body.plain}`
  })
  res.send("done");
}
