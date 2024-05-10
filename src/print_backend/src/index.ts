import { Canister, query, text } from 'azle';

export default Canister({
    greet: query([text], text, (name) => {
        return `Hello, ${name}!`;
    })
    // bye: query([text], text, (name) => {
    //     return `Bye, ${name}!`;
    // }),
})
