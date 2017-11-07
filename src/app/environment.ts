import { disableDebugTools } from '@angular/platform-browser';

let _decorateModuleRef = <T>(value: T): T => { return value; };
_decorateModuleRef = (modRef: any) => {
  disableDebugTools();

  return modRef;
};