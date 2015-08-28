# Sonorous

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

OKAY... Thanks ember-cli for the amazing set up. So much times was saved by all of the things generated for me and since their README told me so: here is where my introduction is going to live:

First, I want to talk about the API. I think the biggest headache and largest use of my time consuming the Echonest API. I found an add on and of course, thought 'sweet, magical things that do all of the stuff for me'. WRONG! I found out after banging my head against a wall for way more time that I should have, that the guys code was broken. So I had to pivot and create my own adapter to get what I needed from Echonest's API.

One of the other issues with the API, that I sadly discovered when I was too invested and time not would allow for me to start over. Each query to the API, only allowed for 20 results based on my query parameters. What this means for my app, is that there may be pages with nothing returned I suggest using New York as a state to get a bunch of good returns across multiple genres. States, leads me onto my next speed bump. You may have guessed by now that I needed to get the artist's state but, some records gave me the abbreviated state, some the full state. With my data sample already being small, I wanted to leverage everything I had and not lose extra records because of how the region data was returned to me. I got tripped up with implementing filterBy with multiple arguments

If I had more time: I would like to search a larger set of genres and find a way to get more results (probably leverage a different API because 20 hits for each query is not really ideal). I also want to add some kind of prompt in the event that no results are returned.

Workflow: I chose to use branches to help organize myself. I created a Trello board and tried to focus on small slices of the app at a time.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

