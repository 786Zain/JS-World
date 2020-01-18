class ZT {
    constructor(options) {
        let self = this;
        self.init();
    }
    init() {
        let self = this;
        self.header()
        self.code()
        self.message()
        self.footer()
    }
    header() {
        $('#header').empty().append(`
          <link href="css/ionicons.min.css" rel="stylesheet" type="text/css">
            <link href="css/css.css" rel="stylesheet" type="text/css">
            <link rel="stylesheet" href="css/main.css">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
            <style>
              @-webkit-keyframes slide-top {
                0% {
                  -webkit-transform: translateY(-400px);
                  transform: translateY(-400px);
                }
          
                100% {
                  -webkit-transform: translateY(0);
                  transform: translateY(0);
                }
              }
          
              @keyframes slide-top {
                0% {
                  -webkit-transform: translateY(-400px);
                  transform: translateY(-400px);
                }
          
                100% {
                  -webkit-transform: translateY(0);
                  transform: translateY(0);
                }
              }
          
              .msgb {
                animation: slide-top 5s;
          
              }
          
              .nav-link[_ngcontent-c0] {
                cursor: pointer;
              }
          
              .tag-pill[_ngcontent-c0] {
                cursor: pointer;
              }
          
              .page-link[_ngcontent-c1] {
                cursor: pointer;
              }
            </style>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            <script charset="utf-8" src="js/settings-settings-module.js"></script>
            <script charset="utf-8" src="js/profile-profile-module.js"></script>
            <script charset="utf-8" src="js/editor-editor-module.js">
            </script>
            <script charset="utf-8" src="js/article-article-module.js"></script>
          `
        )
    }
    code() {
        $('#code').empty().append(`
        <body>
  <app-root ng-version="7.2.4">
    <app-layout-header>
      <nav class="navbar navbar-light">
        <div class="container"><a class="navbar-brand" routerlink="/" ng-reflect-router-link="/"
            href="http://localhost:4200/">ZT</a>

          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item"><a class="nav-link" routerlink="/" ng-reflect-router-link="/"
                href="http://localhost:4200/"> Home </a></li>
            <li class="nav-item"><a class="nav-link" routerlink="/login" routerlinkactive="active"
                ng-reflect-router-link="/login" ng-reflect-router-link-active="active"
                href="http://localhost:4200/login"> Sign in </a></li>
            <li class="nav-item"><a class="nav-link" routerlink="/register" routerlinkactive="active"
                ng-reflect-router-link="/register" ng-reflect-router-link-active="active"
                href="http://localhost:4200/register"> Sign up </a></li>
          </ul>

        </div>
      </nav>
    </app-layout-header>
    <router-outlet></router-outlet>
    <app-home-page _nghost-c0="">
      <div _ngcontent-c0="" class="home-page">

        <div _ngcontent-c0="" class="banner">
          <div _ngcontent-c0="" class="container">
            <h1 _ngcontent-c0="" class="logo-font">Zain Technology</h1>
            <p _ngcontent-c0="">A Chating forum for <i _ngcontent-c0="">Angular 8</i> knowledge.</p>
          </div>
        </div>
        <div _ngcontent-c0="" class="container page">
          <div _ngcontent-c0="" class="row">
            <div _ngcontent-c0="" class="col-md-9">
              <div _ngcontent-c0="" class="feed-toggle">
                <ul _ngcontent-c0="" class="nav nav-pills outline-active">
                  <li _ngcontent-c0="" class="nav-item"><a _ngcontent-c0="" class="nav-link" ng-reflect-klass="nav-link"
                      ng-reflect-ng-class="[object Object]"> Your Feed </a></li>
                  <li _ngcontent-c0="" class="nav-item"><a _ngcontent-c0="" class="nav-link active"
                      ng-reflect-klass="nav-link" ng-reflect-ng-class="[object Object]"> Global Feed </a></li>
                  <li _ngcontent-c0="" class="nav-item" hidden=""><a _ngcontent-c0="" class="nav-link active"><i
                        _ngcontent-c0="" class="ion-pound"></i> </a></li>
                </ul>
              </div>
              <app-article-list _ngcontent-c0="" _nghost-c1="" ng-reflect-limit="10"
                ng-reflect-config="[object Object]">

                <div _ngcontent-c1="" class="app-article-preview"> Loading articles...
                </div>
                <div _ngcontent-c1="" class="app-article-preview" hidden=""> No articles are here... yet.
                </div>
                <nav _ngcontent-c1="" hidden="">
                  <ul _ngcontent-c1="" class="pagination">

                    <li _ngcontent-c1="" class="page-item active" ng-reflect-klass="page-item"
                      ng-reflect-ng-class="[object Object]"><a _ngcontent-c1="" class="page-link">1</a></li>
                  </ul>
                </nav>
                <div id="message" class="alert alert-danger msgb">
                 
                </div>
              </app-article-list>
            </div>
            <div _ngcontent-c0="" class="col-md-3">
              <div _ngcontent-c0="" class="sidebar">
                <p _ngcontent-c0="">Popular Tags</p>
                <div _ngcontent-c0="" class="tag-list">

                </div>
                <div _ngcontent-c0=""> Loading tags... </div>
                <div _ngcontent-c0="" hidden=""> No tags are here... yet. </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-home-page>
        `)
    }
    message() {
        $('#message').empty().append(`
        Download Complete Project from douploads link <strong>DOWNLOAD Button</strong><br />

        * pre install nodejs 10v<br />
        * open cmd locate project location path<br />
        * type npm install<br />
        * type npm start<br />
        * Code will compile and start forum chat application in http://localhost:4200<br />
        `)
    }
    footer() {
        $('#footer').empty().append(`
        <app-layout-footer>
      <footer>
        <div class="container"><a class="logo-font" routerlink="/" ng-reflect-router-link="/"
            href="http://localhost:4200/">ZT</a><span class="attribution"> © 2020. An interactive project from <a
              href="https://786zain.github.io/JS-World">Zain Technology</a>. Coded by <a
              href="https://786zain.github.io/JS-World">MOHAMMAD ZAINULLA.</a></span></div>
      </footer>
    </app-layout-footer>
  </app-root>
  <script type="text/javascript" src="js/runtime.js"></script>
  <script type="text/javascript" src="js/polyfills.js"></script>
  <script type="text/javascript" src="js/styles.js"></script>
  <script type="text/javascript" src="js/vendor.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  </body>`
        )
    }
}
$(document).ready(function () {
    let zain = new ZT();
});