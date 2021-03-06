import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CanpayModule } from 'canpay-lib';
import { environment } from '../environments/environment';
import { CanPayExampleComponent } from './can-pay-example/can-pay-example.component';
import { DaoEthService } from 'src/app/services/dao.eth.service';

@NgModule({
  declarations: [
    AppComponent,
    CanPayExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    CanpayModule.forRoot({
      useTestNet: environment.contracts.useTestNet,
      contracts: {
        canyaCoinAddress: environment.contracts.canYaCoin,
        // canyaAbi: <CanYaCoin_ABI> // default is set to prod CanYaCoin ABI
      }
    })
  ],
  providers: [DaoEthService],
  bootstrap: [AppComponent],
})

export class AppModule { }
