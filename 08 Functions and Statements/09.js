function loadingBar(num)
{
    const barsLenght=10;
    const barsFilled=Math.round(num/barsLenght);
    const barsEmpty=barsLenght-barsFilled;

    const before=(num <100) ? `${num}% `:'100% Complete!\n';
    const progressBar=`[${'%'.repeat(barsFilled)}${'.'.repeat(barsEmpty)}]\n`;
    const after=(num<100)?'Still loading...':'';
    
    console.log(before+progressBar+after);
}
loadingBar(30);
loadingBar(50);
loadingBar(100);