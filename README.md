# Sports API Backend

This API will allow the users of our react front-end application to CRUD sports and their teams.

This application uses token authentication instead of sessions.

## Resources

### Sport Teams
##### Routes Table
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET   | `/teams`             | `teams#index`    |
| GET   | `/teams/:id`             | `teams#show`    |
| POST   | `/teams`             | `teams#create`    |
| PATCH  | `/teams/:id` | `teams#update`  |
| DELETE | `/teams/:id`        | `teams#delete`   |


### Users
##### Routes Table
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |


### Team players
##### Routes Table
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/players/:teamId`             | `players#create`    |
| PATCH  | `/players/:teamId/:playerId` | `players#update`  |
| DELETE | `/players/:teamId/:playerId`       | `players#delete`   |