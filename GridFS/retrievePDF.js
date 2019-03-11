const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const db = require("../config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true });
const conn = mongoose.connection;
const fs = require('fs');
const path = require('path');

const Grid = require('gridfs-stream');

//connect gridFs and mongo
Grid.mongo = mongoose.mongo;

conn.once('open', function () {
  console.log('- Connection open -');
  const gfs = Grid(conn.db);

  //write content from DB to file system with the given name
  const fs_write_stream = fs.createWriteStream(path.join(__dirname, '../writeTo/sampleRes.pdf'));

  //create read-stream from mongodb
  //in this case, finding the correct file by 'filename' (could also by ID or other properties)
  const readStream = gfs.createReadStream({
    filename: 'sample.pdf'
  });

  //pipe the read-stream in to the write stream
  readStream.pipe(fs_write_stream);
  fs_write_stream.on('close', function () {
    console.log('File has been written fully!');
    //check out writeTo folder to confirm
  });
})