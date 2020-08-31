## Structuring Ionic App 
 **Best Optimised Structure I have learned so far**

### Basic Typical Structure 
 Here is typical structure which is created at time of app creation by default
```
project/

├─ ionic.config.json # Ionic project config file

├─ package.json

├─ src/

│  ├─ app/

│  │  ├─ app.component.ts # root component for your app

│  │  ├─ app.html # app component template

│  │  ├─ app.module.ts # NgModule for app component

│  │  ├─ app.scss # global SCSS

│  │  └─ main.ts # bootstrap file

│  ├─ assets/ # put your images, etc. here

│  ├─ pages/ # contains the page components for your app

│  ├─ theme/

│  │  └─ variables.scss # see https://ionicframework.com/docs/theming

│  └─ index.html # main html file

└─ www/ # build output directory

```
- Two approach we can have as :
- Option 1 – **[Encapsulated Modules](https://github.com/mhartington/lazyLoad2-components/)**
- Option 2 – **[Shared Common Modules](https://github.com/mhartington/lazyLoad2-components/tree/common-modules)**

Here's something optimised structure i learnt with structural guidelines
- source : [angular-ionic-schematics](https://github.com/Robinyo/ionic-angular-schematics)

```
  ├── <PROJECT_ROOT>
        └── /src
            └── /app                                  -  App Module
                ├── app.component.ts
                ├── app.html
                ├── app.module.ts
                ├── app.scss
                ├── main.ts
                └── /core                             - Core Feature Module (e.g., Singleton Services/Providers)
                    ├── core.module.ts
                    ├── module-import-guard.ts  
                    └── /logger
                        ├── console-logger.service.ts
                        ├── logger.service.ts                               
                └── /pages                            - Page (Component) Modules
                    └── /home
                        ├── home.page.html
                        ├── home.page.module.ts 
                        ├── home.page.scss   
                        ├── home.page.spec.ts
                        ├── home.page.ts                                                                                                               
                └── /shared                           - Shared Feature Module (shared Components, Directives and Pipes)
                    ├── shared.module.ts                
            └── /assets
            └── /environments                         - Environment specific configuration   
                ├── environment.dev.ts
                ├── environment.ts                        
            └── /theme
                ├── facebook-messenger-theme.scss            
                ├── gradient-mixins.scss
                ├── gradient.scss
                ├── green-and-blue-theme.scss                    
                ├── variables.scss
            ├── index.html
            ├── manifest.json
            ├── service-worker.js
        └── /config                                   - Webpack Configuration
            ├── webpack.config.json
        └── /e2e                                      - E2E Test Configuration
            ├── app.e2e-spec.ts
            ├── app.po.ts
            ├── tsconfig.e2e.json
        └── /resources                                - Default Resources (e.g., Icon and Splash)
        └── /www                                      - Ionic's 'dist' directory
            └── /assets
            └── /build   
            ├── index.html
            ├── manifest.json
            ├── service-worker.js
        ├── .editorconfig
        ├── .gitignore
        ├── config.xml
        ├── ionic.config.json
        ├── karma.conf.json           
        ├── package.json
        ├── protractor.conf.json
        ├── README.md     
        ├── tsconfig.json
        ├── tsconfig.ng-cli.json        
        ├── tslint.json             

```

- **Shared Module** : It import all modules required by the assets in the SharedModule; for example, CommonModule and FormsModule and it does it so because SharedModule will contain components, directives and pipes that may need features from another common module; for example, ngFor in CommonModule.
