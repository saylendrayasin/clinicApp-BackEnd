import { Injectable } from '@nestjs/common';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class AuthService {
  constructor(private firebaseservice: FirebaseService) {}
  public login(email: string, password: string) {
    //For login
  }
}
