// thanks lookas
// avoiding having mod data because yes. this also means it's harder to lose the achievement, you can't just neuromancy it out, and you also can't just cheat it in unless you've read what this does.
Game.registerMod("Speed baking IV",{
    init:function(){
        this.spritesheet="https://hellopir2.github.io/cc-mods/img/sb.png";
        if (Game.ready) this.createAchievements();
        else Game.registerHook("create", this.createAchievements);
	Game.Logic = eval('Game.Logic='+Game.Logic.toString().replace("if (timePlayed<=1000*60*15) Game.Win('Speed baking III');", "if (timePlayed<=1000*60*15) Game.Win('Speed baking III');\n\t\t\t\t\tif (timePlayed<=1000*60*5){ if(Game.vault.indexOf(-1)<0) { Game.vault.push(-1); Game.Win('Speed baking IV'); } else { Game.Achievements['Speed baking IV'].won=1; } }\n\t\t\t\t\tif (timePlayed<=1000*60*-5){ if(Game.vault.indexOf(-2)<0) { Game.vault.push(-2); Game.Win('Speed baking V'); } else { Game.Achievements['Speed baking V'].won=1; } }"));
        Game.registerHook("check", this.load);
    },
    createAchievements: function(){
        this.achievements = [];
        this.achievements.push(new Game.Achievement("Speed baking IV", "Get to <b>1 million cookies</b> baked in <b>5 minutes</b>.",[0,0,this.spritesheet]));
        this.achievements.push(new Game.Achievement("Speed baking V", "Get to <b>1 million cookies</b> baked in <b>-5 minutes</b>.",[1,0,this.spritesheet]));
        for(let i of this.achievements){i.pool="shadow";i.order=30601;}
        LocalizeUpgradesAndAchievs();
    },
    load: function(str){
        for(let i in Game.mods['Speed baking IV'].achievements)Game.mods['Speed baking IV'].achievements[i].won=0+(Game.vault.indexOf(-i-1)>-1);
    }
})
