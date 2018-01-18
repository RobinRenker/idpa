import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '@angularclass/hmr';
import { AppModule } from './app';
import { enableProdMode } from '@angular/core';

export function main(): Promise<any> {
  enableProdMode();
  return platformBrowserDynamic()
    .bootstrapModule(AppModule);
}
bootloader(main);
