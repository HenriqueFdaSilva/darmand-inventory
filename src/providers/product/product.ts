import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductProvider {
  private PATH = 'products/';
  productCollection: AngularFirestoreCollection<any>;
  products: Observable<any>;

  constructor(private db: AngularFireDatabase, private dbFS: AngularFirestore) {
  
    this.productCollection = this.dbFS.collection('products');
  }



  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(p => {
        return { key: p.key, ...p.payload.val() };
      });
  }

  save(product: any) {
    return new Promise((resolve, reject) => {
      if (product.key) {
        this.db.list(this.PATH)
          .update(product.key, { name: product.name, valor_unitario: product.valor_unitario, qtd_estoque: product.qtd_estoque, 
                                 qtd_conferido: product.qtd_conferido, sobra: product.sobra, falta: product.falta, qtd: product.qtd, acm: product.acm,
                                 valor_falta: product.valor_falta, valor_sobra: product.valor_sobra, valor_conferido: product.valor_conferido
                               })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ name: product.name, valor_unitario: product.valor_unitario, qtd_estoque: product.qtd_estoque, 
                  qtd_conferido: product.qtd_conferido, sobra: product.sobra, falta: product.falta, qtd: product.qtd, acm: product.acm,
                  valor_falta: product.valor_falta, valor_sobra: product.valor_sobra, valor_conferido: product.valor_conferido
                 })
          .then(() => resolve());
      }
    })
  }
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}