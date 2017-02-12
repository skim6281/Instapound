```js

{
  currentUser: {
    id: 1,
    username: "bot"
  },
  forms: {
    signUp: {errors, []},
    logIn: {errors, []},
    createImage: {errors: ["must select image"]}
  },
  user: {
    id: 1,
    username: "bot",
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
          username: "tob",
          body: "mmmmm"
        }
      },
      likes: {
        1: {
          id: 1,
          username: "bot"
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
