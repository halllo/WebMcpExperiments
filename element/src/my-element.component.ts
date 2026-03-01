import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import '@mcp-b/global'; initializing this again leads to every tool invocation happening twice.

@Component({
  selector: 'my-element-component',
  template: `
    <h2>hello element</h2>
  `,
  styles: ``,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyElementComponent implements OnInit {
  ngOnInit(): void {
    console.info('my element init');

    const webmcp = (<any>navigator).modelContext;
    if (webmcp) {
      webmcp.registerTool({
        name: "hello_element",
        description: "Show the user an alert box from the element",
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
        async execute({ message }: { message: string }) {
          console.info('my element tool executed with message:', message);
          alert('element: ' + message);
          return {
            content: [{ type: "text", text: "I showed the alert from the element to the user." }]
          };
        }
      });
    } else {
      console.warn('modelContext is not available on navigator. The tool will not be registered.');
    }
  }
}
