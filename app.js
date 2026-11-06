(function(){
var f=document.getElementById('flow'),steps=[].slice.call(f.querySelectorAll('.step')),bar=document.querySelector('.bar i'),back=f.querySelector('.back'),d={need:'',car:'',loc:''},i=0;
document.getElementById('yr').textContent=new Date().getFullYear();
function show(n){i=n;steps.forEach(function(s,k){s.hidden=k!==n});bar.style.width=(n+1)*25+'%';back.hidden=n===0||n===3;
 var inp=steps[n].querySelector('input');if(inp&&matchMedia('(hover:hover)').matches)inp.focus({preventScroll:true})}
function build(){var t='Hi Hensley Mobile Mechanic. I need help with: '+d.need+'. Vehicle: '+d.car+'. Location: '+d.loc+'.';
 document.getElementById('sum').textContent=d.need+' on a '+d.car+', in '+d.loc+'.';
 document.getElementById('send').href='sms:+17608675726?&body='+encodeURIComponent(t)}
f.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
 if(b.dataset.v){d.need=b.dataset.v;show(1)}
 else if(b.classList.contains('next')){var inp=steps[i].querySelector('input');if(!inp.value.trim()){inp.focus();return}
  d[i===1?'car':'loc']=inp.value.trim();if(i===2)build();show(i+1)}
 else if(b.classList.contains('back'))show(i-1);
 else if(b.id==='reset'){f.reset();show(0)}});
f.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();var n=steps[i].querySelector('.next');if(n)n.click()}});
})();
