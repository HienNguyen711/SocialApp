import {Component} from '@angular/core';
import {NavController, Storage, LocalStoragem,NavParams} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {FormBuilder, Validators, Control} from '@angular/forms';
import {validateEmail} from '../../validators/email';
import {AuthProvider} from '../../providers/auth-provider/auth-provider';
import {UserProvider} from '../../providers/user-provider/user-provider';
import {UtilProvider} from '../../providers/utils';
// import {FirebaseAuth} from 'angularfire2';
import {Inject} from '@angular/core';

/*
  Generated class for the CreateAccount page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html'
})
export class CreateAccountPage {
  createAccountForm;
  authProvider;
  storage = new Storage(localStorage);

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

}
