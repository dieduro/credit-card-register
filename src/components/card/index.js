import {h, Component } from 'preact';
import  style from './style';

export default class Card extends Component {
    state = {
        flip: false,
        fullName: '',
        number: '',
        id: '',
        cvc: '',
        expMonth: 0,
        expYear: 0,
        brand: ''
    };

    flipCard = () => {
        this.setState( { flip: true } )
    }


    render() {
        return(
            <div class= { style.container }>
                
                <div class= { style.front } >
                    <h3>Front</h3>
                </div>
                <div class= { style.back } >
                    <h3>Back</h3>
                </div>

            </div>
        )
    }

}