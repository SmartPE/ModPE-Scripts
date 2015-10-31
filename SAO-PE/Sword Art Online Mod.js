/*
---------------------------
SAO MCPE Project
Made by:
SmartPE Team
--------------------------
*/

ModPE.langEdit("menu.play", "Link Start!");
ModPE.langEdit("menu.copyright", "SAO MCPE Project");
ModPE.langEdit("deathScreen.title", "You are dead");
ModPE.langEdit("deathScreen.message", "You are dead");

Cardinal.setupSwordtoData(830, "elucidator", 0, "[One-Handed Sword] Elucidator", 1350, 7);
Cardinal.setupSwordtoData(831,"darkrepulser",0,"[One-Handed Sword] Dark Repulser", 1350, 7);
Cardinal.setupSwordtoData(832,"lambentlight",0,"[One-Handed Sword] Lambent Light", 1350, 7);
Cardinal.setupSwordtoData(833,"liberator",0,"[One-Handed Sword] Liberator", 1350, 7);
Cardinal.setupSwordtoData(834,"tyrantdragon",0,"[One-Handed Sword] Tyrant Dragon", 1350, 7);
Cardinal.setupSwordtoData(835,"objecteraser",0,"[One-Handed Sword] Object Eraser", 1350, 7);
Cardinal.setupSwordtoData(836,"kagemitsu",0,"[One-Handed Sword] Kagemitsu", 1350, 7);
Cardinal.setupSwordtoData(837,"excaliber",0,"[One-Handed Sword] Excaliber", 1350, 7);

Cardinal.setupCraftingRecipes();
Cardinal.setupServer(true);

function newLevel(){
ctx.runOnUiThread(new java.lang.Runnable(){run:function(){try{android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("SAO MCPE Project"),0).show();android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("by SmartPE"),0).show()}catch(err){clientMessage("Error: "+err)}}})
for(var i in swordsId) Player.addItemCreativeInv(swordsId[i], 1, 0);
}



/*do not edit from here*/
function attackHook(e, t) {
    Entity.getEntityTypeId(t) < 64 && (Cardinal.swordAttackHook(e, t))
}

function useItem(x, y, z, i, b, s){
	for(var id in swordsId){
	if(i==swordsId[id]){
		Cardinal.swordUseTick(i);
	}
}

function destroyBlock(x, y, z, s){
	var dBID = Player.getCarriedItem();
	Cardinal.swordDestroyBlock(dBID);
}

Cardinal.swordAttackHook = function(e, t) {
    iD1 = Player.getCarriedItem(), dE1 = swords[swords.indexOf(Player.getCarriedItem()) + 1], dY1 = swords[swords.indexOf(Player.getCarriedItem()) + 2], -1 != swordsId.indexOf(Player.getCarriedItem()) && Entity.getHealth(t) > dE1 && Entity.getHealth(t) > 0 && (Entity.setHealth(t, Entity.getHealth(t) - dE1), Item.setDurability(iD1, dY1)), -1 != swordsId.indexOf(Player.getCarriedItem()) && Entity.getHealth(t) <= dE1 && Entity.getHealth(t) > 0 && (Entity.setHealth(t, 1), Item.setDurability(iD1, dY1))
};

var swords = [],
    swordsId = [],
    iD1, dE1, dY1, aY1, aR1;

Cardinal.setupSwordtoData = function(e, t, s, i, a, r) {
    ModPE.setItem(e, t, s, i, 1), Item.setCategory(e, 3), Item.setMaxDamage(e, a), Item.setHandEquipped(e, !0), swordsId.push(e), swords.push(e), swords.push(r - 2), swords.push(a)
};

Cardinal.changeSwordDurability = function(e, t) {
    Player.getCarriedItem() == e && Entity.setCarriedItem(Player.getEntity(), e, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1), Player.getCarriedItem() == e && Player.getCarriedItemData() > t && (Entity.setCarriedItem(Player.getEntity(), 0, 0, 0), Level.playSoundEnt(Player.getEntity(), "random.break", 10))
};

Cardinal.swordDestroyBlock = function(id){
	Cardinal.changeSwordDurability(id, 4);
};

Cardinal.swordUseTick = function(id){
	Cardinal.changeSwordDurability(id, 2);
};


Cardinal.setupCraftingRecipes = function(){
	for(var id in swordsId){
		switch(id){
			case 830:
				Cardinal.setupSwordRecipe(830, 49, 0, 276, 0);
		}
	}
};

Cardinal.setupSwordRecipe = function(i, b, b1, s, s1){
	Item.addShapedRecipe(i,1,0,[" a "," a "," b "],["a",b,b1,"b",s,s1]);
};

Cardinal.setupServer = function(toggle) { //Enables ModPE on servers
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().runOnUiThread(new java.lang.Runnable({run: function() {
		net.zhuoweizhang.mcpelauncher.ScriptManager.isRemote = true; //As in Java, 1 isn't true, the variable must be set to true, and 1 isn't an option.
	}}));
	if(toggle){
		Server.sendChat("BlockLauncher, enable scripts, please and thank you");
	}
};
