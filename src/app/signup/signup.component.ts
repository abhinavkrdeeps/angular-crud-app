import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import { Guid } from "guid-typescript";
import {ApiService} from '../shared/apiservice';
import {DataService} from '../shared/dataservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

model: User={
  uid:'',
  username:'',
  email:'',
  password:''
}
  constructor(private apiservice:ApiService,private dataservice:DataService,private router:Router) {
      this.model.uid=Guid.create().toString();
   }

  ngOnInit() {
  }



}
