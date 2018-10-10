import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add-mnemonics',
  templateUrl: './add-mnemonics.component.html',
  styleUrls: ['./add-mnemonics.component.scss']
})
export class AddMnemonicsComponent implements OnInit {

  mnemonics: any = {};

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  onSubmit() {
    this.mnemonics.date = new Date(this.mnemonics.date).valueOf();
    this.db.list('mnemonics').push(this.mnemonics)
      .then(_ => {
        this.mnemonics = {}
        console.log('success')
      })     

}
}
