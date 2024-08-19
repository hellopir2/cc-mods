// dynamic buff tooltip based on buff.desc, need to update buff.desc in the places above.
Game.gainBuff = eval('Game.gainBuff=' + Game.gainBuff.toString().replace(`Game.getTooltip(\n\t\t\t\t\t'<div class="prompt" style="min-width:200px;text-align:center;font-size:11px;margin:8px 0px;" id="tooltipBuff"><h3>'+buff.dname+'</h3><div class="line"></div>'+buff.desc+'</div>'\n\t\t\t\t,'left',true)`, `Game.getDynamicTooltip("(()=>{return Object.values(Game.buffs).filter((buff)=>{return buff.id=="+buff.id+"}).map((buff)=>{return eval(unescape('%27%3Cdiv%20class%3D%22prompt%22%20style%3D%22min-width%3A200px%3Btext-align%3Acenter%3Bfont-size%3A11px%3Bmargin%3A8px%200px%3B%22%20id%3D%22tooltipBuff%22%3E%3Ch3%3E%27+buff.dname+%27%3C/h3%3E%3Cdiv%20class%3D%22line%22%3E%3C/div%3E%27+buff.desc+%27%3C/div%3E%27'));})[0]})",'left',true)`));

eval("Game.gainBuff="+Game.gainBuff.toString().replace(`buff.maxTime=buff.time;`,`buff.maxTime=buff.time;
buff.desc=buff.desc.split(' for ')[0]+' for '+Game.sayTime(buff.time,-1);
eval(\`l('buff'+buff.id).onmouseover = function onmouseover(event){\${Game.getDynamicTooltip("(()=>{return Object.values(Game.buffs).filter((buff)=>{return buff.id=="+buff.id+"}).map((buff)=>{return eval(unescape('%27%3Cdiv%20class%3D%22prompt%22%20style%3D%22min-width%3A200px%3Btext-align%3Acenter%3Bfont-size%3A11px%3Bmargin%3A8px%200px%3B%22%20id%3D%22tooltipBuff%22%3E%3Ch3%3E%27+buff.dname+%27%3C/h3%3E%3Cdiv%20class%3D%22line%22%3E%3C/div%3E%27+buff.desc+%27%3C/div%3E%27'));})[0]})",'left',true).split('"')[3]}}\`);`))
eval("Game.updateBuffs="+Game.updateBuffs.toString().replace(`buff.time--;`, `buff.time--;
if(buff.time % 30 < 3){
    buff.desc=buff.desc.split(' for ')[0]+' for '+Game.sayTime(buff.time,-1);
    eval(\`l('buff'+buff.id).onmouseover = function onmouseover(event){\${Game.getDynamicTooltip("(()=>{return Object.values(Game.buffs).filter((buff)=>{return buff.id=="+buff.id+"}).map((buff)=>{return eval(unescape('%27%3Cdiv%20class%3D%22prompt%22%20style%3D%22min-width%3A200px%3Btext-align%3Acenter%3Bfont-size%3A11px%3Bmargin%3A8px%200px%3B%22%20id%3D%22tooltipBuff%22%3E%3Ch3%3E%27+buff.dname+%27%3C/h3%3E%3Cdiv%20class%3D%22line%22%3E%3C/div%3E%27+buff.desc+%27%3C/div%3E%27'));})[0]})",'left',true).split('"')[3]}}\`);
}`));
eval("Game.ObjectsById[7].minigame.spells['stretch time'].win="+Game.ObjectsById[7].minigame.spells['stretch time'].win.toString().replace(`me.time+=gain;`,`me.time+=gain;
me.desc=me.desc.split(' for ')[0]+' for '+Game.sayTime(me.time,-1);
eval(\`l('buff'+me.id).onmouseover = function onmouseover(event){\${Game.getDynamicTooltip("(()=>{return Object.values(Game.buffs).filter((buff)=>{return buff.id=="+me.id+"}).map((buff)=>{return eval(unescape('%27%3Cdiv%20class%3D%22prompt%22%20style%3D%22min-width%3A200px%3Btext-align%3Acenter%3Bfont-size%3A11px%3Bmargin%3A8px%200px%3B%22%20id%3D%22tooltipBuff%22%3E%3Ch3%3E%27+buff.dname+%27%3C/h3%3E%3Cdiv%20class%3D%22line%22%3E%3C/div%3E%27+buff.desc+%27%3C/div%3E%27'));})[0]})",'left',true).split('"')[3]}}\`);`))
eval("Game.ObjectsById[7].minigame.spells['stretch time'].fail="+Game.ObjectsById[7].minigame.spells['stretch time'].fail.toString().replace(`me.time=Math.max(me.time,0);`,`me.time=Math.max(me.time,0);
me.desc=me.desc.split(' for ')[0]+' for '+Game.sayTime(me.time,-1);
eval(\`l('buff'+me.id).onmouseover = function onmouseover(event){\${Game.getDynamicTooltip("(()=>{return Object.values(Game.buffs).filter((buff)=>{return buff.id=="+me.id+"}).map((buff)=>{return eval(unescape('%27%3Cdiv%20class%3D%22prompt%22%20style%3D%22min-width%3A200px%3Btext-align%3Acenter%3Bfont-size%3A11px%3Bmargin%3A8px%200px%3B%22%20id%3D%22tooltipBuff%22%3E%3Ch3%3E%27+buff.dname+%27%3C/h3%3E%3Cdiv%20class%3D%22line%22%3E%3C/div%3E%27+buff.desc+%27%3C/div%3E%27'));})[0]})",'left',true).split('"')[3]}}\`);`))

// todo: prevent maxTime from updating for cursed finger when using stretch time or buff stacking... EXCEPT THIS MAKES CURSED FINGER CIRCLY THINGY LOOK SILLY >:(
// todo: replace .desc with a function for all buffs (solves cuf/cookie storm looking different issue)
// todo: add timer to cookie storm default
