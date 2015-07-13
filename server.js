// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));


// post seed data
var posts = [
  {
    title: "Underscore Templating with a Cherry on Top",
    heading: "The best tips and tricks for using Underscore.js",
    author: "Annie Pennell",
    content: "Butcher Pinterest hella Helvetica, direct trade messenger bag street art plaid you probably haven't heard of them pickled irony roof party mumblecore salvia next level. Salvia tote bag PBR shabby chic Vice. Taxidermy Thundercats literally craft beer, lo-fi mlkshk lumbersexual art party biodiesel chillwave PBR Etsy. XOXO hoodie listicle umami, PBR next level try-hard High Life semiotics tofu heirloom pug Echo Park. Art party hashtag direct trade, fixie Shoreditch selfies chambray before they sold out bitters Banksy. Thundercats chillwave viral, aesthetic gastropub roof party polaroid iPhone street art flannel. Chia you probably haven't heard of them heirloom tofu, drinking vinegar yr brunch health goth."
  },
  {
    title: "Artisinal Node",
    heading: "Make the most out of Node.js",
    author: "Annie Pennell",
    content: "Marfa tattooed bicycle rights meh, Portland umami before they sold out organic cray. Messenger bag tilde crucifix, PBR cray semiotics selfies health goth bespoke 3 wolf moon art party. Pour-over before they sold out 90's disrupt, health goth heirloom hoodie keytar plaid 3 wolf moon cred selfies Truffaut freegan Brooklyn. You probably haven't heard of them polaroid food truck, try-hard single-origin coffee messenger bag cliche Brooklyn ethical 3 wolf moon PBR art party Williamsburg. Seitan freegan Schlitz, before they sold out direct trade deep v irony mustache Godard meh mumblecore. Before they sold out Etsy irony skateboard. Bespoke swag kale chips lumbersexual 8-bit, 90's Banksy listicle mixtape butcher."
  }
];


// route to serve index.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

// get all posts
app.get('/api/posts', function(req, res) {
var newPost = {};
newPost.
})

// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});