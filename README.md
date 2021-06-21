Setting up react native environment
https://reactnative.dev/docs/environment-setup
follow CLI instructions

other pre-requisits:
node
yarn `npm install -g yarn`
xcode (if on mac)
android studio (for either platform)
text editor - i recommend VSCode if you don't already have a preference

this is the query we're using on the Rick & Morty graphql api
https://rickandmortyapi.com/graphql

```
query Characters {
  characters {
    results {
      id
      name
      image
      location {
        name
      }
    }
  }
}
```

- create a new react native app

```
npx react-native init rickAndMorty
cd rickAndMorty
yarn ios {or} yarn android
```

- i've had apps fail at this point due to a number of problems with environment. could be a problem with node or npm. xcode or android studio. debugger open in a window you can't see. and many others. getting a react native env set up for the first time can be tricky, and lead to some serious googling. know that it's not just you, and good luck on Stack Overflow.

code .

- create src/App.js
- update index.js to point to new `App.js`
- delete App.js in project root

add to package.json under `scripts`
"postinstall": "npx jetify && npx pod-install"

- write screens/Characters.js

yarn add @apollo/client graphql

- quit metro and restart app after this

- add apollo to app.js

- add query to characters.js

- add style

more info on the Apollo GraphQl client
https://www.apollographql.com/docs/react/get-started/

great next steps for this app would be:

- adding more data fields to the query (use the _Docs_ tab on the right of the graph ql playground linked at the top of this readme)
- add more style to the list or items
- implement pull to refresh
- implement React Navigation to add more screens to the app https://reactnavigation.org/

for learning react native from scratch, i recommend this udemy course https://www.udemy.com/course/the-complete-react-native-and-redux-course/
