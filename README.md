<p align="center">
<a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a>
<a href="https://vuejs.org" target="_blank"><img src="https://gateway.pinata.cloud/ipfs/QmcpRC8XNi8Ko7NcdpJebWw3aiY2LKojja3btEiFnXnVk3" width="300"></a>
</a>
<a href="https://www.php.net"><br><img src="https://gateway.pinata.cloud/ipfs/QmfFReBkqLpRnEYz4zgSnU8YMHXQaPd5D8bfC8t6R1MuZj" width="200"></a> 
<a href=""><img src="https://gateway.pinata.cloud/ipfs/QmXX2CER9JLqc9awqBtufdJ5ZtCPjweKbfdBzUqMra4K5R" width="200"></a>
</p>

# About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

-   [Simple, fast routing engine](https://laravel.com/docs/routing).
-   [Powerful dependency injection container](https://laravel.com/docs/container).
-   Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
-   Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
-   Database agnostic [schema migrations](https://laravel.com/docs/migrations).
-   [Robust background job processing](https://laravel.com/docs/queues).
-   [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Installation Via Composer :

```
> composer create-project laravel/laravel example-app

> cd example-app

> php artisan serve
```

## The Laravel Installer :

```
> composer global require laravel/installer

> laravel new example-app

> cd example-app

> php artisan serve
```

# About Vue.js

Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex, such as:

The above example demonstrates the two core features of Vue:

-   Declarative Rendering: Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state.

-   Reactivity: Vue automatically tracks JavaScript state changes and efficiently updates the DOM when changes happen.

## Vuejs official Installation Guide :

```
> npm init vue@latest
```

#### This command will install and execute create-vue, the official Vue project scaffolding tool. You will be presented with prompts for a number of optional features such as TypeScript and testing support:

```
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

#### If you are unsure about an option, simply choose No by hitting enter for now. Once the project is created, follow the instructions to install dependencies and start the dev server:

```
> cd <your-project-name>
> npm install
> npm run dev
```

## composer install VueJs UI :

```
> composer require laravel/ui --dev
> php artisan ui vue --auth
```

## Vitejs VueJs official Installation Guide :

```
> npm create vite@latest my-vue-app -- --template vue
> cd my-vue-app
> npm install
> npm run dev
```

# About PHP

php is a server-side scripting language designed for web development. It is a cross-platform, HTML-embedded interpreter.

# environment variables of laravel :

-   config to connect to the database
-   config to connect to the redis server
-   config to connect to the filesystem
-   config to connect to the mailer
-   config to connect to the aws
-   config to connect to the app_url

```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```
