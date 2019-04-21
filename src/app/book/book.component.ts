import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/apiservice';
import {DataService} from '../shared/dataservice';
import {Book} from '../models/book';
import {Guid} from "guid-typescript";
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book:Book[]=[];
  length:number;
  newbook:Book;
  model:Book={
    id:'',
    name:'',
    edition:'',
    author:'',
    description:''
  }

  constructor(private apiservice:ApiService,private router:Router,private dataservice:DataService) { }

  ngOnInit() {
    this.model.id=Guid.create().toString();
    this.getAllBooks();

    this.dataservice.book.subscribe(res=>this.newbook=res);
  }

  public saveBook():void{

    this.apiservice.postNewBook(this.model).subscribe(
      res=>{
        alert("book added succesfully to library")
       location.reload();
      },err=>{
        alert('err');
      }
    )
  }

  public getDetails(book:Book):void{
    this.dataservice.changeBook(book);
    this.router.navigateByUrl('bookdetails');

  }

  public deleteBook(book:Book):void{

    this.apiservice.deleteBookById(book.id).subscribe(
      res=>{
        location.reload();
      },err=>{
        alert('err');
      }
    )
  }

  public getAllBooks():void{

    this.apiservice.getAllBook().subscribe(
      res=>{
        this.book=res;
        this.length=this.book.length;
      },err=>{
        alert('err');
      }
    )

  }

}
