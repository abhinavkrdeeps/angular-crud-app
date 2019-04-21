import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Task} from '../models/task';
import {Book} from '../models/book'

@Injectable({
  providedIn:'root'
})

export class ApiService{

  constructor(private http:HttpClient){}

   private SAVE_BOOK_URI="http://localhost:8080/book";
   private GET_BOOK_URI="http://localhost:8080/book/all";
   private DELETE_BOOK = "http://localhost:8080/book";

   postNewBook(book:Book){
     return this.http.post(this.SAVE_BOOK_URI, book);
   }

  deleteBookById(id:String){
    return this.http.delete(this.DELETE_BOOK+"/"+id);
  }

   getAllBook(){
     return this.http.get<Book[]>(this.GET_BOOK_URI);
   }

}
