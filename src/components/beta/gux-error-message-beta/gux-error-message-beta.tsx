import { Component, Element, h } from '@stencil/core';
import { trackComponent } from '../../../usage-tracking';

/**
 * @slot error - Required slot for error
 */
@Component({
  styleUrl: 'gux-error-message-beta.less',
  tag: 'gux-error-message-beta',
  shadow: true
})
export class GuxErrorMessageBeta {
  @Element()
  private root: HTMLElement;

  componentWillLoad(): void {
    trackComponent(this.root);
  }

  render() {
    return (
      <div class="gux-container">
        <gux-icon icon-name="alert-warning-octogon" decorative></gux-icon>
        <div class="gux-message">
          <slot slot="error" />
        </div>
      </div>
    );
  }
}
