# example search with ember

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## demo url

http://jamemackson.github.io/example-search-with-ember

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd example-search-with-ember`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).


## approach to challenge

1) implement core logic
  * `ember new example-search-with-ember`
  * `ember generate route index`
  * `ember generate controller index` (handle the query param)
  * define source data as json file (can be easily replaced with real API later)
  * consume the json data and display on front-end
  * implement search and persist using url parameter
2) make it look nice
  * `ember install ember-bootstrap`
  * add some simple css to style layout
3) deploy to github pages
  * `ember install ember-cli-deploy ember-cli-deploy-build ember-cli-deploy-git`
  * configure for deployment to gh-pages branch





### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* `yarn deploy`

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
