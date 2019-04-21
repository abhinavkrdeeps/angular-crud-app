import { Component, OnInit,Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Book} from '../models/book';

@Injectable({
  providedIn:'root'
})



export class DataService{

   defaultbook:Book;
   private messageSource = new BehaviorSubject<Book>(this.defaultbook);
   book=this.messageSource.asObservable();

   constructor(){}


   changeBook(book:Book){
     this.messageSource.next(book);
   }


}
