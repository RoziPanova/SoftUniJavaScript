function solve(words,template)
{
    words=words.split(", ");
    for( let w of words)
    {
        template=template.replace("*".repeat(w.length),w);
    }
    console.log(template);
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);
