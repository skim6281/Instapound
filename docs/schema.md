# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_url     | string    |

## images
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
image_url       | string    | not null
caption         | string    |
location        | string    |
user_id         | string    | not null, foreign key (references users), indexed

## likes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed, unique [image_id]
image_id        | integer   | not null, foreign key (references images), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
image_id    | integer   | not null, foreign key (references images), indexed

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followee_id | integer   | not null, foreign key (references users), indexed, unique [follower_id]
follower_id | integer   | not null, foreign key (references users), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image_id    | integer   | not null, foreign key (references images), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
