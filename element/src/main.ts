import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MyElementComponent } from './my-element.component';

(async () => {

  const app = await createApplication({
    providers: [
    ],
  });

  const MyElement = createCustomElement(MyElementComponent, {
    injector: app.injector
  });

  customElements.define('my-element', MyElement);
  
})();