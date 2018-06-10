# tattletale
Realtime push notifications for your web app, powered by Pusher

[View tutorial](https://pusher.com/tutorials/realtime-notifications-nodejs)

## Description
The app's home page shows a list of articles. Each article can be edited by anyone. Whenever an article is edited, a push notification is sent to every other user on the site, and an "Updated" badge displays next to the article name in the article list.

## Prerequisites
- Node.js (v6.0.0 or higher) 
- MongoDB (v3.4.0 or higher)
- A [Pusher account](https://pusher.com/signup) and a [Pusher app credentials](http://dashboard.pusher.com/)

## Getting started
Clone the project:

```bash
git clone https://github.com/shalvah/tattletale
```

Put your Pusher app credentials in a `.env` file in the project root:
```
PUSHER_APP_ID=your-app-id
PUSHER_APP_KEY=your-app-key
PUSHER_APP_SECRET=your-app-secret
PUSHER_APP_CLUSTER=your-app-cluster
```

Look for these lines of JavaScript in `views/layout.hbs`:
```javascript
var pusher = new Pusher('YOUR_APP_KEY', {cluster: 'YOUR_APP_CLUSTER'});
```

Insert your Pusher app ID and cluster in the appropriate places.

Start your MongoDB server by running `mongod`.

Then:

```bash
node bin/seed.js
npm start
```

## Built With

* [Pusher](https://pusher.com/) - APIs for building realtime features
* [Node.js](http://nodejs.org)
* [HTML5 Notification API](https://developer.mozilla.org/en-US/docs/Web/API/notification)
