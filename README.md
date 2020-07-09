<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="./src/assets/logo-green.png" width="300px" />
  <br>
  FastFeet Mobile
</h1>

<h3 align="center">
:computer: Web version <a href="https://github.com/gabrielbarth/fastfeet-web">here</a>
<br>
:floppy_disk: Backend version <a href="https://github.com/gabrielbarth/fastfeet-backend"> here</a>
</h3>

:us:
<br>
Mobile aplication that allows delivery management for deliverymen. It was developed for GoStack10 bootcamp final challange.
<br>
<br>
<span>&#x1f1e7;&#x1f1f7;</span>
<br>
Aplicativo para permitir gestão de encomendas pelos entregadores. Desenvolvido durante o desafio final do bootcamp GoStack10.


## :mag_right: Overview

This application allows:

- See all deliveries, its status and data;
- Change status of a delivery: WITHDRAWAL and FINISH;
- Take a picture about recipient signature to confirm that delivery;
- Report a problem of a delivery to administrator;
- See the problems of a delivery.


#### :rocket: See about this challange [here](https://github.com/Rocketseat/bootcamp-gostack-desafio-10) 

##  :iphone:  Interfaces view

<p align="center">
  <img alt="IMAGE.GIF" title="html-image" src="./app-images/gif1.gif" width="800px" /> 
</p>
<p align="center">
  <img alt="IMAGE.GIF" title="html-image" src="./app-images/gif2.gif" width="800px" /> 
</p>


## :link: Project dependencies

:heavy_check_mark: [**@react-navigation/native (v5)**](https://reactnavigation.org/) `// routing and navigation for your React Native apps` <br>
:heavy_check_mark: [**unform/mobile**](https://github.com/Rocketseat/unform) `// rocketseat ::heart:: library that helps you creating beautiful forms` <br>
:heavy_check_mark: [**axios**](https://github.com/axios/axios)  `// promise based HTTP client for the browser and node.js` <br>
:heavy_check_mark: [**date-fns**](https://date-fns.org/) `// library to handle with date` <br>
:heavy_check_mark: [**styled-components**](https://styled-components.com/) `// allows to write actual CSS code to style components` <br>
:heavy_check_mark: [**redux**](https://redux.js.org/) `// allows manage app global state` <br>
:heavy_check_mark: [**redux-saga**](https://github.com/redux-saga/redux-saga) `// allows manage app global state using middlewares (each other things)` <br>
:heavy_check_mark: [**redux-persist**](https://github.com/rt2zz/redux-persist) `// Persist and rehydrate a redux store.` <br>
:heavy_check_mark: [**reactotron-react-native**](https://github.com/infinitered/reactotron) `// desktop app for inspecting informations through the app` <br>
:heavy_check_mark: [**prop-types**](https://www.npmjs.com/package/prop-types) `//  used to document the intended types of properties passed to components` <br>
:heavy_check_mark: [**immer**](https://github.com/immerjs/immer) `//  allows create the next immutable state by mutating the current one` <br>
:heavy_check_mark: [**polished**](https://polished.js.org) `// a lightweight toolset for writing styles in JavaScript` <br>
:heavy_check_mark: [**react-native-simple-toast**](https://www.npmjs.com/package/react-native-simple-toast) `// a simple toast for react-native` <br>
:heavy_check_mark: [**react-native-camera**](https://github.com/react-native-community/react-native-camera) `// allows using camera for react-native` <br>
:heavy_check_mark: [**react-native-vector-icons**](https://github.com/oblador/react-native-vector-icons) `// icons for react-native` <br>


**Development dependencies:** <br>

:heavy_check_mark: [**eslint**](https://eslint.org/) `// allows find and fix problems in your JavaScript code` <br>
:heavy_check_mark: [**prettier**](https://prettier.io/)  `//code formatter, makes code prettier` <br>


## :computer: Getting Started - Running on your machine

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### :ballot_box_with_check: Prerequisites

Check the [backend repository](https://github.com/gabrielbarth/fastfeet-backend) and follow the steps to run this project as well.


### :hammer_and_wrench: Installing

Now follow the bellow steps to run project on your machine:

**1.** Clone this repo using `git clone https://github.com/gabrielbarth/fastfeet-mobile.git`. <br />
**2.** Move to the appropriate directory: `cd fastfeet-mobile`.<br />
**3.** Run `yarn` to install dependencies.<br />
**4.** Now consider running the follow commands to ports redirect: `adb reverse tcp:9090 tcp:9090` (for using reactotron),`adb reverse tcp:3333 tcp:3333` and `adb reverse tcp:8181 tcp:8181` (for physical device) <br />
**5.** Remember running backend project and databases on docker;
**6.** Run `react-native run-android` and after `react-native start` to run the app on your device or simulator.<br/>

## :bulb: :handshake: Contributing
Please feel free to contributing and submitting pull requests.

## :pray: Acknowledgments
* Rocketseat team
* Rocketseat community

## :thinking: Any question?
**Contact me on my social medias:**<br>
[LinkedIn](https://www.linkedin.com/in/gabriel-barth-silv%C3%A9rio-6081ba153/) <br>
[Instagram](https://instragram.com/gb1.dev) <br>
[YouTube](https://www.youtube.com/channel/UCmA_19d5L3WTFdDfwQ6Uenw) <br>
[Discord](https://www.wikihow.com/Add-Friends-on-Discord) (**gabrielbarth1#0492**)<br>
Or send me an email :incoming_envelope:: gabrielbarth.dev@gmail.com.
<br>
<br>
<p align="center">
  Made with ♥ by <a href="https://gabrielbarth.com/">Gabriel Barth</a>
</p>


