module.exports ={
    time: (v, tn, tk, p)=>{
        /*let t;
        t = 0.00117 * v * (tk - tn)/p;*/
        return (0.00117 * v * (tk - tn)/p).toFixed(2);
    },
    temperatura: (time, v, tn, p)=>{
        return ((time / (0.00117 * v)) * p + Number.parseInt(tn))
    },
    downgradeTemperature:(time, v, tn, p)=>{
        return ((time / (0.00117 * v)) * p + Number.parseInt(tn))
    },
    waterVolume:(v, ml)=>{
        return (((v * 1000) - ml) / 1000)
    }
}