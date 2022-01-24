ember-marker-io
==============================================================================

Adds a [marker.io](marker.io) service to your ember application to create and configure its feedback button and interact with the marker.io sdk from  anywhere in your application.

For more information about the marker.io sdk, see: https://github.com/marker-io/browser-sdk



Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-marker-io
```


Usage
------------------------------------------------------------------------------
To use marker.io, you will first need to load the widget with a destination ID. You can do this on app boot by adding a call to `loadWidget` to the `beforeModel` hook of your application route.

```js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
    ...
    @service marker;

    async beforeModel() {
        await this.marker.loadWidget(<DESTINATION ID>);
    }
    ...
}
```

The marker service can then be used to further configure and use the marker.io sdk through the following methods:

```show()```

```hide()```

```isVisible()```

```capture()```

```cancelCapture()```

```isExtensionInstalled()```

```setReporter()```

```unloadWidget()```

```setCustomData```


These mirror the methods of the [marker.io sdk](https://github.com/marker-io/browser-sdk) API

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
