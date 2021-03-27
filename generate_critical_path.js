var activity_array= [{ activity:'A',Precedent:[],time:3,ftime:3,critical_path:''},
{activity:'B',precedent:['A'],time:4,ftime:0,critical_path:''},{activity:'C',precedent:['A'],time:2,ftime:0,critical_path:''},
{activity:'D',precedent:['B'],time:5,ftime:0,critical_path:''},{activity:'E',precedent:['C'],time:1,ftime:0,critical_path:''},
{activity:'F',precedent:['C'],time:2,ftime:0,critical_path:''},{activity:'G',precedent:['D','E'],time:4,ftime:0,critical_path:''}
,{activity:'H',precedent:['F','G'],time:3,ftime:0,critical_path:''}];
//console.log(activity_array);
for( var pointer1=0;pointer1<activity_array.length;pointer1++)
{
for( var pointer3=pointer1+1;pointer3<activity_array.length;pointer3++)
{
for( var pointer4=0;pointer4<activity_array[pointer3].precedent.length;pointer4++)
        {
if(activity_array[pointer1].activity === activity_array[pointer3].precedent[pointer4])
{       let calc_time = activity_array[pointer3].time + activity_array[pointer1].ftime;
    if(activity_array[pointer3].ftime< calc_time )
    {
            activity_array[pointer3].ftime = calc_time;
            let val = activity_array[pointer1].activity
            activity_array[pointer3].critical_path =val ;
    }
          //console.log(activity_array);      
}
         }
}
}

var pointer5=activity_array.length-1;
let critic_array='';
while(pointer5>=0){
//console.log(activity_array[pointer5].activity);
critic_array =   activity_array[pointer5].activity+ '->' + critic_array;
//critic_array.push(activity_array[pointer5].activity);
let obj= activity_array.findIndex((item)=> item.activity== activity_array[pointer5].critical_path);
pointer5=obj;
}
console.log(critic_array);
