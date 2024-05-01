const http = require('http');
const mongoose = require('mongoose');
mongoose
.connect("mongodb://127.0.0.1:27017/testPost")
.then(() => console.log('資料庫連接成功'))
.catch(err => console.error('Connection error', err));

const requestListener = async(req, res)=>{
        console.log(req.url);
        res.end();
    
}

const Cat = mongoose.model('Cat', {name: String});
// Define a new schema for the 'room' collection.
const roomSchema = {
    name: String, // A field for the room name, which is a string.
    price: {
      type: Number, // The price field is a number.
      required: [true, "價格必填"] // This field is required, with a custom error message if it's not provided.
    },
    rating: Number // A field for the rating, which is also a number.
  }
  
  // Create a Mongoose model called 'Room', which corresponds to the 'rooms' collection in MongoDB.
  const Room = mongoose.model('Room', roomSchema);
  
  // Instantiate a new document (record) from the 'Room' model with the specified properties.
  const testRoom = new Room({
    name: "經濟雙人套房", 
    price: 2000, 
    rating: 4.5 
  });
  

const kitty = new Cat({ name: 'Zildjian'});
kitty.save().then(()=>console.log('meow'));

const server = http.createServer(requestListener);
server.listen(3005);