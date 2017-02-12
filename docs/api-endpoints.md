# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users`
- `GET /api/users`
- `GET /api/users/:id`
- `PATCH /api/users/:id`
- `GET /api/users/:id/followers`
- `GET /api/users/:id/following`

### Session
- `POST /api/session`
- `DELETE /api/session`

### Images
- `POST /api/images`
- `GET /api/images`
- `DELETE /api/images/:id`
- `GET /api/images/:id/likes`
- `GET /api/images/:id/comments`

### Likes
- `POST /api/images/:id/likes`
- `DELETE /api/likes/:id`

### Comments
- `POST /api/images/:id/comments`
- `DELETE /api/comments/:id`
