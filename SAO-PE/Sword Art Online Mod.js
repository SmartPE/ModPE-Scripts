
ModPE.setItem(830,"elucidator",0,"Elucidator",1);
ModPE.setItem(831,"darkrepulser",0,"Dark Repulser",1);
ModPE.setItem(832,"lambentlight",0,"Lambent Light",1);
ModPE.setItem(833,"liberator",0,"Liberator",1);
ModPE.setItem(834,"tyrantdragon",0,"Tyrant Dragon",1);
ModPE.setItem(835,"objecteraser",0,"Object Eraser",1);
ModPE.setItem(837,"kagemitsu",0,"Kagemitsu",1);
ModPE.setItem(838,"excaliber",0,"Excaliber",1);

/*
---------------------------
SAO MCPE Project
Made by:
SmartPE Team
--------------------------
*/

var SPtick = 1;
var Burst = 0;
var SPfull = false;

function mainModTick(){
	SPcharger();
}

function mainUseItem(x,y,z,i,b,s,iD,bD){
}

function mainAttackHook(a,v){
	burstCharger(e, t);
}

function mainDestroyBlock(x,y,z,s){
}

ModPE.langEdit("menu.play", "Link Start!");
ModPE.langEdit("menu.copyright", "SAO MCPE Project");
ModPE.langEdit("deathScreen.title", "You are dead");
ModPE.langEdit("deathScreen.message", "You are dead");

function newLevel(){
ctx.runOnUiThread(new java.lang.Runnable(){run:function(){try{android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("SAO MCPE Project"),0).show();android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("by SmartPE"),0).show()}catch(err){clientMessage("Error: "+err)}}})
for(var i in swordsId) Player.addItemCreativeInv(swordsId[i], 1, 0);
}

Item.setSword(830, "elucidator", 0, "[One-Handed Sword] Elucidator", 1350, 7);
Item.setSword(831,"darkrepulser",0,"[One-Handed Sword] Dark Repulser", 1350, 7);
Item.setSword(832,"lambentlight",0,"[One-Handed Sword] Lambent Light", 1350, 7);
Item.setSword(833,"liberator",0,"[One-Handed Sword] Liberator", 1350, 7);
Item.setSword(834,"tyrantdragon",0,"[One-Handed Sword] Tyrant Dragon", 1350, 7);
Item.setSword(835,"objecteraser",0,"[One-Handed Sword] Object Eraser", 1350, 7);
Item.setSword(836,"kagemitsu",0,"[One-Handed Sword] Kagemitsu", 1350, 7);
Item.setSword(837,"excaliber",0,"[One-Handed Sword] Excaliber", 1350, 7);

Item.addShapedRecipe(830,1,0,[" a "," a "," b "],["a",49,0,"b",267,0]);

function SPcharger() {
    if(Player.getLevel()>=301){
    	Player.setLevel(300);
    }
	SPtick++;
	if(SPtick==20&&Player.getLevel()>=299) {
	Player.setLevel(Player.getLevel()+2);
	SPtick = 1;
	}
	if(SPtick==20&&Player.getLevel()==299) {
	Player.setLevel(Player.getLevel()+1);
	SPtick = 1;
}
}

function burstCharger(a, v) {
if(Burst<10) {
	for(var i in swordsId) if(Player.getCarriedItem()==swordsId[i]&&v!=getPlayerEnt()) {
		Burst = Burst+1;
}
}
if(Burst==10) {
	for(var i in swordsId) if(Player.getCarriedItem()==swordsId[i]&&v!=getPlayerEnt()&&Player.getLevel()>=100) {
	Burst = Burts-5;
	var BurstType = Math.floor((Math.random()*3)+1);
	switch(BurstType){
	case 1:
	Player.setLevel(Player.getLevel()-100);
	Entity.setFireTicks(v, 60);
	break;
	case 2:
	Player.setLevel(Player.getLevel()-100);
	Entity.addEffect(v, MobEffect.poison, 20*20, 2-1, false, true);
	break;
	case 3:
	Player.setLevel(Player.getLevel()-100);
	Entity.addEffect(v, MobEffect.wither, 10*20, 2-1, false, true);
	}
}
}
}

/*do not edit from here*/
/// - Easy Tool Coding API - ///
///---- By:@TaQuItO_988 ---- ///
function attackHook(e,t){Entity.getEntityTypeId(t)<64&&(mainAttackHook(e,t),attackHook1(e,t),attackHook2(e,t),attackHook3(e,t),attackHook4(e,t))}function attackHook1(e,t){iD1=Player.getCarriedItem(),dE1=swords[swords.indexOf(Player.getCarriedItem())+1],dY1=swords[swords.indexOf(Player.getCarriedItem())+2],-1!=swordsId.indexOf(Player.getCarriedItem())&&Entity.getHealth(t)>dE1&&Entity.getHealth(t)>0&&(Entity.setHealth(t,Entity.getHealth(t)-dE1),Item.setDurability(iD1,dY1)),-1!=swordsId.indexOf(Player.getCarriedItem())&&Entity.getHealth(t)<=dE1&&Entity.getHealth(t)>0&&(Entity.setHealth(t,1),Item.setDurability(iD1,dY1))}function attackHook2(e,t){iD2=Player.getCarriedItem(),dE2=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+4],dY2=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+2],-1!=pickaxesId.lastIndexOf(Player.getCarriedItem())&&Entity.getHealth(t)>dE2&&Entity.getHealth(t)>0&&(Entity.setHealth(t,Entity.getHealth(t)-dE2),Item.setDurability(iD2,dY2)),-1!=pickaxesId.lastIndexOf(Player.getCarriedItem())&&Entity.getHealth(t)<=dE2&&Entity.getHealth(t)>0&&(Entity.setHealth(t,1),Item.setDurability(iD2,dY2))}function modTick(){mainModTick(),modTick2(),modTick3(),mD2=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+1],mL1=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+3],-1!=pickaxesId.lastIndexOf(Player.getCarriedItem())&&0==defined&&(iD2=Player.getCarriedItem(),mL2=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+3],changeDestroyTimes1(mD2),defined=!0),-1==pickaxesId.lastIndexOf(Player.getCarriedItem())&&1==defined&&(resetDestroyTimes1(),defined=!1),Player.getCarriedItem()!=iD2&&1==defined&&(defined=!1),mL2!=mL1&&(mL2=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+3],resetDestroyTimes1())}function changeDestroyTimes1(e){for(i=0;i<blocks.length;i++)1==mL2&&-1==lvl2.lastIndexOf(blocks[i])&&-1==lvl3.lastIndexOf(blocks[i])&&-1==lvl4.lastIndexOf(blocks[i])&&Block.setDestroyTime(blocks[i],dTimes1[i]*e),2==mL2&&-1==lvl3.lastIndexOf(blocks[i])&&-1==lvl4.lastIndexOf(blocks[i])&&Block.setDestroyTime(blocks[i],dTimes1[i]*e),3==mL2&&-1==lvl4.lastIndexOf(blocks[i])&&Block.setDestroyTime(blocks[i],dTimes1[i]*e),4==mL2&&Block.setDestroyTime(blocks[i],dTimes1[i]*e)}function resetDestroyTimes1(){for(i=0;i<dTimes1.length;i++)Block.setDestroyTime(blocks[i],dTimes1[i])}function destroyBlock(e,t,s,i){mainDestroyBlock(e,t,s,i),destroyBlock2(e,t,s),destroyBlock3(e,t,s),Player.getCarriedItem()==iD2&&checkDrop(e,t,s)}function checkDrop(e,t,s){dY2=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+2],Item.setDurability(iD2,dY2),-1!=bDrops.lastIndexOf(getTile(e,t,s))&&"true"!=bDrops[bDrops.lastIndexOf(getTile(e,t,s))+1]&&mL2>=bDrops[bDrops.lastIndexOf(getTile(e,t,s))+2]?Level.dropItem(e+.5,t,s+.5,0,bDrops[bDrops.lastIndexOf(getTile(e,t,s))+1],1,0):-1!=bDrops.lastIndexOf(getTile(e,t,s))&&"true"==bDrops[bDrops.lastIndexOf(getTile(e,t,s))+1]&&mL2>=bDrops[bDrops.lastIndexOf(getTile(e,t,s))+2]?Level.dropItem(e+.5,t,s+.5,0,getTile(e,t,s),1,Level.getData(e,t,s)):21==getTile(e,t,s)&&mL2>=2?Level.dropItem(e+.5,t,s+.5,0,351,4,4):73==getTile(e,t,s)&&mL2>=bDrops[bDrops.lastIndexOf(getTile(e,t,s))+2]||74==getTile(e,t,s)&&mL2>=3?Level.dropItem(e+.5,t,s+.5,0,331,5,0):1==getTile(e,t,s)&&0!=Level.getData(e,t,s)?Level.dropItem(e+.5,t,s+.5,0,getTile(e,t,s),1,Level.getData(e,t,s)):1==getTile(e,t,s)&&0==Level.getData(e,t,s)&&Level.dropItem(e+.5,t,s+.5,0,4,1,0)}function attackHook3(e,t){iD3=Player.getCarriedItem(),dE3=shovels[shovels.indexOf(Player.getCarriedItem())+3],dY3=shovels[shovels.indexOf(Player.getCarriedItem())+2],-1!=shovelsId.indexOf(Player.getCarriedItem())&&Entity.getHealth(t)>dE3&&Entity.getHealth(t)>0&&(Entity.setHealth(t,Entity.getHealth(t)-dE3),Item.setDurability(iD3,dY3)),-1!=shovelsId.indexOf(Player.getCarriedItem())&&Entity.getHealth(t)<=dE3&&Entity.getHealth(t)>0&&(Entity.setHealth(t,1),Item.setDurability(iD3,dY3))}function modTick2(){mD3=shovels[shovels.lastIndexOf(Player.getCarriedItem())+1],dY3=shovels[shovels.lastIndexOf(Player.getCarriedItem())+2],-1!=shovelsId.lastIndexOf(Player.getCarriedItem())&&0==defined2&&(iD3=Player.getCarriedItem(),changeDestroyTimes2(mD3),defined2=!0),-1==shovelsId.lastIndexOf(Player.getCarriedItem())&&1==defined2&&(resetDestroyTimes2(),defined2=!1),Player.getCarriedItem()!=iD3&&1==defined2&&(resetDestroyTimes2(),defined2=!1)}function destroyBlock2(e,t,s){-1!=shovelsId.lastIndexOf(Player.getCarriedItem())&&Item.setDurability(Player.getCarriedItem(),dY3),-1!=shovelsId.lastIndexOf(Player.getCarriedItem())&&78==getTile(e,t,s)&&(Level.dropItem(e+.5,t,s+.5,0,332,1,0),Item.setDurability(Player.getCarriedItem(),dY3)),-1!=shovelsId.lastIndexOf(Player.getCarriedItem())&&80==getTile(e,t,s)&&(Level.dropItem(e+.5,t,s+.5,0,332,4,0),Item.setDurability(Player.getCarriedItem(),dY3))}function changeDestroyTimes2(e){for(i=0;i<blocks2.length;i++)Block.setDestroyTime(blocks2[i],dTimes2[i]*e)}function resetDestroyTimes2(){for(o=0;o<blocks2.length;o++)Block.setDestroyTime(blocks2[o],dTimes2[o])}function useItem(e,t,s,i,a,r,d,l){mainUseItem(e,t,s,i,a,r,d,l),useItem2(e,t,s,i,a),-1==shovelsId.lastIndexOf(i)||2!=a&&3!=a||0!=getTile(e,t+1,s)||(setTile(e,t,s,198,0),Item.setDurability(i,dY3),Level.playSoundEnt(Player.getEntity(),"step.grass",10))}function attackHook4(e,t){iD4=Player.getCarriedItem(),dE4=axes[axes.indexOf(Player.getCarriedItem())+3],dY4=axes[axes.indexOf(Player.getCarriedItem())+2],-1!=axesId.indexOf(Player.getCarriedItem())&&Entity.getHealth(t)>dE4&&Entity.getHealth(t)>0&&(Entity.setHealth(t,Entity.getHealth(t)-dE4),Item.setDurability(iD4,dY4)),-1!=axesId.indexOf(Player.getCarriedItem())&&Entity.getHealth(t)<=dE4&&Entity.getHealth(t)>0&&(Entity.setHealth(t,1),Item.setDurability(iD4,dY4))}function modTick3(){mD4=axes[axes.lastIndexOf(Player.getCarriedItem())+1],-1!=axesId.lastIndexOf(Player.getCarriedItem())&&0==defined3&&(iD4=Player.getCarriedItem(),changeDestroyTimes3(mD4),defined3=!0),-1==axesId.lastIndexOf(Player.getCarriedItem())&&1==defined3&&(resetDestroyTimes3(),defined3=!1),Player.getCarriedItem()!=iD4&&1==defined3&&(resetDestroyTimes3(),defined3=!1)}function destroyBlock3(){-1!=axesId.lastIndexOf(Player.getCarriedItem())&&Item.setDurability(Player.getCarriedItem(),dY4)}function changeDestroyTimes3(e){for(i=0;i<blocks3.length;i++)Block.setDestroyTime(blocks3[i],dTimes3[i]*e)}function resetDestroyTimes3(){for(o=0;o<blocks3.length;o++)Block.setDestroyTime(blocks3[o],dTimes3[o])}function useItem2(e,t,s,i,a){dY5=hoes[hoes.lastIndexOf(i)+1],-1==hoesId.lastIndexOf(i)||2!=a&&3!=a||(random=Math.floor(5*Math.random()),Item.setDurability(i,dY5),setTile(e,t,s,60,0),Level.playSoundEnt(Player.getEntity(),"step.gravel",10),seedsDrop(e,t,s))}function seedsDrop(e,t,s){0==random&&Level.dropItem(e+.5,t+1,s+.5,0,295,1,0)}var swords=[],swordsId=[],iD1,dE1,dY1,aY1,aR1;Item.setSword=function(e,t,s,i,a,r){ModPE.setItem(e,t,s,i,1),Item.setCategory(e, 3),Item.setMaxDamage(e,a),Item.setHandEquipped(e,!0),swordsId.push(e),swords.push(e),swords.push(r-2),swords.push(a)};var pickaxes=[],pickaxesId=[],blocks=[1,4,14,15,16,21,22,24,41,42,43,44,45,46,48,49,52,56,57,61,62,67,73,74,87,98,101,108,109,112,114,121,128,129,133,139,152,155,156,159,172,173,245,246,247],dTimes1=[1.5,2,3,3,3,3,5,.8,3,5,2,2,2,2,3,25,5,3,5,3.5,3.5,2,3,3,.4,1.5,5,2,2,2,2,3,2,3,5,2,2,2,2,1.5,1.5,3,2,3,3],bDrops=[4,"true",1,14,"true",3,15,"true",2,16,263,1,22,"true",2,24,"true",1,41,"true",3,42,"true",2,43,"true",1,45,"true",1,48,"true",1,246,49,4,49,"true",4,56,264,3,57,"true",3,62,61,1,61,"true",1,67,"true",1,87,"true",1,98,"true",1,101,"true",1,108,"true",1,109,"true",1,112,"true",1,114,"true",1,121,"true",1,128,"true",1,129,388,3,133,"true",3,139,"true",1,155,"true",1,156,"true",1,159,"true",1,172,"true",1,173,"true",1,245,"true",1,247,"true",1],lvl2=[15,21,22,42,71],lvl3=[14,41,56,57,73,74,129,133],lvl4=[49],iD2,dY2,dE2,mD2,mL1,mL2;Item.setPickaxe=function(e,t,s,i,a,r,d,l){ModPE.setItem(e,t,s,i,1),Item.setMaxDamage(e,a),Item.setHandEquipped(e,!0),pickaxesId.push(e),pickaxes.push(e),pickaxes.push(d/5),pickaxes.push(a),pickaxes.push(l),pickaxes.push(r-2)};var defined=!1,shovels=[],shovelsId=[],blocks2=[2,3,12,13,60,78,80,82,110,198],dTimes2=[.5,.6,.6,.6,.6,.1,.2,.6,.6,.6],defined2=!1,iD3,dY3,dE3,mD3;Item.setShovel=function(e,t,s,i,a,r,d){ModPE.setItem(e,t,s,i,0),Item.setHandEquipped(e,!0),Item.setMaxDamage(e,a),shovelsId.push(e),shovels.push(e),shovels.push(d/5),shovels.push(a),shovels.push(r)};var axes=[],axesId=[],blocks3=[5,17,47,53,54,58,63,64,65,68,85,96,107,134,135,136,157,158,162,163,164,183,184,185,186,187],dTimes3=[2,2,1.5,2,2.5,2.5,1,3,.4,1,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2],defined3=!1,iD4,dY4,dE4,mD4;Item.setAxe=function(e,t,s,i,a,r,d){ModPE.setItem(e,t,s,i,1),Item.setHandEquipped(e,!0),Item.setMaxDamage(e,a),axesId.push(e),axes.push(e),axes.push(d/5),axes.push(a),axes.push(r)};var hoes=[],hoesId=[],random=0,iD5,dY5;Item.setHoe=function(e,t,s,i,a){ModPE.setItem(e,t,s,i,1),Item.setHandEquipped(e,!0),Item.setMaxDamage(e,a),hoesId.push(e),hoes.push(e),hoes.push(a)},Item.setDurability=function(e,t){Player.getCarriedItem()==e&&Entity.setCarriedItem(Player.getEntity(),e,Player.getCarriedItemCount(),Player.getCarriedItemData()+1),Player.getCarriedItem()==e&&Player.getCarriedItemData()>t&&(Entity.setCarriedItem(Player.getEntity(),0,0,0),Level.playSoundEnt(Player.getEntity(),"random.break",10))};
