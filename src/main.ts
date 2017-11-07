import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '@angularclass/hmr';
import { AppModule } from './app';

export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule);
}
bootloader(main);
