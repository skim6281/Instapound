# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

guest = User.create!(username: "guest", password: "go_guest_go")
skim = User.create!(username: "skim", password: "go_skim_go")
spongebob = User.create!(username: "spongebob", password: "go_spongebob_go")
mikey = User.create!(username: "mikey", password: "go_mikey_go")
homer = User.create!(username: "homer", password: "go_homer_go")
garfield = User.create!(username: "garfield", password: "go_garfield_go")
cookiemonster = User.create!(username: "cookiemonster", password: "go_cookiemonster_go")
pooh = User.create!(username: "pooh", password: "go_pooh_go")
ron_swanson = User.create!(username: "ron_swanson", password: "go_ron_swonson_go")
po = User.create!(username: "po", password: "go_po_go")
naruto = User.create!(username: "naruto", password: "go_naruto_go")

Image.destroy_all

Image.create!(caption:"mmm...lasagna", location:"Muncie, Indiana", user:garfield)
Image.create!(caption:"I LOVE LASGNA", location:"Muncie, Indiana", user:garfield)
Image.create!(caption:"Lasagna...nature's perfect food", location:"Muncie, Indiana", user:garfield)
Image.create!(caption:"LASGNA!!!", location:"Muncie, Indiana", user:garfield)

Image.create!(caption:"mmmm....donuts..", location:"Springfield, Oregon", user: homer)
Image.create!(caption:"Donuts...is there anything they can't do",location:"Springfield, Oregon", user: homer)
Image.create!(caption:"You can't buy happiness but you can buy donuts.  And that's kind of the same thing", location:"Springfield, Oregon", user: homer)
Image.create!(caption:"It's donut o'clock time anytime",location:"Springfield, Oregon", user: homer)
Image.create!(caption:"DONUTS!!!", location:"Springfield, Oregon", user: homer)
Image.create!(caption:"Carpe Diem. Seize the donut",location:"Springfield, Oregon", user: homer)

Image.create!(caption:"mmm...cookies", location:"Sesame Street", user:cookiemonster)
Image.create!(caption:"Today I will live in the moment unless it's unpleasant in which case I will eat a cookie", location:"Sesame Street", user:cookiemonster)
Image.create!(caption:"C is for cookie and cookie is for me!", location:"Sesame Street", user:cookiemonster)
Image.create!(caption:"Gimme da cookies!", location:"Sesame Street", user:cookiemonster)
Image.create!(caption:"Cookies?", location:"Sesame Street", user:cookiemonster)

Image.create!(caption:"I'm ready! I'm ready! I'm ready!... for krabby patties", location:"Bikini Bottom", user:spongebob)
Image.create!(caption:"Keep calm and have a krappy patty", location:"Bikini Bottom", user:spongebob)
Image.create!(caption:"Just one bite", location:"Bikini Bottom", user:spongebob)
Image.create!(caption:"Krabby patty!!", location:"Bikini Bottom", user:spongebob)
Image.create!(caption:"mmmm...krabby patty", location:"Bikini Bottom", user:spongebob)
Image.create!(caption:"I love krabby patties!", location:"Bikini Bottom", user:spongebob)

Image.create!(caption:"Cowabunga, dude!",location:"NYC", user:mikey)
Image.create!(caption:"Pizza!",location:"NYC", user:mikey)
Image.create!(caption:"Pizza party!",location:"NYC", user:mikey)
Image.create!(caption:"Pizza Time!",location:"NYC", user:mikey)
Image.create!(caption:"Keep calm and eat pizza",location:"NYC", user:mikey)
Image.create!(caption:"Wise man say, 'Forgiveness is divine, but never pay full price for late pizza'",location:"NYC", user:mikey)

Image.create!(caption:"I don't eat food that my food eats", location:"Pawnee, Indiana", user:ron_swanson)
Image.create!(caption:"When I eat. It is the food that is scared.", location:"Pawnee, Indiana", user:ron_swanson)
Image.create!(caption:"Turf and turf", location:"Pawnee, Indiana", user:ron_swanson)
Image.create!(caption:"mm", location:"Pawnee, Indiana", user:ron_swanson)

Image.create!(caption:"When you have been trained, you may eat",location:"Valley of Peace", user:po)
Image.create!(caption:"I eat when I'm upset, okay",location:"Valley of Peace", user:po)
Image.create!(caption:"oooooo, dumplings",location:"Valley of Peace", user:po)
Image.create!(caption:"DUMPLINGS!",location:"Valley of Peace", user:po)
Image.create!(caption:"give meee",location:"Valley of Peace", user:po)

Image.create!(caption:"mmmm...ramen...",location:"Konoha", user:naruto)
Image.create!(caption:"that's my ninja way",location:"Konoha", user:naruto)
Image.create!(caption:"I LOVE RAMEN!",location:"Konoha", user:naruto)
Image.create!(caption:"Ramen?",location:"Konoha", user:naruto)

Image.create!(caption:"If everything is honey, and I am what I eat, I must be made of honey..and life is very sweet!", location:"Hundred Acre Wood", user:pooh)
Image.create!(caption:"I love honey", location:"Hundred Acre Wood", user:pooh)
Image.create!(caption:"A day without a friend is like a pot without a single drop of honey left inside", location:"Hundred Acre Wood", user:pooh)
Image.create!(caption:"Hunny!", location:"Hundred Acre Wood", user:pooh)
Image.create!(caption:"Hunny factory! Bees wanted!", location:"Hundred Acre Wood", user:pooh)

Image.create!(caption:"Who's Bobby Flay?", location:"Paramus, New Jersey", user:skim)
