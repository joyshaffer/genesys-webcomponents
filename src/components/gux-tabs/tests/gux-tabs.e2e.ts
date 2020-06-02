import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('gux-tabs', () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders', async () => {
    await page.setContent(`
    <gux-tabs></gux-tabs>
    `);
    element = await page.find('gux-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
