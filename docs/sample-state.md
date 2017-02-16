```js

{
  session: {
    currentUser: {
      id: 1,
      username: "guest"
    },
    errors: [],
    formType: "Log in"
  },
  user: {
    id: 1,
    username: "guest",
    profilePic_url: "app/assets/images/bot.png",
    followers: [2, 3, 4],
    following: [2, 3, 5, 6],
    images: [1, 2, 3, 4]
  },
  image: {
    1: {
      url: "app/assets/images/something.png",
      user_id: 1,
      caption: "looks tasty",
      likes: 3,
      comments: {
        1: {
          username: "bot",
          body: "mmmmm"
        }
      },
      likes: {
        1: {
          id: 1,
          username: "guest"
        }
      }
    }
  },
  follows: {
    1: {
      follower_id: 1,
      followee_id: 2
    }
  }
}
```
