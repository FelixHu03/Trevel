{
    "version": 2,
      "framework": null,
    "functions": {
        "api/index.php": { "runtime": "vercel-php@0.6.0" }
    },
    "routes": [
        {
            "src": "/build/(.*)",
            "dest": "/public/build/"
        },
        {
            "src": "/assets/(.*)",
            "dest": "/assets/$1"
        },
        {
            "src": "/js/(.*)",
            "dest": "/js/$1"
        },
        {
            "src": "/storage/(.*)",
            "dest": "/storage/$1"
        },

        {
            "src": "/vendor/(.*)",
            "dest": "/public/vendors/"
        },
        {
            "src": "/(.*)",
            "dest": "/api/index.php"
        }
    ],
    "env": {
        "APP_ENV": "production",
        "APP_DEBUG": "false",
        "APP_URL": "https://mdp-vercel.vercel.app/",
 
        "APP_CONFIG_CACHE": "/tmp/config.php",
        "APP_EVENTS_CACHE": "/tmp/events.php",
        "APP_PACKAGES_CACHE": "/tmp/packages.php",
        "APP_ROUTES_CACHE": "/tmp/routes.php",
        "APP_SERVICES_CACHE": "/tmp/services.php",
        "VIEW_COMPILED_PATH": "/tmp",
 
        "CACHE_DRIVER": "array",
        "LOG_CHANNEL": "stderr",
        "SESSION_DRIVER": "cookie"
    }
}