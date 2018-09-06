export class Child {

    public  compute(): Number{
        let sum=0;
        for(let i=0 ; i<1e9 ; i++){
            sum+=i;
        }

        return sum;
    }
}

const child = new Child();

process.on('message', (msg)=>{
    const sum = child.compute();
    console.log(msg);
    process.send(sum);
});
