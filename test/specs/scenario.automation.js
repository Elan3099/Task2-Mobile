describe('TS01_Scenario Register and Submit Form Diet Meal Apps',() => {
    it('TC0101_Success Register and Submit Form Diet Meal Apps ', async() => {

        const welcomeText = await $('[id="com.fghilmany.dietmealapp:id/header_welcome"]').getText();
        expect(welcomeText).toBe("Welcome...");

        const nameInput = await $('[id="com.fghilmany.dietmealapp:id/et_name"]').setValue('Elan');

        const nameWeight = await $('[id="com.fghilmany.dietmealapp:id/et_weight"]').setValue('50');

        const nameHeight = await $('[id="com.fghilmany.dietmealapp:id/et_height"]').setValue('150');

        const clickFemale = await $('[id="com.fghilmany.dietmealapp:id/rb_female"]').click();

        const buttonNext =  await $('[id="com.fghilmany.dietmealapp:id/bt_next"]').click();

        const verifyRest = await $('[id="com.fghilmany.dietmealapp:id/rb_rest"]').getText();

        expect(verifyRest).toBe("Tidur, Rebahan, Duduk, dsj.")

        await $('[id="com.fghilmany.dietmealapp:id/rb_rest"]').click();

        const buttonFinish =  await $('[id="com.fghilmany.dietmealapp:id/bt_finish"]').click();

        const verifyHome = await $('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]').getText();

        expect(verifyHome).toBe("Ready to some calories today?");

        await $('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]').click();
    })
    
  })
