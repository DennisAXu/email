// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  //res.json(req)
  res.json("SUP", JSON.stringify(req.query), JSON.stringify(req.body));
}
