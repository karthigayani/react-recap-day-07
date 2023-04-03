### recap notes

- What is the comment to create a react App ?
  `npx create-react-app appname`
  `cd ..` - one folder back
- What is the comment to run a react App ?
  `npm start`
- What are the points for creating(declaring) a component?
  `1. component name should starts with capital letter`
  `2. It should return atleast one JSX element`
- Which element is used to start react app ?
  `<div id="root"></div>` which is in index.html
- when <noscript> content display ?
  `When you OFF the Javascript in browser ` it will display.
- Why we use className?
  `1. At the end JSX converted into JS, So it will make conflict`
  `2. Reserved keyword`
- Who convert JSX into JS?
  `Webpack + Babel`

### How to change color format while inspect ?

1. click on shift and place the curser on color box , color format will change.
2. when you click on color box while inspecting, it opens a color box dialogue box, in that you have an arrow keys to change the color format of the particular color.

### Adding font awesome feature

- google search -> font awesome react -> open first link -> copy the codes under the heading `Get started` enter the comments one-by-one in your terminal.
- import the particular icon
- icons -> type the icon you want in search box -> then click on free -> choose the icon -> copy the codes from -> react -> Individual Import.

### Adding Material UI feature

- Intro : Nov-24- 1.00 min to 1.18 min
- like bootstrap
- more preference is Material UI compared to bootstrap
- Intention : not only for app decoration , also we are going to learn how to apply the external library in your react App.
- introduced by : Google
- learn more : google -> search -> material design -> open the first link
- material design -> instruction for App design

### installation steps.

- before going to install mui , always stop when the react app is running .
- terminal -> new terminal -> once you get your App path in terminal, follow the below steps.
- google -> search -> mui.com -> open first link -> click on get started -> see LHS -> click on installation -> copy the first npm link and paste it in your terminal and press enter ->
- copy the link under the heading Google Web Fonts and paste it in index.html file which is in public at the head tag.
- copy the npm link under the heading Icons and paste it in your terminal and press enter.
- copy the link under the heading Google Web Fonts next to the heading Icons and paste it in index.html file which is in public at the head tag.

### Check whether the installations completed or not by

- src -> package.json -> check under the dependencies
- check the links are present or not in the index.html file at the head tag
- Once the mui installations completed -> at the terminal -> type npm start and press enter.

### mui Components usage in react app

- google -> search -> mui.com -> open first link -> click on get started -> see LHS -> click on Components -> click on For eg: button -> choose the button style you want -> copy the particular element and paste in you react app where you want -> then at the above box you can see the tag sign<> -> click on it -> copy the import statement and paste it at the top of your folder. -> save and run the program.

### shortcuts

`ctrl + shift + p` -> wrap -> div/section/p...
don't want to do means click `Esc`

### Renaming symbol

right click on the symbolname -> select Rename Symbol -> Enter the name you want

### Applied :root variable concepts, applied calc
