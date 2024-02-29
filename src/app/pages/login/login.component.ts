
declare var google:any
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
// import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
// import { GoogleLoginProvider} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private router =inject(Router)
constructor(private route:Router){}
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:'364694448355-icf3kivovr5s0dthim28jutjd8ofuvqq.apps.googleusercontent.com',
      callback:(resp:any)=>this.handlelogin(resp)
      
     

    })
    google.accounts.id.renderButton(document.getElementById('google-btn'),{
      size:'large',
      shape:'circle',
     
  
    })
  }
  private decodeToken(token:string){
// return JSON.parse(atob(token.split(".")[1]))
  }
handlelogin(response:any){
if(response){
const payload =this.decodeToken(response.credentional)
sessionStorage.setItem('loggedInUser',JSON.stringify(payload))
this.router.navigate(['home'])
}
}

}
