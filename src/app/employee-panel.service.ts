import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeePanelService {

  constructor(private http : HttpClient , public router: Router) { }

     /////////////////////// DemandeConge  */////////////////
     getAllAbsenceTypes(){
      return this.http.get(`${environment.urlBackend}`+'api/v1/web/type_conges/')
    }

    currentUser(){
      return this.http.get(`${environment.urlBackend}`+'logged_in/')
    }
    addLeaveDemande(data:any){
      return this.http.post(environment.urlBackend+'api/v1/web/demande_conges/' , data) ;
    }

    deleteLeaveDemande(id:any){
      return this.http.delete(environment.urlBackend+'api/v1/web/demande_conges/' + id )
    }
    updateLeaveDemande(id:string,newdata:any){
      return this.http.patch(environment.urlBackend+'api/v1/web/type_conges/' + id , newdata )
    }
    getLeaveDemandeByEmployee(id:any){
      return this.http.get(environment.urlBackend + 'api/v1/web/employee_demandes/' +id);
    }
    getCountDemandeByEmployee(id:any){
      return this.http.get(environment.urlBackend + 'api/v1/web/get_count_of_demandes_by_employee/' +id);
    }
    /////////////////STATISTIQUE*//////////////////////
    getstats(){
      return this.http.get(`${environment.urlBackend}`+'api/v1/web/type_conges/')
    }
        /////////////////Update Profil*//////////////////////


    updateadminprofil(id:string,newprofile:any){
      return this.http.patch(environment.urlBackend+'api/v1/web/updateadmin/' + id , newprofile )
    }
    updateadminimage (id:string,newprofile:any){
      return this.http.patch(environment.urlBackend+'api/v1/web/updateadminimage/' + id , newprofile )
    }
    getContractByEmployee(id:any){
      return this.http.get(environment.urlBackend + 'api/v1/web/employee_contracts/' +id);
    }
    updateDemande(id:string,newdata:any){
      return this.http.patch(environment.urlBackend+'api/v1/web/updatebyEmp/' + id , newdata )
    }
}
