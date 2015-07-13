```js
angular.module('DoctorConfig', []).constant('DoctorConfig', {
  'server': 'http://localhost/drupal/api/',
  'pusherKey': 'foo'
});

```

```
    <script src="bower_components/pusher-angular/lib/pusher-angular.js"></script>
    <script src="bower_components/pusher/dist/pusher.js"></script>
    <script src="bower_components/angular-json-tree/src/json-tree.js"></script>
    <link rel="stylesheet" href="scripts/doctor/doctor.css">
```

```html
  <div doctor-directive></div>
```
