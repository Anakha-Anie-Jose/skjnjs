var express = require('express');
var router = express.Router();
const books=[
  {"id":1,
  "title":"Book1",
  "author":"Author1",
  "pages":100
  },
  {"id":2,
  "title":"Book2",
  "author":"Author2",
  "pages":200
  },
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('books');
});
router.get('/:id',function(req,res,next){

  const bookId=parseInt(req.params.id)
  if(!bookId){
    res.status(400).json({"error": `Unable to parse Book id: ${req.params.id} `})
    return;
  }
  const foundBook=books.find(book=>book.id===bookId)
  if(!foundBook)
  {
    res.status(404).json({"error":`Book with id: ${req.params.id} was not found`})
    return;
  }
});
router.post('/',function(req,res,next){
  const newBook={
"id":books.length+1,
"title":req.body.title,
"author":req.body.author,
"pages":req.body.pages

  }
  books.push(newBook)
  res.status(201).json(newBook);
});

module.exports = router;