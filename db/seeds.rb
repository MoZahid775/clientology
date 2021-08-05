# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name:"mo", username:"mo", password: "abc123", age:33, email:"muhammadali775@gmail.com")
User.create(name:"troy", username:"troy", password: "abc123", age:23, email:"hotdog@gmail.com")

Client.create(name:"Tim Kotroubas", age:32, email:"tim@gmail.com", profession:"Trader", phone:"555-555-5555", user_id:1)
Client.create(name:"Jim De Ambrosio", age:53, email:"jim@gmail.com", profession:"Vice President of Rolls Royce", phone:"666-666-6666", user_id:1)
Client.create(name:"Lord Voldemort", age:43, email:"v@gmail.com", profession:"the dark lord", phone:"777-777-7777", user_id:1)
Client.create(name:"Raj Lakhanet", age:47, email:"raj@gmail.com", profession:"Owns multiple dollar stores", phone:"888-888-8888", user_id:1)
Client.create(name:"Anne Fox", age:37, email:"tim@tim.com", profession:"Reporter", phone:"999-999-9999", user_id:1)
Client.create(name:"Jessica Ketchem", age:35, email:"j@gmail.com", profession:"Fashion Photographer", phone:"777-777-7777", user_id:1)
Client.create(name:"Ruben Takash", age:37, email:"raj@gmail.com", profession:"Financial Planner", phone:"888-888-8888", user_id:1)
Client.create(name:"Viktor Krum", age:37, email:"tim@tim.com", profession:"Soccer Player", phone:"999-999-9999", user_id:1)
Client.create(name:"Samantha Fern", age:27, email:"sam@gmail.com", profession:"Bank Of America Director", phone:"999-999-9999", user_id:1)


Note.create(note:"8/1/2021 - On his  recent visit Tim said it would be a good idea to look out for a Tuxedo. He will be in need of one this fall because he is getting married.", client_id:1)
Note.create(note:"11/1/2020 - Found out wife is a size 3 and looking for a champagne colored dress for New Years", client_id:1)
Note.create(note:"8/3/2020 - Is looking to update sportswear. Be on the lookout for track jackets and crisp clean sneakers that are light", client_id:1)



Purchase.create(product_name:"The Guitano Sharp Black Slim Fit Suit", size:"40R", date_of_purchase: "September,7th 2020", dollar_amt: 945.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"The Hansel Grey Fit Suit", size:"40R", date_of_purchase: "September,7th 2020", dollar_amt: 845.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"The Lahrs Sharp Indego Fit Suit", size:"40R", date_of_purchase: "September,7th 2020", dollar_amt: 975.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"Purple Tie", size:"R", date_of_purchase: "August,17th 2020", dollar_amt: 95.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"Green Striped TIe", size:"R", date_of_purchase: "August,17th 2020", dollar_amt: 95.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"Slim Fit Shirt", size:"16", date_of_purchase: "June,27th 2020", dollar_amt: 125.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"Silver cuff links", size:"OFA", date_of_purchase: "June,27th 2020", dollar_amt: 75.50, return_indicator:false, client_id: 1)
Purchase.create(product_name:"Leather GLoves", size:"M", date_of_purchase: "June,27th 2020", dollar_amt: 105.50, return_indicator:false, client_id: 1)


Profile.create(suit_size:"40R", pant_size:"33", style:"Elegant lots of black", shirt_size:"15.5", height:"5'10", shoe_size:"10.5", client_id: 1)

