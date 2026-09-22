import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';



test('Проверка регистрации на Hexlet', async ({ page }) => {
 const testData = {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: 'TEST123F@',
 
 
    await page.goto('/signup');
  
  
  const userName = page.locator('#username')
  const email = page.locator('#email')
  const password = page.locator('#password')
  const submitButton = page.locator('button[type="Создать аккаунт"])
     
    await userName.fill(testData.username);
    await email.fill(testData.email);
    await password.fill(testData.password);
    await submitButton.click();')
    page.pause()
  