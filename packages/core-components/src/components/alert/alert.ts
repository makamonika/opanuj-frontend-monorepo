  import '@shoelace-style/shoelace/dist/components/alert/alert.js';
  import '@shoelace-style/shoelace/dist/themes/light.css';
  import { ColorAliasPrimary1, ColorAliasPrimary2, ColorAliasPrimary3, ColorAliasPrimary4, ColorAliasPrimary5, ColorAliasPrimary6, ColorAliasPrimary7, ColorAliasPrimary8, ColorAliasPrimary9, ColorAliasPrimary10, ColorAliasPrimary11, ButtonTextColor } from '@przeprogramowani/design-tokens';
  import { LitElement, css, html, unsafeCSS } from 'lit';
  import { customElement, property } from 'lit/decorators.js';
  import { ifDefined } from 'lit/directives/if-defined.js';
  
  @customElement('pp-alert')
  export class Alert extends LitElement {
    static override styles = css`
      :host {
        --sl-color-primary-50: ${unsafeCSS(ColorAliasPrimary1)};
        --sl-color-primary-100: ${unsafeCSS(ColorAliasPrimary2)};
        --sl-color-primary-200: ${unsafeCSS(ColorAliasPrimary3)};
        --sl-color-primary-300: ${unsafeCSS(ColorAliasPrimary4)};
        --sl-color-primary-400: ${unsafeCSS(ColorAliasPrimary5)};
        --sl-color-primary-500: ${unsafeCSS(ColorAliasPrimary6)};
        --sl-color-primary-600: ${unsafeCSS(ColorAliasPrimary7)};
        --sl-color-primary-700: ${unsafeCSS(ColorAliasPrimary8)};
        --sl-color-primary-800: ${unsafeCSS(ColorAliasPrimary9)};
        --sl-color-primary-900: ${unsafeCSS(ColorAliasPrimary10)};
        --sl-color-primary-950: ${unsafeCSS(ColorAliasPrimary11)};
        --sl-color-neutral-700: ${unsafeCSS(ButtonTextColor)};
      }
    `;
  
    @property({ type: Boolean, reflect: true }) open: boolean = true;
    @property({ type: Boolean, reflect: true }) closable: boolean = false;
    @property({ reflect: true }) variant:
      | 'primary'
      | 'success'
      | 'neutral'
      | 'warning'
      | 'danger' = 'primary';
    @property({ type: Number, reflect: true }) duration: number = 100;
    @property({ reflect: true }) countdown:
    | 'rtl' | 'ltr' | undefined = 'rtl';
    
  
    override render() {
      return html`<sl-alert
        variant=${ifDefined(this.variant)}
        ?open=${this.open}
        ?closable=${this.closable}
        duration=${this.duration}
        countdown=${ifDefined(this.countdown)}
      >
        <slot></slot>
      </sl-alert> `;
    }
  }
  
  declare global {
    interface HTMLElementTagNameMap {
      'pp-alert': Alert;
    }
  }
  