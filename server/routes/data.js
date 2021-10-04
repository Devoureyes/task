let express = require('express')
const data = require("../data/data");
let router = express.Router();

router.get('/', function (req, res, next) {
    const page = req.query.page
    const limit = req.query.limit
    const sort = req.query.sort

    if (sort === 'bid') {
        data.sort((a, b) => a.rate.periods[0].rate.from > b.rate.periods[0].rate.from ? 1 : -1)
    } else if (sort === 'sum') {
        data.sort((a, b) => a.rate.creditAmount.from > b.rate.creditAmount.from ? 1 : -1)
    }

    const startIndex = 0
    const endIndex = page * limit
    const resultData = {payload: data.slice(startIndex, endIndex),length: data.length}
    res.json(resultData)
})

module.exports = router;