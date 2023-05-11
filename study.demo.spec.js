const { test, expect } = require('@playwright/test');

test('has nothing but title', async ({ page }) => {
  await page.goto('https://gadero.vercel.app/winkelwagen/');

  await page.fill("input[name= '_vercel_password']","gadero2023")
  await page.getByRole('button', { hasText: 'Log in' }).click();

  await page.getByText('Je winkelwagen is leeg');
 
  });
  
test('shopping', async ({page})=>{
  await page.goto('https://gadero.vercel.app/schuttingdeur-geimpregneerd-in-stalen-frame-130-x-195-cm-met-rvs-inbouwcilinderslot-en-ophangogen/');
  
  await page.fill("input[name= '_vercel_password']","gadero2023")
  await page.getByRole('button', { hasText: 'Log in' }).click();

  const cookie=page.getByRole('button', { name: 'Alles accepteren' }) 
  await cookie.waitFor({state:'attached'})
  await cookie.click()


  await page.getByLabel('Schuttingdeur geïmpregneerd in stalen frame 130 x 195 cm met RVS inbouwcilinderslot en ophangogen-90 cm Aantal')
  .fill('5',{force:true});
  await page.getByLabel('Schuttingdeur geïmpregneerd in stalen frame 130 x 195 cm met RVS inbouwcilinderslot en ophangogen-130 cm Aantal')
  .fill('3',{force:true});
  
  await page.getByRole('button', { name: 'Voeg toe aan mijn winkelwagen' }).click({force:true})
  const cartlogo=await page.getByRole('link', { name: '8 Winkelwagen' })
  await cartlogo.waitFor({state:"attached"});

  const gotocart = await page.getByText('Ga naar winkelwagen')
  await gotocart.waitFor({state:"attached"});
  await gotocart.click({force:true})
  await expect(page).toHaveURL('https://gadero.vercel.app/winkelwagen/')

 
  await page.getByPlaceholder('Vul hier je postcode en huisnummer in').fill('1441ek');
  await page.getByRole('listitem').filter({ hasText: '1441ek' }).nth(0).click();

  const radio=page.getByRole('radio', { name: 'Afhalen bij Gadero'}) 
  await radio.waitFor({state:'attached'})
  await radio.click()

  const radio1=page.getByRole('radiogroup').nth(0).click();

  const button1=page.getByRole('button', { name: 'Ga naar de volgende stap' }) 
  await button1.waitFor({state:'attached'})
  await button1.click()

  await expect(page).toHaveURL('https://gadero.vercel.app/checkout/customer-details/')
  
})
 

  
