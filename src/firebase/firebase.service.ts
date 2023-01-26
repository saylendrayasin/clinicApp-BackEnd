import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Config } from 'src/models/config.model';
import { Auth, getAuth } from 'firebase/auth';

@Injectable()
export class FirebaseService {
  public app: FirebaseApp;
  public auth: Auth;
  constructor(private configService: ConfigService<Config>) {
    this.app = initializeApp({
      apiKey: configService.get<string>('apiKey'),
      appId: configService.get<string>('appId'),
      authDomain: configService.get<string>('authDomain'),
      measurementId: configService.get<string>('measurementId'),
      messagingSenderId: configService.get<string>('messagingSenderId'),
      projectId: configService.get<string>('projectId'),
      storageBucket: configService.get<string>('storageBucket'),
    });

    if (this.app) {
      console.log('Firebase app initialized successfully');
    }

    this.auth = getAuth(this.app);
  }
}
