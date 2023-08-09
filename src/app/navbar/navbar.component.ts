import { Component, OnInit } from '@angular/core';
//import {fa} from '@fortawesome/angular-fontawesome'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activeTab=1;
  public rightActiveTab=0;
  public selectForm=false;
  public profileStatus=false;
  public accountStatus=false;
  public messageStatus=false;
  public boxStatus=false;
  constructor() { }

  ngOnInit(): void {
  }
  active(index: number): void {
    this.activeTab = index;
    this.profileStatus=false;
    this.rightActiveTab=0;
    this.accountStatus=false;
    this.messageStatus=false;
    this.boxStatus=false;
  }
  rightNavActive(index: number): void {
    console.log(index);
    this.rightActiveTab = this.rightActiveTab===index?0:this.rightActiveTab = index;
    if(index===5){
      this.accountStatus=!this.accountStatus;
      this.messageStatus=false;
      this.boxStatus=false;
    }
    else{
      if(index===3){
        this.accountStatus=false;
        this.messageStatus=!this.messageStatus;
        this.boxStatus=false;
      }
      else{
        if(index===6){
          this.messageStatus=false;
          this.boxStatus=!this.boxStatus;
        }
        else{
          if(index===7){
            this.boxStatus=false;
          }
          else{
            this.boxStatus=false;
            this.accountStatus=false;
            this.messageStatus=false; 
          }
        }
      }
    }
  }
  selectClass(){
    this.selectForm=!this.selectForm;
  }
  activeProfile(){
    this.profileStatus=true;
  }
  accountToggle(){
    this.accountStatus=!this.accountStatus;
  }

}
