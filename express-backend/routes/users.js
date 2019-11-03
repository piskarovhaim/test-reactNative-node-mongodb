var express = require('express');
const userModule = require('../modules/user')
var router = express.Router();
/* GET users listing. */
router.get('/', async function(req, res, next) {
  const user = new userModule({passport:789,seat:"14C",name:"Yarin Danon"});
  try {
      await user.save();
  } catch {
      return next(user.errors);
  }
  console.log(user);

  res.send({ passport: 123 });

});

router.get('/:passport', async function(req, res, next) {
  const user = await userModule.findOne({passport:req.params.passport});
  if(!user)
    res.send({})
  else
    res.send(user);
});

module.exports = router;
