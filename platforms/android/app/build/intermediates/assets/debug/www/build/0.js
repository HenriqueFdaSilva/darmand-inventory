webpackJsonp([0],{

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product__ = __webpack_require__(535);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */]),
            ],
        })
    ], ProductPageModule);
    return ProductPageModule;
}());

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_product__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductPage = /** @class */ (function () {
    function ProductPage(navCtrl, navParams, formBuilder, provider, toast, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        // maneira 1
        //this.product = this.navParams.data.product || { };
        // this.createForm();
        // this.conferencia();
        // maneira 2
        this.product = {};
        this.createForm();
        if (this.navParams.data.key) {
            var subscribe_1 = this.provider.get(this.navParams.data.key).subscribe(function (p) {
                subscribe_1.unsubscribe();
                _this.product = p;
                _this.createForm();
                _this.conferencia();
            });
        }
        this.setupPageTitle();
    }
    ProductPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.product ? 'Alterando produto' : 'Novo produto';
    };
    ProductPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.product.key],
            name: [this.product.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            valor_unitario: [this.product.valor_unitario, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            qtd_estoque: [this.product.qtd_estoque],
            qtd_conferido: [this.product.qtd_conferido],
            sobra: [this.product.sobra],
            falta: [this.product.falta],
            valor_sobra: [this.product.valor_sobra],
            valor_falta: [this.product.valor_falta],
            qtd: [this.product.qtd],
            valor_conferido: [this.product.valor_conferido],
            acm: [this.product.qtd, this.product.null]
        });
    };
    ProductPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.conferencia();
                _this.toast.create({ message: 'Produto salvo com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    ProductPage.prototype.onIncrease = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.conferencia();
                _this.toast.create({ message: 'Produto salvo com sucesso.', duration: 3000 }).present();
                _this.decisao = 0;
                //this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    ProductPage.prototype.onDecrease = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.conferencia();
                _this.toast.create({ message: 'Produto salvo com sucesso.', duration: 3000 }).present();
                _this.decisao = 1;
                //this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    ProductPage.prototype.conferencia = function () {
        var _this = this;
        if (this.navParams.data.key) {
            var subscribe_2 = this.provider.get(this.navParams.data.key).subscribe(function (p) {
                subscribe_2.unsubscribe();
                _this.acm_conferido = p.qtd;
                if (p.qtd != null) {
                    p.valor_conferido = _this.acm_conferido;
                }
                console.log(1, p.valor_conferido);
                if (p.qtd_estoque == "" || p.qtd_estoque < 0 || p.qtd_estoque == null) {
                    p.qtd_estoque = 0;
                }
                if (p.qtd_conferido == null || p.qtd_conferido == 0) {
                    console.log(2, p.valor_conferido);
                    p.qtd_conferido = 0;
                    p.sobra = 0;
                    p.falta = 0;
                    p.valor_falta = 0;
                    p.valor_sobra = 0;
                    p.acm = 0;
                }
                if (p.qtd != null && _this.decisao == 0) {
                    _this.onIncrease();
                    console.log(3, p.valor_conferido);
                    p.valor_conferido = p.qtd;
                    p.acm = p.qtd * 2;
                    p.qtd_conferido += p.acm - p.qtd;
                    p.qtd = null;
                    p.acm = null;
                }
                else if (p.qtd != null && _this.decisao == 1) {
                    _this.onDecrease();
                    console.log(4, p.valor_conferido);
                    p.acm = p.qtd * 2;
                    p.qtd_conferido -= p.acm - p.qtd;
                    p.qtd = null;
                    p.acm = null;
                }
                if (p.qtd != null && p.qtd_conferido < 0) {
                    console.log(5, p.valor_conferido);
                    p.qtd_conferido = 0;
                    p.qtd = null;
                }
                if (p.qtd_estoque == p.qtd_conferido) {
                    console.log(6, p.valor_conferido);
                    p.sobra = 0;
                    p.falta = 0;
                    p.valor_falta = 0;
                    p.valor_sobra = 0;
                    p.qtd = null;
                }
                else if (p.qtd_conferido > p.qtd_estoque) {
                    console.log(7, p.valor_conferido);
                    p.sobra = p.qtd_conferido - p.qtd_estoque;
                    p.falta = 0;
                    p.valor_sobra = p.sobra * p.valor_unitario;
                    p.valor_falta = 0;
                    p.qtd = null;
                }
                else if (p.qtd_conferido < p.qtd_estoque) {
                    console.log(8, p.valor_conferido);
                    p.falta = p.qtd_estoque - p.qtd_conferido;
                    p.sobra = 0;
                    p.valor_falta = p.falta * p.valor_unitario;
                    p.valor_sobra = 0;
                    p.qtd = null;
                }
                _this.product = p;
                _this.createForm();
                _this.decisao = null;
            });
        }
    };
    ProductPage.prototype.presentAlertOnDecrease = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Remover',
            subTitle: 'Deseja realmente remover?',
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
                        _this.onDecrease();
                    }
                }
            ]
        });
        alert.present();
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"C:\Users\Henrique\Documents\darmand-inventory\src\pages\product\product.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="form">\n      <ion-grid>\n        <ion-row>\n            <ion-col col-6>\n    <ion-item>\n      <ion-label >NOME</ion-label>\n      <ion-input type="text" formControlName="name"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.name.valid && (form.controls.name.dirty || form.controls.name.touched)" color="danger">\n      <div [hidden]="!form.controls.name.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n  </ion-col>\n  <ion-col col-6>\n      <ion-item>\n        <ion-label >VALOR</ion-label>\n        <ion-input type="number" formControlName="valor_unitario"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!form.controls.valor_unitario.valid && (form.controls.valor_unitario.dirty || form.controls.valor_unitario.touched)" color="danger">\n        <div [hidden]="!form.controls.valor_unitario.errors.required">\n          O campo é obrigatório\n        </div>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n     \n    <ion-col col-6>\n        <ion-item>\n          <ion-label >ESTOQUE</ion-label>\n          <ion-input type="number" formControlName="qtd_estoque"></ion-input>\n        </ion-item>\n    </ion-col>\n    <ion-col col-6>\n      <ion-item>\n          <ion-label >QTD</ion-label>\n          <ion-input type="number" formControlName="qtd">\n          </ion-input>\n       </ion-item>\n  </ion-col>\n    \n  </ion-row>\n      <ion-row>\n        <ion-col col-6>\n            <ion-item>\n               <ion-label >TOTAL CONFERIDO</ion-label>\n               <ion-input type="number" formControlName="qtd_conferido" disabled>\n               </ion-input>\n            </ion-item>\n        </ion-col>\n        <ion-col col-6>\n            <ion-item>\n                <ion-label >ULTIMO CONFERIDO</ion-label>\n                <ion-input type="number" formControlName="valor_conferido" disabled>\n                </ion-input>\n             </ion-item>\n        </ion-col>\n        \n      </ion-row>\n      <ion-row>\n        <ion-col class="btn-add" col-6>\n            <button ion-button color="danger" (click)=" presentAlertOnDecrease()">Remover</button>\n        </ion-col><ion-col class="btn-add" col-6>\n            <button ion-button color="primary" (click)="onIncrease()">Adicionar</button> \n                \n        </ion-col>\n      </ion-row>\n\n        <ion-row>\n          <ion-col col-3>\n              <ion-item color="secondary">\n                <ion-label color="light">SOBRA</ion-label>\n                <ion-input color="primary" type="number" formControlName="sobra"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-3>\n                <ion-item color="secondary" disabled>\n                  <ion-label color="light">V SOBRA</ion-label>\n                  <ion-input type="number" formControlName="valor_sobra"></ion-input>\n                </ion-item>\n              </ion-col>\n            <ion-col col-3>\n              <ion-item color="danger">\n                 <ion-label color="light">FALTA</ion-label>\n                 <ion-input type="number" formControlName="falta"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-3>\n              <ion-item color="danger">\n                <ion-label color="light">V FALTA</ion-label>\n                <ion-input  type="number" formControlName="valor_falta" ></ion-input>\n              </ion-item>\n            </ion-col>\n            \n        </ion-row>\n      </ion-grid>\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n     </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Henrique\Documents\darmand-inventory\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_product_product__["a" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ })

});
//# sourceMappingURL=0.js.map