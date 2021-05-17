//Aze
let Azth = ['','min','milyon', 'milyard','trilyon'];
let Azdg = ['sıfır','bir','iki','üç','dörd', 'beş','altı','yeddi','səkkiz','doqquz'];
 let Aztn = ['on','on bir','on iki','on üç', 'on dörd','on beş','on altı', 'on yeddi','on səkkiz','on doqquz'];
 let Aztw = ['iyirmi','otuz','qırx','əlli', 'altmış','yetmiş','səksən','doxsan'];
//EN
let Enth = ['','thousand','million', 'billion','trillion'];
let Endg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
 let Entn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
 let Entw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
//Ru
let Ruth = ['','тысяча','миллион', 'миллиард','триллион'];
let Rudg = ['нулевой','один','два','три','четыре', 'пять','шесть','Семь','восемь','девять'];
 let Rutn = ['десять','одиннадцать','двенадцать','тринадцать', 'четырнадцать','пятнадцать','шестнадцать', 'семнадцать','восемнадцать','девятнадцать'];
 let Rutw = ['двадцать','тридцать','сорок','пятьдесят', 'шестьдесят','семьдесят','восемьдесят','девяносто'];

 let errorText=[
    {
        lang:"Az",
        notNum:"Rəqəm deyil",
        negative:"mənfi",
        Big:"Rəqəm çox böyükdür",
        hundreds:"yüz ",
        point:"tam nöqtə "
    },
    {
        lang:"En",
        notNum:"Is not a number",
        negative:"negative",
        Big:"Number is big",
        hundreds:"hundreds ",
        point:"points "
    },
    {
        lang:"Ru",
        notNum:"Это не число",
        negative:"отрицательный",
        Big:"Номер большой",
        hundreds:"сотни ",
        point:"точки "
    }
 ]
function NumToWordAze(value)
{
 return  toWords(value,0,Azth,Azdg,Aztn,Aztw);
}
function NumToWordEn(value)
{
    return  toWords(value,1,Enth,Endg,Entn,Entw);
}
function NumToWordRu(value)
{
    return  toWords(value,2,Ruth,Rudg,Rutn,Rutw);
}
function toWords(s,index,th,dg,tn,tw){
    s =String(s);
    var str = '';
    if(s.indexOf("-") !== 0 ||  s.lastIndexOf("-")>0){       
        if (s != parseFloat(s)) return errorText[index].notNum;
        
    }
    
    s = s.replace(/[\, ]/g,'');
    var x = s.indexOf('.');  
    if (x == -1)
        x = s.length; 
    if (x > 15)
        return errorText[index].Big;
    var n = s.split(''); 
    

    var sk = 0;
    for (var i=0;   i < x;  i++) {  
        if(n[i]=="-")
        {
            str+=errorText[index].negative+" ";
            continue;
        }
        if ((x-i)%3==2) {  
            if (n[i] == '1') {
                str += tn[Number(n[i+1])] + ' ';
                i++;
                sk=1;
            } else if (n[i]!=0) {
                str += tw[n[i]-2] + ' ';
                sk=1;
            }
        } else if (n[i]!=0) { 
            str += dg[n[i]] +' ';  
            if ((x-i)%3==0) str += errorText[index].hundreds;  
            sk=1;
        }
        if ((x-i)%3==1) {
            if (sk)
                str += th[(x-i-1)/3] + ' ';
            sk=0;
        }
    } 
    if (x != s.length) {
        var y = s.length;
        str += errorText[index].point;
        for (var z=x+1; z<y; z++){
            

             if ((y-z)%3==2) {  
            if (n[z] == '1') {
                str += tn[Number(n[z+1])] + ' ';
                z++;
                sk=1;
            } else if (n[z]!=0) {
                str += tw[n[z]-2] + ' ';
                sk=1;
            }
        } else if (n[z]!=0) { 
            str += dg[n[z]] +' ';  
            if ((y-z)%3==0) str += errorText[index].hundreds;  
            sk=1;
        }
        if ((y-z)%3==1) {
            if (sk)
                str += th[(y-z-1)/3] + ' ';
            sk=0;
        }
      }
        
    }
    return str.replace(/\s+/g,' ').trim();
}

export {
    NumToWordAze,
    NumToWordRu,
    NumToWordEn
}