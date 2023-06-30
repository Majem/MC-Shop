<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
![php-shield]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="./logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">MC-Shop</h3>

  <p align="center">
    A powerful Minecraft ItemShops management platform
    <br />
    <a href="https://github.com/Majem/MC-Shop/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Live</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#Getting Started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

MC-Shop is a one-of-a-kind platform that allows users to easily create their own dedicated store for the MineCraft server.



### Built With

* [![Vue][Vue.js]][Vue-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Tailwind][TailwindCSS]][tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is the manual that will allow you to install MC-Shop on your environment


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Majem/MC-Shop.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Edit your `.env` file
   ```dotenv
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=mc_store
   DB_USERNAME=root
   DB_PASSWORD=
   ```
4. Make the migration
   ```sh
   php artisan make:migration
   ```
5. Run the server locally
   ```sh
   php artisan serve
   ```
   or
    ```sh
   php artisan serve --port=80
   ```


<!-- USAGE EXAMPLES -->


<!-- ROADMAP -->
## Roadmap

- [ ] Subscriptions Plans
- [ ] RCON Library
- [ ] Crypto Currency payment method
-  Shops
    - [ ] Discord Integration
    - [ ] Lottery System

See the [open issues](https://github.com/Majem/MC-Shop/issues) for a full list of proposed features (and known issues).


<!-- CONTACT -->
## Contact

Mateusz Maciejewski - kontakt@majem.dev

Project Link: [https://github.com/Majem/MC-Shop](https://github.com/Majem/MC-Shop)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[php-shield]: https://img.shields.io/badge/php-8.2-blue
[license-shield]: https://img.shields.io/badge/license-MID-orange
[license-url]: https://github.com/Majem/MC-Shop/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/LinkedIN-blue?logo=linkedin
[linkedin-url]: https://www.linkedin.com/in/mateusz-maciejewski-621148249/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[TailwindCSS]: https://img.shields.io/badge/Tailwind%20CSS-white?style=for-the-badge&logo=tailwindcss
[Laravel-url]: https://laravel.com
[tailwind-url]: https://tailwindcss.com/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
