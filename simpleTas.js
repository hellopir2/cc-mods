var frame = 0;
Game.registerMod("Simple CC Tas",{
    init:function(){
        frame = 0;
        // Game.Reset(1);
        Game.LoadSave('Mi4wNTJ8fDE3MjU5Mzg3NjM4NzI7MTY2MzgxNjQzODIyNzsxNzI1OTM4OTM4MTY1O2FmZHM7a3Zlc2I7MCwwLDAsMCwwLDAsMHwxMTExMTAxMDEwMDAwMTEwMDEwMTAxMTAwMDF8ODQwMDc1MDkxNDA0LjkxOTY7ODQxNjEwNzE2Njk1LjkxOTY7MDs4NzAwOzA7MjM3MzY7MDswOzYuMjI0NzI2ODU4NjQxMDczZSszMTswOzA7MDswOzA7MzswOzA7MDswOzA7MDswOzswOzA7Mzk2MzE0Njs2NTE0OTszODk3OTk3OzA7MDstMTstMTstMTstMTstMTswOzA7MDswOzEwMDswOzA7MTAwMDAwMDAwMTY7MTAwMDAwMDA2MTQ7MTcyNTkyMjIxMjk3MDswOzA7OzQxOzA7MDs2ODMyODgwNjE0LjE5NjU2Mjs1MDswOzA7fDcwLDcwLDIxNDgxNTA4LDEyLCwwLDcwOzQyLDQyLDExNDY2NDI5OCwwLCwxLDQyOzMwLDMwLDcxNTQyNDU0NywxMCwxNzI1OTM5MDYzODg5OjA6MTcyNTkzODc2Mzg3NjowOjA6OTM3OjE6MDoxNzI1OTM4NzYzODc2OiAxMTExMTAxMDAxMTExMTEwMTAwMDAwMDEwMDAwMTAwMDAwIDA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOiwxLDMwOzI4LDI4LDM1NDgwMDMyMzMsMCwsMSwyODs0Miw0MiwyODE2NjAxODgzOSwwLCwxLDQyOzIzLDIzLDgzMDEyOTYzMjM4LDEsMDowOjE6MDowOiAyNjQ6MTotMTY0OjIyNzowOjA6MDowITM4NDoxOi0xNzk6MjMyOjA6MDowOjAhMjgwOjI6LTIxOTozMDM6MDowOjA6MCEzNjI3OjI6LTc1OjExMzowOjA6MDowITMxMjE6NTotMzY6MjA2OjA6MDowOjAhMzA0Nzo0Oi0xMDM6NDE0OjA6MDowOjAhNzE0NTo1Oi02MTo1ODI6MDoxOjA6MCE1ODUyOjA6LTExMzo2OjA6MTowOjAhNzgzNzo0Oi02NToyOTg6MDoxOjA6MCE5Njk5OjA6MzozMDU6MDoxOjA6MCExMDY1MzoxOjIwOjMzNDowOjE6MDowITg3Nzc6MDotMTg0OjIzNDowOjE6MDowITEyNjgwOjQ6LTI1OjM1MzowOjE6MDowITg0Nzk6NTotNTYzOjU3NzowOjE6MDowITEyNTY4OjA6LTE1NDo0NzI6MDoxOjA6MCExNDIyODo1OjY2OjM4MTowOjE6MDowITE3OTAxOjU6LTI0OjU1NDowOjE6MDowITE3NjAyOjI6LTE3OjIyOjA6MTowOjAhIDAsMSwyMzsxMywxMywyNTk4NzIzNzYxMzAsMSwtMS8tMS8tMSAzIDE3MjU5Mzg3NjM4NzkgMCwxLDEzOzEsMSwxMjAyNzMxOTQ3MDUsMTIsMzYgMCAxMyAxLDAsMTswLDAsMCwwLCwxLDA7MCwwLDAsMCwsMSwwOzAsMCwwLDAsLDEsMDswLDAsMCwwLCwxLDA7MCwwLDAsMCwsMSwwOzAsMCwwLDEwLCwxLDA7MCwwLDAsMTAsLDEsMDswLDAsMCwxMCwsMSwwOzAsMCwwLDEwLCwxLDA7MCwwLDAsMTAsLDEsMDswLDAsMCwxMCwsMSwwOzAsMCwwLDEwLCwxLDA7fDEwMTAxMDEwMTAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMDAwMDAwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDExMTExMDAwMDAwMDAwMDAwMDAwMDAwMDExMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMDEwMTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMDEwMTAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDAwMDAwMDAwMTAxMDAwMDAwMDAwMTAwMDAwMDAwMDAwMTAwMDAwMTExMTExMDAwMDAwMDAwMDAwMDAwMDExMTEwMDAwMDAxMTExMTEwMDAwMTExMTExMTExMTExMDAxMTExMTExMTExMTExMTExMTExMTExMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMTEwMDAxMTExMTEwMDAwMTAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMTExMTExMTExMTEwMDAwMDAxMTExMDAxMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDExMTExMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDB8MTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAxMTExMTExMDExMTExMTExMTExMTAwMDAwMDAwMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAwMDAxMTExMTExMTExMTExMTExMTExMTEwMDAwMDAwMDAwMDAxMTAwMDExMTExMTExMTExMTEwMDExMTEwMDAwMTExMTExMTExMTEwMTExMDExMDExMTExMTExMTAwMDAxMTExMTExMTAxMDAwMDAwMDAxMTExMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAwMDAxMDAwMDAxMTAwMDExMTExMDAwMTAwMTExMDAxMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDExMTAxMDAwMDAwMDAwMDAwMDAwMTEwMDAwMDAwMDAwMDAwMDAxMTExMTAwMDAwMDEwMDEwMDAxMDExMTEwMDAwMDAwMTAwMTAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDAxMTEwMDAwMDAwMDAwMTAwMTEwMTAwMDAwMDAwMDExMTAwMDAwMDAwMDAwMTAwMTAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDEwMDAwMDAwMDAwMDAwMTEwMTEwMTEwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTEwMHx8%21END%21');
        eval("Game.updateShimmers=" + Game.updateShimmers.toString().replace(" && Math.random()<0.5", ""));
        eval("Game.shimmerTypes.golden.popFunc=" + Game.shimmerTypes.golden.popFunc.toString().replace("Math.max(mult*(Game.cookiesPs*60*Math.floor(Math.random()*7+1)),Math.floor(Math.random()*7+1));", "Math.max(mult*Game.cookiesPs*60*7,7);"));
        Game.Notify("Funny Tas Mod Loaded", "I love gambler\'s fever dream", [14, 7], false);
        Game.registerHook("logic", this.logic);
        M = Game.ObjectsById[7].minigame;
        this.wait = false;
        this.wait2 = false;
        this.waitFrame = NaN;
        this.waitFrame2 = NaN;
    },
    logic: function(){
        if(frame == 0){
            M.castSpell(M.spells['gambler\'s fever dream']);
        }
        else if(frame == 7){
            for(let i = 0; i < 4; i++){
                M.castSpell(M.spells['gambler\'s fever dream']);
            }
            while(Game.ObjectsById[7].level < 195){
                Game.ObjectsById[7].levelUp();
            }
            legacyButton.click();
            document.getElementById('promptOption0').click()
            window.dispatchEvent(new KeyboardEvent('keyup', {'keyCode': 27}));
        }
        else if(frame == 8){
            Game.PickAscensionMode();
            challengeModeSelector1.click();
            promptOption0.click();
            ascendButton.click();
            promptOption0.click();
            Game.seed='kvesb';
            this.wait = true;
            Game.cookiesd = 0;
        }
        else if(this.wait){
            if(Game.shimmers.length == 1){
                this.wait = false;
                this.waitFrame = frame;
                Game.shimmers[0].pop();
            }
        }
        else if(Game.hasBuff('Cookie storm')){
            for(let i in Game.shimmers){
                if(Game.shimmers[i].noCount){
                    Game.shimmers[i].pop();
                }
            }
        }
        if(frame == this.waitFrame + 3){
            Game.ObjectsById[0].buy();
        }
        else if(frame == this.waitFrame + 4){
            Game.ObjectsById[0].buy();
        }
        else if(frame == this.waitFrame + 5){
            Game.ObjectsById[1].buy();
        }
        else if(frame == this.waitFrame + 6){
            for(let i = 0; i < 7; i++){
                Game.ObjectsById[0].buy();
            }
            this.wait2 = true;
        }
        else if(this.wait2){
            for(let i = 0; i < 10; i++){
                if(Game.ObjectsById[1].amount > 8){
                    Game.ObjectsById[2].buy();
                    break;
                }
                Game.ObjectsById[1].buy();
            }
            if(Game.shimmers.length == 4){
                this.wait2 = false;
                this.waitFrame2 = frame;
                Game.shimmers[3].pop();
                Game.shimmers[2].pop();
            }
        }
        else if(frame < this.waitFrame2 + 10){
            let t = 1;
            while(t){
                t = 0;
                for(let i = 19; i > -1; i--){
                    if(Game.ObjectsById[i].getPrice() <= Game.cookies){
                        Game.ObjectsById[i].buy();
                        t++;
                    }
                }
            }
        }
        else if(frame == this.waitFrame2 + 10){
            for(let i = 19; i > 0; i--){
                Game.ObjectsById[i].sell(100000);
            }
            Game.ObjectsById[0].buy(100000);
            Game.shimmers[1].pop();
            Game.ObjectsById[0].sell(100000);
            Game.ObjectsById[1].buy(100000);
            Game.shimmers[0].pop();
            
            let t = 1;
            while(t){
                t = 0;
                for(let i = 19; i > 10; i--){
                    if(Game.ObjectsById[i].getPrice() <= Game.cookies){
                        Game.ObjectsById[i].buy();
                        t++;
                    }
                }
            }
        }
        else if(Game.hasBuff('Cookie storm')){
            let t = 1;
            while(t){
                t = 0;
                for(let i = 19; i > 10; i--){
                    if(Game.ObjectsById[i].getPrice() <= Game.cookies){
                        Game.ObjectsById[i].buy();
                        t++;
                    }
                }
            }
        }
        if(frame < 150){
            statsButton.click();
            if(Game.onMenu != 'stats') statsButton.click();
        }
        frame++;
    }
});
