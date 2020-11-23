# With Love Charity - Prismic Template

## Preview
[![Template Preview](https://with-love-charity.vercel.app/homepage-screenshot.png)](https://with-love-charity.vercel.app/)

**[View Live Preview](https://with-love-charity.vercel.app/)**

**[View Storybook](https://with-love-charity.netlify.app/)**

## Get Started!

Here's a step-by-step tutorial to get started using the With Love Charity Template.

### Download and installation

Clone this repository and install its dependencies:

```bash
$ git clone https://github.com/withloveinternet/with-love-charity
$ cd with-love-charity
$ yarn install # if you use npm: `$ npm install`
```

### Setting up Prismic and Slice Machine

If you do not own a Prismic account yet you can **create one** for free [here](https://prismic.io/dashboard/signup?redirectUri=/dashboard) or by using the CLI:

```bash
$ yarn prismic signup
# The CLI will then guide you through the process...
```

Once you have a Prismic account, or if you already had one, **log in** within the CLI:

```bash
$ yarn prismic login
# The CLI will then guide you through the process...
```

When logged in, you can then **bootstrap** your Slice Machine project, this will create you a Prismic repository for this project:

```bash
$ yarn prismic sm --bootstrap
# The CLI will then prompt you for a Prismic repository name...
```

### Launching the Slice Builder

To launch the Slice Builder you need to run 2 terminals: one for Storybook, one for the Slice Builder itself.

```bash
# On a first terminal
$ yarn storybook # or with npm: `$ npm run storybook`

# On the second terminal
$ yarn slicemachine
```

This will launch Storybook on port `8888` and the Slice Builder on port `9999`

### Select the slices you want and push them to Prismic

Open your browser at http://localhost:9999. Now you can select the slices you want and push them to Prismic

![Prismic Slices](https://with-love-charity.vercel.app/SliceMachine-UI.png)

![Push Prismic Slice](https://with-love-charity.vercel.app/localhost-9999-slices-AboutIntro.png)
