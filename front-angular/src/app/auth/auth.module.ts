import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
    BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent
    ],
    bootstrap: [
        AuthComponent
    ]
})
export class AuthModule {}