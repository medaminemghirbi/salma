import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent  implements OnInit {
  counter:any
  add_department! :  FormGroup;
  messageErr="" ;
  image:any;
  submitted : boolean = false ;
  dataArray:any = []
  p:number = 1 ;
  messageSuccess = '' ;
  rason: string ="" ;
  searchedKeyword!:string;
  data_department={
    id : '',
    department_name:''
  }
  update! :  FormGroup;
  constructor(/*private usersService:service,*/private route:Router) {
    this.update = new FormGroup({
      department_name: new FormControl(''),
    });
    this.add_department = new FormGroup({
      department_name: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    // this.usersService.getAllDepartments().subscribe(data=>{
    //   this.dataArray=data
    //   console.log(this.dataArray)
    //   this.counter = this.dataArray.length, (err:HttpErrorResponse)=>{
    //   this.messageErr="We dont't found this department in our database"}
    // })
  }

  key = 'id' ;
  reverse: boolean = false ;

  sort(key: string) {
    this.key = key ;
    this.reverse = !this.reverse ;
  }
  details(id:any){
    this.route.navigate(['/rh/departments/'+id])
  }

  delete(id:any  , i :number){
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, Archive it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     this.usersService.deleteDepartment(id).subscribe(response=>{
    //       this.dataArray.splice(i,1)
    //     })
    //     Swal.fire(
    //       'Deleted!',
    //       ' Department has been Archived.',
    //       'success'
    //     )
    //   }
    // })
  }

  getdata(department_name:string,id:any){
    console.log(this.data_department)
    this.data_department.department_name= department_name
    this.data_department.id= id

  }

  updateDepartment(f:any){
    // let data=f.value
    // const formData = new FormData();

    // formData.append('department_name', this.update.value.department_name);
    // Swal.fire({
    //   title: 'Do you want to save the changes?',
    //   showDenyButton: true,
    //   showCancelButton: true,
    //   confirmButtonText: 'Save',
    //   denyButtonText: `Don't save`,
    // }).then((result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
    //     this.usersService.updateDepartment(this.data_department.id,formData).subscribe(response=>
    //       {
    //       this.submitted = true ;
    //         let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.data_department.id)
    //         this.dataArray[indexId].department_name=data.department_name
    //         this.messageSuccess=`this department name : ${this.dataArray[indexId].department_name} is updated`
    //         window.location.reload();
    //         this.route.navigate(['/rh/departments']);

    //       },(err:HttpErrorResponse)=>{
    //       })
    //     Swal.fire('Saved!', '', 'success')
    //   } else if (result.isDenied) {
    //     Swal.fire('Changes are not saved', '', 'info')
    //   }
    // })


}
addDepartment(f:any){
  // const formData = new FormData();

  // formData.append('department_name', this.add_department.value.department_name);
  // let data=f.value
  // this.usersService.addDepartment(formData).subscribe( ()=>{
  //     window.location.reload();
  //     Swal.fire('Saved!', '', 'success')
  //   this.route.navigate(['/rh/departments'])

  // },(err:HttpErrorResponse)=>{
  //   this.messageErr=err.error
  // }) ;
}
}
