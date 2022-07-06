import { Component, OnDestroy, OnInit } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit, OnDestroy {
  networkStatus: any;
  networkListener: PluginListenerHandle;

  constructor() { }
  

  ngOnInit() {
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      this.networkStatus = status;
      console.log('Network status changed', status);
    });
  }
  async getNetWorkStatus() {
    this.networkStatus = await Network.getStatus();
    console.log(this.networkStatus);
  }
  endNetworkListener() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }
  ngOnDestroy() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }

}
