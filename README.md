# With Love Charity - Prismic Template

## Preview
[![Template Preview](https://with-love-charity.vercel.app/homepage-screenshot.png)](https://with-love-charity.vercel.app/)

**[View Live Preview](https://with-love-charity.vercel.app/)**

**[View Storybook](https://with-love-charity.netlify.app/)**

## 🏁 &nbsp;Getting Started

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
