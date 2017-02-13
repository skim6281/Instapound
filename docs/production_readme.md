# Instapound

[Instapound Live][heroku]

[heroku]: www.heroku.com

Inspired by Instagram, Instapound is a food sharing app.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

##Features & Implementation

### Images

On the database side, the images are stored in the `Image` table, which contains columns for `id`, `user_id`, and `caption`. Upon navigating to a user profile page or the main page, an API call is made to the database which joins the user table and the image table on `user_id`.

Images are rendered in the `PostIndexItem` component.  The `PostIndexItem` is a subcomponent of the the `PostIndex` component which is rendered in the user profile page as well as the main page.

Images are uploaded using Cloudinary.

### Likes
Likes are stored in the database through a `Like` table.  It contains columns for `id`, `user_id`, and `image_id`.

The number of likes of an image is rendered with the image in the `PostIndexItem` component.

### Comments
Comments are stored in the database in the `Comment` table.  It contains columns for `id`, `body`, `user_id`, and `image_id`.

Comments are rendered in the `CommentItem` component under the `PostIndex` component.


### Following & Photo Feed
Followings are stored in the `Following` table.  Its columns are `id`, `followee_id`, and `follower_id`.

The photo feed is a list of posts/images posted by users being followed by the current user.

Followers and followings are rendered in the `FollowerContainer` and `FollowingContainer` components.  The photo feed is rendered in the `PhotoFeedContainer` component which is rendered under the `MainContainer` component.

### Future Directions

I plan to add more features on Instapound.  The features to be implemented are outlined below:

### Direct messaging
...

### Hashtags
...
