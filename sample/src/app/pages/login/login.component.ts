import { Component, inject ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  route = inject(Router); // 
  username = '';
  password = '';
  logintext: string = 'Login'; // 

  constructor(private router: Router) {}

  submitForm(event: Event) {
    event.preventDefault();
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('Login successful, navigating to dashboard...');
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  }
}
