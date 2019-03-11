const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const db = require("../config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true });
const conn = mongoose.connection;
const path = require('path');

const Grid = require('gridfs-stream');
const fs = require('fs');

const pdfPath = path.join(__dirname, '../readFrom/sampleResume.pdf');

//connect gridFs and mongo
Grid.mongo = mongoose.mongo;

conn.once('open', function () {
  console.log('- Connection Open -');
  const gfs = Grid(conn.db);

  //when connection is open, create write stream w/ the name to store file as in the db
  const writeStream = gfs.createWriteStream({
    filename: 'sample.pdf'  //name it'll be stored in Mongo
  });

  //create readStream from where the pdf currently is(pdfPath) and pipe it into the db thru write stream
  fs.createReadStream(pdfPath).pipe(writeStream);

  writeStream.on('close', function (file) {
    //do something with the file
    console.log(file.filename + 'Written to DB');
  });
});