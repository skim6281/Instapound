# Instapound

[Instapound Live][heroku]

Inspired by Instagram, Instapound is a food sharing app.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

##Features & Implementation

### Images

On the database side, the images are stored in a table in the database, which contains columns for `id`, `user_id`, and `caption`. Upon navigating to a user profile page or the home page, an API call is made to the database which joins the user table and the image table on `user_id`.

Images are rendered in the `PostIndexItem` component and the `PhotoFeedItem` component.  The `PostIndexItem` is a subcomponent of the the `PostIndex` component which is rendered in the user profile page.  The `PhotoFeedItem` is a subcomponent of the `PhotoFeed` component which is rendered in the home page.

Images are uploaded using Cloudinary.

### Likes
Likes are stored in the database through a `like` table.  It contains columns for `id`, `user_id`, and `image_id`.

### Comments


### Following & Photo Feed


### Future Directions

I plan to add more features on Instapound.  The features to be implemented are outlined below:

### Direct messaging



### Hashtags
