import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.router.navigate(['usuarios/create'])
  }

  logout() {
      this.router.navigate(['login']); 
      this.authService.logout();
      this.toast.info('Logout Realizado Com Sucesso!','Logout', { timeOut: 3000})
  }


}
