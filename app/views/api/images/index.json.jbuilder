json.array! @images.each do |image|
  json.partial! "api/images/image", image: image
end
