const { createApp } = Vue
createApp({
    data() {
        return {
            error: '',
            url: ' https://api.dictionaryapi.dev/api/v2/entries/en/',
            word: '',
            fields: {
                word: '',
                partOfSpeech: '',
                phonetic: '',
                definition: '',
                example: '',
                audio: '',
            },
            output: [],
            isLoaded: false,
        }
    },
    methods: {
        searchWord() {

            if (this.word === '') {
                this.error = 'Please enter a word :(';
                return;
            }

            const full_url = this.url + this.word;
            fetch(full_url)
                .then(response => response.json())
                .then(data => {
                    
                    //create the fields object
                    this.fields.word = data[0].word;
                    this.fields.partOfSpeech = data[0].meanings[0].partOfSpeech;
                    this.fields.phonetic = data[0].phonetic;
                    this.fields.definition = data[0].meanings[0].definitions[0].definition;
                    this.fields.example = data[0].meanings[0].definitions[0].example;
                    this.fields.audio = data[0].phonetics[0].audio;

                    console.log(this.fields);

                    this.output[0] = this.fields;

                    //reset the fields object
                    this.fields = {
                        word: '',
                        partOfSpeech: '',
                        phonetic: '',
                        definition: '',
                        example: '',
                        audio: '',
                    };
                })
                .catch(error => {
                    this.error = this.word + ' is not a valid word';
                    setInterval(() => {
                        this.error = '';
                    }, 3000);
                });
        },
        playAudio(audio){
            const audio_to_play = new Audio(audio);
            audio_to_play.play();
        },
        loader(){
            setTimeout(() => {
                this.isLoaded = true;
            }, 4500);
        },
    },
    created() {
        this.loader();
    },
}).mount('#app');