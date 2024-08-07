eval("Game.gainBuff="+Game.gainBuff.toString().replace(`buff.maxTime=buff.time;`,`buff.maxTime=buff.time;
buff.desc=buff.desc.split(' for ')[0]+' for '+Game.sayTime(buff.time,-1);
eval(\`l('buff'+buff.id).onmouseover = function onmouseover(event){\${Game.getTooltip('<div class="prompt" style="min-width:200px;text-align:center;font-size:11px;margin:8px 0px;" id="tooltipBuff"><h3>'+buff.dname+'</h3><div class="line"></div>'+buff.desc+'</div>','left',true).split('"')[3]}}\`);`))
eval("Game.updateBuffs="+Game.updateBuffs.toString().replace(`buff.time--;`, `buff.time--;
if(buff.time % 30 < 1){
    buff.desc=buff.desc.split(' for ')[0]+' for '+Game.sayTime(buff.time,-1);
    eval(\`l('buff'+buff.id).onmouseover = function onmouseover(event){\${Game.getTooltip('<div class="prompt" style="min-width:200px;text-align:center;font-size:11px;margin:8px 0px;" id="tooltipBuff"><h3>'+buff.dname+'</h3><div class="line"></div>'+buff.desc+'</div>','left',true).split('"')[3]}}\`);
}`));
eval("Game.ObjectsById[7].minigame.spells['stretch time'].win="+Game.ObjectsById[7].minigame.spells['stretch time'].win.toString().replace(`me.time+=gain;`,`me.time+=gain;
me.desc=me.desc.split(' for ')[0]+' for '+Game.sayTime(me.time,-1);
eval(\`l('buff'+me.id).onmouseover = function onmouseover(event){\${Game.getTooltip('<div class="prompt" style="min-width:200px;text-align:center;font-size:11px;margin:8px 0px;" id="tooltipBuff"><h3>'+me.dname+'</h3><div class="line"></div>'+me.desc+'</div>','left',true).split('"')[3]}}\`);`))
eval("Game.ObjectsById[7].minigame.spells['stretch time'].fail="+Game.ObjectsById[7].minigame.spells['stretch time'].fail.toString().replace(`me.time=Math.max(me.time,0);`,`me.time=Math.max(me.time,0);
me.desc=me.desc.split(' for ')[0]+' for '+Game.sayTime(me.time,-1);
eval(\`l('buff'+me.id).onmouseover = function onmouseover(event){\${Game.getTooltip('<div class="prompt" style="min-width:200px;text-align:center;font-size:11px;margin:8px 0px;" id="tooltipBuff"><h3>'+me.dname+'</h3><div class="line"></div>'+me.desc+'</div>','left',true).split('"')[3]}}\`);`))

// todo: update buff timer while hovering.
// todo: prevent maxTime from updating for cursed finger when using stretch time or buff stacking, also fix tooltip.
