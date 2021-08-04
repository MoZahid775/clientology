# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name:"mo", username:"mo", password: "abc123", age:33, email:"muhammadali775@gmail.com")
User.create(name:"troy", username:"troy", password: "abc123", age:23, email:"hotdog@gmail.com")

Client.create(name:"Tim Kotroubas", age:43, email:"tim@tim.com", profession:"trader", phone:"555-555-5555", user_id:1)
Client.create(name:"Jim De Ambrosio", age:43, email:"tim@tim.com", profession:"raider", phone:"666-666-6666", user_id:1)
Client.create(name:"Lord Loldemort", age:43, email:"tim@tim.com", profession:"tailer", phone:"777-777-7777", user_id:1)
Client.create(name:"Blade", age:43, email:"tim@tim.com", profession:"tarer", phone:"888-888-8888", user_id:1)
Client.create(name:"Lazer", age:43, email:"tim@tim.com", profession:"carer", phone:"999-999-9999", user_id:1)


Note.create(note:"One thing I don't know why
It doesn't even matter how hard you try
Keep that in mind, I designed this rhyme
To explain in due time
All I know
Time is a valuable thing
Watch it fly by as the pendulum swings
Watch it count down to the end of the day
The clock ticks life away
", client_id:1)

Note.create(note:"t's so unreal
Didn't look out below
Watch the time go right out the window
Tryin' to hold on, did-didn't even know
I wasted it all just to watch you go
I kept everything inside and even though I tried
It all fell apart
What it meant to me will eventually
Be a memory of a time when I tried so hard
", client_id:1)

Note.create(note:"I kept everything inside and even though I tried
It all fell apart
What it meant to me will eventually
Be a memory of a time when I tried so hard
I tried so hard and got so far
But in the end it doesn't even matter
I had to fall to lose it all
But in the end it doesn't even matter
", client_id:1)

Purchase.create(product_name:"The Gitano Sharp Black Slim Fit Suit", size:"40R", date_of_purchase: "September,7th 2020", dollar_amt: 945.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"The Gitano Sharp Grey Fit Suit", size:"40R", date_of_purchase: "September,7th 2020", dollar_amt: 945.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"The Gitano Sharp Indego Fit Suit", size:"40R", date_of_purchase: "September,7th 2020", dollar_amt: 945.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"Purple Tie", size:"R", date_of_purchase: "August,17th 2020", dollar_amt: 95.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"Green Striped TIe", size:"R", date_of_purchase: "August,17th 2020", dollar_amt: 95.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"Slim Fit Shirt", size:"16", date_of_purchase: "June,27th 2020", dollar_amt: 125.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"Silver cuff links", size:"OFA", date_of_purchase: "June,27th 2020", dollar_amt: 75.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"Leather GLoves", size:"M", date_of_purchase: "June,27th 2020", dollar_amt: 105.50, return_indicator:false, client_id: 1)




