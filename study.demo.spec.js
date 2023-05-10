const { test, expect } = require('@playwright/test');

test('has nothing but title', async ({ page }) => {
  await page.goto('https://gadero.vercel.app/winkelwagen/');
  await page.waitForTimeout(2000)
  await page.fill("input[name= '_vercel_password']","gadero2023")
  await page.waitForTimeout(2000)
  await page.getByRole('button', { hasText: 'Log in' }).click();
  await page.waitForTimeout(2000)
  await page.getByText('Je winkelwagen is leeg');
  //await page.locator('container mx-auto pb-12 sm:pb-24',{ hasText :'Je winkelwagen is leeg'}); 
  });
  
test('shopping', async ({page})=>{
  await page.goto('https://gadero.vercel.app/schuttingdeur-geimpregneerd-in-stalen-frame-130-x-195-cm-met-rvs-inbouwcilinderslot-en-ophangogen/');
  //await page.getByRole('button', { name: 'Close' }).click();
  await page.fill("input[name= '_vercel_password']","gadero2023")
  await page.getByRole('button', { hasText: 'Log in' }).click();
  await page.getByLabel('Schuttingdeur geïmpregneerd in stalen frame 130 x 195 cm met RVS inbouwcilinderslot en ophangogen-1 counter')
  .fill('5');
  await page.getByLabel('Schuttingdeur geïmpregneerd in stalen frame 130 x 195 cm met RVS inbouwcilinderslot en ophangogen-6 counter')
  .fill('3');
  await page.getByRole('button', { name: 'Voeg toe aan mijn winkelwagen' }).click();
  //await page.getByRole('button', { name: 'sluiten' }).click()
  
  await page.locator('"text-[10px] -top-0.5"',{ hasText :'8'});
  await page.getByRole('button', { name: 'Ga naar winkelwagen' }).click();
  await page.getByPlaceholder('Vul hier je postcode en huisnummer in').fill('1441ek');
  

  //await page.getByText('1441EK Purmerend, Wilhelminalaan 1', { exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: '1441ek' }).nth(0).click();

  await page.getByRole('radio', { name: 'Afhalen bij Gadero' }).click();
  await page.getByRole('radio', { name: 'Winkel vrijdag 19 mei (20:00-00:00) 9,95' }).click();
  await page.getByRole('button', { name: 'Ga naar de volgende stap' }).click();
})
 
