<template>
  <Nav />
  <Header />
  <Main />
  <Footer />
</template>
<script>
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./views/Main";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Nav,
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
/* customized css variables */
:root {
  --bs-primary: #36cf8a;
  --bs-secondary: #808080;
  --bs-success: #49b591;
  --bs-info: #07a1b6;
  --bs-warning: #ffc107;
  --bs-danger: #d22f4d;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
}
* {
  transition: all 0.7s ease-in-out;
}
html {
  scroll-behavior: smooth;
}
datalist {
  position: absolute;
  background-color: rgb(189, 41, 41);
  font-family: sans-serif;
  font-size: 0.8rem;
}

option {
  background-color: rgb(82, 202, 162);
  padding: 4px;
  margin-bottom: 1px;
  cursor: pointer;
}

/*  **************** Containers **************** */
.container {
  width: 85%;
  margin: 0 auto;
  padding: 0;
}
section,
#contact-us,
#infos {
  padding: 3rem 7%;
}
section:nth-child(odd) .card-body {
  background: #fff;
}
section:nth-child(odd) {
  background-color: var(--bs-light);
}
section:first-child {
  background-color: #fff;
}
section:first-child .card-body {
  background-color: var(--bs-light);
}
.row {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  padding: 0;
  margin: 0;
}
.row > * {
  padding: 0;
  margin: 0;
}
.card {
  padding: 0;
  border: none;
}
.card-body {
  background: var(--bs-light);
  padding: 0.7rem 1.5rem;
}
.card-img {
  border: none;
  border-radius: 0;
}
/*  **************** List And Links **************** */
li {
  list-style: none;
}
.list-group li {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.75rem;
}
.list-group li p {
  margin: 0;
}
.page-link:focus {
  color: inherit;
  background-color: none;
  outline: none;
  box-shadow: none;
}
a {
  text-decoration: none;
}
/*  **************** Forms and Inputs **************** */
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--bs-light);
}
.d-flex:focus,
.form-control:focus {
  outline: none;
  background-color: #fff;
  border-color: none;
  box-shadow: none;
}
form .form-control {
  width: 85%;
  color: var(--bs-light);
  background: none;
  border: none;
  border-radius: 5px;
  border-bottom: 1px solid var(--bs-light);
}
/*  **************** Icons and Buttons **************** */
i.icon {
  text-decoration: none;
  color: var(--bs-secondary);
  margin: 0;
  margin-right: 1rem;
}
i.icon.facebook:hover {
  color: #3b5998;
}
i.icon.twitter:hover {
  color: #00aced;
}
i.icon.linkedin:hover {
  color: #007bb6;
}
i.icon.reddit:hover {
  color: #ff4500;
}
i.icon.instagram:hover {
  color: #e1306c;
}
.btn-primary {
  background: var(--bs-primary);
  color: var(--bs-dark);
  border: none;
}
.btn-primary:hover {
  background: var(--bs-primary);
  color: var(--bs-dark);
  border: none;
}
.btn-outline-primary {
  border-color: var(--bs-primary);
  color: var(--bs-primary);
}
.btn-outline-primary:hover {
  background: var(--bs-primary);
  border-color: var(--bs-primary);
  color: var(--bs-dark);
}
.btn-secondary {
  background: var(--bs-secondary);
  color: var(--bs-dark);
  border: none;
}
.btn-outline-secondary {
  border-color: var(--bs-secondary);
  color: var(--bs-secondary);
}
.btn-info {
  background: var(--bs-info);
  color: var(--bs-dark);
  border: none;
}
.btn-outline-info {
  border-color: var(--bs-info);
  color: var(--bs-info);
}
.btn-success {
  background: var(--bs-success);
  color: var(--bs-dark);
  border: none;
}
.btn-danger {
  background: var(--bs-danger);
  color: var(--bs-dark);
  border: none;
}
/*  **************** Borders and Backgrounds **************** */
.border-primary {
  border-color: var(--bs-primary) !important;
}
.border-secondary {
  border-color: var(--bs-secondary) !important;
}
.border-info {
  border-color: var(--bs-info) !important;
}
.border-danger {
  border-color: var(--bs-danger) !important;
}
.border-success {
  border-color: var(--bs-success) !important;
}
.bg-primary {
  background-color: var(--bs-primary) !important;
}
.bg-secondary {
  background-color: var(--bs-secondary) !important;
}
.bg-danger {
  background-color: var(--bs-danger) !important;
}
.bg-success {
  background-color: var(--bs-success) !important;
}
/* X-Small devices (portrait phones, less than 576px)*/
/* No media query for `xs` since this is the default in Bootstrap*/
/*  ---------------------------------------------------------------- */
/* Small devices (landscape phones, 300px and up)*/
@media (min-width: 300px) {
  #teachers .card-img {
    height: 300px;
  }
  #courses .card-img {
    height: 270px;
  }
}
@media (min-width: 568px) {
}
/* Medium devices (tablets, 720px and up)*/
@media (min-width: 720px) {
  #services .row {
    grid-template-columns: 1fr;
  }
  #infos.row .row,
  #teachers .row {
    grid-template-columns: 1fr 1fr;
  }
  #infos.row .row {
    grid-gap: 1rem;
  }
  #features .row,
  #courses .row,
  #reviews .row {
    grid-template-columns: repeat(3, 1fr);
  }
  #contact-us.row {
    grid-template-columns: 3fr 2fr;
  }
  #contact-us .card.row {
    grid-template-columns: 2fr 3fr;
  }
  #infos.row {
    grid-template-columns: 1fr 3fr;
  }
  #footer .card img {
    height: 100%;
  }
}
/* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {
  #teachers .row {
    grid-template-columns: repeat(4, 1fr);
  }
  #services .row {
    grid-template-columns: 1fr 1fr;
  }
}
/* X-Large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
}
/* XX-Large devices (larger desktops, 1400px and up)**/
@media (min-width: 1400px) {
  .row {
    max-width: 80%;
    grid-gap: 3rem;
    margin: auto;
  }
}
@media (min-width: 2400px) {
  #teachers .card-img {
    height: 550px;
  }
  #courses .card-img {
    height: 470px;
  }
  body {
    font-size: 2.3em;
  }
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 4rem;
  }
  h5 {
    font-size: 3rem;
  }
  h6 {
    font-size: 2rem;
  }
  .dropdown-menu,
  .dropdown-item,
  .navbar-brand,
  .form-control,
  .list-group li span,
  .btn,
  .btn-sm {
    font-size: inherit;
  }
  nav.navbar i.icon {
    width: 62px;
    height: 62px;
    font-size: inherit;
  }
  .info .avatar {
    width: 92px;
    height: 92px;
  }
  .reviewer div {
    line-height: inherit;
  }
}
</style>
