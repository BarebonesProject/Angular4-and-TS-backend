
export interface Configuration
{
    port : number
}
class DefaultConfiguration implements Configuration
{
    port = 8080
}

export const config : Configuration = require('../config.json');
function loadDefault(obj : any, reference : any) : void
{
    for(var key in reference)
    {
        const value = reference[key];

        if(obj[key] === undefined)
            obj[key] = JSON.parse(JSON.stringify(value));
        else if(typeof obj[key] === 'object')
            loadDefault(obj[key], value);
    }
}
loadDefault(config, new DefaultConfiguration());
