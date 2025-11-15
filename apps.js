document.addEventListener("DOMContentLoaded",function(){
    let pronoun= ["they","we","you","I"];
    let adjectives= ["clever","strong","great","amazing"];
    let nouns= ["cat","runner","cheetah","elephant"];
    let domains= [".org",".com",".net",".pt"];

    function generateDomains(){
        let results=[];
        for(let p of pronoun){
            for(let a of adjectives){
                for(let n of nouns){
                    for(let d of domains){
                        results.push (`${p}${a}${n}${d}`);
                        if(n.endsWith(d.replace(".",""))){
                            let hackedDomain=`${p}${a}${n.slice(0, -d.length+1)}${d}`;
                            results.push(hackedDomain)
                        }
                    }
                }
            }
        }
        let output=results.map(domain=> `<p>${domain}</p>`).join("");
        document.getElementById("domainResults").innerHTML=output

        
    }
    window.generateDomains=generateDomains;



});
