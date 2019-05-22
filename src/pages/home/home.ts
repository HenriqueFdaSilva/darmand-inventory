import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public isSeachbarOpened = false;  
  products: any;
  items: any;
  constructor(public navCtrl: NavController, private provider: ProductProvider,
    private toast: ToastController, public alertCtrl: AlertController) {

    this.products = this.provider.getAll();
    this.initializeItems();
  }


  newContact() {
    this.navCtrl.push('ProductPage');
  }

  editContact(product: any) {
    // Maneira 1
    //this.navCtrl.push('ProductPage', { product: product });

    // Maneira 2
    this.navCtrl.push('ProductPage', { key: product.key });
  }

  removeContact(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Produto removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o produto.', duration: 3000 }).present();
        });
    }
  }
  initializeItems() {
    this.items = this.products;
    console.log(this.products);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        console.log(item);
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    console.log(this.items);
  }
  
  presentAlert(key: string) {
    let alert = this.alertCtrl.create({
      title: 'Excluir',
      subTitle: 'Deseja realmente excluir esse produto ?',
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
            this.removeContact(key);
          }
        }
        
      ]
    });
    alert.present();
  }
  
}
