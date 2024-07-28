var sed;
var asdf = Math.seedrandom;
var rn = document.createElement('span');
rn.id = "rng";
rn.style = "padding-left:8px;width:75px;display:inline-block;"
versionNumber.appendChild(rn);
var see = document.createElement('span');
see.id = "curSeed";
see.style = "padding-left:8px;color:#ff0;"
versionNumber.appendChild(see)
Math.seedrandom = (a) => {
    count = 0;
    rng.innerHTML = count;
    sed=(a == undefined)?asdf():asdf(a);
    curSeed.innerHTML = a;
    p = Math.random;
    Math.random = () => {
        count++;
        x = p();
        rng.innerHTML = count;
        return x;
    }
}
