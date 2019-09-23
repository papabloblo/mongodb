// ENCONTRANDO DOCUMENTOS

db.movies.find()
db.movies.find({writer: "Quentin Tarantino"})
db.movies.find({actors: "Brad Pitt"})

db.movies.find({year: {$gt: 1900}, year: {$lt: 2000}})
db.movies.find({$and: [{year: {$gt: 1900}}, {year: {$lt: 2000}}]})
db.movies.find({$or: [{year: {$lt: 2000}}, {year: {$gt: 2010}}]})

// ACTUALIZANDO DOCUMENTOS

db.movies.update(
  {
    title: "The Hobbit: An Unexpected Journey"
  },
  {
    synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
  }
)
db.movies.update(
  {title: "The Hobbit: The Desolation of Smaug"},
   {
     synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
   }
)


db.movies.update(
  {title: "Pulp Fiction"},
  {$push: {actors: "Samuel L. Jackson"}}
)

// ELIMINANDO DOCUMENTOS
db.movies.remove({title: "Pee Wee Herman's Big Adventure"})
db.movies.remove({title: "Avatar"})
