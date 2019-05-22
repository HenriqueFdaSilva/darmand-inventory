import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductProvider } from '../../providers/product/product';
import { AlertController } from 'ionic-angular';





@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  title: string;
  form: FormGroup;
  product: any;
  decisao: number;
  acm_conferido: number;
  

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: ProductProvider,
    private toast: ToastController, public alertCtrl: AlertController) {

    // maneira 1
   //this.product = this.navParams.data.product || { };
   // this.createForm();
    // this.conferencia();
     // maneira 2
     this.product = { };
     this.createForm();
     

     if (this.navParams.data.key) {
       const subscribe = this.provider.get(this.navParams.data.key).subscribe((p: any) => {
         subscribe.unsubscribe();
              this.product = p;
              this.createForm();
              this.conferencia();
       })
     }
     this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.product ? 'Alterando produto' : 'Novo produto';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.product.key],
      name: [this.product.name, Validators.required],
      valor_unitario: [this.product.valor_unitario, Validators.required],
      qtd_estoque: [this.product.qtd_estoque],
      qtd_conferido: [this.product.qtd_conferido],
      sobra: [this.product.sobra],
      falta: [this.product.falta],
      valor_sobra: [this.product.valor_sobra],
      valor_falta: [this.product.valor_falta],
      qtd: [this.product.qtd],
      valor_conferido: [this.product.valor_conferido],
      acm: [this.product.qtd,this.product.null]
      
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.conferencia();
          this.toast.create({ message: 'Produto salvo com sucesso.', duration: 3000 }).present();
          
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000 }).present();
          console.error(e);
        })
    } 
  }
  onIncrease(){
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.conferencia();
          this.toast.create({ message: 'Produto salvo com sucesso.', duration: 3000 }).present();
          this.decisao = 0;
          
          //this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000 }).present();
          console.error(e);
        })
    } 
  }
  onDecrease(){
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.conferencia();
          this.toast.create({ message: 'Produto salvo com sucesso.', duration: 3000 }).present();
          this.decisao = 1;
          
          //this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
  conferencia(){
    if (this.navParams.data.key) {
      const subscribe = this.provider.get(this.navParams.data.key).subscribe((p: any) => {
        subscribe.unsubscribe();
          this.acm_conferido = p.qtd;
          if(p.qtd != null){
            p.valor_conferido = this.acm_conferido;
          }
          
          console.log(1,p.valor_conferido);
          
        if ( p.qtd_estoque == "" || p.qtd_estoque < 0 || p.qtd_estoque == null ){
            p.qtd_estoque = 0;
        }
        if ( p.qtd_conferido == null || p.qtd_conferido == 0){
          console.log(2,p.valor_conferido);
             p.qtd_conferido = 0;
             p.sobra = 0;
             p.falta = 0;
             p.valor_falta = 0;
             p.valor_sobra = 0;
             p.acm = 0;
        }
        if ( p.qtd != null &&  this.decisao == 0 ){
             this.onIncrease();
             console.log(3,p.valor_conferido);
             p.valor_conferido = p.qtd;
             p.acm = p.qtd * 2;
             p.qtd_conferido += p.acm - p.qtd;
             p.qtd = null;
             p.acm = null;
        
        } else if ( p.qtd != null && this.decisao == 1 ){
                    this.onDecrease();
                    console.log(4,p.valor_conferido);
                    p.acm = p.qtd * 2;
                    p.qtd_conferido -= p.acm - p.qtd;
                   p.qtd = null;
                    p.acm = null;
        }
        if (p.qtd != null && p.qtd_conferido < 0 ){
          console.log(5,p.valor_conferido);
            p.qtd_conferido = 0;
           p.qtd = null;
        }
        if (p.qtd_estoque == p.qtd_conferido){
          console.log(6,p.valor_conferido);
             p.sobra = 0;
             p.falta = 0;
             p.valor_falta = 0;
             p.valor_sobra = 0;
             p.qtd = null;
        
        } else if(p.qtd_conferido > p.qtd_estoque){
          console.log(7,p.valor_conferido);
                 p.sobra = p.qtd_conferido - p.qtd_estoque;
                 p.falta = 0;
                 p.valor_sobra = p.sobra * p.valor_unitario;
                 p.valor_falta = 0;
                 p.qtd = null;

        } else if(p.qtd_conferido < p.qtd_estoque){
          console.log(8,p.valor_conferido);
                  p.falta = p.qtd_estoque - p.qtd_conferido;
                  p.sobra = 0;
                  p.valor_falta = p.falta * p.valor_unitario;
                  p.valor_sobra = 0;
                  p.qtd = null;
        }
        
      
          this.product = p;
          this.createForm();
          this.decisao = null;
    })
    } 
  }
  presentAlertOnDecrease() {
    let alert = this.alertCtrl.create({
      title: 'Remover',
      subTitle: 'Deseja realmente remover?',
      buttons: 
      [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: data => {
            console.log('cancelado');
          }
        },
        {
          text: 'Excluir',
          role: 'excluir',
          handler: data => {
            this.onDecrease();
          }
        }
        
      ]
    });
    alert.present();
  }
  
  
}