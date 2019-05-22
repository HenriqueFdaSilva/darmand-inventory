webpackJsonp([1],{

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(282);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductProvider = /** @class */ (function () {
    function ProductProvider(db, dbFS) {
        this.db = db;
        this.dbFS = dbFS;
        this.PATH = 'products/';
        this.productCollection = this.dbFS.collection('products');
    }
    ProductProvider.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('name'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (p) { return (__assign({ key: p.payload.key }, p.payload.val())); });
        });
    };
    ProductProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key).snapshotChanges()
            .map(function (p) {
            return __assign({ key: p.key }, p.payload.val());
        });
    };
    ProductProvider.prototype.save = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (product.key) {
                _this.db.list(_this.PATH)
                    .update(product.key, { name: product.name, valor_unitario: product.valor_unitario, qtd_estoque: product.qtd_estoque,
                    qtd_conferido: product.qtd_conferido, sobra: product.sobra, falta: product.falta, qtd: product.qtd, acm: product.acm,
                    valor_falta: product.valor_falta, valor_sobra: product.valor_sobra, valor_conferido: product.valor_conferido
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ name: product.name, valor_unitario: product.valor_unitario, qtd_estoque: product.qtd_estoque,
                    qtd_conferido: product.qtd_conferido, sobra: product.sobra, falta: product.falta, qtd: product.qtd, acm: product.acm,
                    valor_falta: product.valor_falta, valor_sobra: product.valor_sobra, valor_conferido: product.valor_conferido
                })
                    .then(function () { return resolve(); });
            }
        });
    };
    ProductProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    ProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ProductProvider);
    return ProductProvider;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/product/product.module": [
		534,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, provider, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.isSeachbarOpened = false;
        this.products = this.provider.getAll();
        this.initializeItems();
    }
    HomePage.prototype.newContact = function () {
        this.navCtrl.push('ProductPage');
    };
    HomePage.prototype.editContact = function (product) {
        // Maneira 1
        //this.navCtrl.push('ProductPage', { product: product });
        // Maneira 2
        this.navCtrl.push('ProductPage', { key: product.key });
    };
    HomePage.prototype.removeContact = function (key) {
        var _this = this;
        if (key) {
            this.provider.remove(key)
                .then(function () {
                _this.toast.create({ message: 'Produto removido sucesso.', duration: 3000 }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover o produto.', duration: 3000 }).present();
            });
        }
    };
    HomePage.prototype.initializeItems = function () {
        this.items = this.products;
        console.log(this.products);
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                console.log(item);
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        console.log(this.items);
    };
    HomePage.prototype.presentAlert = function (key) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir',
            subTitle: 'Deseja realmente excluir esse produto ?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancelar',
                    handler: function (data) {
                        console.log('cancelado');
                    }
                },
                {
                    text: 'Excluir',
                    role: 'excluir',
                    handler: function (data) {
                        _this.removeContact(key);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Henrique\Documents\darmand-inventory\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title *ngIf="!isSeachbarOpened">\n      Produtos\n    </ion-title>\n    <ion-searchbar *ngIf="isSeachbarOpened"\n                   showCancelButton="true" \n                   (ionCancel)="isSeachbarOpened=false" (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf="!isSeachbarOpened" (click)="isSeachbarOpened=true">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let product of items | async">\n      <ion-item>\n        <h1>{{ product.name }}</h1>\n        <p>R$ {{product.valor_unitario}}</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="secondary" (click)="editContact(product)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="presentAlert(product.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab bottom right>\n    <button ion-fab color="primary" (click)="newContact()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Henrique\Documents\darmand-inventory\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_product_product__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_decimal_house_decimal_house__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_decimal_house_decimal_house__["a" /* DecimalHousePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyDpd-_NHtxYOLD7RmdAHjRsy3xAsc2eei8",
                    authDomain: "darmand-inventory.firebaseapp.com",
                    databaseURL: "https://darmand-inventory.firebaseio.com",
                    projectId: "darmand-inventory",
                    storageBucket: "darmand-inventory.appspot.com",
                    messagingSenderId: "159710406378"
                }),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_product_product__["a" /* ProductProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Henrique\Documents\darmand-inventory\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Henrique\Documents\darmand-inventory\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecimalHousePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the DecimalHousePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var DecimalHousePipe = /** @class */ (function () {
    function DecimalHousePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    DecimalHousePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    DecimalHousePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'decimalHouse',
        })
    ], DecimalHousePipe);
    return DecimalHousePipe;
}());

//# sourceMappingURL=decimal-house.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.js.map