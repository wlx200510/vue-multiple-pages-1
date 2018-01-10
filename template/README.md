# {{ name }}

> {{ description }}

## Features

1. [Vue2](https://github.com/vuejs/vue)
2. [Webpack3](https://github.com/webpack/webpack)
3. [ElementUI](https://github.com/ElemeFE/element)
4. [Eslint](https://github.com/eslint/eslint)
5. [Postcss](https://github.com/postcss/postcss)
6. [Less](http://lesscss.org/)
7. [Sass](https://github.com/webpack-contrib/sass-loader)
8. [VueRouter](https://github.com/vuejs/vue-router)
9. [mock.js](https://github.com/nuysoft/Mock)
10. [axios](https://github.com/axios/axios)

## Dev

``` bash
# serve with hot reload at localhost:8010
npm run dev

```

[http://localhost:8010/user/login.html](http://localhost:8060/user/login.html)

[http://localhost:8010/user/index.html](http://localhost:8060/user/index.html)

[http://localhost:8010/customer/index.html](http://localhost:8060/customer/index.html)

## Build

``` bash
# build for production with minification
npm run build // Firstly
node server.js  // Secondly

```
Then visit the pages
[http://localhost:2333/user/login.html](http://localhost:2333/user/login.html)

## Root Folder Structure

```bash
├── build
│   ├── build.js # build entry
│   ├── utils.js # tool funcs
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
│
├── config
│   ├── index.js  # config index settings port 8060
│   ├── dev.env.js # dev env
│   └── prod.env.js # prod build env
│
├── src  # main folder
│   ├── assets  # common assets folder
│   │   ├── img
│   │   │   └── logo.png
│   │   ├── js
│   │   └── css
│   ├── components # common components folder
│   │   └── modal.vue
│   └── pages  # pages
│       ├── user  # user part (folder name can be customized)
│       │   ├── login # login.html (folder name can be customized)
│       │   │   ├── app.js   # entry js (file name can't be customized unless you change the webpack.config.js)
│       │   │   ├── app.vue  # login vue (file name can be customized)
│       │   │   └── app.html # template html (file name can't be customized unless you change the webpack.config.js)
│       │   └── index # index.html
│       │       ├── app.js
│       │       ├── app.html
│       │       └── app.vue
│       └── customer # customer part (folder name can be customized)
│           └── home # home.html
│               ├── app.html
│               ├── app.js
│               ├── app.vue
│               ├── mock
│               │   └── index.js # mock.js to mock API
│               ├── router
│               │   └── index.js # vue-router use example
│               └── selfComponents
│                   └── notFound.vue # components example with vue-router
├── LICENSE
├── .babelrc          # babel config (es2015 default)
├── .eslintrc.js      # eslint config (eslint-config-vue default)
├── server.js         # port 2333
├── package.json
├── postcss.config.js # postcss (autoprefixer default)
├── webpack.config.js
└── README.md
```

## Dist Folder Structure

```bash
├── assets
│   ├── css
│   │   ├── customer
│   │   │   ├── home.css
│   │   │   └── home.css.map
│   │   ├── user
│   │   │   ├── index.css
│   │   │   ├── index.css.map
│   │   │   ├── login.css
│   │   │   └── login.css.map
│   │   ├── vendors.css
│   │   └── vendors.css.map
│   └── js
│       ├── customer
│       │   └── home.js
│       ├── user
│       │   ├── index.js
│       │   └── login.js
│       └── vendors.js
├── b02bdc1b846fd65473922f5f62832108.ttf
├── customer
│   └── home.html
├── logo.png
└── user
    ├── index.html
    └── login.html
```

For detailed explanation on how things work, checkout the [guide](https://github.com/wlx200510/vue-multiple-pages-cli)

settings can refer the [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack) just have fun!