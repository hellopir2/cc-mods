var rMath = {random:()=>{}};
(function(a,b,c,d,e,f){function k(a){var b,c=a.length,e=this,f=0,g=e.i=e.j=0,h=e.S=[];for(c||(a=[c++]);d>f;)h[f]=f++;for(f=0;d>f;f++)h[f]=h[g=j&g+a[f%c]+(b=h[f])],h[g]=b;(e.g=function(a){for(var b,c=0,f=e.i,g=e.j,h=e.S;a--;)b=h[f=j&f+1],c=c*d+h[j&(h[f]=h[g=j&g+b])+(h[g]=b)];return e.i=f,e.j=g,c})(d)}function l(a,b){var e,c=[],d=(typeof a)[0];if(b&&"o"==d)for(e in a)try{c.push(l(a[e],b-1))}catch(f){}return c.length?c:"s"==d?a:a+"\0"}function m(a,b){for(var d,c=a+"",e=0;c.length>e;)b[j&e]=j&(d^=19*b[j&e])+c.charCodeAt(e++);return o(b)}function n(c){try{return crypto.getRandomValues(c=new Uint8Array(d)),o(c)}catch(e){return[+new Date,a,a.navigator.plugins,a.screen,o(b)]}}function o(a){return String.fromCharCode.apply(0,a)}var g=Math.pow(d,e),h=Math.pow(2,f),i=2*h,j=d-1;c.seedrandom=function(a,f){var j=[],p=m(l(f?[a,o(b)]:0 in arguments?a:n(),3),j),q=new k(j);return m(o(q.S),b),c.random=function(){for(var a=q.g(e),b=g,c=0;h>a;)a=(a+c)*d,b*=d,c=q.g(1);for(;a>=i;)a/=2,b/=2,c>>>=1;return(a+c)/b},p},m(c.random(),b)})(this,[],rMath,256,6,52);
(function(a,b,c,d,e,f){function k(a){var b,c=a.length,e=this,f=0,g=e.i=e.j=0,h=e.S=[];for(c||(a=[c++]);d>f;)h[f]=f++;for(f=0;d>f;f++)h[f]=h[g=j&g+a[f%c]+(b=h[f])],h[g]=b;(e.g=function(a){for(var b,c=0,f=e.i,g=e.j,h=e.S;a--;)b=h[f=j&f+1],c=c*d+h[j&(h[f]=h[g=j&g+b])+(h[g]=b)];return e.i=f,e.j=g,c})(d)}function l(a,b){var e,c=[],d=(typeof a)[0];if(b&&"o"==d)for(e in a)try{c.push(l(a[e],b-1))}catch(f){}return c.length?c:"s"==d?a:a+"\0"}function m(a,b){for(var d,c=a+"",e=0;c.length>e;)b[j&e]=j&(d^=19*b[j&e])+c.charCodeAt(e++);return o(b)}function n(c){try{return crypto.getRandomValues(c=new Uint8Array(d)),o(c)}catch(e){return[+new Date,a,a.navigator.plugins,a.screen,o(b)]}}function o(a){return String.fromCharCode.apply(0,a)}var g=c.pow(d,e),h=c.pow(2,f),i=2*h,j=d-1;c.seedrandom=function(a,f){var j=[],p=m(l(f?[a,o(b)]:0 in arguments?a:n(),3),j),q=new k(j);return m(o(q.S),b),c.random=function(){for(var a=q.g(e),b=g,c=0;h>a;)a=(a+c)*d,b*=d,c=q.g(1);for(;a>=i;)a/=2,b/=2,c>>>=1;return(a+c)/b},p},m(c.random(),b)})(this,[],Math,256,6,52);


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
}
catch(e) {
    var call_count = {};
    var curSeed = {};
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
        return r_copy();
    }
    return str_seed;
}

function simulateGC(wrath, cc)
{   
    call_index = cc?cc:count;
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
        if (list.length==0) {popup = 'frenzy';}//default to frenzy if no proper building
        else
        {
            var obj=myChoose(list);
            if (wrath && random()<0.3)
            {
                popup = 'building rust: ' + Game.ObjectsById[obj].name;
            }
            else
            {
                popup = 'building special: ' + Game.ObjectsById[obj].name;
            }
        }
    }
    else if (choice=='dragonflight')
    {
        popup = 'dragonflight';
        if (random()<0.8) popup += ' override click frenzy';
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
            popup='cookie chain ended';
        }
        else
        {
            popup='cookie chain';
        }
        // Game.Earn(moni);
    }
    else if (choice=='cookie storm')
    {
        popup = 'cookie storm';
    }
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
        popup='blab: ' + str;
    }
    else {
        popup = choice;
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

