## Porting create-react-app to GatsByJS

In order to use Gatsby :

> npm install --save gatsby

GatsbyJS Project Structure 

```
my-gatsby-site
  ├── .git
  ├── .gitignore
+ ├── .prettierrc
+ ├── LICENSE
  ├── README.md
+ ├── gatsby-browser.js
+ ├── gatsby-config.js
+ ├── gatsby-node.js
+ ├── gatsby-ssr.js
  ├── node_modules
  ├── package.json
  ├── src
+ │   ├── components
+ │   ├── images
+ │   └── pages
  └── yarn.lock
  ```
  **Additionally, some packages that depend on globals existing (e.g. react-router-dom) are needed to be patched or migrated to other packages.**

  **Gatsby automatically turns React components in the pages folder into static routes. This means that a statically rendered page directly corresponds to index.html files in the app’s built assets, whereas a client-only route is rendered by the client and configured by the routing setup defined. Both types of pages can fetch data at runtime just like any other React app.**