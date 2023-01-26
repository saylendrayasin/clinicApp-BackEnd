import { Injectable } from '@nestjs/common';
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { FirebaseService } from 'src/firebase/firebase.service';
import { User } from 'src/models/user.model';

@Injectable()
export class AuthService {
  constructor(private firebaseservice: FirebaseService) {}
  getFirebase() {
    return this.firebaseservice.app;
  }
  async login(email: string, password: string): Promise<void> {
    //Hello
  }

  async register(body: Omit<User, 'id'>): Promise<void> {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      this.firebaseservice.auth,
      body.email,
      body.password,
    );
  }
}
