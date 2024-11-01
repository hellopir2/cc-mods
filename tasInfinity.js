var frame = 0;
var ascendFrame = 0;
var ascending = false;
var target_count = 700;
var cycles = 0;
Game.ReincarnateDuration = 0; // get rid of fade in on reincarnation

function ascend(last){
	M = Game.ObjectsById[7].minigame;
	ascendFrame++;
	if(ascendFrame == 1){
		gfd = M.spells['gambler\'s fever dream'];
		ra = M.spells['resurrect abomination'];
		var out=Math.floor((gfd.costMin+M.magicM*gfd.costPercent)*(1-0.1*Game.auraMult('Supreme Intellect'))) + Math.floor((ra.costMin+M.magicM*ra.costPercent)*(1-0.1*Game.auraMult('Supreme Intellect')));
		while(M.magic >= out){
			grimoireSpell6.click();
		}
		legacyButton.click();
		document.getElementById('promptOption0').click()
		window.dispatchEvent(new KeyboardEvent('keyup', {'keyCode': 27}));
	}
	else if(ascendFrame == 2){
		ascendButton.click();
		promptOption0.click();
		Game.cookiesd = 0; // visual improvement.
	}
	else if(ascendFrame == 3){
		storeBuyAllButton.click();
	}
	else if(ascendFrame == 4){
		storeBuyAllButton.click();
		for(let i = 19; i > -1; i--){
			Game.ObjectsById[i].buy(100);
			Game.ObjectsById[i].buy(100);
		}
		productMinigameButton7.click();
		if(!last){
			Game.ObjectsById[7].sell(Game.ObjectsById[7].amount-1);
			ascending = false;
			ascendFrame = 0;
		}
	}
	else if(ascendFrame == 5){
		storeBuyAllButton.click();
		Game.specialTab="dragon";Game.ToggleSpecialMenu(1);PlaySound('snd/press.mp3');
		for(let i = 19; i > -1; i--){
			Game.ObjectsById[i].buy(100);
			Game.ObjectsById[i].buy(100);
		}
		for(let i = 0; i < 100; i++){
			Game.UpgradeDragon();
		}
	}
	else if(ascendFrame == 6){
		storeBuyAllButton.click();
		for(let i = 19; i > -1; i--){
			Game.ObjectsById[i].buy(100);
			Game.ObjectsById[i].buy(100);
			Game.ObjectsById[i].buy(100);
			Game.ObjectsById[i].buy(100);
		}
		for(let i = 0; i < 100; i++){
			Game.UpgradeDragon();
		}
	}
	else if(ascendFrame == 7){
		storeBuyAllButton.click();
		for(let i = 19; i > -1; i--){
			Game.ObjectsById[i].buy(100);
			Game.ObjectsById[i].buy(100);
			Game.ObjectsById[i].buy(100);
			Game.ObjectsById[i].buy(100);
		}
		PlaySound('snd/tick.mp3');Game.SelectDragonAura(0);
		PlaySound('snd/tick.mp3');Game.SetDragonAura(18,0);
		promptOption0.click();
		PlaySound('snd/tick.mp3');Game.SelectDragonAura(1);
		PlaySound('snd/tick.mp3');Game.SetDragonAura(16,1);
		promptOption0.click();
		Game.ObjectsById[7].sell(Game.ObjectsById[7].amount-1);
		ascending = false;
		// ascendFrame = 0;
	}
}
Game.registerMod("Simple CC Tas",{
	init: function(){
		frame = 0;
		// Game.Reset(1);
		Game.LoadSave('Mi4wNTJ8fDE3MzAxMzI3Njk3MTM7MTcyNTg5ODgxMTc2ODsxNzMwMTM2Mzc4NjExO3F1ZXN0aW9uIG1hcms7cHFhb2w7MCwxLDAsMCwwLDAsMHwwMTExMTAxMDEwMDEwMTEwMDEwMTAxMTAwMDF8OS40MzcyNDA4Mzg5Mjk3MzZlKzY2OzEuNTU5ODc1NTIxNjIzNzk2ZSs2ODs3OzEwOzEuNDM0NzEyMDAzMzg5ODg3N2UrNjc7MTM7MDswOzcuMDMzMDc3MDUwNzYzMDM1ZSs3NDswOzI7MDswOy0xOzI7NDs1Ljc0Njk2NzU2NDM1MjM3NmUrNDU7MjQ7MTQ7MDswOzA7aGFsbG93ZWVuOzA7MDs4ODkzMDAzNDAxODg1NzY0MDAwMDA7OTIwOTU5NTA1OTkyODY1ODAwMDAwOzA7MDswOzMyNDszMjA7MzIxOzMyMjs0MjU7Mjc7MDswOzA7NzU7MDswOzIxNzsyOTM7MTczMDEzNjAyOTc4NDswOzA7OzA7MDswOzUuNjI2NDc3MTY4NzAyNzQ1ZSs2Njs1MDswOzA7fDEwLDEwLDkuMDUxNzE5MzU4NzIxNzA2ZSs2NywxMCwsMCwxMDs1LDUsNS4wODcyNDk3MzEyNDkxMDFlKzY3LDEwLCwxLDU7MCwwLDAsMTAsMTczMDEzNjY1MDI2NjowOjE3MzAxMzI3Njk3MjY6MDowOjE4OjA6MDoxNzMwMTMyNzY5NzI2OiAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExIDA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjE0OjQyOjA6MDowOjA6MDowOjE0OjI5OjA6MDowOjA6MDowOjA6MDowOjA6MTQ6Mzk6MTQ6NDk6MTQ6NTI6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDoxNDozNTowOjA6MTQ6NTI6MDowOjA6MDowOjA6LDEsMDswLDAsMCwxMCwsMSwwOzAsMCwwLDEwLCwxLDA7MCwwLDAsMTAsMDowOjE6MDowOiAxMzg0OjQ6LTI2NjoxOTU6MDoxOjA6MCE3OTg6NTotODQ6MTA2OjA6MTowOjAhMTgxMzoxOi0xNTg6MjcyOjA6MTowOjAhMzQwMzowOi00Mzk6MzcyOjA6MTowOjAhNTc4Njo1Oi0zNjA6MTcwOjA6MTowOjAhNzQyNDo0Oi0yMTY6MjI4OjA6MDowOjAhMTMxMzM6MjotMzQ4OjQ1MjowOjE6MDowITEwMDMxOjQ6LTEwNzo0NTI6MDoxOjA6MCE1OTYzOjU6LTc5OjIzMjowOjE6MDowITEyNzEzOjA6LTEyMzoyMzE6MDoxOjA6MCExNDA2NDoxOi0yNTY6NTQ1OjA6MTowOjAhOTAzNTo1OjQwOjI2OTowOjE6MDowITE2MTM1OjU6LTE5OjY1MTowOjE6MDowITEyMjkzOjE6LTE4OTozMzI6MDoxOjA6MCExNDkxMjo1Oi00MTY6NjEzOjA6MTowOjAhMTYwNTY6MjotMzQ3OjM4NDowOjE6MDowITE3NDcxOjE6LTExMDozMzA6MDoxOjA6MCExNjE2ODo1Oi0yMjI6NTQ0OjA6MTowOjAhIDAsMSwwOzAsMCwwLDEwLC0xLy0xLy0xIDMgMTczMDEzMjc2OTc0MSAwLDEsMDs5NzAsMTEzOSwyLjUwNzQxMjI2ODE1MzA0NmUrNjUsMTAsMTMwIDE2IDkwMDcxOTkyNTQ3NDA5OTIgMSwwLDk3MDswLDAsMCwxMCwsMSwwOzAsMCwwLDEwLCwxLDA7MCwwLDAsMTAsLDEsMDswLDAsMCwxMCwsMSwwOzAsMCwwLDEwLCwxLDA7MCwwLDAsMTAsLDEsMDswLDAsMCwxMCwsMSwwOzAsMCwwLDEwLCwxLDA7MCwwLDAsMTAsLDEsMDswLDAsMCwxMCwsMSwwOzAsMCwwLDEwLCwxLDA7MCwwLDAsMTAsLDEsMDt8MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAwMTExMTExMTExMDExMTExMTEwMTExMDExMTExMTExMTExMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTAxMDEwMTAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDAwMTAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTExMTExMTExMTExMTAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTExMTExMTExMTExMTExMTExMTExMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMXwxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMDAwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExfHw%3D%21END%21');
		eval("Game.makeSeed = ()=>'pqaol'");
		eval("Game.Logic="+Game.Logic.toString().replace("Game.runModHook('logic');", "").replace("Game.bounds=Game.l.getBounds();", "Game.runModHook('logic');Game.bounds=Game.l.getBounds();"));
//		 eval("Game.Loop="+Game.Loop.toString().replace("Game.loopT++;", "Game.loopT++;if(frame<0){frame++;Game.accumulatedDelay=0;}"));
		Game.Notify("Funny Tas Mod Loaded", "I love gambler\'s fever dream", [14, 7], false);
		Game.registerHook("logic", this.logic);
	},
	logic: function(){
		if(cycles > 300){
			if(frame < 0){
				frame = 0;
				ascending = true;
				return;
			}
			else{
				if(ascending){
					ascend(true);
				}
				if(frame > 0 && M.magic > M.magicM){
					console.log(M.magic);
					fthof = M.spells['hand of fate'];
					var out=Math.floor((fthof.costMin+M.magicM*fthof.costPercent)/*(1-0.1*Game.auraMult('Supreme Intellect'))*/);
					while(M.magic >= out){
						grimoireSpell1.click();
					}
				}
			}
		}
		else{
			offset = 1;
			if(frame < 0 && M.magic > M.magicM/* && cycles*/){
				frame = 0;
				console.log(cycles);
			}
			if(frame < 0 || frame > 26 + offset){
				return;
			}
			if(ascending){
				ascend();
			}
			if(!ascending && 0 <= frame && frame < 26 + offset){ // i don't trust lag.
				ascending = true;
				ascend();
			}
			if(frame >= 26 + offset && ascendFrame == 0){
				frame = -1000000;
				// console.log(M.magic);
				cycles++;
        // autoclick the button every ~2s
				alert("wow here is a closing confirmation popup totally and definitely not just an alert");
			}
		}
		frame++;
	}
});
