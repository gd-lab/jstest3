requirejs.config({
    "baseUrl": "./scripts",
    "shim": {
        "amplify": { "exports": 'amplify' }
    },
    "paths": {
        "jquery": ["https://code.jquery.com/jquery-1.11.3.min", "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min"],
        "bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min",
        "lodash": "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min",
        "amplify": "https://cdnjs.cloudflare.com/ajax/libs/amplifyjs/1.1.2/amplify.core"
    }
});

// Load the main app module to start the app
requirejs(["./main"]);
