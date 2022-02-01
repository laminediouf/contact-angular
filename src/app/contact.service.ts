import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public contactList: Contact[];

  constructor() {
    this.contactList = [
      new Contact('lamine di', 'lamtest@va.gov', '2906036054',
        'http://test.com',
        'https://robohash.org/illumetrerum.png?size=100x100&set=set1',
        '032 Waubesa Avenue', 
        'test-test'),

      new Contact('mac dio', 'mac@reference.com', '7504488204', 
        'http://test2.com',
        'https://robohash.org/voluptatemsimiliqueculpa.png?size=100x100&set=set1', 
        '7 Paget Crossing',
        'mac test-test'),

      new Contact('lam-fedzi', 'lam-fedzi@behance.net', '2518926895', 
        'http://test3.com',
        'https://robohash.org/illoetsint.png?size=100x100&set=set1', 
        '52256 North Circle',
        'fedzi test-test'),

      new Contact('Mr Diaw', 'diaw@unc.edu', '2552926925', 
        'http://test4.com',
        'https://robohash.org/eumquamexplicabo.png?size=100x100&set=set1', 
        '11 Merrick Point',
        'diaw test-test'),
      
        new Contact('bonjr test', 'bnjr@weibo.com', '1665350879', 
        'http://test5.com',
        'https://robohash.org/ametquodiusto.png?size=100x100&set=set1', 
        '50 Petterle Hill',
        'interdu test-test bnjr')
    ];
  }

  add(contact: Contact) {
    this.contactList.push(contact);
  }

  update(contact: Contact) {
    const foundContact = this.contactList.find((value: Contact) => {
      return value.id === contact.id;
    });
    if (foundContact === undefined) {
      return false;
    } else {
      Object.assign(foundContact, contact);
      return true;
    }
  }

  delete() {
    this.contactList = this.contactList.filter((contact: Contact) => {
      return !contact.checked;
    });
  }

  deleteById(id: number) {
    this.contactList = this.contactList.filter((contact: Contact) => {
      return contact.id !== id;
    });
  }

}
