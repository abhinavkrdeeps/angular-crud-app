import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/dataservice';
import {Book} from '../models/book';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

   book:Book;
  constructor(private dataservice:DataService) { }


  ngOnInit() {
    this.dataservice.book.subscribe(res=> this.book=res);
  }

}
