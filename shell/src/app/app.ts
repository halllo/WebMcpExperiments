import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import '@mcp-b/global';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <main class="main">
      <div class="content">
        <h1>hello shell</h1>
        <my-element></my-element>
      </div>
    </main>
    <router-outlet />
  `,
  styles: ``
})
export class App implements OnInit {
  ngOnInit(): void {
    console.info('shell init');

    navigator.modelContext.registerTool({
      name: "hello_shell",
      description: "Show the user an alert box from the shell",
      inputSchema: { 
        type: "object", 
        properties: {
          message: {
            type: "string",
            description: "Text to show to the user."
          }
        },
        required: ["message"]
       },
      async execute({ message }) {
        console.info('shell tool executed with message:', message);
        alert('shell: ' + message);
        return {
          content: [{ type: "text", text: "I showed the alert from the shell to the user." }]
        };
      }
    });
  }
}
