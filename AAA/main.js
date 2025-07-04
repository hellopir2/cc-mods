var AAA = {};

// ... thanks orteil...
function inRect(x,y,rect)
{
    //find out if the point x,y is in the rotated rectangle rect{w,h,r,o} (width,height,rotation in radians,y-origin) (needs to be normalized)
    //I found this somewhere online I guess
    var dx = x+Math.sin(-rect.r)*(-(rect.h/2-rect.o)),dy=y+Math.cos(-rect.r)*(-(rect.h/2-rect.o));
    var h1 = Math.sqrt(dx*dx + dy*dy);
    var currA = Math.atan2(dy,dx);
    var newA = currA - rect.r;
    var x2 = Math.cos(newA) * h1;
    var y2 = Math.sin(newA) * h1;
    if (x2 > -0.5 * rect.w && x2 < 0.5 * rect.w && y2 > -0.5 * rect.h && y2 < 0.5 * rect.h) return true;
    return false;
}

Game.registerMod("Additional Achievements Addon",{
    init:function(){
        if (Game.ready) this.createAchievements();
        else Game.registerHook('create', this.createAchievements);

        AAA.updatedGrimoire = false;
	AAA.updatedGarden = false;

        Game.UpdateWrinklers = eval('Game.UpdateWrinklers='+Game.UpdateWrinklers.toString().replace("if (me.type==1) Game.Win('Last Chance to See');", "else if (me.sucked>0){Game.Win('Silent Wrinkler');}\n\t\t\t\t\tif (me.type==1) Game.Win('Last Chance to See');"));
        Game.Reset = eval('Game.Reset='+Game.Reset.toString().replace("if (Math.round(Game.cookies)==1000000000000) Game.Win('When the cookies ascend just right');", "if (Math.round(Game.cookies)==1000000000000) Game.Win('When the cookies ascend just right');\n\t\t\t\telse if (Math.round(Game.cookiesd)==1000000000000) Game.Win('When the cookies ascend just wrong');\n\t\t\t\tif (Math.round(Game.cookies)==1000000000000000000000) Game.Win('When the cookies ascend just right²');"));
        Game.UpdateMenu = eval('Game.UpdateMenu='+Game.UpdateMenu.toString().replace("var pools={", "var pools={\n\t\t\t\t\t'add':'<b>Additional achievements</b> <small>(These are achievements added by the \"Additional Achievements Addon\")</small>',"));
        Game.CalculateGains= eval('Game.CalculateGains='+Game.CalculateGains.toString().replace("var rawCookiesPs=Game.cookiesPs*mult;", "var rawCookiesPs=Game.cookiesPs*mult;\n\t\t\tif (0 < rawCookiesPs && rawCookiesPs < 1/1000) Game.Win('Slow and steady');"));
        Game.shimmerTypes.reindeer.popFunc = eval('Game.shimmerTypes.reindeer.popFunc='+Game.shimmerTypes.reindeer.popFunc.toString().replace("if (Game.hasBuff('Elder frenzy')) Game.Win('Eldeer');", "if (Game.hasBuff('Elder frenzy')) Game.Win('Eldeer');\n\t\t\t\t\tif (Game.hasBuff('Frenzy') && Game.hasBuff('Dragon Harvest') && (Game.hasBuff('High-five') || Game.hasBuff('Congregation') || Game.hasBuff('Luxuriant harvest') || Game.hasBuff('Ore vein') || Game.hasBuff('Oiled-up') || Game.hasBuff('Juicy profits') || Game.hasBuff('Fervent adoration') || Game.hasBuff('Manabloom') || Game.hasBuff('Delicious lifeforms') || Game.hasBuff('Breakthrough') || Game.hasBuff('Righteous cataclysm') || Game.hasBuff('Golden ages') || Game.hasBuff('Extra cycles') || Game.hasBuff('Solar flare') || Game.hasBuff('Winning streak') || Game.hasBuff('Macrocosm') || Game.hasBuff('Refactoring') || Game.hasBuff('Cosmic nursery') || Game.hasBuff('Brainstorm') || Game.hasBuff('Deduplication')) && Game.hasBuff('Click frenzy') && Game.hasBuff('Elder frenzy') && Game.hasBuff('Dragonflight')) Game.Win('Ho ho holy Grail');"));

        Game.registerHook('check', () => {
            if (Game.hasBuff('Haggler\'s luck').time >= 150 && Game.hasBuff('Haggler\'s misery').time >= 150 && Game.hasBuff('Crafty pixies').time >= 150 && Game.hasBuff('Nasty goblins').time >= 150 && Game.hasBuff('Magic adept').time >= 150 && Game.hasBuff('Magic inept').time >= 150) Game.Win('Frame perfect');
            
            if (Game.cookiesEarned >= 1e24) {
                let condition = true;

                for (let i = 0; i < Game.UpgradesN; i++) {
                    condition &&= (Game.UpgradesById[i].pool == 'prestige' || Game.UpgradesById[i].pool == 'toggle' || Game.UpgradesById[i].name.toLowerCase().indexOf('e') == -1 || !Game.UpgradesById[i].bought);
                }

                for (let i of Game.ObjectsById) {
                    condition &&= (i.name.toLowerCase().indexOf('e') == -1 || i.highest == 0);
                }

                if (condition) Game.Win('Cooki* Click*r');
            }

            if (Game.Objects['Wizard tower'].minigameLoaded && !AAA.updatedGrimoire) {
                let M = Game.Objects['Wizard tower'].minigame;
                M.castSpell = eval('M.castSpell='+M.castSpell.toString().replace("{fail=true;out=spell.fail();}", "{fail=true;out=spell.fail();if (!obj.failChanceMax && Game.hasBuff('Magic adept')) Game.Win('Skill issue');}"));
                AAA.updatedGrimoire = true;
            }

	    if (Game.Objects['Farm'].minigameLoaded && !AAA.updatedGarden) {
		let M = Game.Objects['Farm'].minigame;
		M.plants.meddleweed.onKill = eval('M.plants.meddleweed.onKill='+M.plants.meddleweed.onKill.toString().replace("if (Math.random()<0.2*(age/100)) M.plot[y][x]=[M.plants[choose(['brownMold','crumbspore'])].id+1,0];", "if (Math.random()<0.2*(age/100)) { if (age==1) Game.Win('Meddling with the odds'); M.plot[y][x]=[M.plants[choose(['brownMold','crumbspore'])].id+1,0];}"));
		AAA.updatedGarden = true;
	    }
        });
    },
    createAchievements: function(){
        this.achievements = [];
        this.achievements.push(new Game.Achievement('Silent Wrinkler','Pop a wrinkler that had cookies... without triggering the notification.',[27,26]));
        this.achievements.push(new Game.Achievement('When the cookies ascend just right²', 'Ascend with exactly <b>1 sextillion cookies</b>.',[0, 0, "https://hellopir2.github.io/cc-mods/img/wtcajr2.png"]));
        this.achievements.push(new Game.Achievement('When the cookies ascend just wrong', 'Ascend with the cookie display showing <b>1,000,000,000,000 cookies</b>, but having a different actual cookie amount.',[26,17]));
        this.achievements.push(new Game.Achievement('Skill issue','Have a spell backfire while your ineptitude is dimished without using Gambler\'s Fever Dream',[0,7])); // from yeetdragon
        this.achievements.push(new Game.Achievement('Frame Perfection','Have all six grimoire buffs simultaneously for at least <b>5 seconds</b>.',[32,27]));
        this.achievements.push(new Game.Achievement('Slow and steady','Bake less than <b>1/1000 cookies</b> per second.',[30, 13]));
        this.achievements.push(new Game.Achievement('Ho ho holy Grail','Pop a reindeer <b>during a combined frenzy, dragon harvest, building special, click frenzy, elder frenzy, and dragonflight</b>.',[20, 6]));
        this.achievements.push(new Game.Achievement('Meddling with the odds','Uproot an <b>age 1 meddleweed</b> for spores.',[1, 29, "https://cdn.dashnet.org/cookieclicker/img/gardenPlants.png"]));
        this.achievements.push(new Game.Achievement('Cooki* Click*r','Bake <b>1 septillion cookies</b> in one ascension without owning any buildings or upgrades containing the letter "e".',[4, 10]));
	// todo: add no E ascend
        //this.achievements.push(new Game.Achievement('I give up', 'Get to <b>1 million cookies</b> baked with exactly <b>2</b> cookie clicks.',[13, 7]));
        for(let i of this.achievements){i.pool="add";i.order=1412;}
        LocalizeUpgradesAndAchievs();
    },
    save: function () {
        var A = Game.mods['Additional Achievements Addon'];
        let str = "";
        for (let i of A.achievements) str += i.won;
        return str;
    },
    load: function(str){
        var A = Game.mods['Additional Achievements Addon'];
        str ??= '';
        for (let i = 0; i < A.achievements.length; i++) {
            if (str[i]) { A.achievements[i].won = parseFloat(str[i]); }
	        else { A.achievements[i].won = 0; }
        }
        // for(let i in Game.mods['Additional Achievements Addon'].achievements)Game.mods['Additional Achievements Addon'].achievements[i].won=0+(Game.vault.indexOf(-i-1)>-1);
    }
})
