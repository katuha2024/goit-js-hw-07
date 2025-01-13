const categories = document.querySelectorAll('#categories > .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  // Отримання заголовка категорії
  const categoryTitle = category.querySelector('h2')?.textContent || 'No title';

  // Отримання кількості елементів у вкладеному списку
  const categoryItems = category.querySelectorAll('ul > li').length;

  // Виведення в консоль
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
});
