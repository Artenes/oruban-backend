<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/oruban-backend-icon.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Oruban (backend)</h3>

  <p align="center">
    A worked hours manager to keep track of the amount of hours you worked at your company.
    <br />
    <a href="https://github.com/Artenes/oruban-backend/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://artenesbok.com/oruban-frontend">View Demo</a>
    ·
    <a href="https://github.com/Artenes/oruban-backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/Artenes/oruban-backend/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

Oruban is an app that will help you keep track of working hours at the place where you work, mainly if you need to keep a close eye at your hours and your company does not provide a reliable way to manage them already.

This is the backend part of the application. If you want to check out the frontend part, go give a look at [oruban-frontend](https://github.com/Artenes/oruban-frontend).

### Built With
This is a REST API made in Javascript using the following tools:
* [Node.js](https://nodejs.org) for the base of the application.
* [Express](https://expressjs.com) for routing.
* [Mongo DB](https://mongodb.com) and [Mongoose](https://mongoosejs.com/) for data storage and access.
* [Eslint](https://eslint.org), [Prettier](https://prettier.io) and [Editor config](https://editorconfig.org) for code quality.
* [Jes](https://jestjs.io) for testing.
* [Dotenv](https://github.com/motdotla/dotenv) for environment configuration.



<!-- GETTING STARTED -->
## Getting Started

This repository is not so usefull by its own. You need the [frontend application](https://github.com/Artenes/oruban-frontend) to actually make use of it, but if you want to get the backend to see how it works follow these steps.

### Prerequisites

You will need `Node.js`, `yarn` and `docker` installed.

- Node.js is the runtime for the application.
- Yarn is the package manager that will install the application dependencies.
- Docker will be used to manage a instance of a Mongo database.

When all the dependencies above are installed, make sure to have a container with Mongo DB running.

```sh
docker run --name oruban-mongo -p 27017:27017 -d -t mongo
```

### Installation

1. Clone the repo and enter in the directory
```sh
git clone https://github.com/Artenes/oruban-backend && cd oruban-backend
```
2. Install packages
```sh
yarn
```
3. Make a coyp of .env file and edit its informations
```sh
cp .env.example .env && vim .env
```
4. Run the application
```sh
yarn dev
```
5. Running tests (optional)
```sh
yarn test
```

<!-- USAGE EXAMPLES -->
## Usage

First create an employee
```sh
curl -X POST \
	 -H "Content-Type: application/json" \
	 -d '{"email":"email@email.com", "password":"secret"}' \
	 http://localhost:3333/employees
```

Then authenticate with it
```sh
curl -X POST \
	 -H "Content-Type: application/json" \
	 -d '{"email":"email@email.com", "password":"secret"}' \
	 http://localhost:3333/sessions
```

The response should be the `JWT` token that you will use to access other routes.

To start registering hours, you must provide the hours restrictions from your company.

```sh
curl -X POST \
	 -H "Content-Type: application/json" \
	 -H "Bearer: JWT-TOKEN-HERE" \
	 -d '{"daily_hours":"08:00", "lunch_hours":"01:00"}' \
	 http://localhost:3333/contract
```

Now, start inserting your clock in/out.

```sh
curl -X POST \
	 -H "Content-Type: application/json" \
	 -H "Bearer: JWT-TOKEN-HERE" \
	 -d '{"time":"2019-02-12T08:30:27-04:00", "reason":"IN"}' \
	 http://localhost:3333/clocks
```

The reason can be `IN`, `LUNCH_OUT`, `LUNCH_IN`, `OTHERS_OUT`, `OTHERS_IN`, `OUT`.

An `OUT` means your day is finished and the amount of hours worked (or not) will be added to your balance.

```sh
curl -X GET \
	 -H "Bearer: JWT-TOKEN-HERE" \
	 http://localhost:3333/balance
```

For more detail usage, please refer to the [Documentation](https://github.com/Artenes/oruban-backend/wiki/documentation).



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Artenes/oruban-backend/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Artenes Nogueira - [artenes.nogueira@gmail.com](mailto:artenes.nogueira@gmail.com)

My blog: [http://artenesbok.com/](http://artenesbok.com/)

My Linkedin: [https://www.linkedin.com/in/artenes/](https://www.linkedin.com/in/artenes/)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Best README template](https://github.com/othneildrew/Best-README-Template) for the great README template.
* [Rocketseat](https://rocketseat.com.br/) for teaching how to make Node.js apps.
* [24 hours by panyawut norrasing from the Noun Project](https://thenounproject.com/search/?q=hours&i=2866380) for the application icon.





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Artenes/oruban-backend.svg?style=flat-square
[contributors-url]: https://github.com/Artenes/oruban-backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Artenes/oruban-backend.svg?style=flat-square
[forks-url]: https://github.com/Artenes/oruban-backend/network/members
[stars-shield]: https://img.shields.io/github/stars/Artenes/oruban-backend.svg?style=flat-square
[stars-url]: https://github.com/Artenes/oruban-backend/stargazers
[issues-shield]: https://img.shields.io/github/issues/Artenes/oruban-backend.svg?style=flat-square
[issues-url]: https://github.com/Artenes/oruban-backend/issues
[license-shield]: https://img.shields.io/github/license/Artenes/oruban-backend.svg?style=flat-square
[license-url]: https://github.com/Artenes/oruban-backend/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/artenes/
[product-screenshot]: images/screenshot.png
