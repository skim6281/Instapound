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

Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/54/b7/ba/54b7ba5f6d4ddb4b81d5a5e129ec868f.jpg",
caption:"mmm...lasagna", location:"Muncie, Indiana", user:garfield)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/474x/be/eb/72/beeb720d5533f53317ca207665f180dc.jpg",
caption:"I LOVE LASGNA", location:"Muncie, Indiana", user:garfield)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/f1/27/45/f12745cfce71889dff4b586ed8395772.jpg",
caption:"Lasagna...nature's perfect food", location:"Muncie, Indiana", user:garfield)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/ff/7a/ca/ff7aca81d0771652dc45b3f7dfbefb0d.jpg",
caption:"LASGNA!!!", location:"Muncie, Indiana", user:garfield)

Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/24/96/6e/24966e88853e032b3bfb8a52de88be2c.jpg",
caption:"mmmm....donuts..", location:"Springfield, Oregon", user: homer)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/b1/65/c9/b165c9b2ad11b18a651a784cddd0cba2.jpg",
caption:"Donuts...is there anything they can't do",location:"Springfield, Oregon", user: homer)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/37/43/cd/3743cdcee3abb63160c1e62f7c2ac0a6.jpg",
caption:"You can't buy happiness but you can buy donuts.  And that's kind of the same thing", location:"Springfield, Oregon", user: homer)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/d5/fb/42/d5fb42fcc63c3d4bf188cb8427e6b222.jpg",
caption:"It's donut o'clock time anytime",location:"Springfield, Oregon", user: homer)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/6b/66/41/6b66417f9275f2cfc7eff819b1c52816.jpg",
caption:"DONUTS!!!", location:"Springfield, Oregon", user: homer)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/bc/d0/f3/bcd0f33b572bc1a599fe0c863603161b.jpg",
caption:"Carpe Diem. Seize the donut",location:"Springfield, Oregon", user: homer)

Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/03/34/eb/0334eb47879d8bfda4ae478828ed49a7.jpg",
caption:"mmm...cookies", location:"Sesame Street", user:cookiemonster)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/46/cf/75/46cf75406fb8ce047122d886bcfbd3dc.jpg",
caption:"Today I will live in the moment unless it's unpleasant in which case I will eat a cookie", location:"Sesame Street", user:cookiemonster)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/c8/77/c6/c877c6dbe4e2347de89f4d1d9c50e9c7.jpg",
caption:"C is for cookie and cookie is for me!", location:"Sesame Street", user:cookiemonster)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/2d/bb/bd/2dbbbdf4ee54174977d0f180979d78c9.jpg",
caption:"Gimme da cookies!", location:"Sesame Street", user:cookiemonster)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/b3/f5/32/b3f532dd7e141381f36d1fdd53d46626.jpg",
caption:"Cookies?", location:"Sesame Street", user:cookiemonster)

Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/ad/b0/1f/adb01f5951db6b188303947896c0f149.jpg",
caption:"I'm ready! I'm ready! I'm ready!... for krabby patties", location:"Bikini Bottom", user:spongebob)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/33/18/33/33183365ca5ff7039f66d5c6eb5a1081.jpg",
caption:"Keep calm and have a krappy patty", location:"Bikini Bottom", user:spongebob)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/474x/c2/ee/51/c2ee516acc76444961a742de1cea102c.jpg",
caption:"Just one bite", location:"Bikini Bottom", user:spongebob)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/8a/36/a0/8a36a02f9f4920de85e6e015f56cfab9.jpg",
caption:"Krabby patty!!", location:"Bikini Bottom", user:spongebob)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/68/49/6a/68496a7e448948e6485594dbd9fc8167.jpg",
caption:"mmmm...krabby patty", location:"Bikini Bottom", user:spongebob)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/cf/68/69/cf6869c11147c2be38988b7be327815b.jpg",
caption:"I love krabby patties!", location:"Bikini Bottom", user:spongebob)

Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/91/2e/cb/912ecb514343f817608597e3e145a7e4.jpg",
caption:"Cowabunga, dude!",location:"NYC", user:mikey)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/30/da/55/30da5544880879eac6758cd92f311264.jpg",
caption:"Pizza!",location:"NYC", user:mikey)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/b8/e8/63/b8e863a728e7701044e072d251f53784.jpg",
caption:"Pizza party!",location:"NYC", user:mikey)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/29/20/7b/29207bb53322bed04ee05f5ec7a9a9e2.jpg",
caption:"Pizza Time!",location:"NYC", user:mikey)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/ac/92/f7/ac92f71e4b180095c51607779d3ec570.jpg",
caption:"Keep calm and eat pizza",location:"NYC", user:mikey)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/f7/7c/65/f77c65fa142cbbab52a91755344d1be1.jpg",
caption:"Wise man say, 'Forgiveness is divine, but never pay full price for late pizza'",location:"NYC", user:mikey)

Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/37/65/1e/37651e890b864f6dc55782a5d30fa761.jpg",
caption:"I don't eat food that my food eats", location:"Pawnee, Indiana", user:ron_swanson)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/5e/62/fc/5e62fcbda2215b3c3c7d1678896515ec.jpg",
caption:"When I eat. It is the food that is scared.", location:"Pawnee, Indiana", user:ron_swanson)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/3c/9b/11/3c9b111903af08ff01c02d04bbb0083b.jpg",
caption:"Turf and turf", location:"Pawnee, Indiana", user:ron_swanson)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/9e/7f/8a/9e7f8a328950cc854a78d2eef797c3c1.jpg",
caption:"mm", location:"Pawnee, Indiana", user:ron_swanson)

Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/d2/e5/b1/d2e5b19a54a8e8edb6bedda7b42e1e51.jpg",
caption:"When you have been trained, you may eat",location:"Valley of Peace", user:po)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/14/6c/fd/146cfd8f03ff15789a11ff97552478a4.jpg",
caption:"I eat when I'm upset, okay",location:"Valley of Peace", user:po)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/e4/0e/c0/e40ec082a21246e5a62cffbfaeb92a9c.jpg",
caption:"oooooo, dumplings",location:"Valley of Peace", user:po)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/95/eb/5f/95eb5fd94e0397e1ede71da468c8f379.jpg",
caption:"DUMPLINGS!",location:"Valley of Peace", user:po)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/02/de/6f/02de6f6cbe1b24529c7ba43c6dccbaba.jpg",
caption:"give meee",location:"Valley of Peace", user:po)

Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/70/aa/d5/70aad59dbc6a3df605a338b0a9b8b68f.jpg",
caption:"mmmm...ramen...",location:"Konoha", user:naruto)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/a2/8e/b2/a28eb2113030c945c975d55a1a741c5a.jpg",
caption:"that's my ninja way",location:"Konoha", user:naruto)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/b9/b0/44/b9b04489f26ee31abb4dc723e2e64db5.jpg",
caption:"I LOVE RAMEN!",location:"Konoha", user:naruto)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/9b/20/02/9b200291205af987a361e34b47126873.jpg",
caption:"Ramen?",location:"Konoha", user:naruto)

Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/70/2a/01/702a01e55313efd3d1fe442474b02330.jpg",
caption:"If everything is honey, and I am what I eat, I must be made of honey..and life is very sweet!", location:"Hundred Acre Wood", user:pooh)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/ed/7a/56/ed7a566727a148473993fb153fc7b256.jpg",
caption:"I love honey", location:"Hundred Acre Wood", user:pooh)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/19/9b/11/199b1166b22a9305d3f8026773928d50.jpg",
caption:"A day without a friend is like a pot without a single drop of honey left inside", location:"Hundred Acre Wood", user:pooh)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/4a/ec/09/4aec091ea37c9ac869f030b455618f8b.jpg",
caption:"Hunny!", location:"Hundred Acre Wood", user:pooh)
Image.create!(
image_url:"https://s-media-cache-ak0.pinimg.com/564x/e5/48/4b/e5484b615171472c20f39a23c3478dd7.jpg",
caption:"Hunny factory! Bees wanted!", location:"Hundred Acre Wood", user:pooh)

Image.create!(
image_url:"https://scontent.fewr1-2.fna.fbcdn.net/v/t31.0-8/981157_10154028649721018_8467759192555231027_o.jpg?oh=b80a1d5bcbbd42bbd2152bed955060af&oe=59368FA7",
caption:"Who's Bobby Flay?", location:"Paramus, New Jersey", user:skim)
