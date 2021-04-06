
export default class Text {

    static random(length = 5) {

        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let result = '';

        const charactersLength = characters.length;

        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    static cFirst(text) {
        if(!text){return false}

        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    static cWords(text) {
        if(!text){return false}

        let splitter = ' ';

        let words = text.toLowerCase().split(splitter);

        return words.reduce((payload, word)=>{
            payload.push(word.charAt(0).toUpperCase() + word.slice(1));

            return payload;
        }, []).join(splitter);
    }
}
