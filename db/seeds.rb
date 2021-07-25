# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name:"mo", username:"mo", password: "abc123", age:33, email:"muhammadali775@gmail.com")
User.create(name:"troy", username:"troy", password: "abc123", age:23, email:"hotdog@gmail.com")

Client.create(name:"Tim", age:43, email:"tim@tim.com", profession:"trader", phone:"555-555-5555", user_id:1)
Client.create(name:"Jim", age:43, email:"tim@tim.com", profession:"raider", phone:"666-666-6666", user_id:1)
Client.create(name:"Slim", age:43, email:"tim@tim.com", profession:"tailer", phone:"777-777-7777", user_id:1)
Client.create(name:"Blade", age:43, email:"tim@tim.com", profession:"tarer", phone:"888-888-8888", user_id:1)
Client.create(name:"Lazer", age:43, email:"tim@tim.com", profession:"carer", phone:"999-999-9999", user_id:1)