var rMath = {random:()=>{}};
(function(a,b,c,d,e,f){function k(a){var b,c=a.length,e=this,f=0,g=e.i=e.j=0,h=e.S=[];for(c||(a=[c++]);d>f;)h[f]=f++;for(f=0;d>f;f++)h[f]=h[g=j&g+a[f%c]+(b=h[f])],h[g]=b;(e.g=function(a){for(var b,c=0,f=e.i,g=e.j,h=e.S;a--;)b=h[f=j&f+1],c=c*d+h[j&(h[f]=h[g=j&g+b])+(h[g]=b)];return e.i=f,e.j=g,c})(d)}function l(a,b){var e,c=[],d=(typeof a)[0];if(b&&"o"==d)for(e in a)try{c.push(l(a[e],b-1))}catch(f){}return c.length?c:"s"==d?a:a+"\0"}function m(a,b){for(var d,c=a+"",e=0;c.length>e;)b[j&e]=j&(d^=19*b[j&e])+c.charCodeAt(e++);return o(b)}function n(c){try{return crypto.getRandomValues(c=new Uint8Array(d)),o(c)}catch(e){return[+new Date,a,a.navigator.plugins,a.screen,o(b)]}}function o(a){return String.fromCharCode.apply(0,a)}var g=Math.pow(d,e),h=Math.pow(2,f),i=2*h,j=d-1;c.seedrandom=function(a,f){var j=[],p=m(l(f?[a,o(b)]:0 in arguments?a:n(),3),j),q=new k(j);return m(o(q.S),b),c.random=function(){for(var a=q.g(e),b=g,c=0;h>a;)a=(a+c)*d,b*=d,c=q.g(1);for(;a>=i;)a/=2,b/=2,c>>>=1;return(a+c)/b},p},m(c.random(),b)})(this,[],rMath,256,6,52);
(function(a,b,c,d,e,f){function k(a){var b,c=a.length,e=this,f=0,g=e.i=e.j=0,h=e.S=[];for(c||(a=[c++]);d>f;)h[f]=f++;for(f=0;d>f;f++)h[f]=h[g=j&g+a[f%c]+(b=h[f])],h[g]=b;(e.g=function(a){for(var b,c=0,f=e.i,g=e.j,h=e.S;a--;)b=h[f=j&f+1],c=c*d+h[j&(h[f]=h[g=j&g+b])+(h[g]=b)];return e.i=f,e.j=g,c})(d)}function l(a,b){var e,c=[],d=(typeof a)[0];if(b&&"o"==d)for(e in a)try{c.push(l(a[e],b-1))}catch(f){}return c.length?c:"s"==d?a:a+"\0"}function m(a,b){for(var d,c=a+"",e=0;c.length>e;)b[j&e]=j&(d^=19*b[j&e])+c.charCodeAt(e++);return o(b)}function n(c){try{return crypto.getRandomValues(c=new Uint8Array(d)),o(c)}catch(e){return[+new Date,a,a.navigator.plugins,a.screen,o(b)]}}function o(a){return String.fromCharCode.apply(0,a)}var g=c.pow(d,e),h=c.pow(2,f),i=2*h,j=d-1;c.seedrandom=function(a,f){var j=[],p=m(l(f?[a,o(b)]:0 in arguments?a:n(),3),j),q=new k(j);return m(o(q.S),b),c.random=function(){for(var a=q.g(e),b=g,c=0;h>a;)a=(a+c)*d,b*=d,c=q.g(1);for(;a>=i;)a/=2,b/=2,c>>>=1;return(a+c)/b},p},m(c.random(),b)})(this,[],Math,256,6,52);

var qvq = {random:()=>{}};
(function(a,b,c,d,e,f){function k(a){var b,c=a.length,e=this,f=0,g=e.i=e.j=0,h=e.S=[];for(c||(a=[c++]);d>f;)h[f]=f++;for(f=0;d>f;f++)h[f]=h[g=j&g+a[f%c]+(b=h[f])],h[g]=b;(e.g=function(a){for(var b,c=0,f=e.i,g=e.j,h=e.S;a--;)b=h[f=j&f+1],c=c*d+h[j&(h[f]=h[g=j&g+b])+(h[g]=b)];return e.i=f,e.j=g,c})(d)}function l(a,b){var e,c=[],d=(typeof a)[0];if(b&&"o"==d)for(e in a)try{c.push(l(a[e],b-1))}catch(f){}return c.length?c:"s"==d?a:a+"\0"}function m(a,b){for(var d,c=a+"",e=0;c.length>e;)b[j&e]=j&(d^=19*b[j&e])+c.charCodeAt(e++);return o(b)}function n(c){try{return crypto.getRandomValues(c=new Uint8Array(d)),o(c)}catch(e){return[+new Date,a,a.navigator.plugins,a.screen,o(b)]}}function o(a){return String.fromCharCode.apply(0,a)}var g=Math.pow(d,e),h=Math.pow(2,f),i=2*h,j=d-1;c.seedrandom=function(a,f){var j=[],p=m(l(f?[a,o(b)]:0 in arguments?a:n(),3),j),q=new k(j);return m(o(q.S),b),c.random=function(){for(var a=q.g(e),b=g,c=0;h>a;)a=(a+c)*d,b*=d,c=q.g(1);for(;a>=i;)a/=2,b/=2,c>>>=1;return(a+c)/b},p},m(c.random(),b)})(this,[],qvq,256,6,52);


var call_index = 0;
var str_seed;
var sr_copy = Math.seedrandom;
var count;
var cache = [];

function random() {
    while (cache.length <= call_index) {
        cache.push(rMath.random());
    }
    return cache[call_index++];
}

function myChoose(arr) {return arr[Math.floor(random()*arr.length)];}

try {
    var call_count = document.createElement('span');
    call_count.id = "call_count";
    call_count.style = "padding-left:8px;width:75px;display:inline-block;"
    versionNumber.appendChild(call_count);
    var curSeed = document.createElement('span');
    curSeed.id = "curSeed";
    curSeed.style = "padding-left:8px;color:#ff0;"
    versionNumber.appendChild(curSeed);
    topBar.innerHTML = "<p id='gcOutcome' style='margin:8px;width:100%;text-align:center;color:yellow;font-family:monospace;font-size:16px;pointer-events:none;'></p>";
    gcOutcome = topBar.firstChild;
}
catch(e) {
    var call_count = {};
    var curSeed = {};
    var gcOutcome = {};
}

Math.seedrandom = (seed) => {
    cache = [];
    count = 0;
    call_count.innerHTML = count;
    str_seed=(seed === undefined)?sr_copy():sr_copy(seed);
    rMath.seedrandom(str_seed);
    curSeed.innerHTML = seed;
    var r_copy = Math.random;
    Math.random = () => {
        count++;
        call_count.innerHTML = count;
        cache.push(rMath.random());
        gcOutcome.innerHTML = `Golden: ${simulateGC(undefined, undefined, true)}    <span style='color:red'>Wrath: ${simulateGC(true, undefined, true)}</span>`;
        return r_copy();
    }
    gcOutcome.innerHTML = `Golden: ${simulateGC(undefined, undefined, true)}    <span style='color:red'>Wrath: ${simulateGC(true, undefined, true)}</span>`;
    return str_seed;
}

var effects = {
    'frenzy': 0,
    'clot': 1,
    'multiply cookies': 2,
    'ruin cookies': 3,
    'blood frenzy': 4,
    'chain cookie': 5,
    'cookie storm': 6,
    'everything must go': 7,
    'click frenzy': 8,
    'cursed finger': 9,
    'building special': 10,
    'building rust': 11,
    'free sugar lump': 12,
    'dragon harvest': 13,
    'dragonflight': 14,
    'blab': 15
}

var effects2 = {
    0: "Frenzy",
    1: "Clot",
    2: "Lucky",
    3: "Ruin",
    4: "EF",
    5: "Chain",
    6: "Storm",
    7: "EMG",
    8: "CF",
    9: "CUF",
    10: "BS",
    11: "BR",
    12: "Sweet",
    13: "DH",
    14: "DF",
    15: "Blab"
}

function simulateGC(wrath, cc, abbr)
{   
    if(str_seed === undefined) return false;
    call_index = cc??count;
    //select an effect
    var list=[];
    if (wrath) list.push('clot','multiply cookies','ruin cookies');
    else list.push('frenzy','multiply cookies');
    if (wrath&& Game.hasGod && Game.hasGod('scorn')) list.push('clot','ruin cookies','clot','ruin cookies');
    if (wrath && random()<0.3) list.push('blood frenzy','chain cookie','cookie storm');
    else if (random()<0.03 && Game.cookiesEarned>=100000) list.push('chain cookie','cookie storm');
    if (random()<0.05 && Game.season=='fools') list.push('everything must go');
    if (random()<0.1 && (random()<0.05 || !Game.hasBuff('Dragonflight'))) list.push('click frenzy');
    if (wrath && random()<0.1) list.push('cursed finger');
    
    if (Game.BuildingsOwned>=10 && random()<0.25) list.push('building special');
    
    if (Game.canLumps() && random()<0.0005) list.push('free sugar lump');
    
    if ((!wrath && random()<0.15) || random()<0.05)
    {
        //if (Game.hasAura('Reaper of Fields')) list.push('dragon harvest');
        if (random()<Game.auraMult('Reaper of Fields')) list.push('dragon harvest');
        //if (Game.hasAura('Dragonflight')) list.push('dragonflight');
        if (random()<Game.auraMult('Dragonflight')) list.push('dragonflight');
    }
    
    if (Game.shimmerTypes.golden.last!='' && random()<0.8 && list.indexOf(Game.shimmerTypes.golden.last)!=-1) list.splice(list.indexOf(Game.shimmerTypes.golden.last),1);//80% chance to force a different one
    if (random()<0.0001) list.push('blab');
    var choice=myChoose(list);

        //effect multiplier (from lucky etc)
    var mult=1;
    //if (me.wrath>0 && Game.hasAura('Unholy Dominion')) mult*=1.1;
    //else if (me.wrath==0 && Game.hasAura('Ancestral Metamorphosis')) mult*=1.1;
    if (wrath>0) mult*=1+Game.auraMult('Unholy Dominion')*0.1;
    else if (wrath==0) mult*=1+Game.auraMult('Ancestral Metamorphosis')*0.1;
    if (Game.Has('Green yeast digestives')) mult*=1.01;
    if (Game.Has('Dragon fang')) mult*=1.03;
    if (!wrath) mult*=Game.eff('goldenCookieGain');
    else mult*=Game.eff('wrathCookieGain');

    if (Game.shimmerTypes.golden.chain>0) choice='chain cookie';
    // if (me.force!='') {this.chain=0;choice=me.force;me.force='';} not simulating forces obviously
    // if (choice!='chain cookie') this.chain=0;
    
    // this.last=choice;

    var popup='';
    
    if (choice=='building special')
    {
        var list=[];
        for (var i in Game.Objects)
        {
            if (Game.Objects[i].amount>=10) list.push(Game.Objects[i].id);
        }
        if (list.length==0) {popup = [effects['frenzy']];}//default to frenzy if no proper building
        else
        {
            var obj=myChoose(list);
            if (wrath && random()<0.3)
            {
                popup = [effects['building rust'], Game.ObjectsById[obj].name];
            }
            else
            {
                popup = [effects['building special'], Game.ObjectsById[obj].name];
            }
        }
    }
    else if (choice=='dragonflight')
    {
        popup = [effects[choice]];
        if (random()<0.8) popup.push('override');
    }
    else if (choice=='chain cookie')
    {
        // this.chain++;
        var digit=wrath?6:7;
        // if (this.chain==1) this.chain+=Math.max(0,Math.ceil(Math.log(Game.cookies)/Math.LN10)-10);
        
        var maxPayout=Math.min(Game.cookiesPs*60*60*6,Game.cookies*0.5)*mult;
        var moni=Math.max(digit,Math.min(Math.floor(1/9*Math.pow(10,Game.shimmerTypes.golden.chain)*digit*mult),maxPayout));
        var nextMoni=Math.max(digit,Math.min(Math.floor(1/9*Math.pow(10,Game.shimmerTypes.golden.chain+1)*digit*mult),maxPayout));

        //break the chain if we're above 5 digits AND it's more than 50% of our bank, it grants more than 6 hours of our CpS, or just a 1% chance each digit (update : removed digit limit)
        if (random()<0.01 || nextMoni>=maxPayout)
        {
            // this.chain=0;
            popup=[effects[choice], "end"];
        }
        else
        {
            popup=[effects[choice], "continue"];
        }
        // Game.Earn(moni);
    }
    // else if (choice=='cookie storm')
    // {
    //     popup = 'cookie storm';
    // }
    // choice can never be cookie storm drop.
    // else if (choice=='cookie storm drop')
    // {
    //     var moni=Math.max(mult*(Game.cookiesPs*60*Math.floor(random()*7+1)),Math.floor(random()*7+1));//either 1-7 cookies or 1-7 minutes of cookie production, whichever is highest
    //     Game.Earn(moni);
    //     popup='<div style="font-size:75%;">'+loc("+%1!",loc('%1 cookie',LBeautify(moni)))+'</div>';
    // }
    else if (choice=='blab')//sorry (it's really rare)
    {
        var str=EN?(myChoose([
        'Cookie crumbliness x3 for 60 seconds!',
        'Chocolatiness x7 for 77 seconds!',
        'Dough elasticity halved for 66 seconds!',
        'Golden cookie shininess doubled for 3 seconds!',
        'World economy halved for 30 seconds!',
        'Grandma kisses 23% stingier for 45 seconds!',
        'Thanks for clicking!',
        'Fooled you! This one was just a test.',
        'Golden cookies clicked +1!',
        'Your click has been registered. Thank you for your cooperation.',
        'Thanks! That hit the spot!',
        'Thank you. A team has been dispatched.',
        'They know.',
        'Oops. This was just a chocolate cookie with shiny aluminium foil.',
        'Eschaton immanentized!',
        'Oh, that tickled!',
        'Again.',
        'You\'ve made a grave mistake.',
        'Chocolate chips reshuffled!',
        'Randomized chance card outcome!',
        'Mouse acceleration +0.03%!',
        'Ascension bonuses x5,000 for 0.1 seconds!',
        'Gained 1 extra!',
        'Sorry, better luck next time!',
        'I felt that.',
        'Nice try, but no.',
        'Wait, sorry, I wasn\'t ready yet.',
        'Yippee!',
        'Bones removed.',
        'Organs added.',
        'Did you just click that?',
        'Huh? Oh, there was nothing there.',
        'You saw nothing.',
        'It seems you hallucinated that golden cookie.',
        'This golden cookie was a complete fabrication.',
        'In theory there\'s no wrong way to click a golden cookie, but you just did that, somehow.',
        'All cookies multiplied by 999!<br>All cookies divided by 999!',
        'Why?'
        ])):myChoose(loc("Cookie blab"));
        popup=[effects[choice], str];
    }
    else {
        popup = [effects[choice]];
    }

    if(abbr) {
        popup = [effects2[popup[0]]].concat(popup.slice(1));
    }
    
    return popup;
    
    // if (popup=='' && buff && buff.name && buff.desc) popup=buff.dname+'<div style="font-size:65%;">'+buff.desc+'</div>';
    // if (popup!='') Game.Popup(popup,me.x+me.l.offsetWidth/2,me.y);
    
    // Game.DropEgg(0.9); implement eggs in future maybe?
    
    // //sparkle and kill the shimmer
    // Game.SparkleAt(me.x+48,me.y+48);
    // if (choice=='cookie storm drop')
    // {
    //     if (Game.prefs.cookiesound) PlaySound('snd/clickb'+Math.floor(random()*7+1)+'.mp3',0.75);
    //     else PlaySound('snd/click'+Math.floor(random()*7+1)+'.mp3',0.75);
    // }
    // else PlaySound('snd/shimmerClick.mp3');
    // me.die();
}

findEff=(eff,wrath,threshold,bypass)=>{
    if(str_seed === undefined) return false;
    if(effects[eff] === undefined && !bypass) return false;
    if(!bypass) eff = effects[eff];
    let cur = count;
    for(let i = 0; i < (threshold??1e7); i++){
        if(simulateGC(wrath,cur).includes(eff)){
            return [cur, simulateGC(wrath,cur)];
        }
        cur++;
    }
    return false;
}

findThreshold=(t)=>{
    if(str_seed === undefined) return false;
    t=t??0.0001;
    let cur=count;
    while(true){
        call_index=cur;
        if(random()<t){
            return cur;
        }
        cur++;
    }
}



// code modified from yeetdragon

findDeorl=(seedList, depth, cloneCount, threshold, reindeer)=>{
    let o = [];
    (seedList ??= [Game.seed]), (depth ??= 1000), (cloneCount ??= 43), (threshold ??= 0.001);
    for (let a = 0; a < cloneCount; a++) {
        for (var t of seedList) {
            qvq.seedrandom(t + " clone " + a);
            for (let i = 0; i < 5; i++) qvq.random();
            let rands = [];
            for (let i = 0; i < depth; i++) rands.push(qvq.random())/*, (rands[i] < 0.01 && console.log(rands[i], i+5, a))*/;
            for (let p = 0; p < depth-3; p++) {
                if (rands[p] < threshold) {
		    if(reindeer) {
			if (p > -1 && rands[p + 2] < 0.01) o.push([`seed: ${t}, spawn: ${rands[p]}, id: ${a}, call: ${p+5}`]);
		    }
		    else {
                    	if (p > -1 && rands[p + 3] < 0.01) o.push([`seed: ${t}, spawn: ${rands[p]}, id: ${a}, call: ${p+5}`]);
                    	else if (p > -1 && rands[p + 4] < 0.01) o.push([`seed: ${t}, spawn: ${rands[p]}, id: ${a}, call: ${p+5}, 1 change`]);
		    }
                }
            }
        }
    }
    // return "" + o.join("\n");
    console.log("" + o.join("\n"));
}

// modified from main.js
simulateTicker=function(cc, manual)
{
	if(str_seed === undefined) return false;
	call_index = cc??count;

	var list=[];
	
	var NEWS=loc("News :").replace(' ','&nbsp;')+' ';
	
	var loreProgress=Math.round(Math.log(Game.cookiesEarned/10)*Math.LOG10E+1|0);
	
	if (Game.TickerN%2==0 || loreProgress>14)
	{
		var animals=['newts','penguins','scorpions','axolotls','puffins','porpoises','blowfish','horses','crayfish','slugs','humpback whales','nurse sharks','giant squids','polar bears','fruit bats','frogs','sea squirts','velvet worms','mole rats','paramecia','nematodes','tardigrades','giraffes','monkfish','wolfmen','goblins','hippies'];
		
		if (random()<0.75 || Game.cookiesEarned<10000)
		{
			if (Game.Objects['Grandma'].amount>0) list.push('<q>'+myChoose(loc("Ticker (grandma)"))+'</q><sig>'+Game.Objects['Grandma'].single+'</sig>');
			
			if (!Game.prefs.notScary && Game.Objects['Grandma'].amount>=50) list.push('<q>'+myChoose(loc("Ticker (threatening grandma)"))+'</q><sig>'+Game.Objects['Grandma'].single+'</sig>');
			
			if (EN && Game.HasAchiev('Just wrong') && random()<0.05) list.push(NEWS+'cookie manufacturer downsizes, sells own grandmother!');
			if (!Game.prefs.notScary && Game.HasAchiev('Just wrong') && random()<0.4) list.push('<q>'+myChoose(loc("Ticker (angry grandma)"))+'</q><sig>'+Game.Objects['Grandma'].single+'</sig>');
			
			if (!Game.prefs.notScary && Game.Objects['Grandma'].amount>=1 && Game.pledges>0 && Game.elderWrath==0) list.push('<q>'+myChoose(loc("Ticker (grandmas return)"))+'</q><sig>'+Game.Objects['Grandma'].single+'</sig>');
			
			if (!EN)
			{
				for (var i in Game.Objects)
				{
					if (i!='Cursor' && i!='Grandma' && Game.Objects[i].amount>0) list.push(NEWS+myChoose(loc("Ticker ("+i+")")));
				}
				
				if (Game.cookiesEarned>=1000)
				{
					if (Game.season=='halloween') list.push(NEWS+myChoose(loc("Ticker (Halloween)")));
					if (Game.season=='christmas') list.push(NEWS+myChoose(loc("Ticker (Christmas)")));
					if (Game.season=='valentines') list.push(NEWS+myChoose(loc("Ticker (Valentines)")));
					if (Game.season=='easter') list.push(NEWS+myChoose(loc("Ticker (Easter)")));
				}
			}
			else
			{
				if (Game.Objects['Farm'].amount>0) list.push(myChoose([
				'News : cookie farms suspected of employing undeclared elderly workforce!',
				'News : cookie farms release harmful chocolate in our rivers, says scientist!',
				'News : genetically-modified chocolate controversy strikes cookie farmers!',
				'News : free-range farm cookies popular with today\'s hip youth, says specialist.',
				'News : farm cookies deemed unfit for vegans, says nutritionist.'
				]));
				
				if (Game.Objects['Mine'].amount>0) list.push(myChoose([
				'News : is our planet getting lighter? Experts examine the effects of intensive chocolate mining.',
				'News : '+Math.floor(random()*1000+2)+' miners trapped in collapsed chocolate mine!',
				'News : chocolate mines found to cause earthquakes and sinkholes!',
				'News : chocolate mine goes awry, floods village in chocolate!',
				'News : depths of chocolate mines found to house "peculiar, chocolaty beings"!'
				]));
				
				if (Game.Objects['Factory'].amount>0) list.push(myChoose([
				'News : cookie factories linked to global warming!',
				'News : cookie factories involved in chocolate weather controversy!',
				'News : cookie factories on strike, robotic minions employed to replace workforce!',
				'News : cookie factories on strike - workers demand to stop being paid in cookies!',
				'News : factory-made cookies linked to obesity, says study.'
				]));
				
				if (Game.Objects['Bank'].amount>0) list.push(myChoose([
				'News : cookie loans on the rise as people can no longer afford them with regular money.',
				'News : cookies slowly creeping up their way as a competitor to traditional currency!',
				'News : most bakeries now fitted with ATMs to allow for easy cookie withdrawals and deposits.',
				'News : cookie economy now strong enough to allow for massive vaults doubling as swimming pools!',
				'News : "Tomorrow\'s wealthiest people will be calculated by their worth in cookies", predict economists.'
				]));
				
				if (Game.Objects['Temple'].amount>0) list.push(myChoose([
				'News : explorers bring back ancient artifact from abandoned temple; archeologists marvel at the centuries-old '+myChoose(['magic','carved','engraved','sculpted','royal','imperial','mummified','ritual','golden','silver','stone','cursed','plastic','bone','blood','holy','sacred','sacrificial','electronic','singing','tapdancing'])+' '+myChoose(['spoon','fork','pizza','washing machine','calculator','hat','piano','napkin','skeleton','gown','dagger','sword','shield','skull','emerald','bathtub','mask','rollerskates','litterbox','bait box','cube','sphere','fungus'])+'!',
				'News : recently-discovered chocolate temples now sparking new cookie-related cult; thousands pray to Baker in the sky!',
				'News : just how extensive is the cookie pantheon? Theologians speculate about possible '+myChoose(['god','goddess'])+' of '+myChoose([myChoose(animals),myChoose(['kazoos','web design','web browsers','kittens','atheism','handbrakes','hats','aglets','elevator music','idle games','the letter "P"','memes','hamburgers','bad puns','kerning','stand-up comedy','failed burglary attempts','clickbait','one weird tricks'])])+'.',
				'News : theists of the world discover new cookie religion - "Oh boy, guess we were wrong all along!"',
				'News : cookie heaven allegedly "sports elevator instead of stairway"; cookie hell "paved with flagstone, as good intentions make for poor building material".'
				]));
				
				if (Game.Objects['Wizard tower'].amount>0) list.push(myChoose([
				'News : all '+myChoose([myChoose(animals),myChoose(['public restrooms','clouds','politicians','moustaches','hats','shoes','pants','clowns','encyclopedias','websites','potted plants','lemons','household items','bodily fluids','cutlery','national landmarks','yogurt','rap music','underwear'])])+' turned into '+myChoose([myChoose(animals),myChoose(['public restrooms','clouds','politicians','moustaches','hats','shoes','pants','clowns','encyclopedias','websites','potted plants','lemons','household items','bodily fluids','cutlery','national landmarks','yogurt','rap music','underwear'])])+' in freak magic catastrophe!',
				'News : heavy dissent rages between the schools of '+myChoose(['water','fire','earth','air','lightning','acid','song','battle','peace','pencil','internet','space','time','brain','nature','techno','plant','bug','ice','poison','crab','kitten','dolphin','bird','punch','fart'])+' magic and '+myChoose(['water','fire','earth','air','lightning','acid','song','battle','peace','pencil','internet','space','time','brain','nature','techno','plant','bug','ice','poison','crab','kitten','dolphin','bird','punch','fart'])+' magic!',
				'News : get your new charms and curses at the yearly National Spellcrafting Fair! Exclusive prices on runes and spellbooks.',
				'News : cookie wizards deny involvement in shockingly ugly newborn - infant is "honestly grody-looking, but natural", say doctors.',
				'News : "Any sufficiently crude magic is indistinguishable from technology", claims renowned technowizard.'
				]));
				
				if (Game.Objects['Shipment'].amount>0) list.push(myChoose([
				'News : new chocolate planet found, becomes target of cookie-trading spaceships!',
				'News : massive chocolate planet found with 99.8% certified pure dark chocolate core!',
				'News : space tourism booming as distant planets attract more bored millionaires!',
				'News : chocolate-based organisms found on distant planet!',
				'News : ancient baking artifacts found on distant planet; "terrifying implications", experts say.'
				]));
				
				if (Game.Objects['Alchemy lab'].amount>0) list.push(myChoose([
				'News : national gold reserves dwindle as more and more of the precious mineral is turned to cookies!',
				'News : chocolate jewelry found fashionable, gold and diamonds "just a fad", says specialist.',
				'News : silver found to also be transmutable into white chocolate!',
				'News : defective alchemy lab shut down, found to convert cookies to useless gold.',
				'News : alchemy-made cookies shunned by purists!'
				]));
				
				if (Game.Objects['Portal'].amount>0) list.push(myChoose([
				'News : nation worried as more and more unsettling creatures emerge from dimensional portals!',
				'News : dimensional portals involved in city-engulfing disaster!',
				'News : tourism to cookieverse popular with bored teenagers! Casualty rate as high as 73%!',
				'News : cookieverse portals suspected to cause fast aging and obsession with baking, says study.',
				'News : "do not settle near portals," says specialist; "your children will become strange and corrupted inside."'
				]));
				
				if (Game.Objects['Time machine'].amount>0) list.push(myChoose([
				'News : time machines involved in history-rewriting scandal! Or are they?',
				'News : time machines used in unlawful time tourism!',
				'News : cookies brought back from the past "unfit for human consumption", says historian.',
				'News : various historical figures inexplicably replaced with talking lumps of dough!',
				'News : "I have seen the future," says time machine operator, "and I do not wish to go there again."'
				]));
				
				if (Game.Objects['Antimatter condenser'].amount>0) list.push(myChoose([
				'News : whole town seemingly swallowed by antimatter-induced black hole; more reliable sources affirm town "never really existed"!',
				'News : "explain to me again why we need particle accelerators to bake cookies?" asks misguided local woman.',
				'News : first antimatter condenser successfully turned on, doesn\'t rip apart reality!',
				'News : researchers conclude that what the cookie industry needs, first and foremost, is "more magnets".',
				'News : "unravelling the fabric of reality just makes these cookies so much tastier", claims scientist.'
				]));
				
				if (Game.Objects['Prism'].amount>0) list.push(myChoose([
				'News : new cookie-producing prisms linked to outbreak of rainbow-related viral videos.',
				'News : scientists warn against systematically turning light into matter - "One day, we\'ll end up with all matter and no light!"',
				'News : cookies now being baked at the literal speed of light thanks to new prismatic contraptions.',
				'News : "Can\'t you sense the prism watching us?", rambles insane local man. "No idea what he\'s talking about", shrugs cookie magnate/government official.',
				'News : world citizens advised "not to worry" about frequent atmospheric flashes.',
				]));
				
				if (Game.Objects['Chancemaker'].amount>0) list.push(myChoose([
				'News : strange statistical anomalies continue as weather forecast proves accurate an unprecedented 3 days in a row!',
				'News : local casino ruined as all gamblers somehow hit a week-long winning streak! "We might still be okay", says owner before being hit by lightning 47 times.',
				'News : neighboring nation somehow elects president with sensible policies in freak accident of random chance!',
				'News : million-to-one event sees gritty movie reboot turning out better than the original! "We have no idea how this happened", say movie execs.',
				'News : all scratching tickets printed as winners, prompting national economy to crash and, against all odds, recover overnight.',
				]));
				
				if (Game.Objects['Fractal engine'].amount>0) list.push(myChoose([
				'News : local man "done with Cookie Clicker", finds the constant self-references "grating and on-the-nose".',
				'News : local man sails around the world to find himself - right where he left it.',
				'News : local guru claims "there\'s a little bit of ourselves in everyone", under investigation for alleged cannibalism.',
				'News : news writer finds herself daydreaming about new career. Or at least a raise.',
				'News : polls find idea of cookies made of cookies "acceptable" - "at least we finally know what\'s in them", says interviewed citizen.',
				]));
				
				if (Game.Objects['Javascript console'].amount>0) list.push(myChoose([
				'News : strange fad has parents giving their newborns names such as Emma.js or Liam.js. At least one Baby.js reported.',
				'News : coding is hip! More and more teenagers turn to technical fields like programming, ensuring a future robot apocalypse and the doom of all mankind.',
				'News : developers unsure what to call their new javascript libraries as all combinations of any 3 dictionary words have already been taken.',
				'News : nation holds breath as nested ifs about to hatch.',
				'News : clueless copywriter forgets to escape a quote, ends news line prematurely; last words reported to be "Huh, why isn',
				]));
				
				if (Game.Objects['Idleverse'].amount>0) list.push(myChoose([
				'News : is another you living out their dreams in an alternate universe? Probably, you lazy bum!',
				'News : public recoils at the notion of a cosmos made of infinite idle games. "I kinda hoped there\'d be more to it", says distraught citizen.',
				'News : with an infinity of parallel universes, people turn to reassuring alternate dimensions, which only number "in the high 50s".',
				'News : "I find solace in the knowledge that at least some of my alternate selves are probably doing fine out there", says citizen\'s last remaining exemplar in the multiverse.',
				'News : comic book writers point to actual multiverse in defense of dubious plot points. "See? I told you it wasn\'t \'hackneyed and contrived\'!"'
				]));
				
				if (Game.Objects['Cortex baker'].amount>0) list.push(myChoose([
				'News : cortex baker wranglers kindly remind employees that cortex bakers are the bakery\'s material property and should not be endeared with nicknames.',
				'News : space-faring employees advised to ignore unusual thoughts and urges experienced within 2 parsecs of gigantic cortex bakers, say guidelines.',
				'News : astronomers warn of cortex baker trajectory drift, fear future head-on collisions resulting in costly concussions.',
				'News : runt cortex baker identified with an IQ of only quintuple digits: "just a bit of a dummy", say specialists.',
				'News : are you smarter than a cortex baker? New game show deemed "unfair" by contestants.'
				]));
				
				if (Game.Objects['You'].amount>0) list.push(myChoose([
				'News : the person of the year is, this year again, '+Game.bakeryName+'! How unexpected!',
				'News : criminals caught sharing pirated copies of '+Game.bakeryName+'\'s genome may be exposed to fines and up to 17 billion years prison, reminds constable.',
				'News : could local restaurants be serving you bootleg '+Game.bakeryName+' clone meat? Our delicious investigation follows after tonight\'s news.',
				'News : beloved cookie magnate '+Game.bakeryName+', erroneously reported as trampled to death by crazed fans, thankfully found to be escaped clone mistaken for original.',
				'News : "Really, we\'re just looking for some basic societal acceptance and compassion", mumbles incoherent genetic freak '+Game.bakeryName+'-Clone #59014.'
				]));
				
				if (Game.season=='halloween' && Game.cookiesEarned>=1000) list.push(myChoose([
				'News : strange twisting creatures amass around cookie factories, nibble at assembly lines.',
				'News : ominous wrinkly monsters take massive bites out of cookie production; "this can\'t be hygienic", worries worker.',
				'News : pagan rituals on the rise as children around the world dress up in strange costumes and blackmail homeowners for candy.',
				'News : new-age terrorism strikes suburbs as houses find themselves covered in eggs and toilet paper.',
				'News : children around the world "lost and confused" as any and all Halloween treats have been replaced by cookies.'
				]));
				
				if (Game.season=='christmas' && Game.cookiesEarned>=1000) list.push(myChoose([
				'News : bearded maniac spotted speeding on flying sleigh! Investigation pending.',
				'News : Santa Claus announces new brand of breakfast treats to compete with cookie-flavored cereals! "They\'re ho-ho-horrible!" says Santa.',
				'News : "You mean he just gives stuff away for free?!", concerned moms ask. "Personally, I don\'t trust his beard."',
				'News : obese jolly lunatic still on the loose, warn officials. "Keep your kids safe and board up your chimneys. We mean it."',
				'News : children shocked as they discover Santa Claus isn\'t just their dad in a costume after all!<br>"I\'m reassessing my life right now", confides Laura, aged 6.',
				'News : mysterious festive entity with quantum powers still wrecking havoc with army of reindeer, officials say.',
				'News : elves on strike at toy factory! "We will not be accepting reindeer chow as payment anymore. And stop calling us elves!"',
				'News : elves protest around the nation; wee little folks in silly little outfits spread mayhem, destruction; rabid reindeer running rampant through streets.',
				'News : scholars debate regarding the plural of reindeer(s) in the midst of elven world war.',
				'News : elves "unrelated to gnomes despite small stature and merry disposition", find scientists.',
				'News : elves sabotage radioactive frosting factory, turn hundreds blind in vicinity - "Who in their right mind would do such a thing?" laments outraged mayor.',
				'News : drama unfolds at North Pole as rumors crop up around Rudolph\'s red nose; "I may have an addiction or two", admits reindeer.'
				]));
				
				if (Game.season=='valentines' && Game.cookiesEarned>=1000) list.push(myChoose([
				'News : organ-shaped confectioneries being traded in schools all over the world; gruesome practice undergoing investigation.',
				'News : heart-shaped candies overtaking sweets business, offering competition to cookie empire. "It\'s the economy, cupid!"',
				'News : love\'s in the air, according to weather specialists. Face masks now offered in every city to stunt airborne infection.',
				'News : marrying a cookie - deranged practice, or glimpse of the future?',
				'News : boyfriend dumped after offering his lover cookies for Valentine\'s Day, reports say. "They were off-brand", shrugs ex-girlfriend.'
				]));
				
				if (Game.season=='easter' && Game.cookiesEarned>=1000) list.push(myChoose([
				'News : long-eared critters with fuzzy tails invade suburbs, spread terror and chocolate!',
				'News : eggs have begun to materialize in the most unexpected places; "no place is safe", warn experts.',
				'News : packs of rampaging rabbits cause billions in property damage; new strain of myxomatosis being developed.',
				'News : egg-laying rabbits "not quite from this dimension", warns biologist; advises against petting, feeding, or cooking the creatures.',
				'News : mysterious rabbits found to be egg-layers, but mammalian, hinting at possible platypus ancestry.'
				]));
			}
		}
		if (!EN)
		{
			if (Game.cookiesEarned>=10000)
			{
				list.push(NEWS+myChoose(loc("Ticker (misc)")));
				list.push(NEWS+myChoose(loc("Ticker (misc)")));
				list.push(NEWS+myChoose(loc("Ticker (misc)")));
			}
		}
		else
		{
			if (random()<0.05)
			{
				if (Game.HasAchiev('Base 10')) list.push('News : cookie manufacturer completely forgoes common sense, lets strange obsession with round numbers drive building decisions!');
				if (Game.HasAchiev('From scratch')) list.push('News : follow the tear-jerking, riches-to-rags story about a local cookie manufacturer who decided to give it all up!');
				if (Game.HasAchiev('A world filled with cookies')) list.push('News : known universe now jammed with cookies! No vacancies!');
				if (Game.HasAchiev('Last Chance to See')) list.push('News : incredibly rare albino wrinkler on the brink of extinction poached by cookie-crazed pastry magnate!');
				if (Game.Has('Serendipity')) list.push('News : local cookie manufacturer becomes luckiest being alive!');
				if (Game.Has('Season switcher')) list.push('News : seasons are all out of whack! "We need to get some whack back into them seasons", says local resident.');
				
				if (Game.Has('Kitten helpers')) list.push('News : faint meowing heard around local cookie facilities; suggests new ingredient being tested.');
				if (Game.Has('Kitten workers')) list.push('News : crowds of meowing kittens with little hard hats reported near local cookie facilities.');
				if (Game.Has('Kitten engineers')) list.push('News : surroundings of local cookie facilities now overrun with kittens in adorable little suits. Authorities advise to stay away from the premises.');
				if (Game.Has('Kitten overseers')) list.push('News : locals report troupe of bossy kittens meowing adorable orders at passersby.');
				if (Game.Has('Kitten managers')) list.push('News : local office cubicles invaded with armies of stern-looking kittens asking employees "what\'s happening, meow".');
				if (Game.Has('Kitten accountants')) list.push('News : tiny felines show sudden and amazing proficiency with fuzzy mathematics and pawlinomials, baffling scientists and pet store owners.');
				if (Game.Has('Kitten specialists')) list.push('News : new kitten college opening next week, offers courses on cookie-making and catnip studies.');
				if (Game.Has('Kitten experts')) list.push('News : unemployment rates soaring as woefully adorable little cats nab jobs on all levels of expertise, says study.');
				if (Game.Has('Kitten consultants')) list.push('News : "In the future, your job will most likely be done by a cat", predicts suspiciously furry futurologist.');
				if (Game.Has('Kitten assistants to the regional manager')) list.push('News : strange kittens with peculiar opinions on martial arts spotted loitering on local beet farms!');
				if (Game.Has('Kitten marketeers')) list.push('News : nonsensical kitten billboards crop up all over countryside, trying to sell people the cookies they already get for free!');
				if (Game.Has('Kitten analysts')) list.push('News : are your spending habits sensible? For a hefty fee, these kitten analysts will tell you!');
				if (Game.Has('Kitten executives')) list.push('News : kittens strutting around in hot little business suits shouting cut-throat orders at their assistants, possibly the cutest thing this reporter has ever seen!');
				if (Game.Has('Kitten admins')) list.push('News : all systems nominal, claim kitten admins obviously in way over their heads.');
				if (Game.Has('Kitten strategists')) list.push('News : overpaid kittens scratching their fuzzy little heads trying to find new ways to get cookies in your shopping cart!');
				if (Game.Has('Kitten angels')) list.push('News : "Try to ignore any ghostly felines that may be purring inside your ears," warn scientists. "They\'ll just lure you into making poor life choices."');
				if (Game.Has('Kitten wages')) list.push('News : kittens break glass ceiling! Do they have any idea how expensive those are!');
				if (Game.HasAchiev('Jellicles')) list.push('News : local kittens involved in misguided musical production, leave audience perturbed and unnerved.');
			}
			
			if (Game.HasAchiev('Dude, sweet') && random()<0.2) list.push(myChoose([
			'News : major sugar-smuggling ring dismantled by authorities; '+Math.floor(random()*30+3)+' tons of sugar lumps seized, '+Math.floor(random()*48+2)+' suspects apprehended.',
			'News : authorities warn tourists not to buy bootleg sugar lumps from street peddlers - "You think you\'re getting a sweet deal, but what you\'re being sold is really just ordinary cocaine", says agent.',
			'News : pro-diabetes movement protests against sugar-shaming. "I\'ve eaten nothing but sugar lumps for the past '+Math.floor(random()*10+4)+' years and I\'m feeling great!", says woman with friable skin.',
			'News : experts in bitter disagreement over whether sugar consumption turns children sluggish or hyperactive.',
			'News : fishermen deplore upturn in fish tooth decay as sugar lumps-hauling cargo sinks into the ocean.',
			'News : rare black sugar lump that captivated millions in unprecedented auction revealed to be common toxic fungus.',
			'News : "Back in my day, sugar lumps were these little cubes you\'d put in your tea, not those fist-sized monstrosities people eat for lunch", whines curmudgeon with failing memory.',
			'News : sugar lump-snacking fad sweeps the nation; dentists everywhere rejoice.'
			]));
			
			if (random()<0.001)//apologies to Will Wright
			{
				list.push(
				'You have been chosen. They will come soon.',
				'They\'re coming soon. Maybe you should think twice about opening the door.',
				'The end is near. Make preparations.',
				'News : broccoli tops for moms, last for kids; dads indifferent.',
				'News : middle age a hoax, declares study; turns out to be bad posture after all.',
				'News : kitties want answers in possible Kitty Kibble shortage.'
				);
			}
			
			if (Game.cookiesEarned>=10000) list.push(
			'News : '+myChoose([
				'cookies found to '+myChoose(['increase lifespan','sensibly increase intelligence','reverse aging','decrease hair loss','prevent arthritis','cure blindness'])+' in '+myChoose(animals)+'!',
				'cookies found to make '+myChoose(animals)+' '+myChoose(['more docile','more handsome','nicer','less hungry','more pragmatic','tastier'])+'!',
				'cookies tested on '+myChoose(animals)+', found to have no ill effects.',
				'cookies unexpectedly popular among '+myChoose(animals)+'!',
				'unsightly lumps found on '+myChoose(animals)+' near cookie facility; "they\'ve pretty much always looked like that", say biologists.',
				'new species of '+myChoose(animals)+' discovered in distant country; "yup, tastes like cookies", says biologist.',
				'cookies go well with '+myChoose([myChoose(['roasted','toasted','boiled','sauteed','minced'])+' '+myChoose(animals),myChoose(['sushi','soup','carpaccio','steak','nuggets'])+' made from '+myChoose(animals)])+', says controversial chef.',
				'"do your cookies contain '+myChoose(animals)+'?", asks PSA warning against counterfeit cookies.',
				'doctors recommend twice-daily consumption of fresh cookies.',
				'doctors warn against chocolate chip-snorting teen fad.',
				'doctors advise against new cookie-free fad diet.',
				'doctors warn mothers about the dangers of "home-made cookies".'
				]),
			'News : "'+myChoose([
				'I\'m all about cookies',
				'I just can\'t stop eating cookies. I think I seriously need help',
				'I guess I have a cookie problem',
				'I\'m not addicted to cookies. That\'s just speculation by fans with too much free time',
				'my upcoming album contains 3 songs about cookies',
				'I\'ve had dreams about cookies 3 nights in a row now. I\'m a bit worried honestly',
				'accusations of cookie abuse are only vile slander',
				'cookies really helped me when I was feeling low',
				'cookies are the secret behind my perfect skin',
				'cookies helped me stay sane while filming my upcoming movie',
				'cookies helped me stay thin and healthy',
				'I\'ll say one word, just one : cookies',
				'alright, I\'ll say it - I\'ve never eaten a single cookie in my life'
				])+'", reveals celebrity.',
			myChoose([
				'News : scientist predicts imminent cookie-related "end of the world"; becomes joke among peers.',
				'News : man robs bank, buys cookies.',
				'News : scientists establish that the deal with airline food is, in fact, a critical lack of cookies.',
				'News : hundreds of tons of cookies dumped into starving country from airplanes; thousands dead, nation grateful.',
				'News : new study suggests cookies neither speed up nor slow down aging, but instead "take you in a different direction".',
				'News : overgrown cookies found in fishing nets, raise questions about hormone baking.',
				'News : "all-you-can-eat" cookie restaurant opens in big city; waiters trampled in minutes.',
				'News : man dies in cookie-eating contest; "a less-than-impressive performance", says judge.',
				'News : what makes cookies taste so right? "Probably all the [*****] they put in them", says anonymous tipper.',
				'News : man found allergic to cookies; "what a weirdo", says family.',
				'News : foreign politician involved in cookie-smuggling scandal.',
				'News : cookies now more popular than '+myChoose(['cough drops','broccoli','smoked herring','cheese','video games','stable jobs','relationships','time travel','cat videos','tango','fashion','television','nuclear warfare','whatever it is we ate before','politics','oxygen','lamps'])+', says study.',
				'News : obesity epidemic strikes nation; experts blame '+myChoose(['twerking','that darn rap music','video-games','lack of cookies','mysterious ghostly entities','aliens','parents','schools','comic-books','cookie-snorting fad'])+'.',
				'News : cookie shortage strikes town, people forced to eat cupcakes; "just not the same", concedes mayor.',
				'News : "you gotta admit, all this cookie stuff is a bit ominous", says confused idiot.',
				//'News : scientists advise getting used to cookies suffusing every aspect of life; "this is the new normal", expert says.',
				//'News : doctors advise against wearing face masks when going outside. "You never know when you might need a cookie... a mask would just get in the way."',//these were written back when covid hadn't really done much damage yet but they just feel in poor taste now
				'News : is there life on Mars? Various chocolate bar manufacturers currently under investigation for bacterial contaminants.',
				'News : "so I guess that\'s a thing now", scientist comments on cookie particles now present in virtually all steel manufactured since cookie production ramped up worldwide.',
				'News : trace amounts of cookie particles detected in most living creatures, some of which adapting them as part of new and exotic metabolic processes.',
			]),
			myChoose([
				'News : movie cancelled from lack of actors; "everybody\'s at home eating cookies", laments director.',
				'News : comedian forced to cancel cookie routine due to unrelated indigestion.',
				'News : new cookie-based religion sweeps the nation.',
				'News : fossil records show cookie-based organisms prevalent during Cambrian explosion, scientists say.',
				'News : mysterious illegal cookies seized; "tastes terrible", says police.',
				'News : man found dead after ingesting cookie; investigators favor "mafia snitch" hypothesis.',
				'News : "the universe pretty much loops on itself," suggests researcher; "it\'s cookies all the way down."',
				'News : minor cookie-related incident turns whole town to ashes; neighboring cities asked to chip in for reconstruction.',
				'News : is our media controlled by the cookie industry? This could very well be the case, says crackpot conspiracy theorist.',
				'News : '+myChoose(['cookie-flavored popcorn pretty damn popular; "we kinda expected that", say scientists.','cookie-flavored cereals break all known cereal-related records','cookies popular among all age groups, including fetuses, says study.','cookie-flavored popcorn sales exploded during screening of Grandmothers II : The Moistening.']),
				'News : all-cookie restaurant opening downtown. Dishes such as braised cookies, cookie thermidor, and for dessert : crepes.',
				'News : "Ook", says interviewed orangutan.',
				'News : cookies could be the key to '+myChoose(['eternal life','infinite riches','eternal youth','eternal beauty','curing baldness','world peace','solving world hunger','ending all wars world-wide','making contact with extraterrestrial life','mind-reading','better living','better eating','more interesting TV shows','faster-than-light travel','quantum baking','chocolaty goodness','gooder thoughtness'])+', say scientists.',
				'News : flavor text '+myChoose(['not particularly flavorful','kind of unsavory','"rather bland"','pretty spicy lately'])+', study finds.',
			]),
			myChoose([
				'News : what do golden cookies taste like? Study reveals a flavor "somewhere between spearmint and liquorice".',
				'News : what do wrath cookies taste like? Study reveals a flavor "somewhere between blood sausage and seawater".',
				'News : '+Game.bakeryName+'-brand cookies "'+myChoose(['much less soggy','much tastier','relatively less crappy','marginally less awful','less toxic','possibly more edible','more fashionable','slightly nicer','trendier','arguably healthier','objectively better choice','slightly less terrible','decidedly cookier','a tad cheaper'])+' than competitors", says consumer survey.',
				'News : "'+Game.bakeryName+'" set to be this year\'s most popular baby name.',
				'News : new popularity survey says '+Game.bakeryName+'\'s the word when it comes to cookies.',
				'News : major city being renamed '+Game.bakeryName+'ville after world-famous cookie manufacturer.',
				'News : '+myChoose(['street','school','nursing home','stadium','new fast food chain','new planet','new disease','flesh-eating bacteria','deadly virus','new species of '+myChoose(animals),'new law','baby','programming language'])+' to be named after '+Game.bakeryName+', the world-famous cookie manufacturer.',
				'News : don\'t miss tonight\'s biopic on '+Game.bakeryName+'\'s irresistible rise to success!',
				'News : don\'t miss tonight\'s interview of '+Game.bakeryName+' by '+myChoose(['Bloprah','Blavid Bletterman','Blimmy Blimmel','Blellen Blegeneres','Blimmy Blallon','Blonan Blo\'Brien','Blay Bleno','Blon Blewart','Bleven Blolbert','Lord Toxikhron of dimension 7-B19',Game.bakeryName+'\'s own evil clone'])+'!',
				'News : people all over the internet still scratching their heads over nonsensical reference : "Okay, but why an egg?"',
				'News : viral video "Too Many Cookies" could be "a grim commentary on the impending crisis our world is about to face", says famous economist.',
				'News : "memes from last year somehow still relevant", deplore experts.',
				'News : cookie emoji most popular among teenagers, far ahead of "judgmental OK hand sign" and "shifty-looking dark moon", says study.',
			]),
			myChoose([
				'News : births of suspiciously bald babies on the rise; ancient alien cabal denies involvement.',
				'News : "at this point, cookies permeate the economy", says economist. "If we start eating anything else, we\'re all dead."',
				'News : pun in headline infuriates town, causes riot. 21 wounded, 5 dead; mayor still missing.',
				'Nws : ky btwn W and R brokn, plas snd nw typwritr ASAP.',
				'Neeeeews : "neeeew EEEEEE keeeeey working fineeeeeeeee", reeeports gleeeeeeeeful journalist.',
				'News : cookies now illegal in some backwards country nobody cares about. Political tensions rising; war soon, hopefully.',
				'News : irate radio host rambles about pixelated icons. "None of the cookies are aligned! Can\'t anyone else see it? I feel like I\'m taking crazy pills!"',
				'News : nation cheers as legislators finally outlaw '+myChoose(['cookie criticism','playing other games than Cookie Clicker','pineapple on pizza','lack of cheerfulness','mosquitoes','broccoli','the human spleen','bad weather','clickbait','dabbing','the internet','memes','millennials'])+'!',
				'News : '+myChoose(['local','area'])+' '+myChoose(['man','woman'])+' goes on journey of introspection, finds cookies : "I honestly don\'t know what I was expecting."',
				'News : '+myChoose(['man','woman'])+' wakes up from coma, '+myChoose(['tries cookie for the first time, dies.','regrets it instantly.','wonders "why everything is cookies now".','babbles incoherently about some supposed "non-cookie food" we used to eat.','cites cookies as main motivator.','asks for cookies.']),
				'News : pet '+myChoose(animals)+', dangerous fad or juicy new market?',
				'News : person typing these wouldn\'t mind someone else breaking the news to THEM, for a change.',
				'News : "average person bakes '+Beautify(Math.ceil(Game.cookiesEarned/8000000000))+' cookie'+(Math.ceil(Game.cookiesEarned/8000000000)==1?'':'s')+' a year" factoid actually just statistical error; '+Game.bakeryName+', who has produced '+Beautify(Game.cookiesEarned)+' cookies in their lifetime, is an outlier and should not have been counted.'
				])
			);
		}
	}
	
	if (list.length==0)
	{
		if (loreProgress<=0) list.push(loc("You feel like making cookies. But nobody wants to eat your cookies."));
		else if (loreProgress<=1) list.push(loc("Your first batch goes to the trash. The neighborhood raccoon barely touches it."));
		else if (loreProgress<=2) list.push(loc("Your family accepts to try some of your cookies."));
		else if (loreProgress<=3) list.push(loc("Your cookies are popular in the neighborhood."),loc("People are starting to talk about your cookies."));
		else if (loreProgress<=4) list.push(loc("Your cookies are talked about for miles around."),loc("Your cookies are renowned in the whole town!"));
		else if (loreProgress<=5) list.push(loc("Your cookies bring all the boys to the yard."),loc("Your cookies now have their own website!"));
		else if (loreProgress<=6) list.push(loc("Your cookies are worth a lot of money."),loc("Your cookies sell very well in distant countries."));
		else if (loreProgress<=7) list.push(loc("People come from very far away to get a taste of your cookies."),loc("Kings and queens from all over the world are enjoying your cookies."));
		else if (loreProgress<=8) list.push(loc("There are now museums dedicated to your cookies."),loc("A national day has been created in honor of your cookies."));
		else if (loreProgress<=9) list.push(loc("Your cookies have been named a part of the world wonders."),loc("History books now include a whole chapter about your cookies."));
		else if (loreProgress<=10) list.push(loc("Your cookies have been placed under government surveillance."),loc("The whole planet is enjoying your cookies!"));
		else if (loreProgress<=11) list.push(loc("Strange creatures from neighboring planets wish to try your cookies."),loc("Elder gods from the whole cosmos have awoken to taste your cookies."));
		else if (loreProgress<=12) list.push(loc("Beings from other dimensions lapse into existence just to get a taste of your cookies."),loc("Your cookies have achieved sentience."));
		else if (loreProgress<=13) list.push(loc("The universe has now turned into cookie dough, to the molecular level."),loc("Your cookies are rewriting the fundamental laws of the universe."));
		else if (loreProgress<=14) list.push(loc("A local news station runs a 10-minute segment about your cookies. Success!<br><small>(you win a cookie)</small>"),loc("it's time to stop playing"));
	}
	
	//if (Game.elderWrath>0 && (Game.pledges==0 || random()<0.2))
	if (Game.elderWrath>0 && (((Game.pledges==0 && Game.resets==0) && random()<0.3) || random()<0.03))
	{
		list=[];
		if (Game.elderWrath==1) list.push(EN?myChoose([
			'News : millions of old ladies reported missing!',
			'News : processions of old ladies sighted around cookie facilities!',
			'News : families around the continent report agitated, transfixed grandmothers!',
			'News : doctors swarmed by cases of old women with glassy eyes and a foamy mouth!',
			'News : nurses report "strange scent of cookie dough" around female elderly patients!'
		]):(NEWS+myChoose(loc("Ticker (grandma invasion start)"))));
		if (Game.elderWrath==2) list.push(EN?myChoose([
			'News : town in disarray as strange old ladies break into homes to abduct infants and baking utensils!',
			'News : sightings of old ladies with glowing eyes terrify local population!',
			'News : retirement homes report "female residents slowly congealing in their seats"!',
			'News : whole continent undergoing mass exodus of old ladies!',
			'News : old women freeze in place in streets, ooze warm sugary syrup!'
		]):(NEWS+myChoose(loc("Ticker (grandma invasion rise)"))));
		if (Game.elderWrath==3) list.push(EN?myChoose([
			'News : large "flesh highways" scar continent, stretch between various cookie facilities!',
			'News : wrinkled "flesh tendrils" visible from space!',
			'News : remains of "old ladies" found frozen in the middle of growing fleshy structures!', 
			'News : all hope lost as writhing mass of flesh and dough engulfs whole city!',
			'News : nightmare continues as wrinkled acres of flesh expand at alarming speeds!'
		]):(NEWS+myChoose(loc("Ticker (grandma invasion full)"))));
	}
	
	if (EN && Game.season=='fools')
	{
		list=[];
		
		if (Game.cookiesEarned>=1000) list.push(myChoose([
			myChoose(['Your office chair is really comfortable.','Profit\'s in the air!','Business meetings are such a joy!','What a great view from your office!','Smell that? That\'s capitalism, baby!','You truly love answering emails.','Working hard, or hardly working?','Another day in paradise!','Expensive lunch time!','Another government bailout coming up! Splendid!','These profits are doing wonderful things for your skin.','You daydream for a moment about a world without taxes.','You\'ll worry about environmental damage when you\'re dead!','Yay, office supplies!','Sweet, those new staplers just came in!','Ohh, coffee break!']),
			myChoose(['You\'ve spent the whole day','Another great day','First order of business today:','Why, you truly enjoy','What next? That\'s right,','You check what\'s next on the agenda. Oh boy,'])+' '+myChoose(['signing contracts','filling out forms','touching base with the team','examining exciting new prospects','playing with your desk toys','getting new nameplates done','attending seminars','videoconferencing','hiring dynamic young executives','meeting new investors','updating your rolodex','pumping up those numbers','punching in some numbers','getting investigated for workers\' rights violations','reorganizing documents','belittling underlings','reviewing employee performance','revising company policies','downsizing','pulling yourself up by your bootstraps','adjusting your tie','performing totally normal human activities','recentering yourself in the scream room','immanentizing the eschaton','shredding some sensitive documents','comparing business cards','pondering the meaning of your existence','listening to the roaring emptiness inside your soul','playing minigolf in your office'])+'!',
			'The word of the day is: '+myChoose(['viral','search engine optimization','blags and wobsites','social networks','webinette','staycation','user experience','crowdfunding','carbon neutral','big data','machine learning','disrupting','influencers','monoconsensual transactions','sustainable','freemium','incentives','grassroots','web 3.0'/*this was before this whole crypto mess i'm so sorry*/,'logistics','leveraging','branding','proactive','synergizing','market research','demographics','pie charts','blogular','blogulacious','blogastic','authenticity','plastics','electronic mail','cellular phones','rap music','bulbs','goblinization','straight-to-bakery','microbakeries','chocolativity','flavorfulness','tastyfication','sugar offsets','activated wheat','reification','immanentize the eschaton','cookies, I guess'])+'.'
		]));
		if (Game.cookiesEarned>=1000 && random()<0.05) list.push(myChoose([
			'If you could get some more cookies baked, that\'d be great.',
			'So. About those TPS reports.',
			'Hmm, you\'ve got some video tapes to return.',
			'They\'ll pay. They\'ll all pay.',
			'You haven\'t even begun to peak.',
			'There is an idea of a '+Game.bakeryName+'. Some kind of abstraction. But there is no real you, only an entity. Something illusory.',
			'This was a terrible idea!'
		]));
		
		
		if (Game.TickerN%2==0)
		{
			if (Game.Objects['Grandma'].amount>0) list.push(myChoose([
			'Your rolling pins are rolling and pinning!',
			'Production is steady!'
			]));
			
			if (Game.Objects['Grandma'].amount>0) list.push(myChoose([
			'Your ovens are diligently baking more and more cookies.',
			'Your ovens burn a whole batch. Ah well! Still good.'
			]));
			
			if (Game.Objects['Farm'].amount>0) list.push(myChoose([
			'Scores of cookies come out of your kitchens.',
			'Today, new recruits are joining your kitchens!'
			]));
			
			if (Game.Objects['Factory'].amount>0) list.push(myChoose([
			'Your factories are producing an unending stream of baked goods.',
			'Your factory workers decide to go on strike!',
			'It\'s safety inspection day in your factories.'
			]));
			
			if (Game.Objects['Mine'].amount>0) list.push(myChoose([
			'Your secret recipes are kept safely inside a giant underground vault.',
			'Your chefs are working on new secret recipes!'
			]));
			
			if (Game.Objects['Shipment'].amount>0) list.push(myChoose([
			'Your supermarkets are bustling with happy, hungry customers.',
			'Your supermarkets are full of cookie merch!'
			]));
			
			if (Game.Objects['Alchemy lab'].amount>0) list.push(myChoose([
			'It\'s a new trading day at the stock exchange, and traders can\'t get enough of your shares!',
			'Your stock is doubling in value by the minute!'
			]));
			
			if (Game.Objects['Portal'].amount>0) list.push(myChoose([
			'You just released a new TV show episode!',
			'Your cookie-themed TV show is being adapted into a new movie!'
			]));
			
			if (Game.Objects['Time machine'].amount>0) list.push(myChoose([
			'Your theme parks are doing well - puddles of vomit and roller-coaster casualties are being swept under the rug!',
			'Visitors are stuffing themselves with cookies before riding your roller-coasters. You might want to hire more clean-up crews.'
			]));
			
			if (Game.Objects['Antimatter condenser'].amount>0) list.push(myChoose([
			'Cookiecoin is officially the most mined digital currency in the history of mankind!',
			'Cookiecoin piracy is rampant!'
			]));
			
			if (Game.Objects['Prism'].amount>0) list.push(myChoose([
			'Your corporate nations just gained a new parliament!',
			'You\'ve just annexed a new nation!',
			'A new nation joins the grand cookie conglomerate!'
			]));
			
			if (Game.Objects['Chancemaker'].amount>0) list.push(myChoose([
			'Your intergalactic federation of cookie-sponsored planets reports record-breaking profits!',
			'Billions of unwashed aliens are pleased to join your workforce as you annex their planet!',
			'New toll opened on interstellar highway, funnelling more profits into the cookie economy!'
			]));
			
			if (Game.Objects['Fractal engine'].amount>0) list.push(myChoose([
			'Your cookie-based political party is doing fantastic in the polls!',
			'New pro-cookie law passes without a hitch thanks to your firm grasp of the political ecosystem!',
			'Your appointed senators are overturning cookie bans left and right!'
			]));
			
			if (Game.Objects['Javascript console'].amount>0) list.push(myChoose([
			'Cookies are now one of the defining aspects of mankind! Congratulations!',
			'Time travelers report that this era will later come to be known, thanks to you, as the cookie millennium!',
			'Cookies now deeply rooted in human culture, likely puzzling future historians!'
			]));
			
			if (Game.Objects['Idleverse'].amount>0) list.push(myChoose([
			'Public aghast as all remaining aspects of their lives overtaken by universal cookie industry!',
			'Every single product currently sold in the observable universe can be traced back to your company! And that\'s a good thing.',
			'Antitrust laws let out a helpless whimper before being engulfed by your sprawling empire!'
			]));
			
			if (Game.Objects['Cortex baker'].amount>0) list.push(myChoose([
			'Bold new law proposal would grant default ownership of every new idea by anyone anywhere to '+Game.bakeryName+'\'s bakery!',
			'Bakery think tanks accidentally reinvent cookies for the 57th time this week!',
			'Bakery think tanks invent entire new form of human communication to advertise and boost cookie sales!'
			]));
			
			if (Game.Objects['You'].amount>0) list.push(myChoose([
			''+Game.bakeryName+' releases new self-help book: "How I Made My '+Beautify(Game.cookiesEarned)+' Cookies And How You Can Too"!',
			'Don\'t miss our interview tonight with the stupefying '+Game.bakeryName+', who discusses where to go next once you\'re at the top!',
			'Fame, beauty, biscuits; '+Game.bakeryName+' has it all - but is it enough?'
			]));
		}
		
		if (loreProgress<=0) list.push('Such a grand day to begin a new business.');
		else if (loreProgress<=1) list.push('You\'re baking up a storm!');
		else if (loreProgress<=2) list.push('You are confident that one day, your cookie company will be the greatest on the market!');
		else if (loreProgress<=3) list.push('Business is picking up!');
		else if (loreProgress<=4) list.push('You\'re making sales left and right!');
		else if (loreProgress<=5) list.push('Everyone wants to buy your cookies!');
		else if (loreProgress<=6) list.push('You are now spending most of your day signing contracts!');
		else if (loreProgress<=7) list.push('You\'ve been elected "business tycoon of the year"!');
		else if (loreProgress<=8) list.push('Your cookies are a worldwide sensation! Well done, old chap!');
		else if (loreProgress<=9) list.push('Your brand has made its way into popular culture. Children recite your slogans and adults reminisce them fondly!');
		else if (loreProgress<=10) list.push('A business day like any other. It\'s good to be at the top!');
		else if (loreProgress<=11) list.push('You look back on your career. It\'s been a fascinating journey, building your baking empire from the ground up.');
	}
	
	if (!manual && Game.T>Game.fps*10 && Game.Has('Fortune cookies') && random()<(Game.HasAchiev('O Fortuna')?0.04:0.02))
	{
		var fortunes=[];
		for (var i in Game.Tiers['fortune'].upgrades)
		{
			var it=Game.Tiers['fortune'].upgrades[i];
			if (!Game.HasUnlocked(it.name)) fortunes.push(it.dname);
		}
		
		if (!Game.fortuneGC) fortunes.push('fortuneGC');
		if (!Game.fortuneCPS) fortunes.push('fortuneCPS');
		
		if (fortunes.length>0)
		{
			list=[];
			return myChoose(fortunes);
		}
	}
	return false;
}

findFortune=(fortune,threshold)=>{
	if(str_seed === undefined) return false;
	fortune ??= 'fortuneGC';
    let cur = count;
	for(let i = 0; i < (threshold??10000); i++){
		let t = simulateTicker(cur);
        if(t && t.includes(fortune)){
            return [cur, t];
        }
        cur++;
    }
    return false;
}
