## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**MainContainer**
 - Navbar
 - PhotoFeedContainer

**PhotoFeedContainer**
 - PostIndex
  + PostIndexItem
   - CommentContainer
    + CommentItem


**ProfileContainer**
 - Navbar
 - PostIndex
  + PostIndexItem

**FollowerContainer**
 - UserIndex
  + UserIndexItem

**FollowingContainer**
 - UserIndex
  + UserIndexItem

**PostContainer**
 - ImageDetails
 - CommentContainer
  + CommentItem

**CommentContainer**
 - CommentItem

**NewImageContainer**
 - NewImage

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "AuthFormContainer" |
| "/" | "MainContainer" |
| "/:username/" | "ProfileContainer" |
| "/:username/followers" | "FollowerContainer" |
| "/:username/following" | "FollowingContainer" |
| "/p/:imageId/?taken-by=:username" | "PostContainer" |
| "/p/new" | "NewImageContainer" |
