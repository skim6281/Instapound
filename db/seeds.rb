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
spongebob = User.create!(profile_pic: File.open('app/assets/images/spongebob/spongebob_profile.jpg'),
              username: "spongebob", password: "go_spongebob_go")
mikey = User.create!(profile_pic: File.open('app/assets/images/mikey/mikey_profile.png'),
          username: "mikey", password: "go_mikey_go")
homer = User.create!(profile_pic: File.open('app/assets/images/homer/homer_profile.png'),
          username: "homer", password: "go_homer_go")
garfield = User.create!(profile_pic: File.open('app/assets/images/garfield/garfield_profile.png'),
            username: "garfield", password: "go_garfield_go")
cookiemonster = User.create!(profile_pic: File.open('app/assets/images/cookiemonster/cookiemonster_profile.jpg'),
                  username: "cookiemonster", password: "go_cookiemonster_go")
pooh = User.create!(profile_pic: File.open('app/assets/images/pooh/pooh_profile.jpg'),
        username: "pooh", password: "go_pooh_go")
ron_swanson = User.create!(profile_pic: File.open('app/assets/images/ron_swanson/ron_swanson_profile.jpg'),
                username: "ron_swanson", password: "go_ron_swonson_go")
po = User.create!(profile_pic: File.open('app/assets/images/po/po_profile.jpg'),
      username: "po", password: "go_po_go")
naruto = User.create!(profile_pic: File.open('app/assets/images/naruto/naruto_profile.jpg'),
          username: "naruto", password: "go_naruto_go")

Image.destroy_all

Image.create!(photo: File.open('app/assets/images/garfield/lasagna_1.jpg'),
caption:"mmm...lasagna", location:"Muncie, Indiana", user:garfield)
Image.create!(photo: File.open('app/assets/images/garfield/lasagna_2.jpg'),
caption:"I LOVE LASGNA", location:"Muncie, Indiana", user:garfield)
Image.create!(photo: File.open('app/assets/images/garfield/lasagna_3.jpg'),
caption:"Lasagna...nature's perfect food", location:"Muncie, Indiana", user:garfield)
Image.create!(photo: File.open('app/assets/images/garfield/lasagna_4.jpg'),
caption:"LASGNA!!!", location:"Muncie, Indiana", user:garfield)

Image.create!(photo: File.open('app/assets/images/homer/donuts_1.jpg'),
caption:"mmmm....donuts..", location:"Springfield, Oregon", user: homer)
Image.create!(photo: File.open('app/assets/images/homer/donuts_2.jpg'),
caption:"Donuts...is there anything they can't do",location:"Springfield, Oregon", user: homer)
Image.create!(photo: File.open('app/assets/images/homer/donuts_3.jpg'),
caption:"You can't buy happiness but you can buy donuts.  And that's kind of the same thing", location:"Springfield, Oregon", user: homer)
Image.create!(photo: File.open('app/assets/images/homer/donuts_4.jpg'),
caption:"It's donut o'clock time anytime",location:"Springfield, Oregon", user: homer)
Image.create!(photo: File.open('app/assets/images/homer/donuts_5.jpg'),
caption:"DONUTS!!!", location:"Springfield, Oregon", user: homer)
Image.create!(photo: File.open('app/assets/images/homer/donuts_6.jpg'),
caption:"Carpe Diem. Seize the donut",location:"Springfield, Oregon", user: homer)

Image.create!(photo: File.open('app/assets/images/cookiemonster/cookies_1.jpg'),
caption:"mmm...cookies", location:"Sesame Street", user:cookiemonster)
Image.create!(photo: File.open('app/assets/images/cookiemonster/cookies_2.jpg'),
caption:"Today I will live in the moment unless it's unpleasant in which case I will eat a cookie", location:"Sesame Street", user:cookiemonster)
Image.create!(photo: File.open('app/assets/images/cookiemonster/cookies_3.jpg'),
caption:"C is for cookie and cookie is for me!", location:"Sesame Street", user:cookiemonster)
Image.create!(photo: File.open('app/assets/images/cookiemonster/cookies_4.jpg'),
caption:"Gimme da cookies!", location:"Sesame Street", user:cookiemonster)
Image.create!(photo: File.open('app/assets/images/cookiemonster/cookies_5.jpg'),
caption:"Cookies?", location:"Sesame Street", user:cookiemonster)

Image.create!(photo: File.open('app/assets/images/spongebob/burger_1.jpg'),
caption:"I'm ready! I'm ready! I'm ready!... for krabby patties", location:"Bikini Bottom", user:spongebob)
Image.create!(photo: File.open('app/assets/images/spongebob/burger_2.jpg'),
caption:"Keep calm and have a krappy patty", location:"Bikini Bottom", user:spongebob)
Image.create!(photo: File.open('app/assets/images/spongebob/burger_3.jpg'),
caption:"Just one bite", location:"Bikini Bottom", user:spongebob)
Image.create!(photo: File.open('app/assets/images/spongebob/burger_4.jpg'),
caption:"Krabby patty!!", location:"Bikini Bottom", user:spongebob)
Image.create!(photo: File.open('app/assets/images/spongebob/burger_5.jpg'),
caption:"mmmm...krabby patty", location:"Bikini Bottom", user:spongebob)
Image.create!(photo: File.open('app/assets/images/spongebob/burger_6.jpg'),
caption:"I love krabby patties!", location:"Bikini Bottom", user:spongebob)

Image.create!(photo: File.open('app/assets/images/mikey/pizza_1.jpg'),
caption:"Cowabunga, dude!",location:"NYC", user:mikey)
Image.create!(photo: File.open('app/assets/images/mikey/pizza_2.jpg'),
caption:"Pizza!",location:"NYC", user:mikey)
Image.create!(photo: File.open('app/assets/images/mikey/pizza_3.jpg'),
caption:"Pizza party!",location:"NYC", user:mikey)
Image.create!(photo: File.open('app/assets/images/mikey/pizza_4.jpg'),
caption:"Pizza Time!",location:"NYC", user:mikey)
Image.create!(photo: File.open('app/assets/images/mikey/pizza_5.jpg'),
caption:"Keep calm and eat pizza",location:"NYC", user:mikey)
Image.create!(photo: File.open('app/assets/images/mikey/pizza_6.jpg'),
caption:"Wise man say, 'Forgiveness is divine, but never pay full price for late pizza'",location:"NYC", user:mikey)

Image.create!(photo: File.open('app/assets/images/mikey/pizza_1.jpg'),
caption:"I don't eat food that my food eats", location:"Pawnee, Indiana", user:ron_swanson)
Image.create!(photo: File.open('app/assets/images/mikey/pizza_2.jpg'),
caption:"When I eat. It is the food that is scared.", location:"Pawnee, Indiana", user:ron_swanson)
Image.create!(photo: File.open('app/assets/images/mikey/pizza_3.jpg'),
caption:"Turf and turf", location:"Pawnee, Indiana", user:ron_swanson)
Image.create!(photo: File.open('app/assets/images/mikey/pizza_4.jpg'),
caption:"mm", location:"Pawnee, Indiana", user:ron_swanson)

Image.create!(photo: File.open('app/assets/images/po/dumplings_1.jpg'),
caption:"When you have been trained, you may eat",location:"Valley of Peace", user:po)
Image.create!(photo: File.open('app/assets/images/po/dumplings_2.jpg'),
caption:"I eat when I'm upset, okay",location:"Valley of Peace", user:po)
Image.create!(photo: File.open('app/assets/images/po/dumplings_3.jpg'),
caption:"oooooo, dumplings",location:"Valley of Peace", user:po)
Image.create!(photo: File.open('app/assets/images/po/dumplings_4.jpg'),
caption:"DUMPLINGS!",location:"Valley of Peace", user:po)
Image.create!(photo: File.open('app/assets/images/po/dumplings_5.jpg'),
caption:"give meee",location:"Valley of Peace", user:po)

Image.create!(photo: File.open('app/assets/images/naruto/ramen_1.jpg'),
caption:"mmmm...ramen...",location:"Konoha", user:naruto)
Image.create!(photo: File.open('app/assets/images/naruto/ramen_2.jpg'),
caption:"that's my ninja way",location:"Konoha", user:naruto)
Image.create!(photo: File.open('app/assets/images/naruto/ramen_3.jpg'),
caption:"I LOVE RAMEN!",location:"Konoha", user:naruto)
Image.create!(photo: File.open('app/assets/images/naruto/ramen_4.jpg'),
caption:"Ramen?",location:"Konoha", user:naruto)

Image.create!(photo: File.open('app/assets/images/pooh/honey_1.jpg'),
caption:"If everything is honey, and I am what I eat, I must be made of honey..and life is very sweet!", location:"Hundred Acre Wood", user:pooh)
Image.create!(photo: File.open('app/assets/images/pooh/honey_2.jpg'),
caption:"I love honey", location:"Hundred Acre Wood", user:pooh)
Image.create!(photo: File.open('app/assets/images/pooh/honey_3.jpg'),
caption:"A day without a friend is like a pot without a single drop of honey left inside", location:"Hundred Acre Wood", user:pooh)
Image.create!(photo: File.open('app/assets/images/pooh/honey_4.jpg'),
caption:"Hunny!", location:"Hundred Acre Wood", user:pooh)
Image.create!(photo: File.open('app/assets/images/pooh/honey_5.jpg'),
caption:"Hunny factory! Bees wanted!", location:"Hundred Acre Wood", user:pooh)

Image.create!(photo: File.open('app/assets/images/skim/food_1.jpg'),
caption:"Who's Bobby Flay?", location:"Paramus, New Jersey", user:skim)

Following.destroy_all

Following.create!(followee: mikey, follower: guest)
Following.create!(followee: spongebob, follower: guest)
Following.create!(followee: homer, follower: guest)
Following.create!(followee: garfield, follower: guest)
Following.create!(followee: cookiemonster, follower: guest)
Following.create!(followee: pooh, follower: guest)
Following.create!(followee: ron_swanson, follower: guest)
Following.create!(followee: po, follower: guest)
Following.create!(followee: naruto, follower: guest)
Following.create!(followee: skim, follower: guest)
