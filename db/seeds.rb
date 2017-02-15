# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(username: "guest", password: "go_guest_go")
User.create!(username: "skim", password: "go_skim_go")
User.create!(username: "spongebob", password: "go_spongebob_go")
User.create!(username: "mikey", password: "go_mikey_go")
User.create!(username: "homer", password: "go_homer_go")
