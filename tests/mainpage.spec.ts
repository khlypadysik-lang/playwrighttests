import { test, expect } from '@playwright/test';

test.describe('Проверка элементов на странице хедера', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });
  test('Проверка отображения элементов на странице хедера', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'MCP', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Switch between dark and light/ })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Search (Control+k)' })).toBeVisible();
  });
  test('Проверка названий элементов на странице хедера', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
      'Playwright',
    );
    await expect(page.getByRole('navigation', { name: 'Main' })).toContainText('Docs');
    await expect(page.getByRole('navigation', { name: 'Main' })).toContainText('MCP');
    await expect(page.getByRole('navigation', { name: 'Main' })).toContainText('CLI');
    await expect(page.getByRole('navigation', { name: 'Main' })).toContainText('API');
    await expect(page.getByRole('navigation', { name: 'Main' })).toContainText('Node.js');
  });

  test('Проверка атрибутов href элементов навигации хедера', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
      'Playwright',
    );
    await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
    await expect(page.getByRole('link', { name: 'MCP', exact: true })).toHaveAttribute(
      'href',
      '/mcp/introduction',
    );
    await expect(page.getByRole('link', { name: 'CLI', exact: true })).toHaveAttribute(
      'href',
      '/agent-cli/introduction',
    );
    await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute(
      'href',
      '/docs/api/class-playwright',
    );

    await expect(page.getByRole('link', { name: 'GitHub repository' })).toHaveAttribute(
      'href',
      'https://github.com/microsoft/playwright',
    );
    await expect(page.getByRole('link', { name: 'Discord server' })).toHaveAttribute(
      'href',
      'https://aka.ms/playwright/discord',
    );
  });
  test('Проверка переключение light mode и dark mode', async ({ page }) => {
    await page.getByRole('button', { name: /Switch between dark and light/ }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });
  test('Проверка заголовков на странице', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText(
      'Playwright enables reliable web automation for testing, scripting, and AI agents.',
    );
  });
  test('Проверка кнопки "Get started"', async ({ page }) => {
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    await expect.soft(page.getByRole('banner')).toContainText('Get started');
    await expect
      .soft(page.getByRole('link', { name: 'Get started' }))
      .toHaveAttribute('href', '/docs/intro');
  });
});
