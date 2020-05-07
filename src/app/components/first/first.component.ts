import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  studentid: String;
  name: String;
  gender:String;
  birthyear:number;
  email:String
  phone:string;
  address:String;
  comment:string;

  constructor() { 
    this.profile = {
      studentid: '',
      name: '',
      gender: '',
      birthyear: 0,
      email: '',
      phone: '',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
    this.studentid ="B6002688";
    this.name="Mooktapa Singkumkoon";
    this.gender="Male";
    this.birthyear=1999;
    this.email="b6002688@g.sut.ac.th";
    this.phone="0658619397";
    //this.address="SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand";
  }

  onUserClick($e){
    alert("SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand")
  }

  

}
