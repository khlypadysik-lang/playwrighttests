import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Проверка регистрации на Hexlet', async ({ page }) => {
  // 1. Закрыли объект testData правильной фигурной скобкой
  const testData = {
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: 'TEST123F@',
  }; // <-- вот здесь не хватало скобки

  await page.goto('/signup');
  
  const userName = page.locator('#username');
  const email = page.locator('#email');
  const password = page.locator('#password');
  // 2. Исправили кавычки и селектор кнопки (обычно это button[type="submit"] или текст)
  const submitButton = page.locator('button[type="submit"]');
    
  await userName.fill(testData.username);
  await email.fill(testData.email);
  await password.fill(testData.password);
  await submitButton.click();
  
  await page.pause();


 // <-- замените на реальный селектор сообщения об успешной регистрации
}); // <-- закрыли функцию теста
    
