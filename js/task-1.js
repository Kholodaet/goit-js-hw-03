const webSiteName = 'Arrays for begginers';
const webSiteName1 = 'English for developer';
const webSiteName2 = 'Ten secrets of JavaScript';
const webSiteName3 = 'How to become a JUNIOR developer in TWO WEEKS';

function slugify(title) {
  const slugifyLowerMas = title.toLowerCase().split(' ');
  const slug = slugifyLowerMas.join('-');
  return slug;
}
console.log(slugify(webSiteName)); // "arrays-for-begginers"
console.log(slugify(webSiteName1)); // "english-for-developer"
console.log(slugify(webSiteName2)); // "ten-secrets-of-javascript"
console.log(slugify(webSiteName3)); // "how-to-become-a-junior-developer-in-two-weeks"
